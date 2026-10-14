export type Project = {
  name: string;
  type: string;
  category: "AI" | "Data" | "Full stack" | "Backend";
  summary: string;
  stack: string;
  intro: string;
  challenge: string;
  contributions: string[];
  note: string;
  interface?: string[];
  workflow?: string[];
  decisions?: string[];
  repo?: string;
  evidence?: { label: string; url: string };
};

// Public descriptions are intentionally independent of customer-specific
// names, documents, configuration, and data in the underlying repositories.
// Reviewed against public source and the user's résumé on 12 September 2026.
export const projects: Project[] = [
  {
    name: "Accelerator AI",
    interface: [
      "A question composer with suggested prompts and a compact navigation rail.",
      "Pinned analytical results with chart, tabular-data and SQL views.",
      "Saved-query navigation and responsive dashboard widgets; portfolio examples use fictional data.",
    ],
    type: "SRM · Evolving analytics project · Team contribution",
    category: "AI",
    summary: "From a business question to a grounded, validated answer.",
    stack:
      "Node.js / Express / React / Qdrant / Ollama / TypeScript (AI-assisted)",
    intro:
      "A business question is only useful when it reaches the right data. On Accelerator AI, I contribute to the React interface and the backend steps that connect datasource schemas, business definitions, semantic retrieval and SQL validation.",
    challenge:
      "A useful answer needs more than a plausible query. The system needs the right datasource, relevant business definitions, and clear boundaries around execution.",
    workflow: [
      "Connect a datasource and establish its live schema and semantic definitions.",
      "Resolve a question against the relevant context, metrics and datasource; validate generated SQL before execution.",
      "Present the analytical response and let users revisit pinned questions through chart, data and SQL views.",
    ],
    decisions: [
      "Keep datasource and semantic context aligned rather than treating plausible SQL as a sufficient answer.",
      "Separate durable saved-query state from temporary live results; make refresh, ordering and failure states explicit.",
    ],
    contributions: [
      "Validate connections and expose live schemas so modeling starts from the connected database rather than an assumed structure.",
      "Scope vector retrieval to the selected connection so a question is matched against relevant semantic definitions.",
      "Resolve the datasource in the backend and validate generated SQL before handing it to query execution.",
      "Separate routes, services, repositories and frontend features as the prototype grows into a more maintainable application.",
      "Develop pinned-result interfaces with refresh states, pagination, reordering and clearer component/state boundaries.",
      "Earlier autonomous-analytics and DeepAgent POCs are iterations of this same project, not separate product achievements.",
    ],
    note: "Based on personal work records and project documentation, February–13 October 2026. Team contribution; proprietary source and company data are not published here. The visual is a sanitized reconstruction of high-level interface patterns, with fictional sample data.",
  },
  {
    name: "Document Intelligence",
    type: "SRM · Document-processing POC",
    category: "AI",
    summary: "From dense PDFs to structured Excel and CSV files.",
    stack:
      "React / FastAPI / Azure Document Intelligence / Azure OpenAI / Pandas",
    intro:
      "A document-processing application that turns uploaded PDFs into structured spreadsheet data. It connects a React upload experience to text extraction, semantic retrieval, model-assisted field extraction, and Excel or CSV export.",
    challenge:
      "PDF fields are scattered across pages, and extraction does not finish instantly. The application has to find relevant passages, produce structured fields, and show whether each job is running, complete or failed.",
    workflow: [
      "Upload a PDF and track the background processing job from the React interface.",
      "Extract and chunk text, retrieve relevant passages and structure the requested fields.",
      "Export the structured result as CSV or Excel and surface completion or error states.",
    ],
    decisions: [
      "Long-running extraction needs visible job status rather than a blocking upload experience.",
      "Retrieval narrows context before field extraction; source documents and extracted customer records remain private.",
    ],
    contributions: [
      "Text extraction, chunking, embeddings, and cosine-similarity retrieval before structured field extraction.",
      "An Azure Document Intelligence and Azure OpenAI extraction implementation behind a FastAPI service.",
      "Background processing with job identifiers, progress polling, and explicit completion/error states.",
      "Pandas-based spreadsheet export and automatic downloads that retain the original filename.",
    ],
    note: "An illustrative preview of the PDF-to-spreadsheet workflow. Source documents, extracted records, and customer identifiers are kept private.",
    repo: "https://github.com/Uppen-Sharma/Doc_Extractor",
    evidence: {
      label: "Extraction pipeline",
      url: "https://github.com/Uppen-Sharma/Doc_Extractor/blob/main/backend/ext.py",
    },
  },
  {
    name: "TaskFlows",
    type: "Workflow application · MERN stack",
    category: "Full stack",
    summary: "Task proposals, approvals, and time tracking in one flow.",
    stack: "React / Redux Toolkit / Node.js / Express / MongoDB / Vitest",
    intro:
      "A task-management application with distinct manager and user workflows. Users propose work; managers review it; the application tracks assignments, task states, and remaining time across a React interface and Express API.",
    challenge:
      "A timer in the browser is not enough. TaskFlows needs server-owned time calculations, manager approval rules and authenticated task updates to agree—even when the interface reloads.",
    workflow: [
      "Authenticate the user and display the workflow permitted for their role.",
      "Propose, review and assign tasks; validate state changes in the API.",
      "Track task time on the server and reflect the resulting state in the Redux-driven interface.",
    ],
    decisions: [
      "A browser-only timer can diverge after a reload, so time calculations belong on the server.",
      "Approval and assignment rules must be enforced by the API as well as represented in the UI.",
    ],
    contributions: [
      "Task proposals and manager approval workflows, with role-aware views and assignment checks.",
      "Server-side remaining-time calculations, start/stop timers, and baseline adjustment requests.",
      "JWT authentication, logout token blacklisting, and API audit middleware.",
      "Redux state management and Vitest/React Testing Library tests for authentication, task components, and time-calculation hooks.",
    ],
    note: "Frontend deployed on Vercel and backend on Render. The repository includes component and workflow tests. Preview is illustrative.",
    repo: "https://github.com/Uppen-Sharma/TaskFlows",
    evidence: {
      label: "Task workflow implementation",
      url: "https://github.com/Uppen-Sharma/TaskFlows/blob/main/taskflows-backend/controllers/taskController.js",
    },
  },
  {
    name: "Power BI Migration Toolkit",
    type: "SRM · BI migration POC family",
    category: "Data",
    summary: "Cognos XML → model mapping → a Power BI project.",
    stack: "Python / FastAPI / React / React Flow / Monaco / Gemini",
    intro:
      "A migration workflow that parses Cognos XML report definitions and generates Power BI project files. The interface brings metadata review, visual relationship design, and DAX editing into a guided sequence.",
    challenge:
      "Moving a report between BI platforms means translating the model and business expressions, not just copying a file.",
    workflow: [
      "Parse the source XML and expose metadata for review.",
      "Review relationships and map expressions in the guided interface.",
      "Generate model/report definitions and package the Power BI project for download.",
    ],
    decisions: [
      "Report migration includes translating relationships and expressions, not just repackaging a file.",
      "AI-generated DAX needs reference checks; related repositories represent iterations of the same POC family.",
    ],
    contributions: [
      "A five-step wizard covering upload, metadata review, relationships, expression mapping, and export.",
      "Visual dataset relationships with React Flow and an embedded Monaco DAX editor.",
      "AI-assisted DAX generation with reference checks and validation helpers.",
      "Generation of model and report definitions packaged as a downloadable Power BI project archive.",
    ],
    note: "SRM learning and POC work. Related migration-tool iterations are grouped here rather than counted as separate products. The public version documents a 5-step wizard; this is workflow scope, not a measured business-performance claim. Customer models and private repository details stay private.",
    repo: "https://github.com/Uppen-Sharma/XML_TO_PowerBI_Project",
    evidence: {
      label: "Project export implementation",
      url: "https://github.com/Uppen-Sharma/XML_TO_PowerBI_Project/blob/main/backend/pbip_generator.py",
    },
  },
  {
    name: "Conversation Analytics",
    type: "Analytics dashboard · Data application",
    category: "Data",
    summary: "Usage trends, feedback, and conversation drill-downs.",
    stack: "React / FastAPI / SQLAlchemy / MySQL",
    intro:
      "A chatbot analytics dashboard that brings usage metrics, peak activity, frequent questions, and conversation history into one interface. The backend uses asynchronous SQLAlchemy queries with MySQL.",
    challenge:
      "Aggregate trends need a path back to individual conversations. Filtering, pagination, and cache behavior must stay consistent across the dashboard.",
    workflow: [
      "Request analytics for the selected date range and user context.",
      "Aggregate usage, activity and feedback through the FastAPI service and MySQL queries.",
      "Render overview metrics and paginated drill-downs into conversations.",
    ],
    decisions: [
      "Aggregate views need a consistent path into the underlying conversation history.",
      "Pagination, date filters and cached metrics should agree across the interface and API.",
    ],
    contributions: [
      "Usage statistics, peak-activity aggregation, FAQs, and date-range filtering.",
      "Sortable, paginated user views with conversation and message drill-downs.",
      "Cached metrics queries and separated routes, services, schemas, and database access.",
      "Role-aware controls and multilingual interface resources.",
    ],
    note: "Presented under a neutral portfolio title. Customer branding, deployment details, user records, and conversation contents are omitted.",
    repo: "https://github.com/Uppen-Sharma/Chatbot_dashboard",
    evidence: {
      label: "Analytics service",
      url: "https://github.com/Uppen-Sharma/Chatbot_dashboard/blob/main/backend/src/services/dashboard.py",
    },
  },
  {
    name: "Multi-Agent Reflection",
    type: "SRM internship · Agent-workflow POC",
    category: "AI",
    summary: "Generate, evaluate, reflect—and refine the next draft.",
    stack: "Node.js / Ollama / TypeScript (AI-assisted)",
    intro:
      "An experimental multi-agent system that iterates on generated work using producer, evaluator, and critic/coordinator roles. Local language models supply drafts and feedback within a bounded refinement loop.",
    challenge:
      "Single-pass generation gives little opportunity to challenge an answer. An explicit feedback loop makes intermediate critiques and revisions inspectable.",
    workflow: [
      "Assign the task and model configuration to the producer.",
      "Evaluate the draft and pass criticism into the next refinement iteration.",
      "Stop at the configured approval or iteration boundary and retain reflection history.",
    ],
    decisions: [
      "A bounded refinement loop prevents open-ended generation.",
      "An evaluator's approval is an experimental model judgment, not independent factual validation.",
    ],
    contributions: [
      "Separate producer, evaluator, and coordinator implementations with typed results.",
      "Minimum and maximum iteration limits, evaluator scores, and an approval condition.",
      "Feedback passed into subsequent generation, with reflection history retained.",
      "Configurable agent personas and local Ollama model calls.",
    ],
    note: "An exploration of agent workflows. Evaluator approval is a model judgment, not proof of factual or mathematical correctness.",
    repo: "https://github.com/Uppen-Sharma/Multi-Agent-Reflection-MAR-System",
    evidence: {
      label: "Reflection loop",
      url: "https://github.com/Uppen-Sharma/Multi-Agent-Reflection-MAR-System/blob/main/src/mar-reflection.ts",
    },
  },
  {
    name: "Document RAG",
    type: "Retrieval systems · Learning project",
    category: "AI",
    summary: "PDF retrieval, local models, and context-bound answers.",
    stack: "Python / ChromaDB / LangChain / Ollama / Streamlit",
    intro:
      "A PDF question-answering project that explores ingestion, chunking, vector retrieval, and local model responses. Rulebooks provide the sample document corpus; the engineering focus is a reusable retrieval workflow.",
    challenge:
      "An answer should stay within the retrieved context and acknowledge missing information. Retrieval and evaluation need to be inspectable.",
    workflow: [
      "Ingest and chunk PDFs, then store embeddings and source identifiers in ChromaDB.",
      "Retrieve passages relevant to the question and construct a context-bound prompt.",
      "Return a local-model response and use evaluation cases to inspect retrieval behavior.",
    ],
    decisions: [
      "Context-only prompting and missing-evidence responses are useful boundaries, not a guarantee against hallucinations.",
      "Inspect retrieval and ambiguous-query cases rather than judging only whether a response sounds convincing.",
    ],
    contributions: [
      "PDF ingestion and persistent ChromaDB storage with Ollama embeddings.",
      "Similarity search that retrieves context and tracks source identifiers.",
      "A prompt that requests context-only answers and an explicit response when evidence is missing.",
      "LLM-as-a-judge tests, retry helpers, and out-of-context/ambiguous-query cases.",
    ],
    note: "A local-model learning project using rulebooks as a document corpus. Retrieval, prompts, and model-based evaluations are available in the public query and test code.",
    repo: "https://github.com/Uppen-Sharma/RAG_Project",
    evidence: {
      label: "Retrieval implementation",
      url: "https://github.com/Uppen-Sharma/RAG_Project/blob/main/query_data.py",
    },
  },
  {
    name: "JOBBEE API",
    type: "SRM internship · Applied backend learning",
    category: "Backend",
    summary: "Job search, geospatial filtering, and application uploads.",
    stack: "Node.js / Express / MongoDB / Mongoose / JWT",
    intro:
      "A job-platform REST API covering authentication, job discovery, applications, and administration. Built while studying backend development and extended through practical API workflows.",
    challenge:
      "Search endpoints must handle combinations of keywords, fields, filters, sorting, and pagination while respecting access rules.",
    workflow: [
      "Validate the authenticated request and the requested access level.",
      "Apply job-search criteria, geospatial filters, sorting and pagination through reusable API helpers.",
      "Return the matching records or process an authorized application upload.",
    ],
    decisions: [
      "Combining filters, sorting and pagination calls for reusable query helpers.",
      "Authentication, authorization and upload handling need their own validation paths.",
    ],
    contributions: [
      "Reusable API filtering for keyword search, comparisons, sorting, field selection, and pagination.",
      "Location-based job discovery and topic statistics endpoints.",
      "JWT authentication, password reset, and user/admin routes.",
      "Résumé uploads for job applications and a Postman collection documenting the API.",
    ],
    note: "Presented as applied backend learning. Public source and API documentation are available for inspection.",
    repo: "https://github.com/Uppen-Sharma/Jobbee-API",
    evidence: {
      label: "Query filtering implementation",
      url: "https://github.com/Uppen-Sharma/Jobbee-API/blob/main/utils/APIFilters.js",
    },
  },
  {
    name: "Live Streaming Platform",
    type: "Fimo internship · Main project",
    category: "Backend",
    summary: "Live playback, chat, recordings, and highlight clips.",
    stack: "Java / Spring Boot / MySQL / HLS / Nginx RTMP / FFmpeg",
    intro:
      "My main project during the Fimo internship: a live-streaming application bringing HLS playback together with chat, audience analytics, recordings and highlights, deployed on Linux. A separate Spring Kafka messaging application was a proof of concept.",
    challenge:
      "A streaming product has more than a video player: sessions, engagement data, playback delivery, and saved content all need to work together.",
    workflow: [
      "Receive the live stream through the OBS and Nginx RTMP workflow.",
      "Deliver HLS playback alongside Spring Boot session and engagement services.",
      "Support chat, recordings and highlights with MySQL-backed persistence.",
    ],
    decisions: [
      "Playback delivery, session data and engagement are different responsibilities.",
      "The streaming application was the main Fimo project; the Kafka messaging app was a separate POC.",
    ],
    contributions: [
      "HLS playback integrated with OBS, Nginx RTMP, FFmpeg, and Video.js.",
      "Spring Boot services and MySQL-backed models for sessions and engagement data.",
      "Highlight creation, tagging, reactions, comments, and real-time updates.",
      "Recording and quality-management components alongside the Thymeleaf frontend.",
    ],
    note: "Public code covers the playback and engagement features. Infrastructure settings and viewer data are kept private.",
    repo: "https://github.com/Uppen-Sharma/LiveStreamWebApp",
    evidence: {
      label: "Highlight service",
      url: "https://github.com/Uppen-Sharma/LiveStreamWebApp/blob/main/src/main/java/com/example/stream/service/HighlightService.java",
    },
  },
  {
    name: "Verified Commerce",
    type: "Java application · E-commerce",
    category: "Full stack",
    summary: "An online store with email verification and role-based access.",
    stack: "Java / Spring Boot / Thymeleaf / MySQL / SMTP",
    intro:
      "An online-store project combining product management with registration, email OTP verification, and separate customer/admin roles. The repository includes the Spring Boot implementation and frontend work.",
    challenge:
      "Registration, verification, and permissions need to form one coherent flow before a user can interact with store features.",
    workflow: [
      "Register the user and complete the email OTP verification flow.",
      "Apply customer/admin permissions to store actions.",
      "Use controllers and persistence models to manage products, carts and orders.",
    ],
    decisions: [
      "Verification status and role permissions are separate checks in an account flow.",
      "Resend and invalid-code paths are part of the verification experience.",
    ],
    contributions: [
      "Registration, OTP verification, and resend flows in the authentication controller.",
      "SMTP email integration and role-based Spring Security configuration.",
      "Product, cart, and order controllers with persistence models and repositories.",
      "Server-rendered store interfaces using Thymeleaf and MySQL-backed data.",
    ],
    note: "A practical Spring Boot commerce project focused on account verification, store workflows, and persistence.",
    repo: "https://github.com/Uppen-Sharma/VerificationBasedCRUD",
    evidence: {
      label: "Verification flow",
      url: "https://github.com/Uppen-Sharma/VerificationBasedCRUD/blob/main/src/main/java/com/example/crudstore/controller/AuthController.java",
    },
  },
  {
    name: "FastAPI Books",
    type: "SRM internship · API learning project",
    category: "Backend",
    summary:
      "Typed requests, validation, filtering, and explicit HTTP responses.",
    stack: "Python / FastAPI / Pydantic",
    intro:
      "A small books API showing the progression from dictionary-based endpoints to Pydantic request models and explicit validation.",
    challenge:
      "Even a small API should have predictable contracts for invalid requests and missing resources.",
    workflow: [
      "Receive a book request through a FastAPI endpoint.",
      "Validate fields, path/query parameters and missing-resource conditions.",
      "Return the explicit response or update the learning project's in-memory store.",
    ],
    decisions: [
      "Small APIs still need explicit validation and meaningful response codes.",
      "In-memory storage is appropriate to this exercise, not evidence of production persistence.",
    ],
    contributions: [
      "Create, read, update, and delete endpoints for books.",
      "Pydantic models and field, path, and query validation.",
      "Rating and publication-date filters with explicit response codes.",
      "Interactive API documentation through FastAPI.",
    ],
    note: "A focused learning project using in-memory storage to explore API contracts and validation.",
    repo: "https://github.com/Uppen-Sharma/Python-FASTApi",
    evidence: {
      label: "Validated endpoints",
      url: "https://github.com/Uppen-Sharma/Python-FASTApi/blob/main/books2.py",
    },
  },
  {
    name: "React Engineering Lab",
    type: "SRM internship · React learning collection",
    category: "Full stack",
    summary: "State management, component tests, and practical React patterns.",
    stack: "React / Vite / Redux Toolkit / Context API / Testing Library",
    intro:
      "A collection of focused React projects exploring component composition, shared state, API interactions, theme management, and frontend testing.",
    challenge:
      "Small, focused exercises make it easier to understand state transitions and test component behavior before applying those patterns to larger applications.",
    workflow: [
      "Build a focused interface around a specific React pattern.",
      "Compare local state, Context and Redux-based shared-state approaches.",
      "Exercise component behavior using the testing playground and apply lessons to larger applications.",
    ],
    decisions: [
      "A small exercise isolates a concept so state changes are easier to understand.",
      "These repositories are grouped as learning work, not presented as multiple shipped products.",
    ],
    contributions: [
      "Context-based shared state and theme switching.",
      "Redux exercises for predictable application state.",
      "Component tests and a dedicated testing playground.",
      "Book-library, API-interaction, and issue-tracking exercises.",
    ],
    note: "Grouped as a learning collection to distinguish exercises from complete product work.",
    repo: "https://github.com/Uppen-Sharma/React-Redux-and-Vite-Testing-Projects",
    evidence: {
      label: "Component test examples",
      url: "https://github.com/Uppen-Sharma/React-Redux-and-Vite-Testing-Projects/tree/main/Testing/src",
    },
  },
];
