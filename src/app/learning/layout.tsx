import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Continuous Engineering & Learning",
  description:
    "Engineering research, GenAI cohort studies, advanced algorithmic mastery, and technical architecture notes by Vishal Raghav.",
  alternates: {
    canonical: "/learning",
  },
  openGraph: {
    title: "Continuous Engineering & Learning | Vishal Raghav",
    description:
      "Deep dives into production agentic workflows, vector architectures, LLMs, and DSA scalability foundations.",
    url: "/learning",
  },
};

export default function LearningLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
