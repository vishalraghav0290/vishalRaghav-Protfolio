import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Resume & Curriculum Vitae",
  description:
    "Curriculum Vitae and professional engineering resume of Vishal Raghav: Software Development Engineer specializing in Next.js, React, distributed systems, and AI engineering.",
  alternates: {
    canonical: "/resume",
  },
  openGraph: {
    title: "Resume & Curriculum Vitae | Vishal Raghav",
    description:
      "Professional experience, technical skills matrix, core competencies, and background of Vishal Raghav.",
    url: "/resume",
  },
};

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
