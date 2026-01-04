"use client";

import { useState } from "react";
import PDFViewer from "./PDFViewer";

export interface Paper {
  id: string;
  title: string;
  description: string;
  year: number;
  authors?: string[];
  tags?: string[];
  pdfPath: string;
}

interface PaperCardProps {
  paper: Paper;
}

export default function PaperCard({ paper }: PaperCardProps) {
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  return (
    <>
      <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-6 transition-all hover:border-slate-700 hover:bg-slate-900 hover:shadow-lg">
        <div className="mb-4">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-xl font-semibold text-slate-100">
              {paper.title}
            </h3>
            <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-medium text-slate-400">
              {paper.year}
            </span>
          </div>
          {paper.authors && paper.authors.length > 0 && (
            <p className="mb-2 text-sm text-slate-400">
              {paper.authors.join(", ")}
            </p>
          )}
          {paper.description && (
            <p className="text-slate-400 text-sm leading-relaxed">
              {paper.description}
            </p>
          )}
        </div>

        {paper.tags && paper.tags.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-2">
            {paper.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-400"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="flex gap-3">
          <button
            onClick={() => setIsViewerOpen(true)}
            className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
            View
          </button>
          <a
            href={paper.pdfPath}
            download
            className="inline-flex items-center gap-2 rounded-md border border-slate-700 bg-transparent px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:border-slate-600 hover:bg-slate-800 hover:text-white"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Download
          </a>
        </div>
      </div>

      {isViewerOpen && (
        <PDFViewer
          pdfPath={paper.pdfPath}
          title={paper.title}
          onClose={() => setIsViewerOpen(false)}
        />
      )}
    </>
  );
}

