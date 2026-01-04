import React from "react";
import {Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 mt-16 bg-slate-950/80">
      <div className="mx-auto max-w-5xl px-4 py-6 text-sm text-gray-500 flex justify-between">
        <span>© {new Date().getFullYear()} Nico Coloma-Cook</span>
        <nav className="space-x-4">
          <a href="https://github.com/ndcolomacook17" className="hover:underline">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/nicolascolomacook/" className="hover:underline">
            <Linkedin size={24} />
          </a>
        </nav>
      </div>
    </footer>
  );
}