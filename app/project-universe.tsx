"use client";
import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
  type CSSProperties,
} from "react";
import { createPortal } from "react-dom";
import { m, useReducedMotion } from "motion/react";
import {
  Sparkles,
  ScanText,
  Workflow,
  ChartNetwork,
  MessagesSquare,
  Bot,
  Files,
  BriefcaseBusiness,
  Radio,
  ShoppingBag,
  BookOpen,
  Component,
  Search,
  ArrowUpRight,
} from "lucide-react";
import { BlackHole } from "./black-hole";
import { projects } from "./projects";

const icons = [
  Sparkles,
  ScanText,
  Workflow,
  ChartNetwork,
  MessagesSquare,
  Bot,
  Files,
  BriefcaseBusiness,
  Radio,
  ShoppingBag,
  BookOpen,
  Component,
];
const categories = [
  { value: "All", label: "All projects" },
  { value: "AI", label: "AI" },
  { value: "Data", label: "Data" },
  { value: "Full stack", label: "Applications" },
  { value: "Backend", label: "APIs & systems" },
];
type Flight = {
  index: number;
  direction: "in" | "out";
  x: number;
  y: number;
  dx: number;
  dy: number;
  floating: boolean;
};
export type ProjectUniverseHandle = { release: (index: number) => void };

export const ProjectUniverse = forwardRef<
  ProjectUniverseHandle,
  { onOpen: (index: number, withoutMotion?: boolean) => void }
>(function ProjectUniverse({ onOpen }, ref) {
  const systemReduced = useReducedMotion();
  const [staticMode, setStaticMode] = useState(false);
  const reduced = systemReduced || staticMode;
  const [filter, setFilter] = useState("All");
  const [query, setQuery] = useState("");
  const [phase, setPhase] = useState<"idle" | "in" | "reading" | "out">("idle");
  const [active, setActive] = useState<number | null>(null);
  const [flight, setFlight] = useState<Flight | null>(null);
  const [announcement, setAnnouncement] = useState("");
  const hole = useRef<HTMLDivElement>(null);
  const objects = useRef(new Map<number, HTMLButtonElement>());
  const busy = useRef(false);
  const matches = projects
    .map((project, index) => ({ ...project, index }))
    .filter(
      (project) =>
        (filter === "All" || filter === project.category) &&
        (project.name + " " + project.summary + " " + project.stack)
          .toLowerCase()
          .includes(query.toLowerCase()),
    );
  const rows = Math.max(3, Math.ceil(matches.length / 2));

  function route(index: number, direction: "in" | "out"): Flight | null {
    const object = objects.current
      .get(index)
      ?.querySelector(".project-object-icon");
    if (!hole.current || !object) return null;
    const center = hole.current.getBoundingClientRect();
    const tile = object.getBoundingClientRect();
    const sceneY = center.top + center.height * 0.49;
    const floating = sceneY < 100 || sceneY > window.innerHeight - 80;
    const hx = floating
        ? window.innerWidth / 2
        : center.left + center.width / 2,
      hy = floating ? window.innerHeight * 0.42 : sceneY;
    const tx = tile.left + tile.width / 2,
      ty = tile.top + tile.height / 2;
    // A compact portal joins offscreen mobile selections without moving the page.
    if (ty < 70 || ty > window.innerHeight - 35) return null;
    return direction === "in"
      ? { index, direction, x: tx, y: ty, dx: hx - tx, dy: hy - ty, floating }
      : { index, direction, x: hx, y: hy, dx: tx - hx, dy: ty - hy, floating };
  }
  function enter(index: number) {
    if (busy.current) return;
    busy.current = true;
    setActive(index);
    setAnnouncement("Opening " + projects[index].name);
    const next = reduced ? null : route(index, "in");
    if (next) {
      setPhase("in");
      setFlight(next);
    } else {
      setPhase("reading");
      onOpen(index, !!reduced);
    }
  }
  useImperativeHandle(ref, () => ({
    release(index) {
      if (active !== index || !busy.current) return;
      setAnnouncement(
        projects[index].name + " returned to the project collection.",
      );
      const next = reduced ? null : route(index, "out");
      if (next) {
        setPhase("out");
        setFlight(next);
      } else {
        busy.current = false;
        setPhase("idle");
        setActive(null);
        setFlight(null);
      }
    },
  }));
  useEffect(() => {
    if (!flight) return;
    // State completion is bounded independently of a throttled animation frame.
    // One update per transition, never a React update per animation frame.
    const timer = window.setTimeout(
      () => {
        setFlight(null);
        if (flight.direction === "in") {
          setPhase("reading");
          onOpen(flight.index);
        } else {
          busy.current = false;
          setPhase("idle");
          setActive(null);
        }
      },
      flight.direction === "in" ? 700 : 780,
    );
    return () => window.clearTimeout(timer);
  }, [flight, onOpen]);
  const FlightIcon = flight ? icons[flight.index] : Sparkles;
  const transforms =
    flight?.direction === "in"
      ? [
          "translate(0px,0px) scale(1) rotate(0deg)",
          `translate(${flight.dx * 0.5}px,${flight.dy * 0.18}px) scale(.7) rotate(45deg)`,
          `translate(${flight.dx}px,${flight.dy}px) scale(.02) rotate(190deg)`,
        ]
      : flight
        ? [
            "translate(0px,0px) scale(.02) rotate(-190deg)",
            `translate(${flight.dx * 0.35}px,${flight.dy * 0.45}px) scale(.45) rotate(-20deg)`,
            `translate(${flight.dx}px,${flight.dy}px) scale(1) rotate(0deg)`,
          ]
        : [];
  return (
    <section
      className="project-universe"
      data-section="work"
      aria-labelledby="work-title"
    >
      <div className="wrap">
        <div
          className="section-heading universe-heading"
          id="work"
          tabIndex={-1}
        >
          <div>
            <span className="section-kicker">Projects in orbit</span>
            <h2 id="work-title">Follow your curiosity.</h2>
          </div>
          <p>
            Select a project. Enter its story.
            <br />
            Close it to send it back into orbit.
          </p>
        </div>
        <div className="universe-tools">
          <div
            className="universe-filters"
            role="group"
            aria-label="Project categories"
          >
            {categories.map((category) => (
              <button
                key={category.value}
                aria-pressed={filter === category.value}
                disabled={phase !== "idle"}
                onClick={() => {
                  setAnnouncement("");
                  setFilter(category.value);
                }}
              >
                {category.label}
              </button>
            ))}
          </div>
          <label className="universe-search">
            <Search size={16} />
            <input
              type="search"
              aria-label="Search projects"
              placeholder="Find a project or tool"
              value={query}
              disabled={phase !== "idle"}
              onChange={(event) => {
                setAnnouncement("");
                setQuery(event.target.value);
              }}
            />
          </label>
        </div>
        <div
          className="universe-stage"
          data-phase={phase}
          style={{ "--orbit-rows": rows } as CSSProperties}
        >
          <div className="universe-core">
            <div className="universe-hole" ref={hole}>
              <BlackHole />
              <span className="hole-label" aria-hidden="true">
                Project space
              </span>
            </div>
            <p className="universe-instruction">
              <strong>
                {matches.length} {matches.length === 1 ? "project" : "projects"}
              </strong>
              <span>The objects are clickable.</span>
            </p>
          </div>
          {matches.map((project, position) => {
            const Icon = icons[project.index];
            const side = position < Math.ceil(matches.length / 2) ? 0 : 1;
            const row =
              side === 0
                ? position + 1
                : position - Math.ceil(matches.length / 2) + 1;
            return (
              <button
                key={project.name}
                ref={(element) => {
                  if (element) objects.current.set(project.index, element);
                  else objects.current.delete(project.index);
                }}
                className="project-object"
                title={project.summary}
                data-away={
                  active === project.index && phase !== "idle"
                    ? "true"
                    : undefined
                }
                data-side={side}
                style={
                  { "--orbit-row": row, "--orbit-side": side } as CSSProperties
                }
                aria-label={"Open case study: " + project.name}
                aria-disabled={phase !== "idle"}
                aria-haspopup="dialog"
                onClick={() => enter(project.index)}
              >
                <span className="project-object-icon">
                  <Icon size={20} />
                </span>
                <span className="project-object-copy">
                  <strong>{project.name}</strong>
                  <small>
                    {project.category === "Full stack"
                      ? "Application"
                      : project.category}
                  </small>
                  <span className="object-summary">{project.summary}</span>
                </span>
                <ArrowUpRight className="object-open" size={15} />
              </button>
            );
          })}
          {matches.length === 0 && (
            <div className="universe-empty">
              <p>No matches. Try React, AI or a project name.</p>
              <button
                onClick={() => {
                  setQuery("");
                  setFilter("All");
                  setAnnouncement("");
                }}
              >
                Reset search
              </button>
            </div>
          )}
        </div>
        <div className="universe-meta">
          <p className="universe-footnote">
            Team contributions, POCs and learning projects. Company data stays
            private.
          </p>
          <label className="motion-option">
            <input
              type="checkbox"
              checked={staticMode}
              disabled={phase !== "idle"}
              onChange={(event) => setStaticMode(event.target.checked)}
            />
            Read without motion
          </label>
        </div>
        <p className="sr-only" role="status" aria-live="polite">
          {announcement || matches.length + " matching projects"}
        </p>
      </div>
      {flight &&
        createPortal(
          <div className="gravity-flight-layer" aria-hidden="true">
            {flight.floating && (
              <m.div
                className="floating-project-hole"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 1, 0] }}
                transition={{
                  duration: flight.direction === "in" ? 0.62 : 0.7,
                  times: [0, 0.15, 0.8, 1],
                }}
              >
                <BlackHole />
              </m.div>
            )}
            {flight.direction === "out" && (
              <m.div
                key={"jet-" + flight.index}
                className="quasar-jet"
                style={{
                  left: flight.x,
                  top: flight.y,
                  width: Math.max(60, Math.hypot(flight.dx, flight.dy)),
                }}
                initial={{
                  transform: `rotate(${(Math.atan2(flight.dy, flight.dx) * 180) / Math.PI}deg) scaleX(0)`,
                  opacity: 0,
                }}
                animate={{
                  transform: `rotate(${(Math.atan2(flight.dy, flight.dx) * 180) / Math.PI}deg) scaleX(1)`,
                  opacity: [0, 1, 0],
                }}
                transition={{ duration: 0.62, ease: [0.2, 0.7, 0.2, 1] }}
              />
            )}
            <m.div
              key={flight.direction + "-" + flight.index}
              className="gravity-project-particle"
              style={{ left: flight.x - 17, top: flight.y - 17 }}
              initial={{
                transform: transforms[0],
                opacity: flight.direction === "in" ? 1 : 0,
              }}
              animate={{
                transform: transforms,
                opacity: flight.direction === "in" ? [1, 1, 0] : [0, 1, 1],
              }}
              transition={{
                duration: flight.direction === "in" ? 0.62 : 0.7,
                times: [0, 0.6, 1],
                ease: [0.32, 0.05, 0.38, 1],
              }}
            >
              <FlightIcon size={20} />
            </m.div>
          </div>,
          document.body,
        )}
    </section>
  );
});
