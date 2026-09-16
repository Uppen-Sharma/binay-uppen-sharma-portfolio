"use client";
import { useRef, useState } from "react";
import {
  ArrowUpRight,
  ArrowDown,
  ArrowRight,
  Code2,
  Database,
  Layers,
  Braces,
  Check,
  X,
  Search,
  FileText,
  Play,
  GitBranch,
} from "lucide-react";
import { projects } from "./projects";
const github = "https://github.com/Uppen-Sharma",
  linkedin = "https://www.linkedin.com/in/BinayUppenSharma";
const layers = [
  {
    name: "Interface",
    tech: "React",
    icon: Layers,
    code: "<TaskBoard tasks={tasks} />",
    description:
      "Make the next action clear. Components, shared state and feedback that help people move through a workflow.",
  },
  {
    name: "Logic",
    tech: "Node.js + Express",
    icon: Braces,
    code: "router.post('/tasks', authorize, createTask)",
    description:
      "Put the rules on the server. Validate requests, check permissions and keep task state consistent.",
  },
  {
    name: "Data",
    tech: "MongoDB",
    icon: Database,
    code: "await Task.find({ assignedTo: user.id })",
    description:
      "Give the interface a dependable source of truth. Model the data, scope the query and return only what is needed.",
  },
];
function Workbench() {
  const [active, setActive] = useState(0);
  const layer = layers[active];
  return (
    <div className="workbench">
      <div className="bench-top">
        <span>
          <i className="signal" /> A little look under the hood
        </span>
        <Code2 size={18} />
      </div>
      <div className="circuit" aria-label="Explore a MERN application">
        <svg viewBox="0 0 500 230" className="wires" aria-hidden="true">
          <path d="M95 67 V115 Q95 140 125 140 H245 Q270 140 270 170 V198" />
          <path d="M395 67 V115 Q395 140 365 140 H270" />
          <path
            className="live-wire"
            d="M95 67 V115 Q95 140 125 140 H245 Q270 140 270 170 V198"
          />
        </svg>
        {layers.map((l, i) => (
          <button
            key={l.name}
            className={`node node-${i} ${active === i ? "selected" : ""}`}
            aria-pressed={active === i}
            onClick={() => setActive(i)}
          >
            <l.icon size={25} />
            <span>
              {l.name}
              <small>{l.tech}</small>
            </span>
            <i className="node-led" />
          </button>
        ))}
        <p className="circuit-caption">
          A click on the screen. A journey through the stack.
        </p>
      </div>
      <div className="code-sample" aria-live="polite">
        <div className="code-file">
          {layer.tech}
          <span>Illustrative code</span>
        </div>
        <code>{layer.code}</code>
        <p>{layer.description}</p>
      </div>
      <div className="bench-bottom">
        <span>
          <Check size={13} /> JavaScript at the core
        </span>
        <span>Choose a layer above</span>
      </div>
    </div>
  );
}
function AnalyticsPreview() {
  return (
    <div className="analytics-preview" aria-hidden="true">
      <div className="app-top">
        <span>
          <GitBranch size={18} /> accelerator ai
        </span>
        <i className="app-dot" />
      </div>
      <div className="app-layout">
        <div className="app-sidebar">
          <Layers />
          <Database />
          <Code2 />
        </div>
        <div className="app-content">
          <span className="preview-label">From question to context</span>
          <div className="question">
            How is the business performing?<span>↵</span>
          </div>
          <div className="pipeline">
            <span>
              <Check /> Schema
            </span>
            <span>
              <Check /> Semantics
            </span>
            <span>
              <Check /> SQL validation
            </span>
          </div>
          <div className="chart">
            <div className="chart-copy">
              Answer grounded
              <br />
              in connected data.
              <small>Illustrative interface · not customer data</small>
            </div>
            <div className="bars">
              {[32, 49, 41, 68, 54, 80, 72, 96].map((n, i) => (
                <i key={i} style={{ height: n + "%" }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function DocumentPreview() {
  return (
    <div className="document-preview" aria-hidden="true">
      <div className="pdf-sheet">
        <FileText size={30} />
        <strong>
          It starts with
          <br />a document.
        </strong>
        <div className="paper-lines">
          <i />
          <i />
          <i />
        </div>
        <span>PDF</span>
      </div>
      <span className="convert-arrow">
        <ArrowRight />
      </span>
      <div className="data-sheet">
        <span>
          <Database size={15} /> Structured output
        </span>
        <div className="table-head">
          Field <span>Value</span>
        </div>
        {["Document title", "Reference", "Date", "Amount"].map((s) => (
          <div className="table-row" key={s}>
            {s}
            <i />
          </div>
        ))}
        <small>
          <Check size={12} /> Ready for CSV or Excel
        </small>
      </div>
    </div>
  );
}
function TasksPreview() {
  return (
    <div className="tasks-preview" aria-hidden="true">
      <div className="task-window">
        <div className="task-window-top">
          <span>TaskFlows</span>
          <span>Workspace</span>
        </div>
        <h4>Good work needs a clear next step.</h4>
        <div className="task-columns">
          <div>
            <span>
              Proposed <b>1</b>
            </span>
            <article>
              <span className="task-tag">Needs review</span>
              <strong>Review the API contract</strong>
              <p>Confirm the request and response.</p>
              <div className="avatar-group">
                <i>B</i>
                <i>M</i>
              </div>
            </article>
          </div>
          <div>
            <span>
              In progress <b>1</b>
            </span>
            <article>
              <span className="task-tag green">Approved</span>
              <strong>Build the task workflow</strong>
              <p>Permissions checked on the server.</p>
              <small>
                <Play size={12} /> Timer running
              </small>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
export default function Home() {
  const [selected, setSelected] = useState(0),
    [query, setQuery] = useState(""),
    [category, setCategory] = useState("All"),
    [expanded, setExpanded] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null),
    trigger = useRef<HTMLElement | null>(null);
  const project = projects[selected];
  function openProject(i: number) {
    trigger.current = document.activeElement as HTMLElement;
    setSelected(i);
    dialog.current?.showModal();
  }
  const archive = projects
    .map((p, index) => ({ ...p, index }))
    .slice(3)
    .filter(
      (p) =>
        (category === "All" || p.category === category) &&
        (p.name + " " + p.stack + " " + p.summary)
          .toLowerCase()
          .includes(query.toLowerCase()),
    );
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <a href="#top" className="brand" aria-label="Binay Uppen Sharma home">
          <span className="brand-symbol" aria-hidden="true">
            b<span>.</span>
          </span>
          <span>Binay Uppen Sharma</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="nav-github"
          >
            GitHub <ArrowUpRight size={14} />
          </a>
          <a href="#contact" className="nav-contact">
            Let’s connect <ArrowUpRight size={15} />
          </a>
        </nav>
      </header>
      <main id="main">
        <section className="hero" id="top">
          <div className="hero-grid wrap">
            <div className="hero-copy">
              <p className="intro-line">
                <i className="signal" /> JavaScript &amp; MERN stack developer
              </p>
              <h1>
                Good ideas.
                <br />
                Working code.
              </h1>
              <p className="hero-description">
                I’m Binay. I build the interfaces people use, the APIs behind
                them, and the AI workflows that connect the two.
              </p>
              <div className="hero-actions">
                <a className="button light" href="#work">
                  Explore my work <ArrowDown size={17} />
                </a>
                <a
                  className="text-link"
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                >
                  Read the code <ArrowUpRight size={17} />
                </a>
              </div>
              <div className="hero-role">
                <span className="role-mark">↳</span>
                <p>
                  Currently at <strong>SRM Technologies</strong>
                  <br />
                  <span>Programmer Analyst Trainee · Chennai, India</span>
                </p>
              </div>
            </div>
            <Workbench />
          </div>
          <div className="hero-foot wrap">
            <span>Built with curiosity. Backed by code.</span>
            <div>
              <span>MongoDB</span>
              <span>Express</span>
              <span>React</span>
              <span>Node.js</span>
            </div>
          </div>
        </section>
        <section className="work-section wrap" id="work">
          <div className="section-heading">
            <h2>
              Less talk.
              <br />
              More working things.
            </h2>
            <p>
              Selected work from team contributions,
              <br />
              internship POCs and hands-on learning.
            </p>
          </div>
          <article className="featured-project">
            <div className="project-visual analytics-stage">
              <AnalyticsPreview />
              <span className="visual-note">Concept preview</span>
            </div>
            <div className="featured-description">
              <div>
                <span className="context-label">
                  SRM Technologies · Team contribution
                </span>
                <h3>Accelerator AI</h3>
                <p>
                  Turning a business question into a grounded answer takes more
                  than an LLM. It takes the right schema, semantic context and a
                  validated query.
                </p>
                <div className="tags">
                  <span>React</span>
                  <span>Node.js</span>
                  <span>Semantic retrieval</span>
                </div>
              </div>
              <button
                className="circle-button"
                onClick={() => openProject(0)}
                aria-label="Explore Accelerator AI"
              >
                <ArrowUpRight />
              </button>
            </div>
          </article>
          <div className="project-pair">
            <article className="project-card">
              <button
                className="project-visual document-stage"
                onClick={() => openProject(1)}
                aria-label="Explore Document Intelligence"
              >
                <DocumentPreview />
                <span className="visual-note">Concept preview</span>
                <span className="floating-open">
                  <ArrowUpRight />
                </span>
              </button>
              <div className="card-description">
                <span className="context-label">
                  SRM internship · Document-processing POC
                </span>
                <h3>Document Intelligence</h3>
                <p>
                  From scattered PDF fields to a spreadsheet you can work with.
                  Extraction, retrieval and job progress in one flow.
                </p>
                <span className="card-stack">React / FastAPI / Azure AI</span>
              </div>
            </article>
            <article className="project-card">
              <button
                className="project-visual task-stage"
                onClick={() => openProject(2)}
                aria-label="Explore TaskFlows"
              >
                <TasksPreview />
                <span className="visual-note">Concept preview</span>
                <span className="floating-open">
                  <ArrowUpRight />
                </span>
              </button>
              <div className="card-description">
                <span className="context-label">
                  MERN application · Workflow engineering
                </span>
                <h3>TaskFlows</h3>
                <p>
                  Who approves the task? Where does the timer get its truth? A
                  task-management app built around those details.
                </p>
                <span className="card-stack">
                  MongoDB / Express / React / Node.js
                </span>
              </div>
            </article>
          </div>
          <section className="archive" aria-labelledby="archive-title">
            <div className="archive-heading">
              <div>
                <h3 id="archive-title">The rest of the workbench.</h3>
                <p>
                  Smaller builds. Focused experiments. Lessons put into code.
                </p>
              </div>
              <label className="search-box">
                <Search size={17} />
                <input
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setExpanded(true);
                  }}
                  placeholder="Find a project or technology"
                  aria-label="Search projects"
                  type="search"
                  name="project-search"
                  autoComplete="off"
                  spellCheck={false}
                />
              </label>
            </div>
            <div
              className="filters"
              role="group"
              aria-label="Project categories"
            >
              {["All", "AI", "Data", "Full stack", "Backend"].map((c) => (
                <button
                  key={c}
                  aria-pressed={category === c}
                  onClick={() => {
                    setCategory(c);
                    setExpanded(true);
                  }}
                >
                  {c}
                </button>
              ))}
            </div>
            <p className="sr-only" aria-live="polite">{archive.length} matching projects</p>
            <div className="archive-list">
              {(expanded ? archive : archive.slice(0, 4)).map((p) => (
                <button
                  key={p.name}
                  className="archive-row"
                  onClick={() => openProject(p.index)}
                >
                  <span>
                    <strong>{p.name}</strong>
                    <small>{p.summary}</small>
                  </span>
                  <span className="archive-category">{p.category}</span>
                  <ArrowUpRight size={21} />
                </button>
              ))}
            </div>
            {archive.length === 0 && (
              <p className="empty-state">
                No matching projects. Try “React”, “API” or clear your search.
              </p>
            )}
            {!expanded && archive.length > 4 && (
              <button
                className="archive-more"
                onClick={() => setExpanded(true)}
              >
                Show all {archive.length} projects <ArrowDown size={16} />
              </button>
            )}
            <p className="work-disclaimer">
              Real work, shared responsibly. Company data stays private; related
              POC versions are grouped together.
            </p>
          </section>
        </section>
        <section className="about-section" id="about">
          <div className="wrap about-grid">
            <div className="about-intro">
              <span className="context-label">
                A little about the person behind the code
              </span>
              <h2>
                I like knowing
                <br />
                how it works.
              </h2>
              <p>
                Especially the part between a click and a database query. I’m a
                JavaScript-first developer growing into MERN development, with a
                practical interest in AI and data workflows.
              </p>
              <p>
                I use Claude Code and Codex to help implement and automate. The
                important part is still understanding the rules, inspecting the
                code and testing what happens next.
              </p>
              <a
                className="text-link dark-link"
                href={github}
                target="_blank"
                rel="noreferrer"
              >
                Explore my GitHub <ArrowUpRight size={17} />
              </a>
            </div>
            <div className="experience">
              <div className="experience-item">
                <span className="experience-date">Apr 2026 — Present</span>
                <h3>Programmer Analyst Trainee</h3>
                <p>SRM Technologies · Full time</p>
                <span>
                  Semantic analytics, retrieval and application workflows.
                </span>
              </div>
              <div className="experience-item">
                <span className="experience-date">Sep 2025 — Mar 2026</span>
                <h3>Internship</h3>
                <p>SRM Technologies · 7 months</p>
                <span>
                  JavaScript, MERN, AI prototypes and learning through POCs.
                </span>
              </div>
              <div className="experience-item">
                <span className="experience-date">Mar — Jun 2025</span>
                <h3>Internship</h3>
                <p>Fimo Info Solutions</p>
                <span>
                  Live streaming as the main project; messaging as a separate
                  POC.
                </span>
              </div>
              <div className="learning-note">
                <GitBranch size={21} />
                <p>
                  <strong>Still learning. Always building.</strong>
                  <br />
                  TypeORM with MySQL and SQL optimization. TypeScript
                  implementation with AI assistance.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="contact-section wrap" id="contact">
          <p>Have a workflow worth building?</p>
          <a
            className="contact-heading"
            href={linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <h2>
              Let’s make
              <br />
              it work.
            </h2>
            <span>
              <ArrowUpRight />
            </span>
          </a>
          <div className="contact-bottom">
            <p>
              JavaScript, MERN and thoughtfully applied AI.
              <br />
              Let’s start with the problem you’re solving.
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
        </section>
      </main>
      <footer className="wrap footer">
        <span>© {new Date().getFullYear()} Binay Uppen Sharma</span>
        <a href="#top">
          Back to top <ArrowUpRight size={15} />
        </a>
      </footer>
      <dialog
        ref={dialog}
        className="project-dialog"
        aria-labelledby="dialog-title"
        onClose={() => trigger.current?.focus()}
        onClick={(e) => {
          if (e.target === e.currentTarget) dialog.current?.close();
        }}
      >
        <div className="dialog-inner">
          <div className="dialog-top">
            <span>{project.type}</span>
            <button
              className="close-button"
              onClick={() => dialog.current?.close()}
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
                className="button navy"
                href={project.repo}
                target="_blank"
                rel="noreferrer"
              >
                View repository <ArrowUpRight size={16} />
              </a>
              {project.evidence && (
                <a href={project.evidence.url} target="_blank" rel="noreferrer">
                  {project.evidence.label} <ArrowUpRight size={16} />
                </a>
              )}
            </div>
          )}
          <p className="dialog-note">{project.note}</p>
        </div>
      </dialog>
    </>
  );
}
