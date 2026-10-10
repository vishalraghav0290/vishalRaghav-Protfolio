'use client';

import { useState } from 'react';

type Note = {
  date: string;
  title: string;
  link: string;
  published: boolean;
};

export default function ArchitectureNotes({ notes }: { notes: Note[] }) {
  const [animatingIndex, setAnimatingIndex] = useState<number | null>(null);

  const handleClick = (e: React.MouseEvent, index: number, published: boolean) => {
    if (!published) {
      e.preventDefault();
      setAnimatingIndex(index);
      setTimeout(() => setAnimatingIndex(null), 300); // match animation duration
    }
  };

  return (
    <div className="space-y-4">
      {notes.map((note, i) => (
        <div key={i} className="flex items-baseline gap-3 p-2.5 rounded-lg hover:bg-white dark:hover:bg-slate-900 border border-transparent hover:border-slate-200 dark:hover:border-slate-800 hover:shadow-sm transition-all group">
          <span 
            className={`font-mono text-xs flex-shrink-0 w-24 transition-colors ${animatingIndex === i ? 'animate-shake text-[#e11d48] dark:text-[#e11d48] font-bold' : 'text-slate-500 dark:text-slate-400'}`}
          >
            {note.date}
          </span>
          <span className="text-slate-300 dark:text-slate-700 font-mono">:</span>
          <a 
            href={note.published ? note.link : '#'} 
            onClick={(e) => handleClick(e, i, note.published)}
            className={`text-sm hover:text-[#e11d48] dark:hover:text-[#e11d48] transition-colors truncate font-semibold ${!note.published ? 'text-slate-500 dark:text-slate-500 hover:text-slate-500 dark:hover:text-slate-500 cursor-not-allowed' : 'text-slate-800 dark:text-slate-200'}`}
            target={note.published ? "_blank" : "_self"}
            rel="noopener noreferrer"
          >
            {note.title}
          </a>
        </div>
      ))}
    </div>
  );
}
