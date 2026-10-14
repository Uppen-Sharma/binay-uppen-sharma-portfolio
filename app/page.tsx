"use client";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, m, useReducedMotion } from "motion/react";
import {
  ArrowUpRight,
  Code2,
  Layers,
  Database,
  Check,
  X,
  FileText,
  Sparkles,
  GitBranch,
} from "lucide-react";
import { projects } from "./projects";
import {
  ProjectUniverse,
  type ProjectUniverseHandle,
} from "./project-universe";
import { SocialIcon } from "./social-icon";
import { SectionRail, ThemeToggle } from "./site-controls";
import { WorkJourney } from "./work-journey";
import { MotionRoot, ReadingProgress, Tilt } from "./motion-ui";
const github = "https://github.com/Uppen-Sharma",
  linkedin = "https://www.linkedin.com/in/BinayUppenSharma";

function AnalyticsArt({
  withoutMotion = false,
}: { withoutMotion?: boolean } = {}) {
  const [view, setView] = useState("Chart");
  const systemReduced = useReducedMotion();
  const reduced = systemReduced || withoutMotion;
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
                  initial={{ opacity: 1, y: reduced ? 0 : 5 }}
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
    [visible, setVisible] = useState(false);
  const [readerStatic, setReaderStatic] = useState(false);
  const readerReduced = reduced || readerStatic;
  const universe = useRef<ProjectUniverseHandle>(null);
  const closeTimer = useRef<number | undefined>(undefined);
  useEffect(() => () => window.clearTimeout(closeTimer.current), []);
  const dialog = useRef<HTMLDialogElement>(null),
    trigger = useRef<HTMLElement | null>(null);
  const project = projects[selected];
  function open(i: number, withoutMotion = false) {
    window.clearTimeout(closeTimer.current);
    closeTimer.current = undefined;
    trigger.current = document.activeElement as HTMLElement;
    setSelected(i);
    setReaderStatic(withoutMotion);
    setVisible(true);
    dialog.current?.showModal();
  }
  function close() {
    setVisible(false);
    if (closeTimer.current !== undefined) return;
    closeTimer.current = window.setTimeout(
      () => {
        closeTimer.current = undefined;
        if (dialog.current?.open) dialog.current.close();
      },
      readerReduced ? 0 : 220,
    );
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
        <section
          className="opening-identity wrap"
          id="top"
          aria-labelledby="identity-title"
        >
          <div>
            <h1 id="identity-title">Binay Uppen Sharma</h1>
            <p>Applied AI · MERN · Integrations</p>
          </div>
          <span>Chennai, India</span>
        </section>
        <ProjectUniverse ref={universe} onOpen={open} />
        <section
          className="current-project wrap"
          aria-labelledby="current-project-title"
        >
          <div className="current-project-copy">
            <span className="current-project-status">
              <Sparkles size={15} aria-hidden="true" /> Current project at SRM
            </span>
            <h2 id="current-project-title">Accelerator AI</h2>
            <p className="current-project-lead">
              Business questions. Connected data. Answers you can inspect.
            </p>
            <p>
              I contribute to the React experience and backend workflows that
              connect semantic retrieval, datasource context and validated SQL.
              The focus: useful analytics, with a clear path back to the data.
            </p>
            <ul
              className="current-project-focus"
              aria-label="Contribution areas"
            >
              <li>Semantic retrieval &amp; SQL validation</li>
              <li>Pinned results, refresh &amp; dashboard widgets</li>
              <li>Clearer frontend and backend boundaries</li>
            </ul>
            <p className="current-project-stack">
              React · Node.js · Express · Qdrant · Ollama
            </p>
            <button
              className="button primary"
              aria-haspopup="dialog"
              onClick={() => open(0)}
            >
              Read Accelerator AI case study <ArrowUpRight size={16} />
            </button>
            <small className="current-project-note">
              Team contribution. Company source and data stay private.
            </small>
          </div>
          <div className="current-project-preview">
            <AnalyticsArt />
            <p>
              Interactive concept preview · fictional data, not a live dashboard
            </p>
          </div>
        </section>
        <section
          className="work-context wrap"
          aria-label="Current role and working toolkit"
        >
          <div className="work-context-role">
            <span className="section-kicker">
              Currently at SRM Technologies
            </span>
            <h2>Programmer Analyst Trainee</h2>
            <p className="role-date">Full time · April 2026 — Present</p>
            <p>
              I connect interfaces, data and AI—with JavaScript at the
              foundation. At SRM, I contribute to React experiences, backend
              services and semantic analytics.
            </p>
            <a
              className="text-link"
              href={github}
              target="_blank"
              rel="noreferrer"
            >
              <SocialIcon kind="github" /> GitHub <ArrowUpRight size={16} />
            </a>
          </div>
          <div className="context-toolbox">
            <h2>My working toolkit</h2>
            <div className="toolbox-languages">
              <strong>JavaScript</strong>
              <span>React · Node.js · Vite</span>
            </div>
            <div className="toolbox-methods">
              <span>Redux Toolkit</span>
              <span>Express</span>
              <span>MySQL</span>
              <span>RAG</span>
              <span>Vitest</span>
              <span>Claude Code + Codex</span>
            </div>
            <small>TypeScript implementation is AI-assisted.</small>
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
                <p>
                  RAG · Qdrant · Chroma · Ollama · LangChain · LangGraph ·
                  Vitest · Pytest
                </p>
              </div>
              <div>
                <h3>Currently exploring</h3>
                <p>TanStack Query · TypeORM + MySQL · SQL optimization</p>
              </div>
            </div>
            <div className="working-methods">
              <h3>Methods behind the tools</h3>
              <p>
                Semantic retrieval and SQL validation. JWT/RBAC for permissions.
                Producer/evaluator feedback for AI workflows. Repository and
                QueryBuilder patterns in my current TypeORM learning.
              </p>
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
        <span>JavaScript-led. Problem-first.</span>
      </footer>
      <dialog
        ref={dialog}
        className="project-dialog"
        aria-labelledby="dialog-title"
        onClose={() => {
          window.clearTimeout(closeTimer.current);
          closeTimer.current = undefined;
          setVisible(false);
          universe.current?.release(selected);
          trigger.current?.focus({ preventScroll: true });
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
                opacity: 1,
              }}
              animate={{ opacity: 1 }}
              exit={{
                opacity: 0,
              }}
              transition={{ duration: readerReduced ? 0 : 0.2 }}
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
              {selected < 3 && (
                <div className="reader-preview">
                  {selected === 0 ? (
                    <AnalyticsArt withoutMotion={!!readerReduced} />
                  ) : selected === 1 ? (
                    <DocumentArt />
                  ) : (
                    <TaskArt />
                  )}
                  <p className="reader-preview-note">
                    Sanitized concept preview · fictional data
                  </p>
                </div>
              )}
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
