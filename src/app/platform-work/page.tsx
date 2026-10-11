import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Production Platforms & Architecture",
  description:
    "High-concurrency distributed architectures, scalable web services, and production platforms engineered by Vishal Raghav, including MrManager and DigiVikreta.",
  alternates: {
    canonical: "/platform-work",
  },
  openGraph: {
    title: "Production Platforms & Architecture | Vishal Raghav",
    description:
      "Distributed architectures, latency reductions (+40%), and resilient systems engineered by Vishal Raghav.",
    url: "/platform-work",
  },
};

export default function PlatformWorkPage() {
  return (
    <div className="flex flex-col w-full relative min-h-[calc(100vh-14rem)] font-sans">
      {/* Architectural 36px Drafting Grid Background */}
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-40 dark:opacity-20"
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(203, 213, 225, 0.45) 1px, transparent 1px), linear-gradient(to bottom, rgba(203, 213, 225, 0.45) 1px, transparent 1px)',
          backgroundSize: '36px 36px'
        }}
      ></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 py-10 space-y-16">

        {/* Top Coordinate Bar & Header Section */}
        <header className="space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-2 border-b border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#e11d48] animate-pulse"></span>
              <span className="font-mono text-xs tracking-wider text-[#e11d48] uppercase font-semibold">
                PRODUCTION PLATFORMS // HIGH-CONCURRENCY ARCHITECTURE
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-4 font-mono text-xs text-slate-500 dark:text-slate-400">
              <span>REF: <span className="text-slate-900 dark:text-white font-semibold">VR-PLATFORM-WORK</span></span>
              <span className="text-slate-300 dark:text-slate-700">/</span>
              <span>LOC: <span className="text-slate-900 dark:text-white">CLOUD / DISTRIBUTED</span></span>
              <span className="text-slate-300 dark:text-slate-700">/</span>
              <span className="inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#e11d48]"></span>
                UPTIME: 99.98% SLA
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-2">
            <div className="lg:col-span-7 space-y-3">
              <div className="font-mono text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400">
                PORTFOLIO DOSSIER · SYSTEM RUNTIMES
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl text-slate-900 dark:text-white tracking-tight font-cursive">
                Platform Work
              </h1>
              <p className="text-[17px] text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
                Production web applications, high-concurrency client-facing platforms, and resilient frontend systems engineered for determinism, scale, and high-cadence business execution.
              </p>
            </div>
            <div className="lg:col-span-5 space-y-2 pt-2 lg:pt-0">
              <div className="flex items-center justify-between font-mono text-xs text-slate-500 dark:text-slate-400">
                <span className="text-[#e11d48] font-semibold uppercase tracking-wider">CORE DIRECTIVE</span>
                <span>DOC::README_V2</span>
              </div>
              <p className="text-[15px] text-slate-700 dark:text-slate-300 leading-relaxed italic">
                “Transitioning complex business logic into efficient, maintainable architectures with zero-bundle static shells, streaming data pipelines, and sub-millisecond DOM hydration.”
              </p>
              <div className="flex items-center justify-between font-mono text-xs text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-200 dark:border-slate-800">
                <span>COMPILATION: AOT DETERMINISTIC</span>
                <span className="text-[#e11d48] font-semibold">STATUS: DEPLOYED</span>
              </div>
            </div>
          </div>
        </header>

        {/* SECTION 01: Systems Overview & Telemetry */}
        <section className="space-y-6 pt-4 border-t border-slate-200 dark:border-slate-800">
          <div className="flex items-center justify-between pb-2">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-semibold text-[#e11d48]">01 //</span>
              <h2 className="font-mono text-xs uppercase tracking-wider text-slate-900 dark:text-white font-bold">SYSTEMS OVERVIEW &amp; ARCHITECTURAL PHILOSOPHY</h2>
            </div>
            <span className="font-mono text-xs text-slate-400 dark:text-slate-500">INDEX: TELEMETRY_MATRIX</span>
          </div>

          {/* Metrics Row: Pure Minimalist Typography */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-4 border-y border-slate-200 dark:border-slate-800">
            <div>
              <div className="font-mono text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-wider">DEVICES IN PROD</div>
              <div className="text-3xl text-slate-900 dark:text-white font-bold mt-1">2</div>
              <div className="font-mono text-xs text-slate-400 dark:text-slate-500 mt-0.5">Enterprise Platforms</div>
            </div>
            <div>
              <div className="font-mono text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-wider">INITIAL LOAD REDUCTION</div>
              <div className="text-3xl text-[#e11d48] font-bold mt-1">40%+</div>
              <div className="font-mono text-xs text-slate-400 dark:text-slate-500 mt-0.5">AOT Code Splitting</div>
            </div>
            <div>
              <div className="font-mono text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-wider">DOM HYDRATION</div>
              <div className="text-3xl text-slate-900 dark:text-white font-bold mt-1">&lt; 1.0ms</div>
              <div className="font-mono text-xs text-slate-400 dark:text-slate-500 mt-0.5">Selective Streaming</div>
            </div>
            <div>
              <div className="font-mono text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-wider">TYPE SURFACE INTEGRITY</div>
              <div className="text-3xl text-slate-900 dark:text-white font-bold mt-1">100%</div>
              <div className="font-mono text-xs text-slate-400 dark:text-slate-500 mt-0.5">End-to-End Type Safety</div>
            </div>
          </div>

          {/* Architectural Principles: Minimalist Text Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-2">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#e11d48]"></span>
                <h3 className="font-bold text-[15px] text-slate-900 dark:text-white">Distributed Frontend Services</h3>
              </div>
              <p className="text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed">
                Decoupling complex transactional modules into autonomous, cache-isolated client domains. Minimizing state leakages while scaling development velocity across engineering squads.
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#e11d48]"></span>
                <h3 className="font-bold text-[15px] text-slate-900 dark:text-white">Fault Isolation &amp; Boundaries</h3>
              </div>
              <p className="text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed">
                Tiered React error boundaries with exponential backoff REST telemetry. Runtime failure in a non-critical panel never cascades to disrupt core customer workflows or checkout pipelines.
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#e11d48]"></span>
                <h3 className="font-bold text-[15px] text-slate-900 dark:text-white">Deterministic UI Contracts</h3>
              </div>
              <p className="text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed">
                Enforcing strict TypeScript schemas between backend JSON payloads and presentation layers to eliminate null pointer exceptions and unhandled asynchronous mutations.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 02: Featured Platforms */}
        <section className="space-y-12 pt-4 border-t border-slate-200 dark:border-slate-800">
          <div className="flex items-center justify-between pb-2">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-semibold text-[#e11d48]">02 //</span>
              <h2 className="font-mono text-xs uppercase tracking-wider text-slate-900 dark:text-white font-bold">FEATURED PLATFORMS</h2>
            </div>
            <span className="font-mono text-xs text-slate-400 dark:text-slate-500">TOTAL ENTRIES: 02</span>
          </div>

          {/* Platform 1: MrManager (Clean Editorial Case Study) */}
          <article className="space-y-6 pb-10 border-b border-slate-200 dark:border-slate-800">
            <div className="flex flex-col lg:flex-row lg:items-baseline justify-between gap-2">
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">MrManager</h3>
                  <span className="font-mono text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider">ENTERPRISE MANAGEMENT PLATFORM</span>
                  <span className="font-mono text-xs text-[#e11d48] font-semibold uppercase tracking-wider">// PRODUCTION DEPLOYED</span>
                </div>
                <p className="text-[15px] text-slate-600 dark:text-slate-400">
                  High-concurrency resource governance suite, organizational workforce dispatch, and complex analytical workflows.
                </p>
              </div>
              <div className="flex flex-col lg:text-right font-mono text-xs shrink-0">
                <span className="text-slate-900 dark:text-white font-semibold">Frontend Developer &amp; Systems Architect</span>
                <span className="text-slate-400 dark:text-slate-500">Jan 2026 – Jul 2026 · 7 MOS</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-8 space-y-5">
                <div className="space-y-1.5">
                  <div className="font-mono text-[11px] uppercase tracking-wider text-[#e11d48] font-semibold">SCOPE &amp; ARCHITECTURAL REALIZATION</div>
                  <p className="text-[15px] text-slate-900 dark:text-slate-300 leading-relaxed">
                    Architected scalable, client-focused web applications translating complex business workflows into high-throughput technical outcomes. Developed modular, type-safe frontend component libraries backed by custom tokens, enforcing uncompromising UI quality standards across multi-tier user dashboards.
                  </p>
                </div>
                <div className="space-y-1.5">
                  <div className="font-mono text-[11px] uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold">INFRASTRUCTURE, RUNTIME &amp; CI/CD PIPELINES</div>
                  <p className="text-[15px] text-slate-600 dark:text-slate-400 leading-relaxed">
                    Engineered robust deployment pipelines leveraging Docker containerization and multi-stage automated build gates. Integrated resilient RESTful APIs using asynchronous queue handshakes, optimistic cache updates, and strict error boundaries to sustain continuous operator throughput under erratic network conditions.
                  </p>
                </div>
                <div className="space-y-1.5 pt-1">
                  <div className="font-mono text-[11px] uppercase tracking-wider text-slate-400 dark:text-slate-500">ENGINEERING STACK</div>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs">
                    <span className="font-semibold text-blue-600 dark:text-blue-400">Next.js</span>
                    <span className="font-semibold text-blue-600 dark:text-blue-400">TypeScript</span>
                    <span className="font-semibold text-blue-600 dark:text-blue-400">React</span>
                    <span className="font-semibold text-blue-600 dark:text-blue-400">Tailwind CSS</span>
                    <span className="font-semibold text-blue-600 dark:text-blue-400">Docker</span>
                    <span className="font-semibold text-blue-600 dark:text-blue-400">Bun</span>
                    <span className="text-slate-700 dark:text-slate-300">CI/CD Automation</span>
                    <span className="text-slate-700 dark:text-slate-300">RESTful APIs</span>
                  </div>
                </div>
              </div>

              {/* Verified Impact Typography */}
              <div className="lg:col-span-4 space-y-4 pt-1">
                <div className="font-mono text-[11px] uppercase tracking-wider text-slate-900 dark:text-white font-semibold flex items-center justify-between pb-1 border-b border-slate-200 dark:border-slate-800">
                  <span>VERIFIED IMPACT</span>
                  <span className="material-symbols-outlined text-[#e11d48] text-sm">trending_up</span>
                </div>
                <div className="space-y-3 font-mono text-xs">
                  <div>
                    <span className="text-lg text-[#e11d48] font-bold">40%+</span>
                    <span className="text-slate-900 dark:text-white font-medium ml-2">Initial Load Reduction</span>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Targeted bundle tree-shaking &amp; asynchronous route prefetching.</p>
                  </div>
                  <div>
                    <span className="text-lg text-slate-900 dark:text-white font-bold">0 ms</span>
                    <span className="text-slate-900 dark:text-white font-medium ml-2">Deployment Downtime</span>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Docker multi-stage blue/green rollouts via unified registries.</p>
                  </div>
                  <div>
                    <span className="text-lg text-slate-900 dark:text-white font-bold">100%</span>
                    <span className="text-slate-900 dark:text-white font-medium ml-2">Design Token Fidelity</span>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Zero UI regressions recorded across cross-department sprints.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Minimal Monospace ASCII Architecture Flowline */}
            <div className="pt-2 font-mono text-xs text-slate-400 dark:text-slate-500 border-t border-slate-200 dark:border-slate-800">
              <div className="flex items-center justify-between mb-1.5">
                <span>DATA-FLOW SCHEMATIC: MRMANAGER EDGE TOPOLOGY</span>
                <span>SPEC: RFC-822</span>
              </div>
              <div className="overflow-x-auto py-1 font-mono text-[11px] text-slate-900 dark:text-white">
                <pre className="font-mono text-[11px] leading-relaxed text-slate-600 dark:text-slate-400">[Client Shell: React / Next.js] ---&gt; (Sub-ms Hydrate) ---&gt; [Docker Sandbox: Bun Edge] ---&gt; (Async Proxy) ---&gt; [REST Gateway: DTOs] ---&gt; [Enterprise Store: Transactional DB]</pre>
              </div>
            </div>
          </article>

          {/* Platform 2: DigiVikreta (Clean Editorial Case Study) */}
          <article className="space-y-6">
            <div className="flex flex-col lg:flex-row lg:items-baseline justify-between gap-2">
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">DigiVikreta</h3>
                  <span className="font-mono text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider">COMMERCE &amp; CLIENT SUITE</span>
                  <span className="font-mono text-xs text-[#e11d48] font-semibold uppercase tracking-wider">// PRODUCTION DEPLOYED</span>
                </div>
                <p className="text-[15px] text-slate-600 dark:text-slate-400">
                  High-concurrency merchant catalog interface, dynamic pricing sync, and cross-browser distributor console.
                </p>
              </div>
              <div className="flex flex-col lg:text-right font-mono text-xs shrink-0">
                <span className="text-slate-900 dark:text-white font-semibold">Frontend Developer I</span>
                <span className="text-slate-400 dark:text-slate-500">Sep 2024 – Sep 2025 · 1 YR 1 MO</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-8 space-y-5">
                <div className="space-y-1.5">
                  <div className="font-mono text-[11px] uppercase tracking-wider text-[#e11d48] font-semibold">SCOPE &amp; CENTRALIZED STATE ARCHITECTURE</div>
                  <p className="text-[15px] text-slate-900 dark:text-slate-300 leading-relaxed">
                    Constructed responsive, cross-browser web solutions adapting autonomously to evolving business operations and client technology requirements. Integrated multi-endpoint REST APIs through centralized state governance with Redux Toolkit, facilitating low-latency data synchronization and fluid visual inventory dashboards.
                  </p>
                </div>
                <div className="space-y-1.5">
                  <div className="font-mono text-[11px] uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold">PERFORMANCE TUNING &amp; CORE WEB VITALS</div>
                  <p className="text-[15px] text-slate-600 dark:text-slate-400 leading-relaxed">
                    Applied meticulous browser rendering optimizations, resolving expensive reflow bottlenecks, memory leaks in infinite scrolling components, and large payload serialization delays. Improved Core Web Vitals (INP, LCP, CLS) through memoized selectors and debounced async actions.
                  </p>
                </div>
                <div className="space-y-1.5 pt-1">
                  <div className="font-mono text-[11px] uppercase tracking-wider text-slate-400 dark:text-slate-500">ENGINEERING STACK</div>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs">
                    <span className="font-semibold text-blue-600 dark:text-blue-400">React</span>
                    <span className="font-semibold text-blue-600 dark:text-blue-400">Redux Toolkit</span>
                    <span className="font-semibold text-blue-600 dark:text-blue-400">Tailwind CSS</span>
                    <span className="font-semibold text-blue-600 dark:text-blue-400">JavaScript (ES6+)</span>
                    <span className="text-slate-700 dark:text-slate-300">Axios</span>
                    <span className="text-slate-700 dark:text-slate-300">REST APIs</span>
                    <span className="text-slate-700 dark:text-slate-300">Web Vitals</span>
                  </div>
                </div>
              </div>

              {/* Verified Impact Typography */}
              <div className="lg:col-span-4 space-y-4 pt-1">
                <div className="font-mono text-[11px] uppercase tracking-wider text-slate-900 dark:text-white font-semibold flex items-center justify-between pb-1 border-b border-slate-200 dark:border-slate-800">
                  <span>VERIFIED IMPACT</span>
                  <span className="material-symbols-outlined text-[#e11d48] text-sm">bar_chart</span>
                </div>
                <div className="space-y-3 font-mono text-xs">
                  <div>
                    <span className="text-lg text-[#e11d48] font-bold">&lt; 100ms</span>
                    <span className="text-slate-900 dark:text-white font-medium ml-2">State Transition Latency</span>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Predictable Redux Toolkit slices with zero redundant DOM recalculations.</p>
                  </div>
                  <div>
                    <span className="text-lg text-slate-900 dark:text-white font-bold">100%</span>
                    <span className="text-slate-900 dark:text-white font-medium ml-2">Cross-Browser Parity</span>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Fluid responsiveness verified across Chromium, Gecko, and WebKit targets.</p>
                  </div>
                  <div>
                    <span className="text-lg text-slate-900 dark:text-white font-bold">95+</span>
                    <span className="text-slate-900 dark:text-white font-medium ml-2">Performance Score</span>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Sustained Lighthouse performance audit score under heavy catalog loads.</p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </section>

        {/* SECTION 03: Architectural Patterns & Runtime Specifications */}
        <section className="space-y-6 pt-4 border-t border-slate-200 dark:border-slate-800">
          <div className="flex items-center justify-between pb-2">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-semibold text-[#e11d48]">03 //</span>
              <h2 className="font-mono text-xs uppercase tracking-wider text-slate-900 dark:text-white font-bold">RUNTIME &amp; DEVOPS PRACTICES</h2>
            </div>
            <span className="font-mono text-xs text-slate-400 dark:text-slate-500">SPECIFICATION REGISTER</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pattern 01: Typography Only */}
            <div className="space-y-3">
              <div className="flex items-center justify-between font-mono text-xs">
                <span className="text-[#e11d48] font-semibold tracking-wider">PATTERN 01</span>
                <span className="text-slate-400 dark:text-slate-500 tracking-wider">EXEC_ENV::CLIENT</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Decoupled State &amp; Zero-Bundle Shells</h3>
              <p className="text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed">
                Leveraging React Server Components (RSC) and progressive hydration to deliver functional HTML immediately. Dynamic modules are deferred until user intent is detected, completely eliminating hydration freezing on lower-power mobile hardware.
              </p>
              <div className="pt-2 flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs border-t border-slate-200 dark:border-slate-800">
                <span className="font-semibold text-blue-600 dark:text-blue-400">Next.js RSC</span>
                <span className="text-slate-600 dark:text-slate-400">Minimal Main-Thread Blocking</span>
                <span className="text-slate-600 dark:text-slate-400">Streaming SSR</span>
              </div>
            </div>

            {/* Pattern 02: Typography Only */}
            <div className="space-y-3">
              <div className="flex items-center justify-between font-mono text-xs">
                <span className="text-[#e11d48] font-semibold tracking-wider">PATTERN 02</span>
                <span className="text-slate-400 dark:text-slate-500 tracking-wider">EXEC_ENV::INFRA</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Containerized CI/CD &amp; Fast Tooling</h3>
              <p className="text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed">
                Standardizing local compilation and remote packaging on the high-speed Bun runtime. Production images are constructed using multi-stage Docker builds, maintaining slim image sizes with deterministic artifact hashes and automated lint/test validation gates.
              </p>
              <div className="pt-2 flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs border-t border-slate-200 dark:border-slate-800">
                <span className="font-semibold text-blue-600 dark:text-blue-400">Bun Runtime</span>
                <span className="font-semibold text-blue-600 dark:text-blue-400">Docker Builds</span>
                <span className="text-slate-600 dark:text-slate-400">Automated CI Gates</span>
              </div>
            </div>

            {/* Pattern 03: Typography Only */}
            <div className="space-y-3">
              <div className="flex items-center justify-between font-mono text-xs">
                <span className="text-[#e11d48] font-semibold tracking-wider">PATTERN 03</span>
                <span className="text-slate-400 dark:text-slate-500 tracking-wider">EXEC_ENV::REST</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Resilient State &amp; Error Boundaries</h3>
              <p className="text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed">
                Encapsulating unstable external REST dependencies with declarative error boundaries and normalized Redux Toolkit slices. Stale-while-revalidate data strategies guarantee that client operators retain interactive read-state during intermittent gateway interruptions.
              </p>
              <div className="pt-2 flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs border-t border-slate-200 dark:border-slate-800">
                <span className="font-semibold text-blue-600 dark:text-blue-400">Redux Toolkit</span>
                <span className="text-slate-600 dark:text-slate-400">Graceful Degrades</span>
                <span className="text-slate-600 dark:text-slate-400">Defensive Axios</span>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Telemetry & Navigation Bar: Clean Text Line */}
        <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#e11d48]"></span>
            <span className="text-slate-900 dark:text-white font-semibold uppercase">VR_ARCH_REGISTRY // PLATFORMS ACTIVE</span>
          </div>
          <div className="flex items-center gap-6">
            <span>VERSION: 2026.4.1</span>
            <Link className="flex items-center gap-1.5 text-slate-900 dark:text-white hover:text-[#e11d48] transition-colors font-semibold uppercase" href="/#architecture">
              EXPLORE ARCHITECTURE
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
