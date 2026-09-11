import {
  ArrowDownRight,
  ArrowUpRight,
  BookOpen,
  BrainCircuit,
  Check,
  Code2,
  Database,
  Layers3,
  MessageCircle,
  Network,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";

const pipeline = [
  "Question guard",
  "Intent planning",
  "Semantic retrieval",
  "SQL generation",
  "Contract validation",
  "Database execution",
  "Quality review",
  "Insight + chart",
];

const milestones = [
  {
    date: "09 Feb 2026",
    title: "A reliable data foundation",
    copy: "Added connection validation and live schema exploration so the application worked from verified database metadata rather than assumptions.",
    tag: "Daily work log",
  },
  {
    date: "20 Mar 2026",
    title: "From physical schema to business meaning",
    copy: "Moved semantic-model generation toward live metadata, mapping tables and fields into business-facing dimensions and measures.",
    tag: "Daily work log",
  },
  {
    date: "03 Jun 2026",
    title: "Natural-language analytics becomes the core",
    copy: "Worked across an Express and React system that mapped questions to governed metrics, generated multi-dialect SQL, and rendered analytical results.",
    tag: "Daily work log",
  },
  {
    date: "29 Jul 2026",
    title: "Revisioned semantics and resilient retrieval",
    copy: "Helped introduce per-connection semantic revisions, deterministic validation, vector retrieval, retry-safe synchronization, and stronger session boundaries.",
    tag: "Daily work log",
  },
  {
    date: "19–25 Aug 2026",
    title: "Grounded RAG and automatic source resolution",
    copy: "Connected retrieval to governed candidates, tightened SQL trust boundaries, and helped move datasource selection behind the backend instead of exposing it to users.",
    tag: "Daily work log",
  },
  {
    date: "02–04 Sep 2026",
    title: "Architecture prepared for continued growth",
    copy: "Contributed to a phased separation of routes, services, repositories, domain rules, infrastructure, and frontend feature ownership while preserving behavior.",
    tag: "Daily work log",
  },
];

const capabilities = [
  {
    icon: Database,
    title: "Data foundations",
    copy: "Connection validation, live schema discovery, metadata workflows, credential boundaries, and adapters for relational and cloud data platforms.",
    accent: "cyan",
  },
  {
    icon: Layers3,
    title: "Governed semantics",
    copy: "Business entities, dimensions, measures, relationships, reusable metrics, KPI definitions, revision checks, and deterministic model validation.",
    accent: "blue",
  },
  {
    icon: BrainCircuit,
    title: "Grounded AI analytics",
    copy: "Intent routing, connection-scoped RAG, semantic matching, natural-language-to-SQL, bounded repair, and context-aware analytical responses.",
    accent: "violet",
  },
  {
    icon: ShieldCheck,
    title: "Reliability by design",
    copy: "Read-only SQL boundaries, semantic ownership checks, parameterized filters, stage-owned retries, timeouts, caching, telemetry, and regression coverage.",
    accent: "amber",
  },
];

const skillGroups = [
  ["Languages", "TypeScript", "JavaScript", "Python", "Java", "SQL"],
  ["Frontend", "React", "Vite", "Tailwind CSS", "Redux Toolkit", "Responsive UI"],
  ["Backend", "Node.js", "Express", "FastAPI", "Spring Boot", "REST APIs"],
  ["AI systems", "RAG", "Agent workflows", "Qdrant", "Ollama", "LLM APIs"],
  ["Data", "PostgreSQL", "MySQL", "SQL Server", "TypeORM", "Semantic models"],
  ["Engineering", "SQL validation", "API security", "Testing", "Caching", "Git"],
];

const completedLearning = [
  "Azure AI Foundry Agent Service",
  "Local LLMs with Ollama & LM Studio",
  "FastAPI — Beginner to Advanced",
  "Node.js RESTful API Masterclass",
  "React 18 / 19",
  "Complete JavaScript Course",
];

export default function Home() {
  return (
    <main>
      <a className="skip-link" href="#main-content">Skip to content</a>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Binay Uppen Sharma, home">
          <span className="brand-mark">BU</span>
          <span>Binay Uppen Sharma</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#learning">Learning</a>
          <a className="nav-cta" href="#connect">Connect <ArrowDownRight size={15} aria-hidden="true" /></a>
        </nav>
      </header>

      <div id="main-content">
        <section className="hero shell" id="top">
          <div className="hero-copy">
            <p className="eyebrow"><span /> Full-stack + AI engineering</p>
            <h1>I build governed AI systems that turn complex data into clear decisions.</h1>
            <p className="lede">
              Programmer Analyst Trainee working across semantic analytics,
              natural-language-to-SQL, RAG, database systems, and polished React experiences.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#work">Explore the work <ArrowUpRight size={17} aria-hidden="true" /></a>
              <a className="button ghost" href="https://github.com/BinayUppenSharma" target="_blank" rel="noreferrer">
                <Code2 size={17} aria-hidden="true" /> GitHub
              </a>
            </div>
          </div>

          <aside className="system-card" aria-label="Accelerator AI system overview">
            <div className="system-card-top">
              <p>Flagship case study</p>
              <span>2026 · active</span>
            </div>
            <h2>Accelerator AI</h2>
            <p className="system-summary">
              A sanitized view of an enterprise semantic analytics platform developed with a broader team.
            </p>
            <div className="pipeline-mini" aria-label="Simplified analytics flow">
              <div><Sparkles size={16} aria-hidden="true" /><span>Natural language</span></div>
              <div><Database size={16} aria-hidden="true" /><span>Governed semantics</span></div>
              <div><ShieldCheck size={16} aria-hidden="true" /><span>Validated SQL</span></div>
            </div>
            <div className="system-proof">
              <span>TypeScript / Express</span><span>React / Vite</span><span>Qdrant / Ollama</span>
            </div>
          </aside>
        </section>

        <section className="proof-strip" aria-label="Professional summary">
          <div><strong>2</strong><span>SRM role stages</span></div>
          <div><strong>Feb ’26</strong><span>Flagship project start</span></div>
          <div><strong>Full stack</strong><span>Interface to infrastructure</span></div>
          <p>Evidence over adjectives.</p>
        </section>

        <section className="section shell case-study" id="work">
          <div className="section-heading">
            <p className="section-kicker">01 · Flagship work</p>
            <h2>Accelerator AI: from connected data to governed answers.</h2>
          </div>

          <div className="case-intro-grid">
            <article>
              <p className="large-copy">
                The platform began as a database-connectivity and schema experience. It evolved into
                a semantic analytics system that resolves the right governed datasource, retrieves
                relevant business concepts, generates bounded SQL, validates it, executes it, and
                turns the result into an analytical response.
              </p>
              <p>
                My contribution spans that evolution across the TypeScript/Express backend and the
                React/Vite frontend. The work is presented as team contribution; confidential data,
                customer names, connection details, and internal identifiers are intentionally omitted.
              </p>
            </article>
            <aside className="evidence-note">
              <BookOpen size={22} aria-hidden="true" />
              <h3>Evidence basis</h3>
              <p>Personal daily work records cross-checked against current project documentation.</p>
              <ul>
                <li><Check size={14} aria-hidden="true" /> Dated engineering milestones</li>
                <li><Check size={14} aria-hidden="true" /> Current architecture review</li>
                <li><Check size={14} aria-hidden="true" /> Proprietary details removed</li>
              </ul>
            </aside>
          </div>

          <div className="architecture-card">
            <div className="architecture-title">
              <div>
                <p className="micro-label">Active analytical path</p>
                <h3>One question. Eight guarded stages.</h3>
              </div>
              <Workflow size={28} aria-hidden="true" />
            </div>
            <ol className="architecture-flow">
              {pipeline.map((step, index) => (
                <li key={step}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{step}</strong>
                </li>
              ))}
            </ol>
            <p className="architecture-caption">
              The system stops on missing or ambiguous semantic evidence instead of guessing a physical owner or executing an unsafe query.
            </p>
          </div>

          <div className="capability-grid">
            {capabilities.map(({ icon: Icon, title, copy, accent }) => (
              <article className={`capability-card ${accent}`} key={title}>
                <div className="icon-box"><Icon size={22} aria-hidden="true" /></div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section timeline-section">
          <div className="shell">
            <div className="section-heading compact">
              <p className="section-kicker">Project progression</p>
              <h2>Dated work, not a retrospective claim.</h2>
            </div>
            <div className="timeline">
              {milestones.map((item, index) => (
                <article className="timeline-item" key={item.date}>
                  <div className="timeline-index">{String(index + 1).padStart(2, "0")}</div>
                  <div className="timeline-date"><time>{item.date}</time><span>{item.tag}</span></div>
                  <div className="timeline-copy"><h3>{item.title}</h3><p>{item.copy}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section shell" id="experience">
          <div className="section-heading split-heading">
            <div>
              <p className="section-kicker">02 · Experience</p>
              <h2>Growth through increasingly complex systems.</h2>
            </div>
            <p>Chennai, India</p>
          </div>

          <div className="experience-list">
            <article className="experience-card featured">
              <div className="experience-meta"><span>SRM Technologies</span><span>Sep 2025 — Present</span></div>
              <div className="role-grid">
                <div>
                  <p className="role-date">Apr 2026 — Present</p>
                  <h3>Programmer Analyst Trainee</h3>
                </div>
                <div>
                  <p className="role-date">Sep 2025 — Mar 2026</p>
                  <h3>Full-Stack & AI Developer Intern</h3>
                </div>
              </div>
              <p>
                Progressed from frontend foundations and application workflows into database connectivity,
                semantic modeling, RAG, agent orchestration, SQL reliability, application security, and system architecture.
              </p>
              <div className="experience-tags"><span>Accelerator AI</span><span>Full-stack delivery</span><span>Enterprise analytics</span></div>
            </article>

            <article className="experience-card">
              <div className="experience-meta"><span>Fimo Info Solutions Pvt. Ltd.</span><span>Mar — Jun 2025</span></div>
              <h3>Java Developer Intern</h3>
              <div className="outcome-grid">
                <div><strong>50,000+</strong><span>messages delivered</span></div>
                <div><strong>&lt; 15 sec</strong><span>recorded processing time</span></div>
              </div>
              <p>
                Built a bulk messaging application with Java, Spring Boot, Spring Kafka, and parallel processing;
                also developed a Linux-hosted HLS live-streaming application.
              </p>
            </article>
          </div>
        </section>

        <section className="section projects-section">
          <div className="shell">
            <div className="section-heading compact">
              <p className="section-kicker">Selected supporting work</p>
              <h2>Projects that reinforce the core story.</h2>
            </div>
            <div className="project-grid">
              <article className="project-card">
                <div className="project-number">A</div>
                <div>
                  <p className="micro-label">AI engineering</p>
                  <h3>Hybrid Document RAG</h3>
                  <p>Context-grounded document retrieval using custom chunking, embeddings, persistent vector storage, and resilient API backoff.</p>
                  <div className="project-tags"><span>Python</span><span>ChromaDB</span><span>Ollama</span><span>Gemini</span></div>
                </div>
              </article>
              <article className="project-card">
                <div className="project-number">B</div>
                <div>
                  <p className="micro-label">Backend systems</p>
                  <h3>JOBBEE API</h3>
                  <p>REST backend with authentication, geospatial filtering, pagination, file handling, and defenses against common injection attacks.</p>
                  <div className="project-tags"><span>Node.js</span><span>Express</span><span>MongoDB</span><span>JWT</span></div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section shell toolkit-section" id="about">
          <div className="section-heading">
            <p className="section-kicker">03 · Toolkit</p>
            <h2>Comfortable across the path from interface to query execution.</h2>
          </div>
          <div className="skills-grid">
            {skillGroups.map(([title, ...skills]) => (
              <article key={title}>
                <h3>{title}</h3>
                <div>{skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="section learning-section" id="learning">
          <div className="shell learning-grid">
            <div>
              <p className="section-kicker">04 · Learning in public</p>
              <h2>Structured learning tied back to practical work.</h2>
              <p className="large-copy small">
                Courses are selected for relevance, not volume. Completed training in agent systems,
                local LLMs, backend APIs, and frontend engineering supports the work shown above.
              </p>
            </div>
            <div className="learning-list">
              {completedLearning.map((course, index) => (
                <div key={course}><span>{String(index + 1).padStart(2, "0")}</span><p>{course}</p><Check size={16} aria-label="Completed" /></div>
              ))}
            </div>
          </div>
          <div className="shell current-focus">
            <div className="focus-icon"><Network size={25} aria-hidden="true" /></div>
            <div>
              <p className="micro-label">Current engineering focus · Sep 2026</p>
              <h3>TypeORM + PostgreSQL</h3>
              <p>Entity design, SQL constraints, relationships, repositories, QueryBuilder, joins, compound filters, schema verification, and connection lifecycle handling.</p>
            </div>
          </div>
        </section>

        <section className="section shell education-section">
          <div className="education-card">
            <div className="education-mark"><BookOpen size={26} aria-hidden="true" /></div>
            <div>
              <p className="section-kicker">Education</p>
              <h2>Master of Computer Applications</h2>
              <p>Kristu Jayanti University, Bangalore · 2023 — 2025</p>
            </div>
            <strong>8.14 CGPA</strong>
          </div>
        </section>

        <section className="connect-section" id="connect">
          <div className="shell connect-grid">
            <div>
              <p className="section-kicker">Let’s connect</p>
              <h2>Interested in full-stack systems, AI engineering, or data products?</h2>
            </div>
            <div className="connect-actions">
              <a href="https://www.linkedin.com/in/BinayUppenSharma" target="_blank" rel="noreferrer"><MessageCircle size={18} /> LinkedIn <ArrowUpRight size={16} /></a>
              <a href="https://github.com/BinayUppenSharma" target="_blank" rel="noreferrer"><Code2 size={18} /> GitHub <ArrowUpRight size={16} /></a>
            </div>
          </div>
        </section>
      </div>

      <footer className="site-footer shell">
        <div className="brand"><span className="brand-mark">BU</span><span>Binay Uppen Sharma</span></div>
        <p>Full-stack & AI engineering · Chennai, India</p>
        <a href="#top">Back to top <ArrowUpRight size={14} aria-hidden="true" /></a>
      </footer>
    </main>
  );
}
