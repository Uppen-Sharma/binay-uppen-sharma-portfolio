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
import { BlackHole } from "./black-hole";
import { SocialIcon } from "./social-icon";
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
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Binay Uppen Sharma home">
          Binay Uppen Sharma<span aria-hidden="true">.</span>
        </a>
        <ThemeToggle />
      </header>
      <main id="main">
        <section className="hero wrap" id="top">
          <div className="hero-top">
            <span>
              <i /> Applied AI · MERN · Integrations
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
                I turn complex workflows into useful software. Connecting
                interfaces, data and AI—with JavaScript at the foundation.
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
                  <SocialIcon kind="github" /> GitHub <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
            <Entrance delay={0.18}>
              <BlackHole />
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
                From a business question to a usable answer. My SRM work spans
                React experiences, backend services and AI-powered analytics.
              </p>
              <div className="stack-stamps">
                <span>JavaScript</span>
                <span>React</span>
                <span>Node.js</span>
                <span>MySQL</span>
                <span>Redux Toolkit</span>
                <span>RAG</span>
              </div>
              <a className="text-link" href="#journey">
                Explore my SRM journey <ArrowDown size={16} />
              </a>
            </div>
          </div>
        </section>
        <section
          className="work-section"
          data-section="work"
          aria-labelledby="work-title"
        >
          <div className="wrap">
            <div className="section-heading" id="work" tabIndex={-1}>
              <div>
                <span className="section-kicker">Selected projects</span>
                <h2 id="work-title">
                  Real problems.
                  <br />
                  Working answers.
                </h2>
              </div>
              <p>
                The problem. My part. The approach.
                <br />
                Open a case study to go beyond the preview.
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
                    Ask a question. Find the right context. Validate the query.
                    Turn the result into something a team can use.
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
        <section
          className="about-section wrap"
          data-section="about"
          aria-labelledby="about-title"
        >
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
                Curious by default.
                <br />
                Practical by design.
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
          <div className="about-copy" id="about" tabIndex={-1}>
            <span className="section-kicker">How I work</span>
            <h2 id="about-title">
              Close to the problem.
              <br />
              Through to the solution.
            </h2>
            <p>
              I’m building toward forward-deployed engineering: understanding a
              real workflow, connecting the systems around it and testing
              whether the result actually helps. JavaScript and MERN are my
              foundation.
            </p>
            <p>
              At SRM, that means AI and data POCs, semantic analytics and
              frontend-to-backend integration. At Fimo, my main project was a
              live-streaming application; messaging was a separate POC.
            </p>
            <p>
              Claude Code and Codex help me implement, automate and explore
              agentic workflows. I stay responsible for the requirements, review
              and tests.
            </p>
            <div
              className="capability-grid"
              aria-label="SRM tools and developing skills"
            >
              <div>
                <h3>Interfaces &amp; state</h3>
                <p>React · Redux Toolkit · Vite · Tailwind CSS</p>
              </div>
              <div>
                <h3>Services &amp; data</h3>
                <p>Node.js · Express · FastAPI · MongoDB · MySQL</p>
              </div>
              <div>
                <h3>AI &amp; verification</h3>
                <p>RAG · Qdrant · Ollama · LangGraph · Vitest · Pytest</p>
              </div>
              <div>
                <h3>Currently exploring</h3>
                <p>TanStack Query · TypeORM + MySQL · SQL optimization</p>
              </div>
            </div>
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
                Deeper integration and delivery skills for an FDE path.
                TypeScript implementation is AI-assisted; JavaScript remains my
                primary language.
              </p>
            </div>
          </div>
        </section>
        <section
          className="contact-section"
          data-section="contact"
          aria-labelledby="contact-title"
        >
          <div className="wrap">
            <div className="contact-top">
              <span>Got something in mind?</span>
              <span>Let’s connect the dots.</span>
            </div>
            <div className="contact-heading" id="contact" tabIndex={-1}>
              <h2 id="contact-title">
                Let’s build
                <br />
                something good.
              </h2>
            </div>
            <div className="contact-bottom">
              <p>
                A workflow to untangle? An idea to test?
                <br />
                Let’s start with the problem.
              </p>
              <div>
                <a href={linkedin} target="_blank" rel="noreferrer">
                  <SocialIcon kind="linkedin" /> LinkedIn{" "}
                  <ArrowUpRight size={16} />
                </a>
                <a href={github} target="_blank" rel="noreferrer">
                  <SocialIcon kind="github" /> GitHub <ArrowUpRight size={16} />
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
