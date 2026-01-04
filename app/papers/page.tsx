import PaperCard, { Paper } from "@/components/PaperCard";

export const metadata = {
  title: "Papers",
  description: "Research papers and publications",
};

// Sample papers data - replace with your actual papers
const papers: Paper[] = [
  {
    id: "1",
    title: "Undergraduate Thesis",
    description:
      "Undergraduate thesis on the feasibility of quantum-classical algorithms to solve combinatorial optimization NP-hard problems.",
    year: 2021,
    authors: ["Your Name", "Co-author Name"],
    tags: ["Research", "Academic", "Example"],
    pdfPath: "/papers/quantum-computation-thesis.pdf",
  },
  // Add more papers here
];

export default function PapersPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-12 space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-slate-100 sm:text-5xl">
          Papers & Publications
        </h1>
        <p className="text-lg text-slate-400">
          A collection of my research papers and academic publications
        </p>
      </div>

      {papers.length === 0 ? (
        <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-12 text-center">
          <p className="text-slate-400">No papers available yet.</p>
          <p className="mt-2 text-sm text-slate-500">
            Add your papers to the papers array in app/papers/page.tsx
          </p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {papers.map((paper) => (
            <PaperCard key={paper.id} paper={paper} />
          ))}
        </div>
      )}
    </div>
  );
}
