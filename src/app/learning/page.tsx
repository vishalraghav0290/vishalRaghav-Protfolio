"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const PAID_COURSES = [
  {
    year: "2024-2025",
    author: "Apna College / Industry Mentors",
    status: "STATUS: COMPLETED",
    statusClasses: "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400",
    title: "Alpha Batch: Advanced Data Structures, Algorithms & Scalability Foundations",
    desc: "Deep dive into Data Structures, Algorithms, System Design fundamentals, and core engineering problem solving. Intensive rigorous rigor covering edge-case proofs, asymptotic runtime bounds, and dynamic memory safety.",
    takeaways: ["Time complexity mastery", "Graph algorithms", "Dynamic Programming", "Scalability foundations"],
    tags: ["#algorithms"],
    code: "BATCH_ALPHA_01"
  },
  {
    year: "2025-2026",
    author: "Piyush Garg & Hitesh Choudhary",
    status: "STATUS: MASTERED / ONGOING LABS",
    statusClasses: "bg-rose-50 dark:bg-rose-900/30 text-[#e11d48] border border-rose-100 dark:border-rose-800 font-semibold",
    title: "GenAI & AI Engineering Cohort: Production Agentic Workflows & Vector Architectures",
    desc: "Large Language Models, RAG pipelines, Vector Databases (Pinecone/Chroma), LangChain, Ollama, fine-tuning, and multi-agent systems. Hands-on deployment of deterministic state engines over non-deterministic stochastic model completions.",
    takeaways: ["Custom embeddings", "KV cache management", "MCP protocol", "Streaming token buffers"],
    tags: ["#genai", "#rag"],
    code: "COHORT_AI_DEPLOY"
  },
  {
    year: "2024-2025",
    author: "Harkirat Singh (100xDevs)",
    status: "STATUS: COMPLETED",
    statusClasses: "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400",
    title: "Full Stack Web Dev & System Architecture Masterclass (0-100 Cohort)",
    desc: "End-to-end full stack with Next.js, TypeScript, Docker, Kubernetes, CI/CD, monorepos, and WebSockets. Architecture patterns for low-latency pub/sub, horizontal cluster autoscaling, and zero-downtime database migrations.",
    takeaways: ["Monorepo architecture", "Turborepo", "Microservices comms", "Redis queue pipelines"],
    tags: ["#devops", "#architecture"],
    code: "100X_DEV_CORP"
  }
];

const SERIES = [
  {
    author: "Hitesh Choudhary (Chai aur Code)",
    notes: "18 NOTES",
    title: "Complete Backend Development Series",
    desc: "Node.js, Express, MongoDB, aggregation pipelines, JWT auth, file upload microservices, and API error architectures. Robust handling of asynchronous express midpoints and database session transactions.",
    tags: ["#nodejs", "#express", "#mongodb", "#jwt"]
  },
  {
    author: "Hitesh Choudhary",
    notes: "22 NOTES",
    title: "Complete Frontend Engineering & Modern React",
    desc: "Deep React reconciliation, virtual DOM, custom hooks, state management patterns, and Next.js App Router internals. Focus on render cycle audits, memoization guarantees, and layout thrashing avoidance.",
    tags: ["#react", "#nextjs", "#fiber", "#performance"]
  },
  {
    author: "Piyush Garg",
    notes: "12 NOTES",
    title: "Docker & DevOps from Scratch",
    desc: "Containerization, multi-stage Dockerfiles, Docker Compose, bridge vs host networking, volume mounts, and automated CI pipelines. Microservice orchestration without heavy cluster overhead.",
    tags: ["#docker", "#devops", "#containers", "#ci-cd"]
  },
  {
    author: "Code Gyan",
    notes: "16 NOTES",
    title: "Core JavaScript & Web Fundamentals",
    desc: "Event loop, execution context, closures, prototypes, microtask queues, and memory leaks. V8 engine compilation phases from Ignition bytecode to TurboFan optimized machine code.",
    tags: ["#javascript", "#v8", "#eventloop", "#closures"]
  }
];

const SPECS = [
  {
    org: "TC39 / WHATWG SPECIFICATION",
    rev: "REV 2025/2026",
    title: "JavaScript Spec (ECMAScript 2025/2026)",
    desc: "Event Loop, Microtask Queue, ArrayBuffers, V8 Garbage Collection, WeakMaps, and asynchronous iterators. In-depth mental models on shared memory atomics and SharedArrayBuffer synchronization primitives."
  },
  {
    org: "TIANGOLO / STARLETTE CORE",
    rev: "ASGI 3.0",
    title: "FastAPI & Modern Python Asynchronous Runtimes",
    desc: "Starlette, Pydantic v2 schemas, ASGI concurrency, dependency injection, and asynchronous background tasks. Event loop starvation mitigation when bridging synchronous legacy libraries."
  },
  {
    org: "PRISMA • DRIZZLE • SQLALCHEMY",
    rev: "DIALECT SPEC",
    title: "ORMs & Database Drivers Performance Benchmarks",
    desc: "N+1 query problem, connection pooling, raw SQL escape hatches, schema migrations, and indexing strategies. Analyzing query planners against generated query plans versus handcrafted queries."
  },
  {
    org: "VERCEL / REACT CORE TEAM",
    rev: "RSC WIRE v2",
    title: "Next.js App Router & Server Actions Architecture",
    desc: "React Server Components (RSC) wire format, progressive hydration, static generation vs dynamic rendering, and streaming shells. Minimizing client bundle footprints while maintaining high-fidelity interactive islands."
  }
];

const LOGS_2026 = [
  { date: "Sep 09", title: "Building Zero-Bundle Static Shells with React Server Components", author: "Harkirat Singh", tags: ["#nextjs", "#architecture"] },
  { date: "Aug 24", title: "Why ORMs Hide Costly Database Joins and When to Write Raw SQL", author: "Hitesh Choudhary", tags: ["#orm", "#databases"] },
  { date: "Jul 18", title: "How Vector Embeddings and RAG Architecture Actually Work Under the Hood", author: "Piyush Garg & Hitesh", tags: ["#genai", "#rag"] },
  { date: "May 30", title: "Demystifying Event Loop Microtask Starvation in Node.js Runtimes", author: "Code Gyan", tags: ["#javascript", "#internals"] },
  { date: "Apr 12", title: "Deploying Multi-Stage Docker Builds on High-Performance Bun Runtime", author: "Piyush Garg", tags: ["#docker", "#bun"] }
];

const LOGS_2025 = [
  { date: "Nov 14", title: "FastAPI Concurrency: Thread Pools vs True Async Event Loops", author: "Official Docs", tags: ["#python", "#fastapi"] },
  { date: "Sep 28", title: "State Governance with Redux Toolkit and Reselect Memoization", author: "Hitesh Choudhary", tags: ["#react", "#redux"] },
  { date: "Aug 05", title: "Implementing Conflict-Free Replicated Data Types (CRDTs) in Real-time WebSockets", author: "Harkirat Singh", tags: ["#distributed", "#websockets"] },
  { date: "Jun 19", title: "Separating Compute From Storage Enables Serverless Database Pay-Per-Use", author: "Architectural Notes", tags: ["#databases", "#cloud"] },
  { date: "Apr 22", title: "Crashing Immediately on Startup Prevents Late-Run Fixable Issues", author: "Systems Internals", tags: ["#reliability", "#patterns"] }
];

const TABS = [
  { id: 'all', label: 'All (148)' },
  { id: 'courses', label: 'Paid Courses (8)' },
  { id: 'series', label: 'Series & Playlists (14)' },
  { id: 'docs', label: 'Documentation (36)' },
  { id: 'logs', label: 'Video Logs (48)' }
];

export default function LearningPage() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCourses = PAID_COURSES.filter(course => 
    (activeTab === 'all' || activeTab === 'courses') &&
    (course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
     course.desc.toLowerCase().includes(searchQuery.toLowerCase()) || 
     course.author.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const filteredSeries = SERIES.filter(series => 
    (activeTab === 'all' || activeTab === 'series') &&
    (series.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
     series.desc.toLowerCase().includes(searchQuery.toLowerCase()) || 
     series.author.toLowerCase().includes(searchQuery.toLowerCase()))
  );
  
  const filteredSpecs = SPECS.filter(spec => 
    (activeTab === 'all' || activeTab === 'docs') &&
    (spec.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
     spec.desc.toLowerCase().includes(searchQuery.toLowerCase()) || 
     spec.org.toLowerCase().includes(searchQuery.toLowerCase()))
  );
  
  const filteredLogs2026 = LOGS_2026.filter(log => 
    (activeTab === 'all' || activeTab === 'logs') &&
    (log.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
     log.author.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const filteredLogs2025 = LOGS_2025.filter(log => 
    (activeTab === 'all' || activeTab === 'logs') &&
    (log.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
     log.author.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="flex flex-col w-full relative min-h-[calc(100vh-14rem)] font-sans">
      {/* Blueprint Grid Overlay */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 opacity-40 dark:opacity-20" 
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(203, 213, 225, 0.45) 1px, transparent 1px), linear-gradient(to bottom, rgba(203, 213, 225, 0.45) 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }}
      ></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-10 w-full flex flex-col gap-12">
        
        {/* HERO / HEADER */}
        <header className="flex flex-col gap-6 pt-4 border-b border-slate-200 dark:border-slate-800 pb-10">
          <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4">
            <div className="flex items-baseline gap-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl text-slate-900 dark:text-white tracking-tight font-bold">Learning &amp; Notes</h1>
              <span className="font-mono text-sm text-slate-500 dark:text-slate-400">(148 Entries)</span>
            </div>
          </div>
          
          <p className="text-[17px] text-slate-600 dark:text-slate-400 max-w-4xl leading-relaxed">
            Concise engineering takeaways, course breakdowns, deep-dive video logs, and documentation notes across systems architecture, full-stack development, and AI engineering.
          </p>

          {/* Category Filter Pills & Search */}
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 pt-4">
            {/* Filter Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 lg:pb-0 scrollbar-none font-mono text-xs">
              {TABS.map(tab => (
                <button 
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3 py-1.5 rounded shrink-0 transition-colors ${
                    activeTab === tab.id 
                      ? 'bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900' 
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                  type="button"
                >
                  {tab.label}
                </button>
              ))}
            </div>
            {/* Search Bar */}
            <div className="relative min-w-[280px] lg:w-80 shrink-0">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[18px] text-slate-400">search</span>
              <input 
                className="w-full pl-9 pr-4 py-1.5 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-mono text-xs border border-slate-200 dark:border-slate-800 focus:border-slate-400 dark:focus:border-slate-500 focus:outline-none transition-colors rounded" 
                placeholder="Search takeaways, creators... [⌘K]" 
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </header>

        {/* Dynamic Content Rendering */}
        {filteredCourses.length === 0 && filteredSeries.length === 0 && filteredSpecs.length === 0 && filteredLogs2026.length === 0 && filteredLogs2025.length === 0 && (
          <div className="py-20 text-center font-mono text-slate-500">
            No entries found matching "{searchQuery}"
          </div>
        )}

        {/* SECTION 1: PAID COURSES & INTENSIVE BATCHES */}
        {filteredCourses.length > 0 && (
          <section className="flex flex-col gap-4">
            <div className="flex items-baseline justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-[#e11d48] font-semibold tracking-wider">01.0 // PAID COURSES &amp; INTENSIVE BATCHES</span>
                <span className="font-mono text-[10px] text-slate-500 dark:text-slate-400">[{PAID_COURSES.length} CERTIFIED TRACKS]</span>
              </div>
              <span className="font-mono text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-wider">VERIFIED ENROLLMENT</span>
            </div>
            
            <div className="flex flex-col divide-y divide-slate-100 dark:divide-slate-800">
              {filteredCourses.map((course, idx) => (
                <article key={idx} className="py-5 flex flex-col lg:flex-row lg:items-start justify-between gap-4 group">
                  <div className="flex-1 flex flex-col gap-2">
                    <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
                      <span className="text-[#e11d48]">{course.year}</span>
                      <span className="text-slate-300 dark:text-slate-700">•</span>
                      <span className="text-slate-900 dark:text-white font-semibold">{course.author}</span>
                      <span className="text-slate-300 dark:text-slate-700">•</span>
                      <span className={`px-1.5 py-0.5 rounded text-[10px] ${course.statusClasses}`}>{course.status}</span>
                    </div>
                    <a className="text-[17px] font-bold text-blue-600 dark:text-blue-400 hover:underline underline-offset-4 tracking-tight transition-colors" href="#">
                      {course.title}
                    </a>
                    <p className="text-[14px] text-slate-600 dark:text-slate-400 max-w-4xl leading-relaxed">
                      {course.desc}
                    </p>
                    <div className="flex flex-wrap items-center gap-3 pt-1 font-mono text-[11px]">
                      <span className="text-[#e11d48] font-semibold">Key Takeaways:</span>
                      {course.takeaways.map((takeaway, tIdx) => (
                        <React.Fragment key={tIdx}>
                          <span className="text-slate-600 dark:text-slate-400">{takeaway}</span>
                          {tIdx < course.takeaways.length - 1 && <span className="text-slate-300 dark:text-slate-700">/</span>}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                  <div className="flex lg:flex-col items-center lg:items-end justify-between gap-2 shrink-0 font-mono text-[10px]">
                    <span className="text-[#e11d48]">{course.tags.join(" ")}</span>
                    <span className="text-slate-400">{course.code}</span>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* SECTION 2: CURATED SERIES & PLAYLISTS */}
        {filteredSeries.length > 0 && (
          <section className="flex flex-col gap-4">
            <div className="flex items-baseline justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-[#e11d48] font-semibold tracking-wider">02.0 // CURATED SERIES &amp; PLAYLISTS</span>
                <span className="font-mono text-[10px] text-slate-500 dark:text-slate-400">[{SERIES.length} TRACKS]</span>
              </div>
              <span className="font-mono text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-wider">DEEP SYLLABUS DRILLS</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 pt-2">
              {filteredSeries.map((series, idx) => (
                <article key={idx} className="flex flex-col gap-2 pb-6 border-b border-slate-100 dark:border-slate-800/60">
                  <div className="flex items-center justify-between font-mono text-xs">
                    <span className="text-slate-900 dark:text-white font-semibold">{series.author}</span>
                    <span className="text-slate-400">{series.notes}</span>
                  </div>
                  <a className="text-[16px] font-bold text-blue-600 dark:text-blue-400 hover:underline transition-colors" href="#">
                    {series.title}
                  </a>
                  <p className="text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed">
                    {series.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1 font-mono text-[10px] text-[#e11d48]">
                    {series.tags.map(tag => <span key={tag}>{tag}</span>)}
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* SECTION 3: DOCUMENTATION & REFERENCE SPECS */}
        {filteredSpecs.length > 0 && (
          <section className="flex flex-col gap-4">
            <div className="flex items-baseline justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-[#e11d48] font-semibold tracking-wider">03.0 // DOCUMENTATION &amp; REFERENCE SPECS</span>
                <span className="font-mono text-[10px] text-slate-500 dark:text-slate-400">[{SPECS.length} SPEC AUDITS]</span>
              </div>
              <span className="font-mono text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-wider">OFFICIAL PROTOCOL REVIEWS</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 pt-2">
              {filteredSpecs.map((spec, idx) => (
                <div key={idx} className="flex flex-col gap-1.5 pb-4 border-b border-slate-100 dark:border-slate-800/60">
                  <div className="flex items-center justify-between font-mono text-[10px]">
                    <span className="text-slate-900 dark:text-white font-semibold uppercase">{spec.org}</span>
                    <span className="text-[#e11d48]">{spec.rev}</span>
                  </div>
                  <a className="text-[15px] font-bold text-blue-600 dark:text-blue-400 hover:underline transition-colors" href="#">
                    {spec.title}
                  </a>
                  <p className="text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed">
                    {spec.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* SECTION 4: CHRONOLOGICAL TAKEAWAYS & VIDEO LOG */}
        {(filteredLogs2026.length > 0 || filteredLogs2025.length > 0) && (
          <section className="flex flex-col gap-8">
            <div className="flex items-baseline justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-[#e11d48] font-semibold tracking-wider">04.0 // CHRONOLOGICAL TAKEAWAYS &amp; VIDEO LOG</span>
                <span className="font-mono text-[10px] text-slate-500 dark:text-slate-400">[REVERSE TEMPORAL ARCHIVE]</span>
              </div>
              <span className="font-mono text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-wider">SHOWING: 2026 &amp; 2025 HIGHLIGHTS</span>
            </div>

            {/* YEAR 2026 */}
            {filteredLogs2026.length > 0 && (
              <div className="flex flex-col gap-4">
                <div className="flex items-baseline gap-3 border-b border-slate-100 dark:border-slate-800/60 pb-2">
                  <h2 className="text-2xl text-slate-900 dark:text-white font-bold font-mono">2026</h2>
                  <span className="font-mono text-xs text-slate-500 dark:text-slate-400">({LOGS_2026.length} Entries Indexed)</span>
                </div>
                <ul className="flex flex-col divide-y divide-slate-100 dark:divide-slate-800/60">
                  {filteredLogs2026.map((log, idx) => (
                    <li key={idx} className="py-3 flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6">
                      <div className="font-mono text-xs text-[#e11d48] shrink-0 w-20">{log.date}</div>
                      <div className="flex-1 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                        <a className="text-[15px] text-blue-600 dark:text-blue-400 hover:underline transition-colors font-medium" href="#">
                          {log.title}
                        </a>
                        <div className="flex flex-wrap items-center gap-2 shrink-0">
                          <span className="font-mono text-[10px] text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">{log.author}</span>
                          {log.tags.map(tag => (
                            <span key={tag} className="font-mono text-[10px] text-slate-400">{tag}</span>
                          ))}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* YEAR 2025 */}
            {filteredLogs2025.length > 0 && (
              <div className="flex flex-col gap-4">
                <div className="flex items-baseline gap-3 border-b border-slate-100 dark:border-slate-800/60 pb-2">
                  <h2 className="text-2xl text-slate-900 dark:text-white font-bold font-mono">2025</h2>
                  <span className="font-mono text-xs text-slate-500 dark:text-slate-400">({LOGS_2025.length} Entries Indexed)</span>
                </div>
                <ul className="flex flex-col divide-y divide-slate-100 dark:divide-slate-800/60">
                  {filteredLogs2025.map((log, idx) => (
                    <li key={idx} className="py-3 flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6">
                      <div className="font-mono text-xs text-[#e11d48] shrink-0 w-20">{log.date}</div>
                      <div className="flex-1 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                        <a className="text-[15px] text-blue-600 dark:text-blue-400 hover:underline transition-colors font-medium" href="#">
                          {log.title}
                        </a>
                        <div className="flex flex-wrap items-center gap-2 shrink-0">
                          <span className="font-mono text-[10px] text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">{log.author}</span>
                          {log.tags.map(tag => (
                            <span key={tag} className="font-mono text-[10px] text-slate-400">{tag}</span>
                          ))}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Pagination / More Log Link */}
            {activeTab === 'all' && searchQuery === '' && (
              <div className="flex items-center justify-between border-t border-slate-200 dark:border-slate-800 pt-6 pb-12 font-mono">
                <span className="text-xs text-slate-500 dark:text-slate-400">PAGE 01 / 15 • 138 ENTRIES REMAINING IN COLD ARCHIVE</span>
                <button className="inline-flex items-center gap-2 px-4 py-2 border border-slate-300 dark:border-slate-700 hover:border-slate-900 dark:hover:border-slate-300 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-xs transition-colors rounded-md" type="button">
                  <span>LOAD OLDER ARCHIVES (2024 - 2023)</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_downward</span>
                </button>
              </div>
            )}
          </section>
        )}
      </div>
    </div>
  );
}
