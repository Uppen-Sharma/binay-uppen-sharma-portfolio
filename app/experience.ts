export type WorkChapter = {
  id: string;
  month: string;
  title: string;
  overview: string;
  stack: string[];
  highlights: string[];
  weeks: { period: string; work: string }[];
  project?: number;
};

// Curated from the owner's daily tracker through 13 October 2026.
// Deliberately excludes raw entries, credentials, customer names and internal metrics.
// MySQL follows the owner's explicit correction to an older log entry.
export const workChapters: WorkChapter[] = [
  {
    id: "2026-10",
    month: "October 2026",
    title: "Making a growing codebase easier to change",
    overview:
      "The current focus is maintainability: smaller React widgets, clearer state ownership, and a clean boundary between saved queries and live results. Alongside implementation, I’m studying frontend query caching and documenting how the application fits together.",
    stack: [
      "JavaScript",
      "React",
      "Node.js",
      "Vite",
      "TanStack Query · learning",
    ],
    highlights: [
      "Separated dashboard widget behavior into focused components and hooks for refresh, ordering and removal.",
      "Distinguished persistent pinned-query state from temporary execution and live-result state.",
      "Refined backend responsibilities and bounded in-memory caching without putting raw query results into browser storage.",
    ],
    weeks: [
      {
        period: "1 October",
        work: "Explored TanStack tooling and the trade-offs around routing, rendering and application architecture.",
      },
      {
        period: "5–9 October",
        work: "Studied query-key and cache patterns; refined widget drag interactions, recovery after failed saves, and code naming.",
      },
      {
        period: "12–13 October",
        work: "Continued analytics and widget refactoring, clarified live-result ownership, and improved architecture documentation.",
      },
    ],
    project: 0,
  },
  {
    id: "2026-09",
    month: "September 2026",
    title: "From one-off answers to reusable dashboard widgets",
    overview:
      "Analytics work shifted toward saved questions and live dashboard results. In parallel, I strengthened relational database fundamentals through TypeORM and hands-on MySQL exercises.",
    stack: ["React", "Node.js", "MySQL", "TypeORM · learning", "SQL"],
    highlights: [
      "Built pinned-query views with loading and error states, pagination and persistent drag-to-reorder behavior.",
      "Worked on authenticated refresh flows that re-check saved queries against current semantic definitions.",
      "Practiced entities, relationships, repositories, QueryBuilder, joins, CASE and COALESCE with MySQL.",
    ],
    weeks: [
      {
        period: "1–11 September",
        work: "Separated application responsibilities and practiced TypeORM relationships, filtering and SQL fundamentals.",
      },
      {
        period: "15–24 September",
        work: "Developed pinned-result layouts, ordering and refresh behavior, progressing toward a paginated dashboard grid.",
      },
      {
        period: "25–30 September",
        work: "Refined shared refresh timing and evaluated frontend query-caching approaches.",
      },
    ],
    project: 0,
  },
  {
    id: "2026-08",
    month: "August 2026",
    title: "Connecting semantic definitions to useful answers",
    overview:
      "I worked across semantic-model authoring, connection-scoped retrieval and the conversational interface. The emphasis was on keeping business definitions, filters and datasource selection aligned.",
    stack: ["React", "Express", "MySQL", "Qdrant", "RAG"],
    highlights: [
      "Refined reusable metric and KPI authoring, validation and revision-aware updates.",
      "Worked on connection-scoped semantic retrieval and backend-owned datasource resolution.",
      "Improved conversation navigation and persistence while documenting the request flow.",
    ],
    weeks: [
      {
        period: "3–14 August",
        work: "Refined model-generation contracts, query verification and technical documentation.",
      },
      {
        period: "17–21 August",
        work: "Worked on KPI authoring and connection-scoped retrieval with Qdrant.",
      },
      {
        period: "24–31 August",
        work: "Improved datasource resolution, semantic imports, conversation navigation and retrieval fallbacks.",
      },
    ],
    project: 0,
  },
  {
    id: "2026-07",
    month: "July 2026",
    title: "Handling the questions that don’t fit neatly",
    overview:
      "This month focused on analytics edge cases: ambiguous prompts, joins, missing values, query timeouts and conversation state. Interface work made results and failures easier to understand.",
    stack: ["JavaScript", "React", "Node.js", "SQL", "Semantic analytics"],
    highlights: [
      "Refined clarification paths for ambiguous and unsupported questions instead of forcing an answer.",
      "Worked on join and grouping behavior, query cancellation and clearer provider errors.",
      "Improved result rendering and persisted conversation context across follow-up questions.",
    ],
    weeks: [
      {
        period: "1–10 July",
        work: "Refined question classification, context construction and result presentation.",
      },
      {
        period: "13–24 July",
        work: "Worked through query safety, execution timeouts, aggregate behavior and durable conversation history.",
      },
      {
        period: "27–31 July",
        work: "Refined semantic revision handling, connection boundaries and database migrations.",
      },
    ],
    project: 0,
  },
  {
    id: "2026-06",
    month: "June 2026",
    title: "Bringing analytics components into one workflow",
    overview:
      "Earlier autonomous-analytics prototypes developed into the Accelerator AI workstream. I contributed to the React console, Express services, semantic planning and the integration of agent-based workflows.",
    stack: [
      "React",
      "Vite",
      "Express",
      "LangGraph",
      "Zod",
      "TypeScript · AI-assisted",
    ],
    highlights: [
      "Worked on the request flow from natural-language input through semantic planning and validated SQL.",
      "Integrated analytics interfaces with backend routing, structured contracts and diagnostic views.",
      "Studied Azure agent orchestration, SQL tools, Logic Apps and guardrails through hands-on training.",
    ],
    weeks: [
      {
        period: "1–12 June",
        work: "Built on autonomous-analytics POCs and continued Azure AI Foundry agent training.",
      },
      {
        period: "15–19 June",
        work: "Integrated semantic-layer and analytics components and tested the combined request flow.",
      },
      {
        period: "22–30 June",
        work: "Worked on KPI definitions, join/grouping validation, history restoration and architecture notes.",
      },
    ],
    project: 0,
  },
  {
    id: "2026-05",
    month: "May 2026",
    title: "Turning report definitions into a migration workflow",
    overview:
      "I developed BI migration and data-processing POCs while continuing dashboard and access-control work. Azure AI Foundry training added practical experience with tools and agent integrations.",
    stack: ["Python", "FastAPI", "React", "Power BI", "Azure AI Foundry"],
    highlights: [
      "Worked on parsing Cognos XML, reviewing metadata and generating Power BI project definitions.",
      "Refined analytics pagination, identity integration, request logging and time-based grouping.",
      "Practiced agent function calling and external tool integration in training exercises.",
    ],
    weeks: [
      {
        period: "4–8 May",
        work: "Refined dashboard integration, identity checks, pagination and analytics grouping.",
      },
      {
        period: "11–20 May",
        work: "Developed data-processing POCs and the XML-to-Power-BI project generation workflow.",
      },
      {
        period: "25–29 May",
        work: "Studied system-design fundamentals and Azure AI Foundry agent tools.",
      },
    ],
    project: 3,
  },
  {
    id: "2026-04",
    month: "April 2026",
    title: "A full-time role, with work across UI and APIs",
    overview:
      "I moved into the Programmer Analyst Trainee role. Work spanned responsive analytics dashboards, FastAPI integration, semantic-model interfaces and document extraction.",
    stack: [
      "React",
      "Tailwind CSS",
      "FastAPI",
      "Python",
      "MySQL",
      "AI extraction",
    ],
    highlights: [
      "Built responsive dashboard layouts and connected them to analytics endpoints.",
      "Worked on theme consistency, identity-aware interfaces and live database metadata handling.",
      "Developed PDF-to-spreadsheet extraction with progress feedback and structured exports.",
    ],
    weeks: [
      {
        period: "1–9 April",
        work: "Refined theming, responsive dashboard behavior and login/interface consistency.",
      },
      {
        period: "10–24 April",
        work: "Integrated FastAPI analytics services and improved database and semantic-model interfaces.",
      },
      {
        period: "27–30 April",
        work: "Built the document-extraction POC with retrieval, processing feedback and CSV/Excel export.",
      },
    ],
    project: 1,
  },
  {
    id: "2026-03",
    month: "March 2026",
    title: "Building the semantic layer and strengthening JavaScript",
    overview:
      "The final internship month combined application work with deeper JavaScript practice. I refined semantic-model payloads, database connection validation, routing and a reusable theme system.",
    stack: ["JavaScript", "React", "Express", "MySQL", "CSS variables"],
    highlights: [
      "Worked on backend connection verification and live metadata-driven semantic models.",
      "Modularized interface features and standardized application theming.",
      "Practiced asynchronous JavaScript, modules, data structures and DOM interactions.",
    ],
    weeks: [
      {
        period: "2–13 March",
        work: "Refined server boundaries, connection checks and analytics interface integration.",
      },
      {
        period: "16–20 March",
        work: "Practiced advanced DOM and JavaScript patterns while developing metadata-driven models.",
      },
      {
        period: "23–31 March",
        work: "Built out dynamic theming and consolidated JavaScript, React and API fundamentals.",
      },
    ],
    project: 0,
  },
  {
    id: "2026-02",
    month: "February 2026",
    title: "RAG experiments meet semantic-model interfaces",
    overview:
      "I explored local and hybrid retrieval pipelines, then applied frontend skills to connection cards, schema views, KPI interfaces and semantic-model editing.",
    stack: ["React", "Python", "Ollama", "ChromaDB", "Gemini", "RAG"],
    highlights: [
      "Built PDF retrieval experiments using embeddings, persistent vectors and local/cloud model combinations.",
      "Practiced retrieval evaluation and resilient handling of model API failures.",
      "Developed semantic-layer navigation, connection cards and mobile drawers.",
    ],
    weeks: [
      {
        period: "2–5 February",
        work: "Built and evaluated local and hybrid RAG pipelines.",
      },
      {
        period: "6–20 February",
        work: "Worked on database/schema interfaces, semantic-model components and lazy-loaded routing.",
      },
      {
        period: "25–27 February",
        work: "Standardized interface styling and mobile navigation while continuing JavaScript practice.",
      },
    ],
    project: 6,
  },
  {
    id: "2026-01",
    month: "January 2026",
    title: "From tested APIs to multi-agent experiments",
    overview:
      "I completed the FastAPI course, continued JavaScript problem-solving and built an experimental producer/evaluator reflection loop using local language models.",
    stack: [
      "Python",
      "FastAPI",
      "Pytest",
      "JavaScript",
      "Ollama",
      "TypeScript · AI-assisted",
    ],
    highlights: [
      "Practiced authenticated API routes, migrations, validation and Pytest fixtures.",
      "Developed a bounded multi-agent refinement loop with configurable roles and model calls.",
      "Explored prompts, tokenization and OpenAI-compatible model endpoints.",
    ],
    weeks: [
      {
        period: "2–9 January",
        work: "Completed FastAPI training, including authentication, testing and application integration.",
      },
      {
        period: "12–23 January",
        work: "Practiced JavaScript and built the multi-agent reflection POC.",
      },
      {
        period: "27–30 January",
        work: "Refined agent configuration and explored local models and compatible API endpoints.",
      },
    ],
    project: 5,
  },
  {
    id: "2025-12",
    month: "December 2025",
    title: "Testing the flows, not just the screens",
    overview:
      "TaskFlows progressed through deployment and frontend testing. I worked on authentication, routing, dashboards and time-calculation tests before beginning FastAPI learning.",
    stack: [
      "React",
      "Redux Toolkit",
      "Vitest",
      "JSDOM",
      "Node.js",
      "FastAPI · learning",
    ],
    highlights: [
      "Resolved deployment configuration, access and asset-loading issues across frontend and backend hosting.",
      "Added authentication, protected-route, dashboard and task-time tests with mocked dependencies.",
      "Started FastAPI CRUD, validation and database fundamentals.",
    ],
    weeks: [
      {
        period: "1–12 December",
        work: "Refined TaskFlows security and deployment, and learned frontend testing fundamentals.",
      },
      {
        period: "15–22 December",
        work: "Tested authentication, routing, task views and time-calculation hooks.",
      },
      {
        period: "23–31 December",
        work: "Began FastAPI endpoints, Pydantic validation and ORM learning.",
      },
    ],
    project: 2,
  },
  {
    id: "2025-11",
    month: "November 2025",
    title: "Learning the backend by building one",
    overview:
      "JOBBEE API provided hands-on practice with Express and MongoDB. I then brought those backend patterns into TaskFlows, connecting the interface to authenticated task workflows.",
    stack: ["Node.js", "Express", "MongoDB", "Mongoose", "JWT", "Postman"],
    highlights: [
      "Built API filtering, search, pagination and geospatial job discovery.",
      "Implemented authentication, role checks, account flows and application uploads in a course project.",
      "Integrated TaskFlows backend services and refined error handling and application logging.",
    ],
    weeks: [
      {
        period: "5–14 November",
        work: "Built models, error handling, query filters and authentication for JOBBEE API.",
      },
      {
        period: "17–24 November",
        work: "Added account/application workflows and security middleware; documented and deployed the learning API.",
      },
      {
        period: "25–27 November",
        work: "Started TaskFlows backend integration and corrected timing and data-flow issues.",
      },
    ],
    project: 7,
  },
  {
    id: "2025-10",
    month: "October 2025",
    title: "Giving TaskFlows a predictable state model",
    overview:
      "I refined the task application’s dashboards and time tracking, then introduced Redux Toolkit. Node.js study began to connect frontend behavior with the API layer behind it.",
    stack: [
      "JavaScript",
      "React",
      "Redux Toolkit",
      "Tailwind CSS",
      "Node.js · learning",
    ],
    highlights: [
      "Refined dashboard layouts, task-state transitions and time synchronization.",
      "Split larger dashboard components and moved shared application state into Redux slices.",
      "Studied the event loop, callbacks, HTTP servers and REST API fundamentals.",
    ],
    weeks: [
      {
        period: "3–13 October",
        work: "Improved TaskFlows layouts, task states and time-handling behavior.",
      },
      {
        period: "14–22 October",
        work: "Practiced Redux Toolkit and integrated application slices and async handling.",
      },
      {
        period: "23–29 October",
        work: "Learned linting, Node.js execution and HTTP/REST basics.",
      },
    ],
    project: 2,
  },
  {
    id: "2025-09",
    month: "September 2025",
    title: "The starting point: React and JavaScript",
    overview:
      "My SRM internship began with practical React learning. Small projects made components, hooks, routing, context and API interactions concrete before I started TaskFlows.",
    stack: [
      "JavaScript",
      "React",
      "React Router",
      "Context API",
      "Tailwind CSS",
    ],
    highlights: [
      "Built component-based interfaces with state, effects, search and filtering.",
      "Practiced reducers, shared context and asynchronous CRUD operations.",
      "Completed React coursework and started TaskFlows authentication and dashboard interfaces.",
    ],
    weeks: [
      {
        period: "8–12 September",
        work: "Set up the environment and built the initial React course application.",
      },
      {
        period: "15–23 September",
        work: "Practiced reducers, context, API operations and routing; completed the React course.",
      },
      {
        period: "24–30 September",
        work: "Started TaskFlows, including login, registration and user/admin dashboards.",
      },
    ],
    project: 11,
  },
];
