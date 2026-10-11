import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Academic History & Ledger",
  description:
    "Academic ledger of Vishal Raghav: Master of Computer Applications (MCA) at Manipal University Jaipur, Bachelor of Computer Applications (BCA) at Mangalayatan University.",
  alternates: {
    canonical: "/education",
  },
  openGraph: {
    title: "Academic History & Ledger | Vishal Raghav",
    description:
      "Formal academic foundations in computer science, distributed algorithms, and system engineering.",
    url: "/education",
  },
};

export default function EducationPage() {
  return (
    <div className="w-full relative overflow-hidden font-sans">
      <div className="relative max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 pb-16 sm:pb-20 lg:pb-24">
        <div className="relative flex gap-8 md:gap-14 lg:gap-20">

          {/* Left delicate vertical timeline line */}
          <div className="relative flex-none hidden sm:flex flex-col items-center">
            <div className="w-px h-full bg-slate-200 dark:bg-slate-800 relative flex flex-col justify-end">
              <div className="absolute top-0 w-full bg-slate-200 dark:bg-slate-800 h-[340px]"></div>
              <div className="absolute top-[340px] bottom-0 w-full bg-[#e11d48]"></div>

              <div className="absolute top-[340px] -left-[5.5px] flex items-center justify-center">
                <span className="absolute w-4 h-4 rounded-full bg-[#e11d48]/25 animate-ping"></span>
                <span className="relative w-3 h-3 rounded-full bg-[#e11d48] border-2 border-white dark:border-slate-950 shadow-[0_0_8px_rgba(225,29,72,0.6)]"></span>
              </div>
              <div className="absolute top-[610px] -left-[3px] w-1.5 h-1.5 rounded-full bg-[#e11d48]/70"></div>
              <div className="absolute top-[880px] -left-[3px] w-1.5 h-1.5 rounded-full bg-[#e11d48]/70"></div>
              <div className="absolute bottom-8 -left-[3px] w-1.5 h-1.5 rounded-full bg-[#e11d48]/70"></div>
            </div>
          </div>

          {/* Main Content Column */}
          <div className="flex-1 space-y-16 md:space-y-24">

            {/* Header */}
            <div className="space-y-5 pb-6 border-b border-slate-200 dark:border-slate-800">
              <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-xs">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-[#e11d48] font-bold tracking-wider uppercase">ACADEMIC LEDGER</span>
                </div>
                <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                  <span className="w-2 h-2 rounded-full bg-[#e11d48] animate-pulse"></span>
                  <span>RECORD_STATUS: IN_ACCUMULATION</span>
                </div>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
                “My Academic Journey”
              </h1>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1.5"><span className="text-slate-400 dark:text-slate-500 uppercase">FOCUS:</span>Problem Solving &amp; Compute Fundamentals</span>
                <span className="hidden sm:inline text-slate-300 dark:text-slate-600">|</span>
                <span className="flex items-center gap-1.5"><span className="text-slate-400 dark:text-slate-500 uppercase">SPAN:</span> 2005 — PRESENT</span>
                <span className="hidden sm:inline text-slate-300 dark:text-slate-600">|</span>
              </div>
            </div>
            <section className="space-y-3 pt-2">
              <div className="space-y-5 pb-6 ">
                <h6 className="text-1xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
                  “figuring out what else I can do to delay employment”
                </h6>
              </div>
            </section>
            {/* Post Graduation */}
            <section className="space-y-3 pt-2">
              <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-xs">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-rose-50 dark:bg-rose-950/30 text-rose-700 dark:text-rose-400 border border-rose-200 dark:border-rose-900 font-bold tracking-wide">POSTGRADUATE</span>
                  <span className="inline-flex items-center gap-1.5 text-[#e11d48] font-semibold"><span className="w-1.5 h-1.5 rounded-full bg-[#e11d48] animate-pulse"></span> [Pursuing / In Progress]</span>
                </div>
                <div className="text-slate-500 dark:text-slate-400 font-medium">2023 — Present</div>
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white hover:text-[#e11d48] transition-colors">Manipal University Jaipur</h2>
                <div className="flex flex-wrap items-center gap-2 sm:gap-4 font-mono text-xs text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-1.5"><span className="text-slate-400 dark:text-slate-500 uppercase tracking-wider">Degree:</span><span className="text-slate-900 dark:text-white font-semibold">Master of Computer Applications (MCA)</span></div>
                  <span className="text-slate-300 dark:text-slate-600">/</span>
                  <div className="flex items-center gap-1.5"><span className="text-slate-400 dark:text-slate-500 uppercase tracking-wider">CGPA:</span><span className="text-slate-900 dark:text-white font-semibold">7.2 / 10.0</span></div>
                  <span className="text-slate-300 dark:text-slate-600">/</span>
                  <div className="flex items-center gap-1.5"><span className="text-slate-400 dark:text-slate-500 uppercase tracking-wider">Location:</span><span className="text-slate-900 dark:text-white font-medium">Jaipur, Rajasthan, IN</span></div>
                </div>
                <div className="pt-1">
                  <p className="font-mono text-xs text-slate-500 dark:text-slate-400"><span className="text-slate-400 dark:text-slate-500 uppercase">ACHIEVEMENTS:</span> “Making Connections , Got 1st Job ”</p>
                  <p className="font-mono text-xs text-slate-500 dark:text-slate-400"><span className="text-slate-400 dark:text-slate-500 uppercase">OUTCOME:</span> "waiting for pass Certificate"</p>
                </div>
                <div className="flex flex-wrap gap-2 pt-1 font-mono text-xs">
                  <span className="px-2 py-0.5 rounded bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800">Advanced Algorithms</span>
                  <span className="px-2 py-0.5 rounded bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800">Cloud Architecture</span>
                  <span className="px-2 py-0.5 rounded bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800">Distributed Datastores</span>
                </div>
              </div>
            </section>

            {/* Under Graduation */}
            <section className="space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-xs">
                <div><span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-bold tracking-wide">UNDERGRADUATE</span></div>
                <div className="text-slate-500 dark:text-slate-400 font-medium">Completed 2025 (2022 — 2025)</div>
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white hover:text-[#e11d48] transition-colors">Mangalayatan University</h2>
                <div className="flex flex-wrap items-center gap-2 sm:gap-4 font-mono text-xs text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-1.5"><span className="text-slate-400 dark:text-slate-500 uppercase tracking-wider">Degree:</span><span className="text-slate-900 dark:text-white font-semibold">Bachelor of Computer Applications (BCA)</span></div>
                  <span className="text-slate-300 dark:text-slate-600">/</span>
                  <div className="flex items-center gap-1.5"><span className="text-slate-400 dark:text-slate-500 uppercase tracking-wider">CGPA:</span><span className="text-slate-900 dark:text-white font-semibold">7.5 / 10.0</span></div>
                  <span className="text-slate-300 dark:text-slate-600">/</span>
                  <div className="flex items-center gap-1.5"><span className="text-slate-400 dark:text-slate-500 uppercase tracking-wider">Location:</span><span className="text-slate-900 dark:text-white font-medium">Beswan, Aligarh, UP</span></div>
                </div>
                <div className="pt-1">
                  <p className="font-mono text-xs text-slate-500 dark:text-slate-400"><span className="text-slate-400 dark:text-slate-500 uppercase">ACHIEVEMENTS:</span> “Stay Positive in Era of AI , crack 1 internship and 1 freelance , all 6 sem marksheet”</p>
                  <p className="font-mono text-xs text-slate-500 dark:text-slate-400"><span className="text-slate-400 dark:text-slate-500 uppercase">OUTCOME:</span> “claimed : UG Pass Certificate”</p>
                </div>
                <div className="flex flex-wrap gap-2 pt-1 font-mono text-xs">
                  <span className="px-2 py-0.5 rounded bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800">Operating Systems</span>
                  <span className="px-2 py-0.5 rounded bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800">Computer Networks</span>
                  <span className="px-2 py-0.5 rounded bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800">Data Structures</span>
                </div>
              </div>
            </section>

            {/* Higher Secondary */}
            <section className="space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-xs">
                <div><span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-bold tracking-wide">HIGHER SECONDARY</span></div>
                <div className="text-slate-500 dark:text-slate-400 font-medium">Completed 2022 (2020 — 2022)</div>
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white hover:text-[#e11d48] transition-colors">Shantineketan World School</h2>
                <div className="flex flex-wrap items-center gap-2 sm:gap-4 font-mono text-xs text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-1.5"><span className="text-slate-400 dark:text-slate-500 uppercase tracking-wider">Stream:</span><span className="text-slate-900 dark:text-white font-medium">Physics, Chemistry, Biology (PCB)</span></div>
                  <span className="text-slate-300 dark:text-slate-600">/</span>
                  <div className="flex items-center gap-1.5"><span className="text-slate-400 dark:text-slate-500 uppercase tracking-wider">Board:</span><span className="text-slate-900 dark:text-white font-semibold uppercase">CBSE</span></div>
                  <span className="text-slate-300 dark:text-slate-600">/</span>
                  <div className="flex items-center gap-1.5"><span className="text-slate-400 dark:text-slate-500 uppercase tracking-wider">Location:</span><span className="text-slate-900 dark:text-white font-medium">Aligarh, UP</span></div>
                </div>
                <div className="pt-1">
                  <p className="font-mono text-xs text-slate-500 dark:text-slate-400"><span className="text-slate-400 dark:text-slate-500 uppercase">Achievements:</span>Luckily Passed </p>
                  <p className="font-mono text-xs text-slate-500 dark:text-slate-400"><span className="text-slate-400 dark:text-slate-500 uppercase">OUTCOME:</span> Somehow got the 12 marksheet</p>

                </div>
                <div className="flex flex-wrap gap-2 pt-1 font-mono text-xs">
                  <span className="px-2 py-0.5 rounded bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800">Senior Secondary (Class XII)</span>
                  <span className="px-2 py-0.5 rounded bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800">Science Faculty</span>
                </div>
              </div>
            </section>

            {/* Secondary School */}
            <section className="space-y-3 pb-8">
              <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-xs">
                <div><span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-bold tracking-wide">SECONDARY SCHOOL</span></div>
                <div className="text-slate-500 dark:text-slate-400 font-medium">Completed 2020 (2018 — 2020)</div>
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white hover:text-[#e11d48] transition-colors">St. Joseph Senior Secondary School</h2>
                <div className="flex flex-wrap items-center gap-2 sm:gap-4 font-mono text-xs text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-1.5"><span className="text-slate-400 dark:text-slate-500 uppercase tracking-wider">Curriculum:</span><span className="text-slate-900 dark:text-white font-medium">General Core</span></div>
                  <span className="text-slate-300 dark:text-slate-600">/</span>
                  <div className="flex items-center gap-1.5"><span className="text-slate-400 dark:text-slate-500 uppercase tracking-wider">Board:</span><span className="text-slate-900 dark:text-white font-semibold uppercase">ICSE</span></div>
                  <span className="text-slate-300 dark:text-slate-600">/</span>
                  <div className="flex items-center gap-1.5"><span className="text-slate-400 dark:text-slate-500 uppercase tracking-wider">Location:</span><span className="text-slate-900 dark:text-white font-medium">Jahangirabad, UP</span></div>
                </div>
                <div className="pt-1">
                  <p className="font-mono text-xs text-slate-500 dark:text-slate-400"><span className="text-slate-400 dark:text-slate-500 uppercase">Achievements:</span>Succesfully pased 10th </p>
                  <p className="font-mono text-xs text-slate-500 dark:text-slate-400"><span className="text-slate-400 dark:text-slate-500 uppercase">OUTCOME:</span> “received 10th marksheet”</p>
                </div>
                <div className="flex flex-wrap gap-2 pt-1 font-mono text-xs">
                  <span className="px-2 py-0.5 rounded bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800">Matriculation (Class X)</span>
                  <span className="px-2 py-0.5 rounded bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800">Foundational Sciences</span>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}
