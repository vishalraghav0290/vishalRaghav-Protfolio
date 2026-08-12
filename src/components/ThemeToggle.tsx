"use client";

import { useThemeStore } from "@/store/useThemeStore";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, toggleTheme } = useThemeStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        aria-label="Toggle color mode"
        className="p-2 text-slate-600 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center justify-center"
        type="button"
      >
        <span className="material-symbols-outlined text-[18px]">dark_mode</span>
      </button>
    );
  }

  return (
    <button 
      aria-label="Toggle color mode" 
      onClick={toggleTheme}
      className="p-2 text-slate-600 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center justify-center" 
      type="button"
    >
      <span className="material-symbols-outlined text-[18px]">
        {theme === 'dark' ? 'light_mode' : 'dark_mode'}
      </span>
    </button>
  );
}
