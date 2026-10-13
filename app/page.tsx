"use client";
import { useRef, useState } from "react";
import {
  AnimatePresence,
  LayoutGroup,
  m,
  useReducedMotion,
} from "motion/react";
import {
  ArrowUpRight,
  ArrowDown,
  Code2,
  Layers,
  Database,
  Check,
  X,
  Search,
  FileText,
  Sparkles,
  GitBranch,
} from "lucide-react";
import { projects } from "./projects";
import {
  Entrance,
  MagneticLink,
  MotionRoot,
  ReadingProgress,
  Reveal,
  ScrollScene,
  Tilt,
  settle,
} from "./motion-ui";
const github = "https://github.com/Uppen-Sharma",
  linkedin = "https://www.linkedin.com/in/BinayUppenSharma";

function HeroArt() {
  const reduced = useReducedMotion();
  const [mode, setMode] = useState("Build");
  return (
    <Tilt className="hero-art">
      <div className="art-orbit" aria-hidden="true" />
      <div className="code-emblem" aria-hidden="true">
        <span>{"{"}</span>
        <span>{"}"}</span>
      </div>
      <m.div
        className="hero-window"
        animate={{ rotate: mode === "Build" ? -7 : -3 }}
        transition={reduced ? { duration: 0 } : settle}
      >
        <div className="window-chrome">
          <span>
            <i />
            <i />
            <i />
          </span>
          <small>binay / playground</small>
          <Code2 size={14} />
        </div>
        <div className="hero-window-body">
          <span className="file-name">a little bit of JavaScript</span>
          <div className="hero-code">
            <span className="code-purple">const</span> idea ={" "}
            <span className="code-green">&quot;What if?&quot;</span>;<br />
            <span className="code-purple">const</span> result ={" "}
            <span className="code-purple">await</span> build(idea);
            <br />
            <br />
            <span className="code-grey">
              {"// Give curiosity somewhere to go."}
            </span>
            <br />
            result.<span className="code-purple">makeItWork</span>();
          </div>
          <div
            className="art-tabs"
            role="group"
            aria-label="Playground preview"
          >
            <button
              aria-pressed={mode === "Build"}
              onClick={() => setMode("Build")}
            >
              Build <Code2 size={12} />
            </button>
            <button
              aria-pressed={mode === "Connect"}
              onClick={() => setMode("Connect")}
            >
              Connect <GitBranch size={12} />
            </button>
          </div>
        </div>
      </m.div>
      <m.div
        className="status-card"
        animate={{
          y: mode === "Connect" ? -10 : 0,
          rotate: mode === "Connect" ? 3 : 7,
        }}
        transition={reduced ? { duration: 0 } : settle}
      >
        <span className="status-icon">
          <Check size={20} />
        </span>
        <div>
          <strong>
            {mode === "Build"
              ? "From idea to interface."
              : "Now, connect the pieces."}
          </strong>
          <span>
            {mode === "Build"
              ? "One thoughtful step at a time."
              : "UI → API → data"}
          </span>
        </div>
      </m.div>
      <span className="art-caption">An interactive sketch of how I think.</span>
    </Tilt>
  );
}

const stages = [
  {
    name: "Context",
    title: "Find the right context.",
    copy: "Start with the connected schema and relevant semantic definitions.",
    code: "question → schema → semantic model",
  },
  {
    name: "SQL",
    title: "Check the query first.",
    copy: "Resolve the datasource and validate generated SQL before execution.",
    code: "resolveDatasource() → validateSQL()",
  },
  {
    name: "Answer",
    title: "Bring the result into focus.",
    copy: "Connect returned data with an analytical response and a clear interface.",
    code: "data → analysis → response",
  },
];
function AnalyticsArt() {
  const [stage, setStage] = useState(0);
  const reduced = useReducedMotion();
  return (
    <div className="analytics-art">
      <div className="analytics-window">
        <div className="window-chrome">
          <span className="mini-brand">
            <Sparkles size={15} /> accelerator ai
          </span>
          <small>Concept preview</small>
        </div>
        <div className="analytics-body">
          <div className="analytics-sidebar" aria-hidden="true">
            <Layers />
            <Database />
            <Code2 />
          </div>
          <div className="analytics-main">
            <div className="question-box">
              What is happening in my data?<span>↵</span>
            </div>
            <div
              className="stage-tabs"
              role="group"
              aria-label="Explore analytics workflow"
            >
              {stages.map((s, i) => (
                <button
                  key={s.name}
                  onClick={() => setStage(i)}
                  aria-pressed={stage === i}
                >
                  {s.name}
                </button>
              ))}
            </div>
            <AnimatePresence mode="wait" initial={false}>
              <m.div
                key={stage}
                initial={{ opacity: 0, y: reduced ? 0 : 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: reduced ? 0 : -5 }}
                transition={{ duration: reduced ? 0 : 0.15 }}
                className="stage-content"
                aria-live="polite"
              >
                <span className="stage-heading">{stages[stage].title}</span>
                <p>{stages[stage].copy}</p>
                <code>{stages[stage].code}</code>
                <div className="mini-chart" aria-hidden="true">
                  {[35, 55, 42, 72, 61, 83, 70, 96].map((h, i) => (
                    <i style={{ height: h + "%" }} key={i} />
                  ))}
                </div>
              </m.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
function DocumentArt() {
  return (
    <Tilt className="document-art">
      <div className="document-paper" aria-hidden="true">
        <FileText size={28} />
        <strong>
          There’s useful
          <br />
          data in here.
        </strong>
        <div className="paper-lines">
          <i />
          <i />
          <i />
          <i />
        </div>
        <span>document.pdf</span>
      </div>
      <div className="extraction-card" aria-hidden="true">
        <span>
          <Sparkles size={14} /> From pages to fields
        </span>
        {["Reference", "Date", "Amount"].map((s) => (
          <div key={s}>
            {s}
            <i />
          </div>
        ))}
        <small>
          <Check size={12} /> CSV &amp; Excel export
        </small>
      </div>
    </Tilt>
  );
}
function TaskArt() {
  return (
    <Tilt className="task-art">
      <div className="task-window" aria-hidden="true">
        <div className="task-top">
          <strong>
            TaskFlows<span>.</span>
          </strong>
          <small>Team workspace</small>
        </div>
        <h4>
          Less chasing.
          <br />
          More progress.
        </h4>
        <div className="task-board">
          <div>
            <span>Proposed</span>
            <article>
              <small>Needs approval</small>
              <strong>Review the API contract</strong>
              <p>Clear expectations, before the work starts.</p>
              <i>BU</i>
            </article>
          </div>
          <div>
            <span>In progress</span>
            <article>
              <small>Approved</small>
              <strong>Build the task workflow</strong>
              <p>Time tracked on the server.</p>
              <span className="timer">
                <i /> Timer running
              </span>
            </article>
          </div>
        </div>
      </div>
    </Tilt>
  );
}

export default function Home() {
  return (
    <MotionRoot>
      <Portfolio />
    </MotionRoot>
  );
}
function Portfolio() {
  const reduced = useReducedMotion();
  const [selected, setSelected] = useState(0),
    [visible, setVisible] = useState(false),
    [filter, setFilter] = useState("All"),
    [query, setQuery] = useState(""),
    [expanded, setExpanded] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null),
    trigger = useRef<HTMLElement | null>(null);
  const project = projects[selected];
  const archive = projects
    .map((p, index) => ({ ...p, index }))
    .slice(3)
    .filter(
      (p) =>
        (filter === "All" || p.category === filter) &&
        (p.name + " " + p.stack + " " + p.summary)
          .toLowerCase()
          .includes(query.toLowerCase()),
    );
  function open(i: number) {
    trigger.current = document.activeElement as HTMLElement;
    setSelected(i);
    setVisible(true);
    dialog.current?.showModal();
  }
  function close() {
    setVisible(false);
  }
  return (
    <>
      <ReadingProgress />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header wrap">
        <a className="brand" href="#top" aria-label="Binay Uppen Sharma home">
          <span className="brand-mark">
            bu<span>.</span>
          </span>
          <span>Binay Uppen Sharma</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a className="nav-contact" href="#contact">
            Say hello <ArrowUpRight size={15} />
          </a>
        </nav>
      </header>
      <main id="main">
        <section className="hero wrap" id="top">
          <div className="hero-top">
            <span>
              <i /> JavaScript &amp; MERN developer
            </span>
            <span>Based in Chennai, India</span>
          </div>
          <div className="hero-grid">
            <div className="hero-copy">
              <h1>
                <Entrance as="span" className="headline-line">
                  Ideas in.
                </Entrance>
                <Entrance as="span" className="headline-line" delay={0.1}>
                  Code out.
                </Entrance>
              </h1>
              <p>
                Hey, I’m Binay. I build web applications, connect the pieces
                behind them, and explore what AI can help us make.
              </p>
              <div className="hero-actions">
                <MagneticLink href="#work" className="button primary">
                  Take a look around <ArrowDown size={18} />
                </MagneticLink>
                <a
                  className="text-link"
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
            <Entrance delay={0.18}>
              <HeroArt />
            </Entrance>
          </div>
          <div className="hero-bottom">
            <p>
              Currently building at <strong>SRM Technologies</strong>
              <br />
              <span>Programmer Analyst Trainee</span>
            </p>
            <div className="stack-stamps">
              <span>JavaScript</span>
              <span>React</span>
              <span>Node.js</span>
              <span>MongoDB</span>
            </div>
            <a
              href="#work"
              className="scroll-cue"
              aria-label="Scroll to selected work"
            >
              <ArrowDown size={19} />
            </a>
          </div>
        </section>
        <section className="work-section" id="work">
          <div className="wrap">
            <div className="section-heading">
              <div>
                <span className="section-kicker">
                  A few things I’ve been building
                </span>
                <h2>
                  Curiosity,
                  <br />
                  put to work.
                </h2>
              </div>
              <p>
                Team contributions, internship POCs
                <br />
                and lessons turned into working code.
              </p>
            </div>
            <Reveal>
              <article className="flagship">
                <div className="flagship-copy">
                  <span className="project-kind">
                    SRM Technologies · Team contribution
                  </span>
                  <h3>
                    Accelerator
                    <br />
                    AI.
                  </h3>
                  <p>
                    A business question is just the beginning. Connecting it to
                    the right schema, context and query is where the engineering
                    happens.
                  </p>
                  <div className="project-tags">
                    <span>React</span>
                    <span>Node.js</span>
                    <span>Semantic retrieval</span>
                  </div>
                  <m.button
                    className="button ink"
                    onClick={() => open(0)}
                    whileHover={reduced ? undefined : { x: 5 }}
                    whileTap={reduced ? undefined : { scale: 0.97 }}
                    aria-label="Explore Accelerator AI"
                  >
                    Explore the project <ArrowUpRight size={17} />
                  </m.button>
                </div>
                <div className="flagship-stage">
                  <ScrollScene>
                    <AnalyticsArt />
                  </ScrollScene>
                  <span className="preview-note">
                    Illustrative UI · no customer data
                  </span>
                </div>
              </article>
            </Reveal>
            <div className="project-pair">
              <Reveal>
                <article className="project-card doc-card">
                  <button
                    className="card-visual"
                    onClick={() => open(1)}
                    aria-label="Explore Document Intelligence"
                  >
                    <DocumentArt />
                    <span className="open-disc">
                      <ArrowUpRight />
                    </span>
                    <span className="preview-note">Concept preview</span>
                  </button>
                  <div className="card-copy">
                    <span className="project-kind">
                      SRM internship · Document-processing POC
                    </span>
                    <h3>Document Intelligence</h3>
                    <p>
                      Find the fields hiding across a PDF. Retrieve the context.
                      Turn the result into a spreadsheet.
                    </p>
                    <span className="card-stack">
                      React / FastAPI / Azure AI
                    </span>
                  </div>
                </article>
              </Reveal>
              <Reveal>
                <article className="project-card task-card">
                  <button
                    className="card-visual"
                    onClick={() => open(2)}
                    aria-label="Explore TaskFlows"
                  >
                    <TaskArt />
                    <span className="open-disc">
                      <ArrowUpRight />
                    </span>
                    <span className="preview-note">Concept preview</span>
                  </button>
                  <div className="card-copy">
                    <span className="project-kind">
                      MERN application · Workflow engineering
                    </span>
                    <h3>TaskFlows</h3>
                    <p>
                      Propose it. Approve it. Get to work. A task application
                      with clear permissions and server-owned time tracking.
                    </p>
                    <span className="card-stack">
                      MongoDB / Express / React / Node.js
                    </span>
                  </div>
                </article>
              </Reveal>
            </div>
            <section className="archive" aria-labelledby="archive-title">
              <div className="archive-heading">
                <div>
                  <h3 id="archive-title">More from the playground.</h3>
                  <p>Small experiments can teach you big things.</p>
                </div>
                <label className="search-box">
                  <Search size={17} />
                  <input
                    type="search"
                    name="projects"
                    autoComplete="off"
                    spellCheck={false}
                    aria-label="Search projects"
                    placeholder="Try React, AI or an API…"
                    value={query}
                    onChange={(e) => {
                      setQuery(e.target.value);
                      setExpanded(true);
                    }}
                  />
                </label>
              </div>
              <LayoutGroup id="archive-filter">
                <div
                  className="filters"
                  role="group"
                  aria-label="Project categories"
                >
                  {["All", "AI", "Data", "Full stack", "Backend"].map((c) => (
                    <m.button
                      key={c}
                      aria-pressed={filter === c}
                      onClick={() => {
                        setFilter(c);
                        setExpanded(true);
                      }}
                    >
                      {filter === c && (
                        <m.span
                          layoutId="selected-filter"
                          className="filter-highlight"
                          transition={reduced ? { duration: 0 } : settle}
                        />
                      )}
                      <span>{c}</span>
                    </m.button>
                  ))}
                </div>
              </LayoutGroup>
              <p className="sr-only" aria-live="polite">
                {archive.length} matching projects
              </p>
              <div className="archive-list">
                {(expanded ? archive : archive.slice(0, 4)).map((p) => (
                  <m.button
                    layout={reduced ? false : "position"}
                    initial={false}
                    key={p.name}
                    className="archive-row"
                    onClick={() => open(p.index)}
                    whileHover={reduced ? undefined : { x: 5 }}
                  >
                    <span>
                      <strong>{p.name}</strong>
                      <small>{p.summary}</small>
                    </span>
                    <span className="archive-category">{p.category}</span>
                    <ArrowUpRight size={20} />
                  </m.button>
                ))}
              </div>
              {archive.length === 0 && (
                <p className="empty-state">
                  No projects found. Try “React”, “API” or clear your search.
                </p>
              )}
              {!expanded && archive.length > 4 && (
                <button className="show-more" onClick={() => setExpanded(true)}>
                  Show all {archive.length} projects <ArrowDown size={16} />
                </button>
              )}
              <p className="work-note">
                Company data stays private. Related POC versions are grouped
                together.
              </p>
            </section>
          </div>
        </section>
        <section className="about-section wrap" id="about">
          <div className="about-art">
            <Tilt className="identity-card">
              <span className="identity-top">
                A little about me <Sparkles size={16} />
              </span>
              <div className="identity-monogram" aria-hidden="true">
                bu.
              </div>
              <h3>
                Binay
                <br />
                Uppen Sharma
              </h3>
              <p>
                Curious developer.
                <br />
                Work in progress.
              </p>
              <div className="identity-bottom">
                <span>Chennai, India</span>
                <Code2 size={21} />
              </div>
            </Tilt>
            <span className="about-sticker" aria-hidden="true">
              Always
              <br />
              figuring it out.
            </span>
          </div>
          <div className="about-copy">
            <span className="section-kicker">
              The person behind the pull requests
            </span>
            <h2>
              Big on curiosity.
              <br />
              Hands on the code.
            </h2>
            <p>
              I like understanding the whole journey—from the first click to the
              database query. JavaScript is my foundation, and MERN is where I’m
              growing.
            </p>
            <p>
              Along the way, I’ve built AI and data POCs at SRM, explored
              semantic analytics on Accelerator AI, and developed a
              live-streaming application during my Fimo internship.
            </p>
            <p>
              I use Claude Code and Codex for implementation and automation.
              Understanding the rules, inspecting the result and testing what
              happens next are part of the work.
            </p>
            <div className="career">
              <div>
                <span>Apr 2026 — Present</span>
                <strong>Programmer Analyst Trainee</strong>
                <p>SRM Technologies · Full time</p>
              </div>
              <div>
                <span>Sep 2025 — Mar 2026</span>
                <strong>Internship · 7 months</strong>
                <p>SRM Technologies</p>
              </div>
              <div>
                <span>Mar — Jun 2025</span>
                <strong>Internship</strong>
                <p>Fimo Info Solutions · Live streaming; messaging POC</p>
              </div>
            </div>
            <div className="learning">
              <GitBranch size={18} />
              <p>
                <strong>Currently exploring</strong>
                <br />
                TypeORM with MySQL, SQL optimization, and TypeScript
                implementation with AI assistance.
              </p>
            </div>
          </div>
        </section>
        <section className="contact-section" id="contact">
          <div className="wrap">
            <div className="contact-top">
              <span>Got something in mind?</span>
              <span>Let’s connect the dots.</span>
            </div>
            <MagneticLink
              className="contact-heading"
              href={linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <h2>
                Let’s build
                <br />
                something good.
              </h2>
              <span className="contact-arrow">
                <ArrowUpRight />
              </span>
            </MagneticLink>
            <div className="contact-bottom">
              <p>
                JavaScript, MERN and a healthy amount of curiosity.
                <br />
                Start with a hello. See where it goes.
              </p>
              <div>
                <a href={linkedin} target="_blank" rel="noreferrer">
                  LinkedIn <ArrowUpRight size={16} />
                </a>
                <a href={github} target="_blank" rel="noreferrer">
                  GitHub <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer wrap">
        <span>© {new Date().getFullYear()} Binay Uppen Sharma</span>
        <a href="#top">
          Back to the top <ArrowUpRight size={14} />
        </a>
      </footer>
      <dialog
        ref={dialog}
        className="project-dialog"
        aria-labelledby="dialog-title"
        onClose={() => {
          setVisible(false);
          trigger.current?.focus();
        }}
        onCancel={(e) => {
          e.preventDefault();
          close();
        }}
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
      >
        <AnimatePresence
          initial={false}
          onExitComplete={() => {
            if (!visible) dialog.current?.close();
          }}
        >
          {visible && (
            <m.div
              key={project.name}
              className="dialog-inner"
              initial={{
                opacity: 0,
                y: reduced ? 0 : 18,
                scale: reduced ? 1 : 0.98,
              }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{
                opacity: 0,
                y: reduced ? 0 : 10,
                scale: reduced ? 1 : 0.98,
              }}
              transition={{ duration: reduced ? 0 : 0.2 }}
            >
              <div className="dialog-top">
                <span>{project.type}</span>
                <button
                  onClick={close}
                  className="close-button"
                  aria-label="Close project details"
                  autoFocus
                >
                  <X />
                </button>
              </div>
              <h2 id="dialog-title">{project.name}</h2>
              <p className="dialog-intro">{project.intro}</p>
              <div className="dialog-section">
                <h3>The engineering problem</h3>
                <p>{project.challenge}</p>
              </div>
              <div className="dialog-section">
                <h3>What I worked on</h3>
                <ul>
                  {project.contributions.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
              <p className="dialog-stack">{project.stack}</p>
              {project.repo && (
                <div className="project-sources">
                  <a
                    className="button primary"
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View repository <ArrowUpRight size={16} />
                  </a>
                  {project.evidence && (
                    <a
                      href={project.evidence.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {project.evidence.label} <ArrowUpRight size={14} />
                    </a>
                  )}
                </div>
              )}
              <p className="dialog-note">{project.note}</p>
            </m.div>
          )}
        </AnimatePresence>
      </dialog>
    </>
  );
}
