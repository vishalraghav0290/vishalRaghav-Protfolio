import ArchitectureNotes from '@/components/ArchitectureNotes';

export default async function Home() {
  let profile = null;
  let repos = [];
  let countrepo: any[] = [];
  let featuredRepos: any[] = [];
  let experimentRepos: any[] = [];

  try {
    const profileRes = await fetch('https://api.github.com/users/vishalraghav0290', { next: { revalidate: 3600 } });
    if (profileRes.ok) profile = await profileRes.json();

    const reposRes = await fetch('https://api.github.com/users/vishalraghav0290/repos?sort=updated&per_page=6', { next: { revalidate: 3600 } });
    if (reposRes.ok) repos = await reposRes.json();
  } catch (error) {
    console.error('Error fetching github data:', error);
  }

  try {
    const myRepo = await fetch('https://api.github.com/users/vishalraghav0290/repos?per_page=100', { next: { revalidate: 600 } })
    if (myRepo.ok) {
      countrepo = await myRepo.json();
      featuredRepos = countrepo.filter((repo: any) => repo.topics && repo.topics.includes('portfolio-featured'));
      experimentRepos = countrepo.filter((repo: any) => repo.topics && repo.topics.includes('portfolio-experiment'));
    }
  } catch (error) {
    console.error(error);
  }

  let hashnodeNotes: any[] = [];
  try {
    const rssRes = await fetch('https://vishalraghav.hashnode.dev/rss.xml', { next: { revalidate: 3600 } });
    if (rssRes.ok) {
      const text = await rssRes.text();
      const items = text.split('<item>').slice(1);
      hashnodeNotes = items.map(item => {
        const titleMatch = item.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/);
        const linkMatch = item.match(/<link>(.*?)<\/link>/);
        const dateMatch = item.match(/<pubDate>(.*?)<\/pubDate>/);
        return {
          title: titleMatch ? titleMatch[1] : '',
          link: linkMatch ? linkMatch[1] : '',
          date: dateMatch ? new Date(dateMatch[1]).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: '2-digit' }) : '',
          published: true
        };
      });
    }
  } catch (e) {
    console.error('Error fetching hashnode data:', e);
  }
  console.log('repos', profile);
  const architectureNotes = [
    { title: "Decoupling WebSockets from React Server Components", date: "Oct 14, 2025", link: "#", published: false },
    { title: "Memory Layout Optimization in WebGPU Uniform Buffers", date: "Nov 02, 2026", link: "#", published: false },
    { title: "Benchmarking Bun vs Node.js for High-Throughput Microservices", date: "Dec 18, 2026", link: "#", published: false },
    { title: "CRDT State Convergence without Aggressive Locks", date: "Jan 12, 2027", link: "#", published: false },
    { title: "Zero-Bundle Static Shells for 40%+ Page Load Gains", date: "TBD", link: "#", published: false },
    { title: "Eliminating Garbage Collection Pauses in Web Canvas", date: "Feb 05, 2027", link: "#", published: false },
  ];

  if (hashnodeNotes.length > 0) {
    architectureNotes[0] = hashnodeNotes[0];
  }
  if (hashnodeNotes.length > 1) {
    architectureNotes[4] = hashnodeNotes[1];
  }

  return (
    <div className="w-full max-w-[1480px] mx-auto px-6 md:px-8 ">
      {/* HERO SECTION */}
      <section className="pt-6 pb-10 lg:pb-20 border-b border-slate-200/90 dark:border-slate-800">
        <div className="flex flex-col-reverse lg:flex-row gap-12 lg:gap-16 items-start justify-between">
          {/* Narrative Column */}
          <div className="flex-1 max-w-[1200px]">
            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bungee text-slate-950 dark:text-white tracking-[-0.035em] leading-[1.08] mb-5">
              Hey, I am Vishal <span className="text-transparent bg-clip-text bg-gradient-to-r font-[large]"></span>
            </h1>
            {/* Punchy Tagline */}
            <p className="text-lg sm:text-[21px] text-[#e11d48] dark:text-slate-200 font-passero text-[25px] leading-[1.1] tracking-tight mb-5">
              Building distributed systems and real-time graphics engines with zero compromise on latency.
            </p>
            {/* Accent Tokens */}
            <div className="flex flex-wrap items-center gap-2 mb-8">
              <span className="px-2.5 py-1 rounded-md bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm font-mono text-[11px] text-slate-700 dark:text-slate-300">Distributed systems</span>
              <span className="text-slate-300 dark:text-slate-700">•</span>
              <span className="px-2.5 py-1 rounded-md bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm font-mono text-[11px] text-slate-700 dark:text-slate-300">Engineering</span>
              <span className="text-slate-300 dark:text-slate-700">•</span>
              <span className="px-2.5 py-1 rounded-md bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm font-mono text-[11px] text-slate-700 dark:text-slate-300">Eventual consistency</span>
              <span className="text-slate-300 dark:text-slate-700">•</span>
              <span className="px-2.5 py-1 rounded-md bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm font-mono text-[11px] text-slate-700 dark:text-slate-300">Problem Solving</span>
            </div>
            {/* Deep Body Bio */}
            <div className="space-y-4 text-slate-600 dark:text-slate-400 font-inter text-[15px] leading-relaxed">
              <p>
                I am a <strong className="text-slate-900 dark:text-white font-semibold">Software Development Engineer (SDE)</strong>, Systems Architect, and Performance Engineer focused on distributed consensus, low-latency streaming pipelines, and GPU compute infrastructure.
              </p>
              <p>
                My engineering core centers on efficiency, fault tolerance, and deterministic data pipelining from edge requests down to distributed compute nodes. From low-level compute shader memory layouts for <span className="font-mono text-[13px] text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded border border-slate-200 dark:border-slate-700">WebGPU / WGSL</span> to streaming Next.js React Server Components (<span className="font-mono text-[13px] text-slate-800 dark:text-slate-200">RSC</span>) and lock-free <span className="font-mono text-[13px] text-slate-800 dark:text-slate-200">CRDT synchronization</span>, I engineer systems built to thrive under peak concurrency.
              </p>
              <p>
                Previously engineered scalable web services and distributed architectures for high-throughput platforms including <strong className="text-slate-800 dark:text-slate-200 font-semibold">MrManager</strong> and <strong className="text-slate-800 dark:text-slate-200 font-semibold">DigiVikreta</strong>. Drove page load reductions by <span className="font-mono text-[#e11d48] font-bold">+40%</span> via memoized AST parsing, intelligent code splitting, and zero-bundle static shells.
              </p>
            </div>
            {/* Social Pill Matrix */}
            <div className="flex flex-wrap items-center gap-2.5 pt-8">
              <a className="inline-flex items-center gap-1.5 h-8 px-3.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 shadow-sm text-slate-800 dark:text-slate-200 font-mono text-xs transition-all hover:bg-slate-50 dark:hover:bg-slate-700 hover:shadow" href="https://github.com/vishalraghav0290" rel="noopener noreferrer" target="_blank">
                <span>GitHub</span>
                <span className="text-slate-500 dark:text-slate-400 font-normal">({countrepo ? countrepo.length : 0} repos)</span>
              </a>
              <a className="inline-flex items-center gap-1.5 h-8 px-3.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 shadow-sm text-slate-800 dark:text-slate-200 font-mono text-xs transition-all hover:bg-slate-50 dark:hover:bg-slate-700 hover:shadow" href="https://www.linkedin.com/in/vishal-raghav-747a61251/" rel="noopener noreferrer" target="_blank">
                <span>LinkedIn</span>
                <span className="text-slate-500 dark:text-slate-400 font-normal">(network)</span>
              </a>
              <a className="inline-flex items-center gap-1.5 h-8 px-3.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 shadow-sm text-slate-800 dark:text-slate-200 font-mono text-xs transition-all hover:bg-slate-50 dark:hover:bg-slate-700 hover:shadow" href="https://x.com/vishalRaghav666" rel="noopener noreferrer" target="_blank">
                <span>X / Twitter</span>
                <span className="text-slate-500 dark:text-slate-400 font-normal">(@vishalRaghav666)</span>
              </a>
              <a className="inline-flex items-center gap-1.5 h-8 px-3.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 shadow-sm text-slate-800 dark:text-slate-200 font-mono text-xs transition-all hover:bg-slate-50 dark:hover:bg-slate-700 hover:shadow" href="https://hashnode.com" rel="noopener noreferrer" target="_blank">
                <span>Hashnode</span>
                <span className="text-slate-500 dark:text-slate-400 font-normal">(notes)</span>
              </a>
              <div className="inline-flex items-center gap-2 h-8 px-3.5 rounded-full bg-slate-100/90 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-mono text-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                <span>let me help you solve your problems ;)</span>
              </div>
            </div>
          </div>
          {/* Studio Portrait Avatar Card */}
          <div className="flex-shrink-0 w-full sm:w-auto flex flex-col items-center lg:items-end">
            <div className="w-80 h-80 sm:w-96 sm:h-96 rounded-2xl overflow-hidden shadow-sm">
              <img
                alt="Vishal Raghav"
                className="w-full h-full object-cover"
                src="/img.jpeg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* EXPLORE WORK & ARCHITECTURE GRID */}
      <section className="pt-10 lg:py-20 border-b border-slate-200/90 dark:border-slate-800" id="architecture">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-10 gap-2">
          <div>
            <div className="font-mono text-xs tracking-wider text-[#e11d48] uppercase font-bold mb-1">Taxonomy</div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 dark:text-white tracking-tight">Explore Work &amp; Architecture</h2>
          </div>
          <p className="font-mono text-xs text-slate-500 dark:text-slate-400">Everything I build, write, optimize, and engineer in the open.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1 */}
          <div className="p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-[0_8px_20px_-6px_rgba(15,23,42,0.08)] rounded-xl transition-all duration-200 flex flex-col justify-between group hover:-translate-y-0.5">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[10px] tracking-widest text-slate-500 dark:text-slate-400 uppercase font-semibold">DISTRIBUTED</span>
                <span className="font-mono text-xs text-[#e11d48] font-bold bg-rose-50 dark:bg-rose-950/30 px-1.5 py-0.5 rounded border border-rose-100 dark:border-rose-900">03</span>
              </div>
              <h3 className="text-[17px] font-bold text-slate-900 dark:text-white mb-2 group-hover:text-[#e11d48] transition-colors">Systems Architecture</h3>
              <p className="text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed">Zero-bundle static shells, CRDT sync, and streaming RSC pipelines.</p>
            </div>
            <a className="mt-6 font-mono text-xs font-semibold text-slate-700 dark:text-slate-300 group-hover:text-[#e11d48] inline-flex items-center gap-1 transition-colors" href="#">
              View specs <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
          {/* Card 2 */}
          <div className="p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-[0_8px_20px_-6px_rgba(15,23,42,0.08)] rounded-xl transition-all duration-200 flex flex-col justify-between group hover:-translate-y-0.5">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[10px] tracking-widest text-slate-500 dark:text-slate-400 uppercase font-semibold">Gen AI &amp; AI Erineering</span>
                <span className="font-mono text-xs text-[#e11d48] font-bold bg-rose-50 dark:bg-rose-950/30 px-1.5 py-0.5 rounded border border-rose-100 dark:border-rose-900">06</span>
              </div>
              <h3 className="text-[17px] font-bold text-slate-900 dark:text-white mb-2 group-hover:text-[#e11d48] transition-colors">GenAI &amp; Python</h3>
              <p className="text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed">Implementations of RAG , LLM's and Genrative Architecture.</p>
            </div>
            <a className="mt-6 font-mono text-xs font-semibold text-slate-700 dark:text-slate-300 group-hover:text-[#e11d48] inline-flex items-center gap-1 transition-colors" href="#">
              View work <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
          {/* Card 3 */}
          <div className="p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-[0_8px_20px_-6px_rgba(15,23,42,0.08)] rounded-xl transition-all duration-200 flex flex-col justify-between group hover:-translate-y-0.5">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[10px] tracking-widest text-slate-500 dark:text-slate-400 uppercase font-semibold">OPEN SOURCE</span>
                <span className="font-mono text-xs text-[#e11d48] font-bold bg-rose-50 dark:bg-rose-950/30 px-1.5 py-0.5 rounded border border-rose-100 dark:border-rose-900">27</span>
              </div>
              <h3 className="text-[17px] font-bold text-slate-900 dark:text-white mb-2 group-hover:text-[#e11d48] transition-colors">Projects</h3>
              <p className="text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed">Production repos, spatial architecture tools, and 3D web applications.</p>
            </div>
            <a className="mt-6 font-mono text-xs font-semibold text-slate-700 dark:text-slate-300 group-hover:text-[#e11d48] inline-flex items-center gap-1 transition-colors" href="#">
              View repositories <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
          {/* Card 4 */}
          <div className="p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-[0_8px_20px_-6px_rgba(15,23,42,0.08)] rounded-xl transition-all duration-200 flex flex-col justify-between group hover:-translate-y-0.5">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[10px] tracking-widest text-slate-500 dark:text-slate-400 uppercase font-semibold">Study</span>
                <span className="font-mono text-xs text-emerald-700 dark:text-emerald-400 font-bold bg-emerald-50 dark:bg-emerald-900/30 px-1.5 py-0.5 rounded border border-emerald-200 dark:border-emerald-800">Computer Science</span>
              </div>
              <h3 className="text-[17px] font-bold text-slate-900 dark:text-white mb-2 group-hover:text-[#e11d48] transition-colors">Education</h3>
              <p className="text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed">A summary of my educational journey and academic achievements.</p>
            </div>
            <a className="mt-6 font-mono text-xs font-semibold text-slate-700 dark:text-slate-300 group-hover:text-[#e11d48] inline-flex items-center gap-1 transition-colors" href="#">
              View details <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
          {/* Card 5 */}
          <div className="p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-[0_8px_20px_-6px_rgba(15,23,42,0.08)] rounded-xl transition-all duration-200 flex flex-col justify-between group hover:-translate-y-0.5">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[10px] tracking-widest text-slate-500 dark:text-slate-400 uppercase font-semibold">RUNTIME &amp; OPS</span>
                <span className="font-mono text-xs text-[#e11d48] font-bold bg-rose-50 dark:bg-rose-950/30 px-1.5 py-0.5 rounded border border-rose-100 dark:border-rose-900">04</span>
              </div>
              <h3 className="text-[17px] font-bold text-slate-900 dark:text-white mb-2 group-hover:text-[#e11d48] transition-colors">Tooling &amp; Infra</h3>
              <p className="text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed">Bun runtime, Dockerized micro-deployments, and automated CI/CD.</p>
            </div>
            <a className="mt-6 font-mono text-xs font-semibold text-slate-700 dark:text-slate-300 group-hover:text-[#e11d48] inline-flex items-center gap-1 transition-colors" href="#">
              View tooling <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
          {/* Card 6 */}
          <div className="p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-[0_8px_20px_-6px_rgba(15,23,42,0.08)] rounded-xl transition-all duration-200 flex flex-col justify-between group hover:-translate-y-0.5">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[10px] tracking-widest text-slate-500 dark:text-slate-400 uppercase font-semibold">INTERACTION</span>
                <span className="font-mono text-xs text-[#e11d48] font-bold bg-rose-50 dark:bg-rose-950/30 px-1.5 py-0.5 rounded border border-rose-100 dark:border-rose-900">05</span>
              </div>
              <h3 className="text-[17px] font-bold text-slate-900 dark:text-white mb-2 group-hover:text-[#e11d48] transition-colors">Motion &amp; Physics</h3>
              <p className="text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed">GSAP ScrollTrigger, Lenis smooth scrolling, and spatial interactive canvases.</p>
            </div>
            <a className="mt-6 font-mono text-xs font-semibold text-slate-700 dark:text-slate-300 group-hover:text-[#e11d48] inline-flex items-center gap-1 transition-colors" href="#">
              View interaction <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
          {/* Card 7 */}
          <div className="p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-[0_8px_20px_-6px_rgba(15,23,42,0.08)] rounded-xl transition-all duration-200 flex flex-col justify-between group hover:-translate-y-0.5">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[10px] tracking-widest text-slate-500 dark:text-slate-400 uppercase font-semibold">APPLICATIONS</span>
                <span className="font-mono text-xs text-[#e11d48] font-bold bg-rose-50 dark:bg-rose-950/30 px-1.5 py-0.5 rounded border border-rose-100 dark:border-rose-900">02</span>
              </div>
              <h3 className="text-[17px] font-bold text-slate-900 dark:text-white mb-2 group-hover:text-[#e11d48] transition-colors">Platform Work</h3>
              <p className="text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed">MrManager and DigiVikreta high-concurrency client-facing services.</p>
            </div>
            <a className="mt-6 font-mono text-xs font-semibold text-slate-700 dark:text-slate-300 group-hover:text-[#e11d48] inline-flex items-center gap-1 transition-colors" href="#">
              View platforms <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
          {/* Card 8 */}
          <div className="p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-[0_8px_20px_-6px_rgba(15,23,42,0.08)] rounded-xl transition-all duration-200 flex flex-col justify-between group hover:-translate-y-0.5">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[10px] tracking-widest text-slate-500 dark:text-slate-400 uppercase font-semibold">NOTES &amp; ESSAYS</span>
                <span className="font-mono text-xs text-[#e11d48] font-bold bg-rose-50 dark:bg-rose-950/30 px-1.5 py-0.5 rounded border border-rose-100 dark:border-rose-900">12</span>
              </div>
              <h3 className="text-[17px] font-bold text-slate-900 dark:text-white mb-2 group-hover:text-[#e11d48] transition-colors">Tech Notes</h3>
              <p className="text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed">Micro-architectural takeaways, shader memory layouts, and state consensus.</p>
            </div>
            <a className="mt-6 font-mono text-xs font-semibold text-slate-700 dark:text-slate-300 group-hover:text-[#e11d48] inline-flex items-center gap-1 transition-colors" href="#">
              View notes <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* FEATURED SYSTEMS & REPOSITORIES */}
      <section className="py-20 border-b border-slate-200/90 dark:border-slate-800" id="projects">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-10 gap-2">
          <div>
            <div className="font-mono text-xs tracking-wider text-[#e11d48] uppercase font-bold mb-1">Selected Systems</div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 dark:text-white tracking-tight">Featured Production Work</h2>
          </div>
          <a className="font-mono text-xs text-[#e11d48] hover:underline inline-flex items-center gap-1 font-semibold" href="https://github.com/vishalraghav0290?tab=repositories" rel="noopener noreferrer" target="_blank">
            View all {countrepo ? countrepo.length : 0} on GitHub ↗
          </a>
        </div>
        <div className="space-y-6">
          {/* NexBoard */}
          {/* FlyingAero */}
          <div className="p-6 md:p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 rounded-2xl shadow-[0_4px_16px_-4px_rgba(15,23,42,0.04)] hover:shadow-[0_12px_28px_-8px_rgba(15,23,42,0.08)] transition-all duration-200">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-5">
              <div>
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="text-xl font-bold text-slate-950 dark:text-white">FlyingAero</h3>
                  <span className="font-mono text-xs text-slate-500 dark:text-slate-400">// Real-Time Flight Vector Graphics &amp; Geospatial Tracking</span>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  <span className="font-mono text-[11px] bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-2.5 py-0.5 rounded text-slate-700 dark:text-slate-300">TypeScript</span>
                  <span className="font-mono text-[11px] bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-2.5 py-0.5 rounded text-slate-700 dark:text-slate-300">MapLibre GL</span>
                  <span className="font-mono text-[11px] bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-2.5 py-0.5 rounded text-slate-700 dark:text-slate-300">deck.gl</span>
                  <span className="font-mono text-[11px] bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-2.5 py-0.5 rounded text-slate-700 dark:text-slate-300">OpenSky API</span>
                </div>
              </div>
              <div className="flex items-center gap-4 text-xs font-mono flex-shrink-0">
                <a className="text-slate-900 dark:text-slate-100 hover:text-[#e11d48] dark:hover:text-[#e11d48] transition-colors inline-flex items-center gap-1 font-semibold" href="https://areotrack.vishalraghav.dev/" rel="noopener noreferrer" target="_blank">
                  Live Demo <span className="material-symbols-outlined text-[14px]">arrow_outward</span>
                </a>
                <span className="text-slate-300 dark:text-slate-700">•</span>
                <a className="text-slate-900 dark:text-slate-100 hover:text-[#e11d48] dark:hover:text-[#e11d48] transition-colors inline-flex items-center gap-1 font-semibold" href="https://github.com/vishalraghav0290/FlyingAero" rel="noopener noreferrer" target="_blank">
                  Code <span className="material-symbols-outlined text-[14px]">arrow_outward</span>
                </a>
              </div>
            </div>
            <ul className="space-y-2.5 text-slate-600 dark:text-slate-400 text-[14px] leading-relaxed">
              <li className="flex items-start gap-2.5">
                <span className="text-[#e11d48] font-bold mt-0.5">›</span>
                <span><strong className="text-slate-900 dark:text-white font-semibold">Geospatial High-Performance Visualization:</strong>Implementation of MapLibre GL integration with deck.gl library for smooth visualization of flight paths in real time.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#e11d48] font-bold mt-0.5">›</span>
                <span><strong className="text-slate-900 dark:text-white font-semibold">Data Failovers:</strong> Created failover mechanism between OpenSky and ADS-B community sources (adsb.lol, adsb.fi) for avoiding IP blocks by cloud providers.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#e11d48] font-bold mt-0.5">›</span>
                <span><strong className="text-slate-900 dark:text-white font-semibold">Spatial Caching:</strong> A grid cache at 250 NM range was made to reduce API load and avoid rate limits.</span>
              </li>
            </ul>
          </div>
          <div className="p-6 md:p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 rounded-2xl shadow-[0_4px_16px_-4px_rgba(15,23,42,0.04)] hover:shadow-[0_12px_28px_-8px_rgba(15,23,42,0.08)] transition-all duration-200">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-5">
              <div>
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="text-xl font-bold text-slate-950 dark:text-white">NexBoard</h3>
                  <span className="font-mono text-xs text-slate-500 dark:text-slate-400">// Real-Time Collaborative Spatial Architecture</span>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  <span className="font-mono text-[11px] bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-2.5 py-0.5 rounded text-slate-700 dark:text-slate-300">TypeScript</span>
                  <span className="font-mono text-[11px] bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-2.5 py-0.5 rounded text-slate-700 dark:text-slate-300">Next.js RSC</span>
                  <span className="font-mono text-[11px] bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-2.5 py-0.5 rounded text-slate-700 dark:text-slate-300">WebSockets</span>
                  <span className="font-mono text-[11px] bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-2.5 py-0.5 rounded text-slate-700 dark:text-slate-300">CRDTs</span>
                  <span className="font-mono text-[11px] bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-2.5 py-0.5 rounded text-slate-700 dark:text-slate-300">Canvas Engine</span>
                </div>
              </div>
              <div className="flex items-center gap-4 text-xs font-mono flex-shrink-0">
                <a className="text-slate-900 dark:text-slate-100 hover:text-[#e11d48] dark:hover:text-[#e11d48] transition-colors inline-flex items-center gap-1 font-semibold" href="https://nexboard.vishalraghav.dev/">
                  Live Demo <span className="material-symbols-outlined text-[14px]">arrow_outward</span>
                </a>
                <span className="text-slate-300 dark:text-slate-700">•</span>
                <a className="text-slate-900 dark:text-slate-100 hover:text-[#e11d48] dark:hover:text-[#e11d48] transition-colors inline-flex items-center gap-1 font-semibold" href="https://github.com/vishalraghav0290" rel="noopener noreferrer" target="_blank">
                  Code <span className="material-symbols-outlined text-[14px]">arrow_outward</span>
                </a>
              </div>
            </div>
            <ul className="space-y-2.5 text-slate-600 dark:text-slate-400 text-[14px] leading-relaxed">
              <li className="flex items-start gap-2.5">
                <span className="text-[#e11d48] font-bold mt-0.5">›</span>
                <span><strong className="text-slate-900 dark:text-white font-semibold">Decoupled Architecture:</strong> Separated stateful WebSocket connections from stateless Next.js React Server Components (RSC), ensuring optimal initial load via zero-bundle static shells while maintaining sub-millisecond real-time DOM hydration.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#e11d48] font-bold mt-0.5">›</span>
                <span><strong className="text-slate-900 dark:text-white font-semibold">Distributed State Management:</strong> Implemented custom Conflict-Free Replicated Data Types (CRDTs) to handle concurrent mutations across client nodes without aggressive database locks.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#e11d48] font-bold mt-0.5">›</span>
                <span><strong className="text-slate-900 dark:text-white font-semibold">Graphics Optimization:</strong> Optimized canvas loops to minimize CPU main-thread blocking by batching draw calls and zero-copy memory serialization.</span>
              </li>
            </ul>
          </div>
          {/* Velocity */}
          <div className="p-6 md:p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 rounded-2xl shadow-[0_4px_16px_-4px_rgba(15,23,42,0.04)] hover:shadow-[0_12px_28px_-8px_rgba(15,23,42,0.08)] transition-all duration-200" id="graphics">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-5">
              <div>
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="text-xl font-bold text-slate-950 dark:text-white">Velocity</h3>
                  <span className="font-mono text-xs text-slate-500 dark:text-slate-400">// Interactive 3D Footwear Experience &amp; Render Engine</span>                </div>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  <span className="font-mono text-[11px] bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-2.5 py-0.5 rounded text-slate-700 dark:text-slate-300">React 18</span>
                  <span className="font-mono text-[11px] bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-2.5 py-0.5 rounded text-slate-700 dark:text-slate-300">Three.js</span>
                  <span className="font-mono text-[11px] bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-2.5 py-0.5 rounded text-slate-700 dark:text-slate-300">React Three Fiber</span>
                  <span className="font-mono text-[11px] bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-2.5 py-0.5 rounded text-slate-700 dark:text-slate-300">Drei</span>
                  <span className="font-mono text-[11px] bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-2.5 py-0.5 rounded text-slate-700 dark:text-slate-300">GLTF / PBR</span>
                </div>
              </div>
              <div className="flex items-center gap-4 text-xs font-mono flex-shrink-0">
                <a className="text-slate-900 dark:text-slate-100 hover:text-[#e11d48] dark:hover:text-[#e11d48] transition-colors inline-flex items-center gap-1 font-semibold" href="https://velocity.vishalraghav.dev/">
                  Live Demo <span className="material-symbols-outlined text-[14px]">arrow_outward</span>
                </a>
                <span className="text-slate-300 dark:text-slate-700">•</span>
                <a className="text-slate-900 dark:text-slate-100 hover:text-[#e11d48] dark:hover:text-[#e11d48] transition-colors inline-flex items-center gap-1 font-semibold" href="https://github.com/vishalraghav0290/velocity" rel="noopener noreferrer" target="_blank">
                  Code <span className="material-symbols-outlined text-[14px]">arrow_outward</span>
                </a>
              </div>
            </div>
            <ul className="space-y-2.5 text-slate-600 dark:text-slate-400 text-[14px] leading-relaxed">
              <li className="flex items-start gap-2.5">
                <span className="text-[#e11d48] font-bold mt-0.5">›</span>
                <span><strong className="text-slate-900 dark:text-white font-semibold">Shader Passes &amp; Studio Lighting:</strong> Multi-threaded 3D shoe rendering with dynamic environment maps, ambient occlusion passes, and physically based rendering (PBR).</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#e11d48] font-bold mt-0.5">›</span>
                <span><strong className="text-slate-900 dark:text-white font-semibold">Texture Atlas &amp; Draw Calls:</strong> Dramatically compressed geometry buffers for zero hitching and steady 60 FPS performance on resource-constrained mobile GPUs.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* TWO COLUMN: ARCHITECTURE NOTES VS PINNED EXPERIMENTS */}
      <section className="py-20 border-b border-slate-200/90 dark:border-slate-800" id="notes">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-14">
          {/* Left: Recent Architecture Notes */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-bold text-slate-950 dark:text-white tracking-tight">Architecture Notes & Engineering Insights</h3>
              <a className="font-mono text-xs text-[#e11d48] hover:underline font-semibold" href="https://vishalraghav.hashnode.dev" rel="noopener noreferrer" target="_blank">All notes ↗</a>
            </div>
            <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mb-6">Concise engineering maxims, benchmarks, and mental models.</p>
            <ArchitectureNotes
              notes={[...architectureNotes].sort((a, b) => {
                // Parse strings to timestamps. If it says "TBD", treat it as Infinity (far future)
                const timeA = a.date === "TBD" ? Infinity : new Date(a.date).getTime();
                const timeB = b.date === "TBD" ? Infinity : new Date(b.date).getTime();
                return timeA - timeB; // ascending (oldest first)
              })}
            />
          </div>
          {/* Right: Pinned Repositories / Experiments */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-bold text-slate-950 dark:text-white tracking-tight">Pinned Experiments</h3>
              <a className="font-mono text-xs text-[#e11d48] hover:underline font-semibold" href="https://github.com/vishalraghav0290" rel="noopener noreferrer" target="_blank">All repositories ↗</a>
            </div>
            <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mb-6">Live repos built and maintained in the open ecosystem.</p>
            <div className="space-y-3 font-mono text-xs">
              {(experimentRepos.length > 0 ? experimentRepos : repos).map((repo: any, i: number) => (
                <div key={repo.id} className="p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-sm transition-all flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className={i === 0 ? "text-amber-600 dark:text-amber-400 font-bold flex-shrink-0" : "text-slate-400 font-bold flex-shrink-0"}>★ {repo.stargazers_count > 9 ? repo.stargazers_count : `0${repo.stargazers_count}`}</span>
                    <a className="text-slate-900 dark:text-slate-100 font-semibold hover:text-[#e11d48] dark:hover:text-[#e11d48] hover:underline truncate" href={repo.html_url} rel="noopener noreferrer" target="_blank">{repo.name}</a>
                    {repo.description && <span className="text-slate-500 dark:text-slate-400 hidden sm:inline text-[11px] truncate">// {repo.description}</span>}
                  </div>
                  {repo.language && <span className="text-slate-600 dark:text-slate-400 text-[10px] bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-2 py-0.5 rounded flex-shrink-0">{repo.language}</span>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TECHNICAL ARSENAL & TOOLCHAIN MATRIX */}
      <section className="py-20 border-b border-slate-200/90 dark:border-slate-800">
        <div className="mb-10">
          <div className="font-mono text-xs tracking-wider text-[#e11d48] uppercase font-bold mb-1">Architecture Stack</div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 dark:text-white tracking-tight">Engineering Competencies &amp; Toolchain</h2>
          <p className="font-mono text-xs text-slate-500 dark:text-slate-400 mt-1">Engineered for high concurrency, 60 FPS spatial graphics, and resilient infrastructure.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Column 1 */}
          <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl hover:border-slate-300 dark:hover:border-slate-700 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="material-symbols-outlined text-[#e11d48] text-[22px]">layers</span>
              <h4 className="text-base font-bold text-slate-950 dark:text-white">Frontend &amp; Core</h4>
            </div>
            <div className="space-y-2 text-slate-600 dark:text-slate-400 text-[13px]">
              <p><strong className="text-slate-800 dark:text-slate-200 font-medium">Frameworks:</strong> Next.js (App Router), React 18</p>
              <p><strong className="text-slate-800 dark:text-slate-200 font-medium">Languages:</strong> TypeScript, ESNext, Web APIs</p>
              <p><strong className="text-slate-800 dark:text-slate-200 font-medium">State:</strong> Redux Toolkit, Recoil, CRDT sync</p>
              <p><strong className="text-slate-800 dark:text-slate-200 font-medium">Styling:</strong> Tailwind CSS, CSS Custom Properties</p>
            </div>
          </div>
          {/* Column 2 */}
          <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl hover:border-slate-300 dark:hover:border-slate-700 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="material-symbols-outlined text-[#e11d48] text-[22px]">deployed_code</span>
              <h4 className="text-base font-bold text-slate-950 dark:text-white">3D Graphics &amp; GPU</h4>
            </div>
            <div className="space-y-2 text-slate-600 dark:text-slate-400 text-[13px]">
              <p><strong className="text-slate-800 dark:text-slate-200 font-medium">APIs:</strong> WebGPU, WebGL2, Canvas API</p>
              <p><strong className="text-slate-800 dark:text-slate-200 font-medium">Engines:</strong> Three.js, React Three Fiber, Drei</p>
              <p><strong className="text-slate-800 dark:text-slate-200 font-medium">Shaders:</strong> WGSL, GLSL custom passes</p>
              <p><strong className="text-slate-800 dark:text-slate-200 font-medium">Motion:</strong> GSAP ScrollTrigger, Lenis Scroll</p>
            </div>
          </div>
          {/* Column 3 */}
          <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl hover:border-slate-300 dark:hover:border-slate-700 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="material-symbols-outlined text-[#e11d48] text-[22px]">dns</span>
              <h4 className="text-base font-bold text-slate-950 dark:text-white">Backend &amp; Distributed</h4>
            </div>
            <div className="space-y-2 text-slate-600 dark:text-slate-400 text-[13px]">
              <p><strong className="text-slate-800 dark:text-slate-200 font-medium">Runtimes:</strong> Node.js, Bun (high throughput)</p>
              <p><strong className="text-slate-800 dark:text-slate-200 font-medium">Streaming:</strong> WebSockets, Server-Sent Events</p>
              <p><strong className="text-slate-800 dark:text-slate-200 font-medium">APIs:</strong> RESTful APIs, RPC protocols</p>
              <p><strong className="text-slate-800 dark:text-slate-200 font-medium">Data:</strong> Eventual consistency, CRDT stores</p>
            </div>
          </div>
          {/* Column 4 */}
          <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl hover:border-slate-300 dark:hover:border-slate-700 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="material-symbols-outlined text-[#e11d48] text-[22px]">terminal</span>
              <h4 className="text-base font-bold text-slate-950 dark:text-white">Infra &amp; Operations</h4>
            </div>
            <div className="space-y-2 text-slate-600 dark:text-slate-400 text-[13px]">
              <p><strong className="text-slate-800 dark:text-slate-200 font-medium">Containers:</strong> Docker, multi-stage builds</p>
              <p><strong className="text-slate-800 dark:text-slate-200 font-medium">CI/CD:</strong> GitHub Actions automated pipelines</p>
              <p><strong className="text-slate-800 dark:text-slate-200 font-medium">VCS:</strong> Git, trunk-based delivery</p>
              <p><strong className="text-slate-800 dark:text-slate-200 font-medium">Systems:</strong> Linux environments, memory telemetry</p>
            </div>
          </div>
        </div>
      </section>

      {/* PAPERS & INSPIRATION (ARPIT-STYLE INDEX BAR) */}
      {/* <section className="p-6 md:p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
          <div className="text-lg font-bold text-slate-950 dark:text-white tracking-tight">Foundational Architecture Readings</div>
          <div className="font-mono text-xs text-slate-500 dark:text-slate-400">Systems • GPU • Runtimes</div>
        </div>
        <div className="divide-y divide-slate-100 dark:divide-slate-800">
          <a className="py-3.5 flex items-center justify-between text-slate-700 dark:text-slate-300 hover:text-[#e11d48] dark:hover:text-[#e11d48] transition-colors text-sm group" href="#">
            <span className="font-medium group-hover:translate-x-1 transition-transform">Conflict-Free Replicated Data Types: Synchronizing Spatial State at Scale</span>
            <span className="font-mono text-xs text-slate-500 dark:text-slate-400 hidden sm:inline">CRDTs / Architecture ↗</span>
          </a>
          <a className="py-3.5 flex items-center justify-between text-slate-700 dark:text-slate-300 hover:text-[#e11d48] dark:hover:text-[#e11d48] transition-colors text-sm group" href="#">
            <span className="font-medium group-hover:translate-x-1 transition-transform">WebGPU Memory Hierarchy: Structuring Uniform Buffers for Zero Cache Stalls</span>
            <span className="font-mono text-xs text-slate-500 dark:text-slate-400 hidden sm:inline">GPU / WGSL ↗</span>
          </a>
          <a className="py-3.5 flex items-center justify-between text-slate-700 dark:text-slate-300 hover:text-[#e11d48] dark:hover:text-[#e11d48] transition-colors text-sm group" href="#">
            <span className="font-medium group-hover:translate-x-1 transition-transform">Zero-Bundle Static Hydration: Offloading Compute from Edge to Browser Core</span>
            <span className="font-mono text-xs text-slate-500 dark:text-slate-400 hidden sm:inline">React / RSC ↗</span>
          </a>
        </div>
      </section> */}
    </div>
  );
}
