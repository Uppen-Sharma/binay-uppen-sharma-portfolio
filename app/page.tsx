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

const projects = [
  {
    name: "Accelerator AI",
    type: "Enterprise AI · Team project",
    stack: "TypeScript / React / Qdrant",
    intro:
      "An enterprise analytics platform that connects business questions to governed data. My work spans the React interface, semantic modeling, retrieval, and the backend path from a question to validated SQL.",
    challenge:
      "A useful answer needs more than a plausible query. The system needs the right datasource, relevant business definitions, and clear boundaries around execution.",
    contributions: [
      "Database connection validation and live schema exploration.",
      "Semantic modeling and connection-scoped vector retrieval.",
      "SQL validation and backend-owned datasource resolution.",
      "Separation of routes, services, repositories, and frontend features.",
    ],
    note: "Based on personal work records and project documentation, February–September 2026. This is a team contribution. The visual is an illustrative concept; company data and proprietary implementation details are omitted.",
  },
  {
    name: "Hybrid Document RAG",
    type: "AI engineering · Exploration",
    stack: "Python / ChromaDB / Ollama",
    intro:
      "A document retrieval project exploring how chunking, embeddings, and persistent vector storage can ground language-model responses in relevant source material.",
    challenge:
      "Retrieval quality shapes answer quality. Finding useful context and handling unreliable API calls are as important as choosing a model.",
    contributions: [
      "Custom document chunking and embedding workflows.",
      "Persistent vector storage with ChromaDB.",
      "Local model experimentation with Ollama.",
      "Resilient backoff around external model APIs.",
    ],
    note: "A personal learning project. The preview is a conceptual illustration, not a live document search service.",
  },
  {
    name: "JOBBEE API",
    type: "Backend engineering · Course project",
    stack: "Node.js / Express / MongoDB",
    intro:
      "A REST API project built while studying backend development, covering the practical foundations of a job platform: authentication, search, filtering, and file handling.",
    challenge:
      "A clean endpoint is only the beginning. APIs also need predictable pagination, appropriate access boundaries, and input protection.",
    contributions: [
      "Authentication workflows using JWT.",
      "Geospatial filtering and paginated results.",
      "File handling and REST endpoint organization.",
      "Input protection against common injection attacks.",
    ],
    note: "A course-based project presented as applied learning. The endpoint preview is illustrative; it does not call a live API.",
  },
];

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
          binay<span>✳</span>
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
            <span className="eyebrow">FULL-STACK & AI ENGINEER</span>
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
                <br />I build full-stack products and AI systems that make
                complex things feel simple.
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
              Across interfaces, APIs,
              <br />
              and the intelligence in between.
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
                  Making complex data
                  <br />a conversation.
                </p>
                <span className="project-stack">
                  TypeScript · React · Qdrant
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
                aria-label="View Hybrid Document RAG project"
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
                    From pages
                    <br />
                    to perspective.
                  </span>
                  <span className="doc-rule" />
                  <span className="doc-match">
                    <Search size={13} /> Context found
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
                  <h3>Hybrid Document RAG</h3>
                  <p>Better answers start with better context.</p>
                </div>
                <span>PYTHON / RAG</span>
              </div>
            </article>
            <article className="small-project">
              <button
                className="project-preview api-preview"
                aria-label="View JOBBEE API project"
                onClick={() => openProject(2)}
              >
                <span className="preview-index">03 / BACKEND FOUNDATIONS</span>
                <div className="terminal">
                  <div className="terminal-top">
                    <span>
                      <i />
                      <i />
                      <i />
                    </span>
                    <span>jobbee / api</span>
                  </div>
                  <div className="terminal-content">
                    <p>
                      <span className="http-method">GET</span> /api/v1/jobs
                    </p>
                    <div className="terminal-rule" />
                    <span className="code-comment">
                      {"// The next opportunity starts here."}
                    </span>
                    <div className="json-code">
                      {"{"}
                      <br />
                      &nbsp;&nbsp;<span>&quot;success&quot;</span>:{" "}
                      <em>true</em>,<br />
                      &nbsp;&nbsp;<span>&quot;data&quot;</span>: [<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;{"{"}{" "}
                      <span>&quot;role&quot;</span>:{" "}
                      <em>&quot;Your next chapter&quot;</em> {"}"}
                      <br />
                      &nbsp;&nbsp;]
                      <br />
                      {"}"}
                    </div>
                    <span className="response-status">
                      <i /> 200 OK <span>ILLUSTRATIVE RESPONSE</span>
                    </span>
                  </div>
                </div>
                <span className="preview-open">
                  <ArrowUpRight size={21} />
                </span>
              </button>
              <div className="project-caption">
                <div>
                  <h3>JOBBEE API</h3>
                  <p>The foundations behind a job platform.</p>
                </div>
                <span>NODE.JS / EXPRESS</span>
              </div>
            </article>
          </div>
          <div className="work-footnote">
            <span>
              Work shown with care. Company details kept confidential.
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
                <span>b.</span>
                <Asterisk className="monogram-star" />
                <span className="monogram-label">
                  ALWAYS A WORK IN PROGRESS.
                </span>
              </div>
            </div>
            <div className="about-copy">
              <h2 id="about-title">
                Curious by default.
                <br />
                <span className="serif-word">Engineer by practice.</span>
              </h2>
              <p>
                I like understanding how the whole thing works—from the first
                interaction to the query behind it.
              </p>
              <p>
                At SRM Technologies, I’m growing from full-stack development
                into AI engineering, working on semantic analytics, retrieval,
                and reliable data workflows.
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
                  <p>TypeORM · PostgreSQL · SQL</p>
                </div>
              </div>
              <div className="toolkit">
                <span>MY EVERYDAY TOOLKIT</span>
                <p>
                  TypeScript <b>/</b> React <b>/</b> Node.js <b>/</b> Python{" "}
                  <b>/</b> SQL
                </p>
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
              Have an interesting problem?
              <br />
              I’d love to hear about it.
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
          binay<span>✳</span>
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
            <span className="eyebrow">PROJECT NOTES / 0{selected + 1}</span>
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
