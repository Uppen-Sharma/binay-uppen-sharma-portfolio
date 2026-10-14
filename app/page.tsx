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
import { SectionRail, ThemeToggle } from "./site-controls";
import { WorkJourney } from "./work-journey";
import {
  Entrance,
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
  return (
    <div className="space-art" aria-hidden="true">
      <svg viewBox="0 0 620 570" fill="none">
        <defs>
          <radialGradient id="planetSurface" cx=".25" cy=".2" r=".82">
            <stop stopColor="#c5e7f2" />
            <stop offset=".32" stopColor="#608ba9" />
            <stop offset=".63" stopColor="#253d58" />
            <stop offset="1" stopColor="#080f1d" />
          </radialGradient>
          <linearGradient
            id="orbitalRing"
            x1="70"
            y1="200"
            x2="550"
            y2="380"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#b9e4f1" stopOpacity=".1" />
            <stop offset=".5" stopColor="#b9e4f1" />
            <stop offset="1" stopColor="#e7ba89" stopOpacity=".5" />
          </linearGradient>
          <radialGradient id="planetGlow">
            <stop stopColor="#668aaf" stopOpacity=".25" />
            <stop offset="1" stopColor="#668aaf" stopOpacity="0" />
          </radialGradient>
          <clipPath id="planetClip">
            <circle cx="310" cy="270" r="147" />
          </clipPath>
        </defs>
        <circle cx="310" cy="270" r="250" fill="url(#planetGlow)" />
        <ellipse
          cx="310"
          cy="280"
          rx="274"
          ry="106"
          transform="rotate(-28 310 280)"
          stroke="#526781"
          strokeOpacity=".35"
          strokeDasharray="2 9"
        />
        <ellipse
          cx="310"
          cy="280"
          rx="239"
          ry="69"
          transform="rotate(-28 310 280)"
          stroke="url(#orbitalRing)"
          strokeWidth="2"
        />
        <circle cx="310" cy="270" r="147" fill="url(#planetSurface)" />
        <g clipPath="url(#planetClip)" stroke="#b1d6e7" strokeOpacity=".07">
          <path
            d="M120 185 Q285 250 490 170 M120 202 Q285 267 490 187 M120 223 Q285 288 490 208 M120 248 Q285 313 490 233 M120 280 Q285 345 490 265 M120 315 Q285 380 490 300 M120 347 Q285 412 490 332"
            strokeWidth="7"
          />
          <circle cx="300" cy="275" r="139" strokeOpacity=".12" />
        </g>
        <path
          d="M101 368 C137 414 303 366 435 296 C503 259 542 224 519 191"
          stroke="url(#orbitalRing)"
          strokeWidth="3"
        />
        <circle cx="158" cy="385" r="5" fill="#e7ba89" />
        <circle
          cx="480"
          cy="119"
          r="15"
          fill="#15243a"
          stroke="#7097b7"
          strokeOpacity=".6"
        />
        <path
          d="M101 137h12m-6-6v12M503 392h10m-5-5v10M356 66h8m-4-4v8"
          stroke="#a1bfd6"
        />
        <g fill="#aac8dd">
          <circle cx="61" cy="264" r="1.5" />
          <circle cx="173" cy="77" r="1" />
          <circle cx="536" cy="283" r="1.5" />
          <circle cx="423" cy="447" r="1" />
          <circle cx="215" cy="480" r="1.5" />
          <circle cx="557" cy="80" r="1" />
          <circle cx="72" cy="436" r="1" />
          <circle cx="286" cy="103" r="1" />
        </g>
      </svg>
      <span className="space-caption">
        Curiosity is the starting point.
        <br />
        <strong>Engineering is the journey.</strong>
      </span>
    </div>
  );
}
function AnalyticsArt() {
  const [view, setView] = useState("Chart");
  const reduced = useReducedMotion();
  return (
    <div className="analytics-art">
      <div className="analytics-window">
        <div className="window-chrome">
          <span className="mini-brand">
            <Sparkles size={15} /> Accelerator AI
          </span>
          <small>Sanitized concept</small>
        </div>
        <div className="analytics-body">
          <div className="analytics-sidebar" aria-hidden="true">
            <Sparkles />
            <Layers />
            <Database />
          </div>
          <div className="analytics-main">
            <div className="preview-composer">
              <small>Example question</small>
              <strong>How do weekly totals compare?</strong>
              <div className="example-prompts" aria-hidden="true">
                <span>Weekly trends</span>
                <span>Category breakdown</span>
              </div>
            </div>
            <div className="pinned-preview">
              <span className="pinned-label">
                Pinned result <small>Fictional example</small>
              </span>
              <p className="workflow-label">Choose a result view</p>
              <div
                className="stage-tabs"
                role="group"
                aria-label="Preview result views"
              >
                {["Chart", "Data", "SQL"].map((name) => (
                  <button
                    key={name}
                    aria-pressed={view === name}
                    onClick={() => setView(name)}
                  >
                    {name}
                  </button>
                ))}
              </div>
              <AnimatePresence mode="wait" initial={false}>
                <m.div
                  key={view}
                  initial={{ opacity: 0, y: reduced ? 0 : 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: reduced ? 0 : 0.15 }}
                  className="stage-content"
                  aria-live="polite"
                >
                  {view === "Chart" ? (
                    <>
                      <span className="stage-heading">
                        Illustrative weekly totals
                      </span>
                      <div className="mini-chart" aria-hidden="true">
                        {[40, 65, 85].map((h, i) => (
                          <i key={i} style={{ height: h + "%" }} />
                        ))}
                      </div>
                      <p>Week 1 · Week 2 · Week 3</p>
                    </>
                  ) : view === "Data" ? (
                    <table className="preview-data">
                      <caption>Fictional sample data</caption>
                      <thead>
                        <tr>
                          <th>Period</th>
                          <th>Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[40, 65, 85].map((n, i) => (
                          <tr key={i}>
                            <td>Week {i + 1}</td>
                            <td>{n}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  ) : (
                    <>
                      <span className="stage-heading">Example query</span>
                      <pre className="preview-sql">
                        <code>
                          {
                            "SELECT week, SUM(value)\nFROM example_data\nGROUP BY week;"
                          }
                        </code>
                      </pre>
                      <p>Illustrative SQL, not a live query.</p>
                    </>
                  )}
                </m.div>
              </AnimatePresence>
            </div>
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
      <SectionRail />
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
        <div className="header-actions">
          <nav aria-label="Main navigation">
            <a href="#work">Projects</a>
            <a href="#journey">SRM journey</a>
            <a className="nav-contact" href="#contact">
              Contact <ArrowUpRight size={15} />
            </a>
          </nav>
          <ThemeToggle />
        </div>
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
                  Binay Uppen
                </Entrance>
                <Entrance as="span" className="headline-line" delay={0.1}>
                  Sharma.
                </Entrance>
              </h1>
              <p>
                JavaScript-first developer building interfaces, APIs and AI
                workflows. From MERN applications to semantic analytics, here’s
                the work behind the code.
              </p>
              <div className="hero-actions">
                <a href="#work" className="button primary">
                  View projects <ArrowDown size={18} />
                </a>
                <a
                  className="text-link"
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub profile <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
            <Entrance delay={0.18}>
              <HeroArt />
            </Entrance>
          </div>
          <div className="hero-bottom">
            <div className="current-role">
              <span className="section-kicker">
                Currently at SRM Technologies
              </span>
              <h2>Programmer Analyst Trainee</h2>
              <p>Full time · April 2026 — present</p>
            </div>
            <div className="current-focus">
              <p>
                Contributing to Accelerator AI across React interfaces, Node.js
                services and semantic analytics.
              </p>
              <div className="stack-stamps">
                <span>JavaScript</span>
                <span>React</span>
                <span>Node.js</span>
                <span>MySQL</span>
              </div>
              <a className="text-link" href="#journey">
                Explore my SRM journey <ArrowDown size={16} />
              </a>
            </div>
          </div>
        </section>
        <section className="work-section" id="work">
          <div className="wrap">
            <div className="section-heading">
              <div>
                <span className="section-kicker">Selected projects</span>
                <h2>
                  Built to solve.
                  <br />
                  Designed to work.
                </h2>
              </div>
              <p>
                Explore the engineering behind each project.
                <br />
                Open a case study for my role, approach and code.
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
                    whileHover={reduced ? undefined : { x: 2 }}
                    whileTap={reduced ? undefined : { scale: 0.97 }}
                    aria-label="View case study: Accelerator AI"
                  >
                    View case study <ArrowUpRight size={17} />
                  </m.button>
                </div>
                <div className="flagship-stage">
                  <ScrollScene>
                    <AnalyticsArt />
                  </ScrollScene>
                  <span className="preview-note">
                    UI-inspired concept · fictional data
                  </span>
                </div>
              </article>
            </Reveal>
            <div className="project-pair">
              <Reveal>
                <article className="project-card doc-card">
                  <div className="card-visual" aria-hidden="true">
                    <DocumentArt />
                    <span className="preview-note">
                      Concept preview · illustrative UI
                    </span>
                  </div>
                  <div className="card-copy">
                    <span className="project-kind">
                      SRM · Document-processing POC
                    </span>
                    <h3>Document Intelligence</h3>
                    <p>
                      Find the fields hiding across a PDF. Retrieve the context.
                      Turn the result into a spreadsheet.
                    </p>
                    <span className="card-stack">
                      React / FastAPI / Azure AI
                    </span>
                    <button
                      className="button case-study-button"
                      onClick={() => open(1)}
                      aria-label="View case study: Document Intelligence"
                    >
                      View case study <ArrowUpRight size={17} />
                    </button>
                  </div>
                </article>
              </Reveal>
              <Reveal>
                <article className="project-card task-card">
                  <div className="card-visual" aria-hidden="true">
                    <TaskArt />
                    <span className="preview-note">
                      Concept preview · illustrative UI
                    </span>
                  </div>
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
                    <button
                      className="button case-study-button"
                      onClick={() => open(2)}
                      aria-label="View case study: TaskFlows"
                    >
                      View case study <ArrowUpRight size={17} />
                    </button>
                  </div>
                </article>
              </Reveal>
            </div>
            <section className="archive" aria-labelledby="archive-title">
              <div className="archive-heading">
                <div>
                  <h3 id="archive-title">More projects. Same curiosity.</h3>
                  <p>
                    Browse the archive. Select a project to see its case study.
                  </p>
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
                    <span className="archive-action">
                      View details <ArrowUpRight size={16} />
                    </span>
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
        <WorkJourney onOpen={open} />
        <section className="about-section wrap" id="about">
          <div className="about-art">
            <div className="identity-card">
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
            </div>
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
            <div className="contact-heading">
              <h2>
                Let’s build
                <br />
                something good.
              </h2>
            </div>
            <div className="contact-bottom">
              <p>
                JavaScript, MERN and a healthy amount of curiosity.
                <br />
                Start with a hello. See where it goes.
              </p>
              <div>
                <a href={linkedin} target="_blank" rel="noreferrer">
                  Contact on LinkedIn <ArrowUpRight size={16} />
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
              {project.interface && (
                <div className="dialog-section">
                  <h3>Interface at a glance</h3>
                  <ul>
                    {project.interface.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
              {project.workflow && (
                <div className="dialog-section">
                  <h3>How the pieces connect</h3>
                  <ol className="implementation-flow">
                    {project.workflow.map((item, i) => (
                      <li key={item}>
                        <span aria-hidden="true">{i + 1}</span>
                        <p>{item}</p>
                      </li>
                    ))}
                  </ol>
                </div>
              )}
              {project.decisions && (
                <div className="dialog-section">
                  <h3>Engineering considerations</h3>
                  <ul>
                    {project.decisions.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

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
