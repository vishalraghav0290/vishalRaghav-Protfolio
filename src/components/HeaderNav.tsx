"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";

export function HeaderNav() {
  const pathname = usePathname();
  const [hash, setHash] = useState("");

  useEffect(() => {
    // Set initial hash when running on client
    setHash(window.location.hash);

    const handleHashChange = () => {
      setHash(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [pathname]); // re-run if pathname changes (e.g. going to a new page)

  const navLinks = [
    { name: "Overview", href: "/" },
    { name: "Architecture & Systems", href: "/#architecture" },
    { name: "Platform Work", href: "/platform-work" },
    { name: "Projects", href: "/#projects" },
    { name: "Learning & Notes", href: "/learning" },
  ];

  return (
    <nav className="hidden lg:flex items-center gap-7 text-[13px] font-medium text-slate-600 dark:text-gray-700">
      {navLinks.map((link) => {
        // Construct the full path of the current view
        const currentPath = pathname + hash;
        // It is active if the href matches exactly, OR if we are on href="/" and currentPath is just "/"
        const isActive = link.href === currentPath || (link.href === "/" && pathname === "/" && hash === "");

        return (
          <Link
            key={link.name}
            href={link.href}
            onClick={() => {
              // Ensure state updates immediately on click so the UI feels snappy
              if (link.href.includes('#')) {
                setHash('#' + link.href.split('#')[1]);
              } else {
                setHash('');
              }
            }}
            className={`transition-colors flex items-center gap-1.5 ${
              isActive
                ? "text-slate-950 dark:text-gray-950 font-semibold"
                : "hover:text-slate-950 dark:hover:text-gray-950"
            }`}
          >
            <span>{link.name}</span>
            {isActive && <span className="w-1 h-1 rounded-full bg-[#e11d48]"></span>}
          </Link>
        );
      })}
      
      <a className="hover:text-slate-950 dark:hover:text-gray-950 transition-colors" href="https://www.linkedin.com/in/vishal-raghav-dev/" target="_blank" rel="noopener noreferrer">Linkedin</a>
      <a className="hover:text-slate-950 dark:hover:text-gray-950 transition-colors font-mono" href="https://github.com/vishalraghav0290" rel="noopener noreferrer" target="_blank">GitHub</a>
      <ThemeToggle />
    </nav>
  );
}
