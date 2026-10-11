"use client";
import React, { useState } from 'react';

export default function ResumePage() {
  const [copied, setCopied] = useState(false);

  const copyPlaintextCV = () => {
    const plaintext = `VISHAL RAGHAV
Software Development Engineer — Frontend, Backend & AI-Engineer
Jaipur, Rajasthan | vishalraghav0290@gmail.com | +919536319210
LinkedIn: linkedin.com/in/vishal-raghav-dev
GitHub: github.com/vishalraghav0290

SUMMARY
Solutions-driven developer with an ownership mindset building scalable, client-focused web applications. Proven ability to translate complex business requirements into actionable technical outcomes, optimize rendering performance, and collaborate in Agile environments to deliver high-quality software.

KEY SKILLS
• Programming Languages: JavaScript (ES6+), TypeScript, SQL, Python
• Frontend Frameworks: React.js, Next.js, HTML5, CSS3, Tailwind CSS, Responsive Design
• State & Data Handling: Redux Toolkit, Context API, RESTful APIs, Axios, JSON
• DevOps & Development Tools: Git, GitHub, Docker, CI/CD Pipelines, Postman, Bun, Linux/macOS
• Core Competencies & SDLC: Agile/Scrum, Problem-Solving, Unit Testing, Data Structures & Algorithms

EXPERIENCE
MrManager | Remote (Jan 2026 – Jul 2026)
Frontend Developer
• Architected scalable, client-focused web applications using Next.js and TypeScript, translating business requirements into technical outcomes in an Agile team environment.
• Developed modular, type-safe frontend component libraries with an ownership mindset, streamlining release cycles across sprints and maintaining strict UI quality standards.
• Managed deployment priorities by integrating Docker containerization and CI/CD pipelines, ensuring consistent, reliable automated build processes.
• Engineered robust RESTful API integrations utilizing strong analytical skills, implementing asynchronous data handling and error boundaries for seamless client experiences.

DigiVikreta | Remote (Sep 2024 – Sep 2025)
Frontend Developer I
• Built responsive, cross-browser web solutions using React and Tailwind CSS, adapting independently to evolving business and technology needs.
• Integrated complex REST APIs and centralized state management via Redux Toolkit, enabling dynamic, accurate data visualization for end-users.
• Optimized frontend rendering performance with high attention to detail, improving core web vitals and reducing initial page load times through targeted code-level optimizations.

Internshala | Remote (Aug 2024 – Feb 2025)
Student Partner / Campus Ambassador
• Executed cross-functional campus outreach campaigns utilizing strong communication skills, driving registrations through targeted, data-backed strategies.

APPLIED PROJECTS
• FlyingAero – Real-Time Flight Vector Graphics & Geospatial Tracking
  Implementation of MapLibre GL integration with deck.gl library for smooth visualization of flight paths in real time, with failovers between OpenSky and ADS-B.
• NexBoard – Scalable Management Dashboard
  Architected a client-focused data dashboard using Next.js and TypeScript, translating complex workflow requirements into intuitive data visualization flows.
• Velocity – 3D Product Visualization Platform
  Engineered a high-fidelity 3D web platform using React and Three.js, delivering smooth, high-performance rendering via optimized GLTF assets and custom shaders.

EDUCATION
• Manipal University Jaipur — Master of Computer Applications (MCA) | CGPA: 7.1
• Mangalayatan University — Bachelor of Computer Applications (BCA) | CGPA: 7.5`;

    navigator.clipboard.writeText(plaintext).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }).catch(err => {
      console.error('Copy failed', err);
    });
  };

  return (
    <div className="flex flex-col w-full relative min-h-screen font-sans">
      <div className="max-w-5xl mx-auto w-full px-4 sm:px-8 py-10 flex flex-col gap-8">



        {/* Main Editorial Dossier Canvas */}
        <div className="bg-transparent flex flex-col gap-12 relative" id="resumeDossier">

          {/* Resume Header Section */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div className="flex flex-col gap-2 max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs tracking-widest text-[#e11d48] uppercase">Open for Opportunities</span>
                <span className="text-slate-300 dark:text-slate-600 text-xs">|</span>
                <span className="font-mono text-xs text-slate-500 dark:text-slate-400">Jaipur, Rajasthan | Remote</span>
              </div>
              <h1 className="text-4xl sm:text-6xl text-slate-900 dark:text-white tracking-tight font-bold">Vishal Raghav</h1>
              <p className="text-lg sm:text-xl text-blue-600 dark:text-blue-400 font-medium">
                Software Development Engineer — <span className="text-slate-600 dark:text-slate-400 font-normal text-base">Frontend, Backend & AI-Engineer</span>
              </p>
            </div>
            <div className="flex flex-col gap-1.5 font-mono text-xs text-slate-600 dark:text-slate-400 pt-2 md:pt-0">
              <a className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2" href="mailto:vishalraghav0290@gmail.com">
                <span className="material-symbols-outlined text-sm">mail</span>
                <span>vishalraghav0290@gmail.com</span>
              </a>
              <a className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2" href="tel:+919536319210">
                <span className="material-symbols-outlined text-sm">call</span>
                <span>+919536319210</span>
              </a>
              <div className="flex flex-wrap items-center gap-2.5 pt-1.5 text-slate-900 dark:text-white">
                <a className="text-blue-600 dark:text-blue-400 hover:text-blue-800 transition-colors font-medium" href="https://www.linkedin.com/in/vishal-raghav-dev/" target="_blank" rel="noopener noreferrer">linkedin.com/in/vishal-raghav-dev</a>
                <span className="text-slate-300 dark:text-slate-600">/</span>
                <a className="text-blue-600 dark:text-blue-400 hover:text-blue-800 transition-colors font-medium" href="https://github.com/vishalraghav0290" target="_blank" rel="noopener noreferrer">github.com/vishalraghav0290</a>
              </div>
            </div>
          </div>

          {/* SECTION 0: SUMMARY */}
          <section className="flex flex-col gap-4  ">
            <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2.5">
                <span className="font-mono text-xs font-semibold text-[#e11d48]">01 //</span>
                <h2 className="text-sm uppercase tracking-wider text-slate-900 dark:text-white font-bold">Summary</h2>
              </div>
              <span className="font-mono text-xs text-slate-500 dark:text-slate-400">Profile Overview</span>
            </div>
            <p className="text-[15px] text-slate-700 dark:text-slate-300 leading-relaxed">
              Solutions-driven developer with an ownership mindset building scalable, client-focused web applications. Proven ability to translate complex business requirements into actionable technical outcomes, optimize rendering performance, and collaborate in Agile environments to deliver high-quality software.
            </p>
          </section>

          {/* SECTION 1: KEY SKILLS */}
          <section className="flex flex-col gap-6">
            <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2.5">
                <span className="font-mono text-xs font-semibold text-[#e11d48]">02 //</span>
                <h2 className="text-sm uppercase tracking-wider text-slate-900 dark:text-white font-bold">Key Skills</h2>
              </div>
              <span className="font-mono text-xs text-slate-500 dark:text-slate-400">Core Competencies</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-12">
              <div className="flex flex-col gap-1.5">
                <span className="font-mono text-xs text-[#e11d48] uppercase tracking-wider">Programming Languages</span>
                <p className="text-[15px] text-slate-700 dark:text-slate-300">
                  <span className="text-blue-600 dark:text-blue-400 font-medium">JavaScript (ES6+)</span>, <span className="text-blue-600 dark:text-blue-400 font-medium">TypeScript</span>, SQL, Python
                </p>
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="font-mono text-xs text-[#e11d48] uppercase tracking-wider">Frontend Frameworks</span>
                <p className="text-[15px] text-slate-700 dark:text-slate-300">
                  <span className="text-blue-600 dark:text-blue-400 font-medium">React.js</span>, <span className="text-blue-600 dark:text-blue-400 font-medium">Next.js</span>, HTML5, CSS3, <span className="text-blue-600 dark:text-blue-400 font-medium">Tailwind CSS</span>, Responsive Design
                </p>
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="font-mono text-xs text-[#e11d48] uppercase tracking-wider">State &amp; Data Handling</span>
                <p className="text-[15px] text-slate-700 dark:text-slate-300">
                  <span className="text-blue-600 dark:text-blue-400 font-medium">Redux Toolkit</span>, Context API, RESTful APIs, Axios, JSON
                </p>
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="font-mono text-xs text-[#e11d48] uppercase tracking-wider">DevOps &amp; Development Tools</span>
                <p className="text-[15px] text-slate-700 dark:text-slate-300">
                  Git, GitHub, <span className="text-blue-600 dark:text-blue-400 font-medium">Docker</span>, CI/CD Pipelines, Postman, <span className="text-blue-600 dark:text-blue-400 font-medium">Bun</span>, Linux/macOS
                </p>
              </div>
              <div className="flex flex-col gap-1.5 md:col-span-2">
                <span className="font-mono text-xs text-[#e11d48] uppercase tracking-wider">Core Competencies &amp; SDLC</span>
                <p className="text-[15px] text-slate-700 dark:text-slate-300">
                  Agile/Scrum, Problem-Solving, Unit Testing, Data Structures &amp; Algorithms
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 2: EXPERIENCE */}
          <section className="flex flex-col gap-6">
            <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2.5">
                <span className="font-mono text-xs font-semibold text-[#e11d48]">03 //</span>
                <h2 className="text-sm uppercase tracking-wider text-slate-900 dark:text-white font-bold">Experience</h2>
              </div>
              <span className="font-mono text-xs text-slate-500 dark:text-slate-400">Work History</span>
            </div>

            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-2.5">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div className="flex items-baseline gap-2.5 flex-wrap">
                    <h3 className="text-lg text-slate-900 dark:text-white font-bold">MrManager</h3>
                    <span className="text-slate-300 dark:text-slate-600 text-sm">—</span>
                    <span className="font-mono text-xs text-blue-600 dark:text-blue-400 font-semibold">Frontend Developer</span>
                  </div>
                  <span className="font-mono text-xs text-slate-500 dark:text-slate-400">Jan 2026 – Jul 2026 • Remote</span>
                </div>
                <ul className="flex flex-col gap-2 text-[15px] text-slate-600 dark:text-slate-400">
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#e11d48] mt-2 text-[6px]">●</span>
                    <span>Architected scalable, client-focused web applications using <strong className="text-blue-600 dark:text-blue-400 font-medium">Next.js</strong> and <strong className="text-blue-600 dark:text-blue-400 font-medium">TypeScript</strong>, translating business requirements into technical outcomes in an Agile team environment.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#e11d48] mt-2 text-[6px]">●</span>
                    <span>Developed modular, type-safe frontend component libraries with an ownership mindset, streamlining release cycles across sprints and maintaining strict UI quality standards.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#e11d48] mt-2 text-[6px]">●</span>
                    <span>Managed deployment priorities by integrating <strong className="text-blue-600 dark:text-blue-400 font-medium">Docker</strong> containerization and <strong className="text-blue-600 dark:text-blue-400 font-medium">CI/CD pipelines</strong>, ensuring consistent, reliable automated build processes.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#e11d48] mt-2 text-[6px]">●</span>
                    <span>Engineered robust RESTful API integrations utilizing strong analytical skills, implementing asynchronous data handling and error boundaries for seamless client experiences.</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-2.5">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div className="flex items-baseline gap-2.5 flex-wrap">
                    <h3 className="text-lg text-slate-900 dark:text-white font-bold">DigiVikreta</h3>
                    <span className="text-slate-300 dark:text-slate-600 text-sm">—</span>
                    <span className="font-mono text-xs text-blue-600 dark:text-blue-400 font-semibold">Frontend Developer I</span>
                  </div>
                  <span className="font-mono text-xs text-slate-500 dark:text-slate-400">Sep 2024 – Sep 2025 • Remote</span>
                </div>
                <ul className="flex flex-col gap-2 text-[15px] text-slate-600 dark:text-slate-400">
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#e11d48] mt-2 text-[6px]">●</span>
                    <span>Built responsive, cross-browser web solutions using <strong className="text-blue-600 dark:text-blue-400 font-medium">React</strong> and <strong className="text-blue-600 dark:text-blue-400 font-medium">Tailwind CSS</strong>, adapting independently to evolving business and technology needs.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#e11d48] mt-2 text-[6px]">●</span>
                    <span>Integrated complex REST APIs and centralized state management via <strong className="text-blue-600 dark:text-blue-400 font-medium">Redux Toolkit</strong>, enabling dynamic, accurate data visualization for end-users.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#e11d48] mt-2 text-[6px]">●</span>
                    <span>Optimized frontend rendering performance with high attention to detail, improving core web vitals and reducing initial page load times through targeted code-level optimizations.</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-2.5">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div className="flex items-baseline gap-2.5 flex-wrap">
                    <h3 className="text-lg text-slate-900 dark:text-white font-bold">Internshala</h3>
                    <span className="text-slate-300 dark:text-slate-600 text-sm">—</span>
                    <span className="font-mono text-xs text-slate-600 dark:text-slate-400 font-medium">Student Partner / Campus Ambassador</span>
                  </div>
                  <span className="font-mono text-xs text-slate-500 dark:text-slate-400">Aug 2024 – Feb 2025 • Remote</span>
                </div>
                <ul className="flex flex-col gap-2 text-[15px] text-slate-600 dark:text-slate-400">
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#e11d48] mt-2 text-[6px]">●</span>
                    <span>Executed cross-functional campus outreach campaigns utilizing strong communication skills, driving registrations through targeted, data-backed strategies.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* SECTION 3: APPLIED PROJECTS */}
          <section className="flex flex-col gap-6">
            <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2.5">
                <span className="font-mono text-xs font-semibold text-[#e11d48]">04 //</span>
                <h2 className="text-sm uppercase tracking-wider text-slate-900 dark:text-white font-bold">Applied Projects</h2>
              </div>
              <span className="font-mono text-xs text-slate-500 dark:text-slate-400">Engineering Highlights</span>
            </div>

            <div className="flex flex-col gap-8">
              {/* FlyingAero */}
              <div className="flex flex-col gap-2.5">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div className="flex items-baseline gap-2.5">
                    <h3 className="text-lg text-slate-900 dark:text-white font-bold">FlyingAero</h3>
                    <span className="text-slate-300 dark:text-slate-600 text-sm">—</span>
                    <span className="text-[15px] text-slate-600 dark:text-slate-400">Real-Time Flight Vector Graphics &amp; Geospatial Tracking</span>
                  </div>
                  <a className="inline-flex items-center gap-1 font-mono text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-800 transition-colors" href="https://areotrack.vishalraghav.dev/" target="_blank" rel="noopener noreferrer">
                    <span>Live Link</span>
                    <span className="material-symbols-outlined text-xs">arrow_outward</span>
                  </a>
                </div>
                <p className="text-[15px] text-slate-600 dark:text-slate-400 leading-relaxed">
                  Implementation of <span className="text-blue-600 dark:text-blue-400 font-medium">MapLibre GL</span> integration with <span className="text-blue-600 dark:text-blue-400 font-medium">deck.gl</span> library for smooth visualization of flight paths in real time, with failovers between OpenSky and ADS-B community sources to avoid IP rate limits and blocks.
                </p>
                <div className="flex items-center gap-2 pt-1 font-mono text-xs text-slate-500 dark:text-slate-400">
                  <span className="text-[#e11d48] font-medium">#</span> TypeScript <span className="text-slate-300 dark:text-slate-600">•</span> MapLibre GL <span className="text-slate-300 dark:text-slate-600">•</span> deck.gl <span className="text-slate-300 dark:text-slate-600">•</span> OpenSky
                </div>
              </div>

              {/* NexBoard */}
              <div className="flex flex-col gap-2.5">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div className="flex items-baseline gap-2.5">
                    <h3 className="text-lg text-slate-900 dark:text-white font-bold">NexBoard</h3>
                    <span className="text-slate-300 dark:text-slate-600 text-sm">—</span>
                    <span className="text-[15px] text-slate-600 dark:text-slate-400">Scalable Management Dashboard</span>
                  </div>
                  <a className="inline-flex items-center gap-1 font-mono text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-800 transition-colors" href="https://nexboard.vishalraghav.dev/" target="_blank" rel="noopener noreferrer">
                    <span>Live Link</span>
                    <span className="material-symbols-outlined text-xs">arrow_outward</span>
                  </a>
                </div>
                <p className="text-[15px] text-slate-600 dark:text-slate-400 leading-relaxed">
                  Architected a client-focused data dashboard using <span className="text-blue-600 dark:text-blue-400 font-medium">Next.js</span> and <span className="text-blue-600 dark:text-blue-400 font-medium">TypeScript</span>, translating complex workflow requirements into intuitive data visualization flows with decoupled real-time WebSocket state management.
                </p>
                <div className="flex items-center gap-2 pt-1 font-mono text-xs text-slate-500 dark:text-slate-400">
                  <span className="text-[#e11d48] font-medium">#</span> Next.js <span className="text-slate-300 dark:text-slate-600">•</span> TypeScript <span className="text-slate-300 dark:text-slate-600">•</span> Dashboard Architecture <span className="text-slate-300 dark:text-slate-600">•</span> CRDTs
                </div>
              </div>

              {/* Velocity */}
              <div className="flex flex-col gap-2.5">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div className="flex items-baseline gap-2.5">
                    <h3 className="text-lg text-slate-900 dark:text-white font-bold">Velocity</h3>
                    <span className="text-slate-300 dark:text-slate-600 text-sm">—</span>
                    <span className="text-[15px] text-slate-600 dark:text-slate-400">3D Product Visualization Platform</span>
                  </div>
                  <a className="inline-flex items-center gap-1 font-mono text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-800 transition-colors" href="https://velocity.vishalraghav.dev/" target="_blank" rel="noopener noreferrer">
                    <span>Live Link</span>
                    <span className="material-symbols-outlined text-xs">arrow_outward</span>
                  </a>
                </div>
                <p className="text-[15px] text-slate-600 dark:text-slate-400 leading-relaxed">
                  Engineered a high-fidelity 3D web platform using <span className="text-blue-600 dark:text-blue-400 font-medium">React</span> and <span className="text-blue-600 dark:text-blue-400 font-medium">Three.js</span>, delivering smooth, high-performance rendering via optimized <span className="text-blue-600 dark:text-blue-400 font-medium">GLTF assets</span> and custom shaders.
                </p>
                <div className="flex items-center gap-2 pt-1 font-mono text-xs text-slate-500 dark:text-slate-400">
                  <span className="text-[#e11d48] font-medium">#</span> React <span className="text-slate-300 dark:text-slate-600">•</span> Three.js <span className="text-slate-300 dark:text-slate-600">•</span> GLTF <span className="text-slate-300 dark:text-slate-600">•</span> Shaders
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 4: FORMAL EDUCATION */}
          <section className="flex flex-col gap-6">
            <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2.5">
                <span className="font-mono text-xs font-semibold text-[#e11d48]">05 //</span>
                <h2 className="text-sm uppercase tracking-wider text-slate-900 dark:text-white font-bold">Education</h2>
              </div>
              <span className="font-mono text-xs text-slate-500 dark:text-slate-400">Academic Foundation</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-1.5 bg-white/60 dark:bg-slate-900/60 p-4 rounded-lg border border-slate-200 dark:border-slate-800">
                <div className="flex items-baseline justify-between">
                  <h3 className="text-[17px] text-slate-900 dark:text-white font-bold">Manipal University Jaipur</h3>
                  <span className="font-mono text-xs text-[#e11d48] font-semibold">Pursuing</span>
                </div>
                <p className="text-[15px] text-slate-600 dark:text-slate-400">Master of Computer Applications (MCA)</p>
                <div className="flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-200 dark:border-slate-800 mt-1">
                  <span className="text-blue-600 dark:text-blue-400 font-semibold">CGPA: 7.1</span>
                  <span>MCA Degree</span>
                </div>
              </div>
              <div className="flex flex-col gap-1.5 bg-white/60 dark:bg-slate-900/60 p-4 rounded-lg border border-slate-200 dark:border-slate-800">
                <div className="flex items-baseline justify-between">
                  <h3 className="text-[17px] text-slate-900 dark:text-white font-bold">Mangalayatan University</h3>
                  <span className="font-mono text-xs text-slate-500 dark:text-slate-400">Completed</span>
                </div>
                <p className="text-[15px] text-slate-600 dark:text-slate-400">Bachelor of Computer Applications (BCA)</p>
                <div className="flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-200 dark:border-slate-800 mt-1">
                  <span className="text-blue-600 dark:text-blue-400 font-semibold">CGPA: 7.5</span>
                  <span>BCA Degree</span>
                </div>
              </div>
            </div>
          </section>

          {/* Signature & Verification Ledger Badge */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-6 border-t border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 font-mono text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-slate-500"></span>
              <span>SYSTEM VERIFIED BY VISHAL RAGHAV // GPG: 0x82D9A1C3</span>
            </div>
            <div>
              <span>LAST UPDATED: Q1 2026 // TIMEZONE: ASIA/KOLKATA (IST)</span>
            </div>
          </div>
        </div>
        {/* Top Action & Telemetry Header Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">

          <div className="flex items-center gap-3 print:hidden">
            <button
              className="font-mono text-xs text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1.5 py-1.5 px-3 rounded bg-white/70 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm hover:bg-white dark:hover:bg-slate-700"
              onClick={copyPlaintextCV}
            >
              {copied ? (
                <>
                  <span className="material-symbols-outlined text-sm text-emerald-500">check</span>
                  <span className="text-emerald-500 font-bold">Copied!</span>
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined text-sm">content_copy</span>
                  <span>Copy Text</span>
                </>
              )}
            </button>
            <button
              className="font-mono text-xs text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1.5 py-1.5 px-3 rounded bg-white/70 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm hover:bg-white dark:hover:bg-slate-700"
              onClick={() => window.print()}
            >
              <span className="material-symbols-outlined text-sm justify-center items-center mx-auto">print</span>
              <span>Print / Save PDF</span>
            </button>
          </div>
        </div>
      </div>
    </div>

  );
}
