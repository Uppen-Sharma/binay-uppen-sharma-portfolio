"use client";

import { useRef, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Asterisk,
  Check,
  Database,
  FileText,
  Code2,
  Layers,
  Plus,
  Search,
  X,
} from "lucide-react";

import { projects } from "./projects";

function AnalyticsVisual() {
  const [view, setView] = useState("Insights");
  return (
    <div className="analytics-window">
      <div className="window-top">
        <span className="mini-brand">
          <Asterisk size={20} /> accelerator<span>ai</span>
        </span>
        <span className="sample-label">ILLUSTRATIVE PREVIEW</span>
      </div>
      <div className="analytics-body">
        <aside className="mock-sidebar" aria-hidden="true">
          <Layers size={18} />
          <Database size={18} />
          <FileText size={18} />
          <span className="sidebar-bottom">B</span>
        </aside>
        <div className="analytics-main">
          <div className="mock-heading">
            <span>Your data. A little clearer.</span>
            <span className="connected">
              <i /> Connected
            </span>
          </div>
          <div className="question">
            <span>What’s the story behind this quarter?</span>
            <span className="question-arrow">
              <ArrowUpRight size={17} />
            </span>
          </div>
          <div className="mock-tabs" aria-label="Explore the concept preview">
            {["Insights", "Query"].map((tab) => (
              <button
                key={tab}
                type="button"
                aria-pressed={view === tab}
                onClick={() => setView(tab)}
              >
                {tab}
              </button>
            ))}
            <span>
              <Check size={12} /> Validated
            </span>
          </div>
          {view === "Insights" ? (
            <div className="chart-panel">
              <div className="chart-label">
                <span>Quarterly overview</span>
                <span>Sample data</span>
              </div>
              <div
                className="chart"
                aria-label="Illustrative bar chart with no real business data"
                role="img"
              >
                {[36, 53, 44, 65, 57, 79, 69, 93, 81, 108, 97, 126].map(
                  (height, i) => (
                    <span key={i} style={{ height: `${height}px` }} />
                  ),
                )}
              </div>
              <div className="chart-axis">
                <span>JAN</span>
                <span>FEB</span>
                <span>MAR</span>
              </div>
            </div>
          ) : (
            <div className="query-panel">
              <span className="code-comment">
                -- Illustrative read-only query
              </span>
              <code>
                <b>SELECT</b> month, SUM(revenue)
                <br />
                <b>FROM</b> sample_sales
                <br />
                <b>GROUP BY</b> month
                <br />
                <b>ORDER BY</b> month;
              </code>
            </div>
          )}
          <div className="grounding">
            <span className="ground-dot" /> Grounded in semantics. Checked
            before execution.
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectCollection({ onOpen }: { onOpen: (index: number) => void }) {
  const [filter, setFilter] = useState("All");
  const [expanded, setExpanded] = useState(false);
  const collection = projects
    .map((project, index) => ({ ...project, index }))
    .slice(3);
  const filtered = collection.filter(
    (project) => filter === "All" || project.category === filter,
  );
  const shown = expanded ? filtered : filtered.slice(0, 4);
  return (
    <section className="project-collection" aria-labelledby="collection-title">
      <div className="collection-heading">
        <div>
          <span className="eyebrow">MORE FROM THE WORKBENCH</span>
          <h3 id="collection-title">
            Different problems.
            <br />
            <span className="serif-word">Same curiosity.</span>
          </h3>
        </div>
        <p>
          Explore the thinking.
          <br />
          Then explore the code.
        </p>
      </div>
      <div
        className="collection-filters"
        role="group"
        aria-label="Filter projects by discipline"
      >
        {["All", "AI", "Data", "Full stack", "Backend"].map((category) => (
          <button
            key={category}
            aria-pressed={filter === category}
            onClick={() => {
              setFilter(category);
              setExpanded(false);
            }}
          >
            {category}
            <span>
              {category === "All"
                ? collection.length
                : collection.filter((project) => project.category === category)
                    .length}
            </span>
          </button>
        ))}
      </div>
      <div className="collection-list">
        {shown.map((project) => (
          <article className="collection-row" key={project.name}>
            <span className="collection-number">
              {String(project.index + 1).padStart(2, "0")}
            </span>
            <button
              className="collection-open"
              onClick={() => onOpen(project.index)}
              aria-label={`View ${project.name} project`}
            >
              <span className="collection-project-name">{project.name}</span>
              <span className="collection-summary">{project.summary}</span>
            </button>
            <span className="collection-category">{project.category}</span>
            <a
              className="collection-source"
              href={project.repo}
              aria-label={`${project.name} on GitHub`}
              target="_blank"
              rel="noreferrer"
            >
              <Code2 size={17} />
              <ArrowUpRight size={14} />
            </a>
          </article>
        ))}
      </div>
      <div className="collection-bottom">
        <p aria-live="polite">
          Showing {shown.length} of {filtered.length}{" "}
          {filter === "All" ? "projects" : filter.toLowerCase() + " projects"}
        </p>
        {filtered.length > 4 && (
          <button onClick={() => setExpanded(!expanded)}>
            {expanded
              ? "Show fewer projects"
              : "Show all " + filtered.length + " projects"}
            <Plus size={15} className={expanded ? "expanded-icon" : ""} />
          </button>
        )}
      </div>
    </section>
  );
}

export default function Home() {
  const dialog = useRef<HTMLDialogElement>(null);
  const [selected, setSelected] = useState(0);
  const project = projects[selected];
  function openProject(index: number) {
    setSelected(index);
    dialog.current?.showModal();
  }

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="header wrap" id="top">
        <a
          className="wordmark"
          href="#top"
          aria-label="Binay Uppen Sharma home"
        >
          Binay Uppen Sharma
        </a>
        <nav aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a className="contact-nav" href="#contact">
            Let’s talk <ArrowUpRight size={15} />
          </a>
        </nav>
      </header>
      <main id="main">
        <section className="hero wrap" aria-labelledby="hero-title">
          <div className="hero-topline">
            <span className="eyebrow">JAVASCRIPT · MERN STACK DEVELOPER</span>
            <span className="location">
              <span className="status-dot" /> BASED IN CHENNAI, INDIA
            </span>
          </div>
          <div className="hero-composition">
            <div className="hero-type">
              <h1 id="hero-title">
                Thoughtfully
                <br />
                built.
                <br />
                <span className="serif-word">Intelligently</span>
                <br />
                connected<span className="blue-period">.</span>
              </h1>
            </div>
            <div className="sculpture" aria-hidden="true">
              {["one", "two", "three", "four", "five", "six", "seven"].map(
                (n) => (
                  <div className={`orbital o-${n}`} key={n} />
                ),
              )}
              <div className="sculpture-core" />
              <span className="sculpture-coordinate">01 / SYSTEMS IN SYNC</span>
              <span className="sculpture-plus">+</span>
            </div>
            <div className="hero-intro">
              <p>
                I’m Binay Uppen Sharma.
                <br />I turn workflow problems into JavaScript applications:
                React interfaces, Express APIs, MongoDB data models—and AI where
                the task calls for it.
              </p>
              <a className="round-link" href="#work">
                <span className="round-icon">
                  <ArrowDown size={18} />
                </span>
                Explore selected work
              </a>
            </div>
          </div>
          <div className="hero-bottom">
            <span>CODE WITH INTENT. BUILD WITH CURIOSITY.</span>
            <span>SELECTED WORK / 2025—26</span>
          </div>
        </section>

        <section
          className="work-section wrap"
          id="work"
          aria-labelledby="work-title"
        >
          <div className="section-heading">
            <div>
              <span className="eyebrow">01 / SELECTED WORK</span>
              <h2 id="work-title">
                A few things
                <br />
                <span className="serif-word">I’ve been building.</span>
              </h2>
            </div>
            <p>
              Task approvals. Document extraction.
              <br />
              Business questions turned into queries.
            </p>
          </div>
          <article className="flagship">
            <div className="flagship-copy">
              <div className="project-overline">
                <span>01</span>
                <span>FEATURED PROJECT</span>
              </div>
              <div>
                <span className="project-category">
                  ENTERPRISE AI · TEAM PROJECT
                </span>
                <h3>Accelerator AI</h3>
                <p>
                  Business questions.
                  <br />Grounded in your data.
                </p>
                <span className="project-stack">
                  Node.js · React · Semantic analytics
                </span>
              </div>
              <button className="project-link" onClick={() => openProject(0)}>
                Inside the project{" "}
                <span>
                  <ArrowUpRight size={22} />
                </span>
              </button>
            </div>
            <div className="flagship-visual">
              <div className="visual-grid" />
              <AnalyticsVisual />
              <span className="visual-caption">
                QUESTION → CONTEXT → CLARITY
              </span>
            </div>
          </article>
          <div className="project-grid">
            <article className="small-project">
              <button
                className="project-preview rag-preview"
                aria-label="View Document Intelligence project"
                onClick={() => openProject(1)}
              >
                <span className="preview-index">
                  02 / DOCUMENT INTELLIGENCE
                </span>
                <div className="document doc-back">
                  <FileText size={24} />
                  <i />
                  <i />
                  <i />
                  <i />
                </div>
                <div className="document doc-front">
                  <span className="doc-title">
                    From PDFs
                    <br />
                    to rows.
                  </span>
                  <span className="doc-rule" />
                  <span className="doc-match">
                    <Search size={13} /> Fields extracted
                  </span>
                  <div className="doc-lines">
                    <i />
                    <i />
                    <i />
                  </div>
                </div>
                <span className="rag-orbit" />
                <span className="preview-open">
                  <ArrowUpRight size={21} />
                </span>
              </button>
              <div className="project-caption">
                <div>
                  <h3>Document Intelligence</h3>
                  <p>Upload a PDF. Extract fields. Download a spreadsheet.</p>
                </div>
                <span>REACT / FASTAPI / AI</span>
              </div>
            </article>
            <article className="small-project">
              <button
                className="project-preview api-preview"
                aria-label="View TaskFlows project"
                onClick={() => openProject(2)}
              >
                <span className="preview-index">03 / WORKFLOW ENGINEERING</span>
                <div className="task-preview-window" aria-hidden="true">
                  <div className="task-preview-header">
                    <span>
                      TaskFlows<span className="task-logo-dot">.</span>
                    </span>
                    <span>WORKSPACE</span>
                  </div>
                  <div className="task-preview-title">
                    <span>A little more flow.</span>
                    <span>ILLUSTRATIVE PREVIEW</span>
                  </div>
                  <div className="task-board">
                    <div>
                      <span className="task-column-title">
                        <i />
                        Proposed
                      </span>
                      <div className="task-tile">
                        <span>Review the brief</span>
                        <p>Ready for a fresh perspective.</p>
                        <small>AWAITING APPROVAL</small>
                      </div>
                    </div>
                    <div>
                      <span className="task-column-title">
                        <i />
                        In progress
                      </span>
                      <div className="task-tile">
                        <span>Build something good</span>
                        <p>One thoughtful step at a time.</p>
                        <small>
                          <span className="timer-dot" />
                          TIMER RUNNING
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="task-preview-footer">
                    <Check size={12} />
                    Clear owners. Visible progress.
                  </div>
                </div>
                <span className="preview-open">
                  <ArrowUpRight size={21} />
                </span>
              </button>
              <div className="project-caption">
                <div>
                  <h3>TaskFlows</h3>
                  <p>Propose work. Approve it. Track time on the server.</p>
                </div>
                <span>REACT / NODE.JS / MONGODB</span>
              </div>
            </article>
          </div>
          <ProjectCollection onOpen={openProject} />
          <div className="work-footnote">
            <span>
              SRM learning, internship POCs and team contributions. Company details kept confidential.
            </span>
            <a
              href="https://github.com/Uppen-Sharma"
              target="_blank"
              rel="noreferrer"
            >
              Find me on GitHub <ArrowUpRight size={15} />
            </a>
          </div>
        </section>

        <section
          className="about-section"
          id="about"
          aria-labelledby="about-title"
        >
          <div className="wrap about-grid">
            <div className="about-left">
              <span className="eyebrow">02 / A LITTLE ABOUT ME</span>
              <div className="monogram-art" aria-hidden="true">
                <span className="initials">BUS</span>
                <Asterisk className="monogram-star" />
                <span className="monogram-label">BINAY UPPEN SHARMA</span>
              </div>
              <div
                className="career-notes"
                aria-label="Experience and education"
              >
                <div>
                  <span>2025 — PRESENT</span>
                  <strong>SRM Technologies</strong>
                  <p>Internship (7 months) → Programmer Analyst Trainee (full time)</p>
                </div>
                <div>
                  <span>MAR — JUN 2025</span>
                  <strong>Fimo Info Solutions</strong>
                  <p>
                    Internship · Live streaming application; messaging POC
                  </p>
                </div>
                <div>
                  <span>2023 — 2025</span>
                  <strong>Master of Computer Applications</strong>
                  <p>Kristu Jayanti University · 8.14 CGPA</p>
                </div>
              </div>
            </div>
            <div className="about-copy">
              <h2 id="about-title">
                Curious by default.
                <br />
                <span className="serif-word">Engineer by practice.</span>
              </h2>
              <p>
                The parts I enjoy most sit between the screen and the server:
                who can approve a task, where a timer gets its truth, and what
                makes a generated query safe to run.
              </p>
              <p>
                JavaScript is my foundation. At SRM Technologies, I’m focusing on
                MERN development alongside semantic analytics, retrieval and AI
                proofs of concept. My TypeScript work is AI-assisted.
              </p>
              <div className="about-facts">
                <div>
                  <span>CURRENTLY</span>
                  <strong>Programmer Analyst Trainee</strong>
                  <p>SRM Technologies · Chennai</p>
                </div>
                <div>
                  <span>EXPLORING</span>
                  <strong>Better data foundations</strong>
                  <p>TypeORM · MySQL · SQL</p>
                </div>
              </div>
              <div className="toolkit">
                <span>MY EVERYDAY TOOLKIT</span>
                <p>
                  JavaScript <b>/</b> MongoDB <b>/</b> Express <b>/</b> React{" "}
                  <b>/</b> Node.js <b>/</b> MySQL
                </p>
                <p>I use Claude Code and Codex for automation and agentic implementation. The workflow still needs explicit rules, inspectable code and tests—not just generated output.</p>
              </div>
            </div>
          </div>
        </section>

        <section
          className="contact-section wrap"
          id="contact"
          aria-labelledby="contact-title"
        >
          <div className="contact-top">
            <span className="eyebrow">03 / WHAT’S NEXT?</span>
            <span className="contact-note">
              GOOD WORK STARTS WITH A CONVERSATION.
            </span>
          </div>
          <a
            className="contact-title"
            href="https://www.linkedin.com/in/BinayUppenSharma"
            target="_blank"
            rel="noreferrer"
          >
            <h2 id="contact-title">
              Let’s build
              <br />
              <span className="serif-word">something good.</span>
            </h2>
            <span className="contact-arrow">
              <ArrowUpRight strokeWidth={1.2} />
            </span>
          </a>
          <div className="contact-bottom">
            <p>
              Building a React interface or Node.js API?
              <br />
              Let’s talk about the workflow behind it.
            </p>
            <div>
              <a
                href="https://www.linkedin.com/in/BinayUppenSharma"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn <ArrowUpRight size={16} />
              </a>
              <a
                href="https://github.com/Uppen-Sharma"
                target="_blank"
                rel="noreferrer"
              >
                <Code2 size={16} /> GitHub <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer wrap">
        <a className="wordmark" href="#top" aria-label="Back to top">
          Binay Uppen Sharma
        </a>
        <span>© {new Date().getFullYear()} BINAY UPPEN SHARMA</span>
        <a href="#top">
          BACK TO TOP <ArrowUpRight size={14} />
        </a>
      </footer>

      <dialog
        ref={dialog}
        className="project-dialog"
        aria-labelledby="dialog-title"
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current?.close();
        }}
      >
        <div className="dialog-inner">
          <div className="dialog-top">
            <span className="eyebrow">
              PROJECT NOTES / {String(selected + 1).padStart(2, "0")}
            </span>
            <button
              className="close-button"
              aria-label="Close project details"
              onClick={() => dialog.current?.close()}
              autoFocus
            >
              <X size={22} />
            </button>
          </div>
          <span className="project-category">{project.type}</span>
          <h2 id="dialog-title">{project.name}</h2>
          <p className="dialog-intro">{project.intro}</p>
          <div className="dialog-section">
            <h3>The problem</h3>
            <p>{project.challenge}</p>
          </div>
          <div className="dialog-section">
            <h3>My focus</h3>
            <ul>
              {project.contributions.map((item) => (
                <li key={item}>
                  <Plus size={16} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="dialog-stack">{project.stack}</p>
          {project.repo && (
            <div className="project-sources">
              <a href={project.repo} target="_blank" rel="noreferrer">
                <Code2 size={16} /> Explore repository{" "}
                <ArrowUpRight size={16} />
              </a>
              {project.evidence && (
                <a href={project.evidence.url} target="_blank" rel="noreferrer">
                  {project.evidence.label}
                  <ArrowUpRight size={14} />
                </a>
              )}
            </div>
          )}
          <p className="dialog-note">{project.note}</p>
          <button
            className="dialog-back"
            onClick={() => dialog.current?.close()}
          >
            Back to selected work <ArrowRight size={16} />
          </button>
        </div>
      </dialog>
    </>
  );
}
