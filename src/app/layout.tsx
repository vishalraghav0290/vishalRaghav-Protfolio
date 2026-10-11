import type { Metadata } from "next";
import Link from "next/link";
import { Inter, JetBrains_Mono, Plus_Jakarta_Sans, Bungee_Hairline, Passero_One, Winky_Rough } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeToggle } from "@/components/ThemeToggle";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const winkyRough = Winky_Rough({
  variable: "--font-winky-rough",
  subsets: ["latin"],
  weight: ["400"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const bungeeHairline = Bungee_Hairline({
  variable: "--font-bungee-hairline",
  subsets: ["latin"],
  weight: ["400"],
});

const passeroOne = Passero_One({
  variable: "--font-passero-one",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Vishal Raghav — Systems Architecture & Engineering",
  description: "I am a Software Development Engineer (SDE), Systems Architect, and Performance Engineer focused on building distributed architecture, low-latency streaming pipelines, and GPU compute infrastructure.",
  icons: {
    icon: '/img.jpeg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} ${plusJakartaSans.variable} ${bungeeHairline.variable} ${passeroOne.variable} ${winkyRough.variable} bg-[#f8fafc] dark:bg-gray-600 text-[#0f172a] dark:text-white font-sans antialiased selection:bg-[#e11d48]/20 selection:text-[#e11d48] relative min-h-screen`}
      >
        <ThemeProvider>
          {/* Background Technical Grid & Ambient Glow */}
          <div className="fixed inset-0 pointer-events-none z-0 engineering-grid"></div>
          <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-rose-500/[0.035] blur-[140px] pointer-events-none rounded-full z-0"></div>

          {/* STICKY HEADER */}
          <header className="fixed top-0 left-0 right-0 w-full z-50 bg-white/85 dark:bg-gray-200/90 backdrop-blur-xl border-b border-slate-200/80 dark:border-gray-300 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
            <div className="h-16 max-w-[1480px] mx-auto px-6 md:px-8 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Link className="text-[17px] font-bold text-slate-900 dark:text-gray-950 tracking-tight flex items-center gap-2 group" href="/">
                  {/* <span className="w-2 h-2 rounded-full bg-[#e11d48] group-hover:scale-125 transition-transform"></span> */}
                  <span className="font-cursive text-2xl">Vishal Raghav</span>
                </Link>
                {/* <span className="hidden sm:inline-block font-mono text-[12px] text-slate-500 font-medium">// systems architect</span> */}
              </div>
              <nav className="hidden lg:flex items-center gap-7 text-[13px] font-medium text-slate-600 dark:text-gray-700">
                <Link className="text-slate-950 dark:text-gray-950 font-semibold transition-colors flex items-center gap-1.5" href="/">
                  <span>Overview</span>
                  <span className="w-1 h-1 rounded-full bg-[#e11d48]"></span>
                </Link>
                <Link className="hover:text-slate-950 dark:hover:text-gray-950 transition-colors" href="/#architecture">Architecture &amp; Systems</Link>
                <Link className="hover:text-slate-950 dark:hover:text-gray-950 transition-colors" href="/#projects">Projects</Link>
                <Link className="hover:text-slate-950 dark:hover:text-gray-950 transition-colors" href="/#notes">Writing &amp; Notes</Link>
                <a className="hover:text-slate-950 dark:hover:text-gray-950 transition-colors" href="https://www.linkedin.com/in/vishal-raghav-747a61251/">Linkdin</a>
                <a className="hover:text-slate-950 dark:hover:text-gray-950 transition-colors font-mono" href="https://github.com/vishalraghav0290" rel="noopener noreferrer" target="_blank">GitHub</a>
                <ThemeToggle />
              </nav>
            </div>
          </header>

          <main className="relative z-10 w-full pt-28 pb-20">
            {children}
          </main>

          {/* FOOTER */}
          <footer className="w-full bg-white dark:bg-gray-200 border-t border-slate-200 dark:border-gray-300 relative z-10 text-slate-600 dark:text-gray-700 font-inter shadow-[0_-1px_3px_rgba(0,0,0,0.02)]">
            <div className="max-w-[1120px] mx-auto px-6 md:px-8 py-16">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-slate-200 dark:border-slate-800">
                {/* Frontend Core */}
                <div className="space-y-3">
                  <h3 className="font-mono text-xs uppercase tracking-wider text-slate-900 dark:text-white font-bold">Frontend Core</h3>
                  <ul className="space-y-2 text-xs font-mono">
                    <li><a className="hover:text-slate-900 dark:hover:text-white transition-colors" href="#">React.js &amp; Next.js Ecosystem</a></li>
                    <li><a className="hover:text-slate-900 dark:hover:text-white transition-colors" href="#">TypeScript &amp; ES6+ JavaScript</a></li>
                    <li><a className="hover:text-slate-900 dark:hover:text-white transition-colors" href="#">Tailwind CSS &amp; Responsive UI</a></li>
                    <li><a className="hover:text-slate-900 dark:hover:text-white transition-colors" href="#">Redux Toolkit &amp; State Management</a></li>
                  </ul>
                </div>
                {/* Backend Core */}
                <div className="space-y-3">
                  <h3 className="font-mono text-xs uppercase tracking-wider text-slate-900 dark:text-white font-bold">Backend Core</h3>
                  <ul className="space-y-2 text-xs font-mono">
                    <li><a className="hover:text-slate-900 dark:hover:text-white transition-colors" href="#">RESTful API Integrations</a></li>
                    <li><a className="hover:text-slate-900 dark:hover:text-white transition-colors" href="#">Node.js &amp; Bun Runtimes</a></li>
                    <li><a className="hover:text-slate-900 dark:hover:text-white transition-colors" href="#">SQL &amp; Relational Databases</a></li>
                    <li><a className="hover:text-slate-900 dark:hover:text-white transition-colors" href="#">Docker &amp; CI/CD Deployment</a></li>
                  </ul>
                </div>
                {/* Connect & Socials */}
                <div className="space-y-3">
                  <h3 className="font-mono text-xs uppercase tracking-wider text-slate-900 dark:text-white font-bold">Connect &amp; Socials</h3>
                  <div className="flex flex-wrap gap-2">
                    <a className="inline-flex items-center px-3 py-1.5 rounded-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 font-mono text-xs text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors shadow-sm" href="https://github.com/vishalraghav0290" rel="noopener noreferrer" target="_blank">
                      <span>GitHub</span>
                      <span className="text-slate-400 ml-1.5">(repos)</span>
                    </a>
                    <a className="inline-flex items-center px-3 py-1.5 rounded-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 font-mono text-xs text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors shadow-sm" href="https://www.linkedin.com/in/vishal-raghav-747a61251/" rel="noopener noreferrer" target="_blank">
                      <span>LinkedIn</span>
                    </a>
                    <a className="inline-flex items-center px-3 py-1.5 rounded-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 font-mono text-xs text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors shadow-sm" href="https://x.com/vishalRaghav666" rel="noopener noreferrer" target="_blank">
                      <span>X / Twitter</span>
                    </a>
                    <a className="inline-flex items-center px-3 py-1.5 rounded-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 font-mono text-xs text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors shadow-sm" href="https://hashnode.com" rel="noopener noreferrer" target="_blank">
                      <span>Hashnode</span>
                    </a>
                  </div>
                  <p className="font-mono text-[11px] text-slate-500 pt-2">
                    PGP Key: <span className="text-slate-800 dark:text-slate-300 font-medium">9F2B 4A71 88CD 3E01</span>
                  </p>
                </div>
              </div>
              {/* Bottom Bar */}
              <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs text-slate-500">
                <div className="text-center md:text-left">
                  © 2026 Vishal Raghav. Built for high performance &amp; scale.
                </div>
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    Latency: &lt;0.8ms
                  </span>
                  <span className="text-slate-300 dark:text-slate-700">•</span>
                  <span>Plain Monospace / Editorial System</span>
                </div>
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
