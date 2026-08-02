"use client";

import { memo } from "react";
import Link from "next/link";
import { profile } from "@/constants";

const PdfViewer = ({ url = "/assets/resume.pdf" }: { url?: string }) => {
  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col items-center pt-24 pb-16 px-4">
      {/* Top Header Card */}
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4 p-5 rounded-2xl bg-[#0b1329]/90 border border-cyan-500/30 backdrop-blur-md shadow-[0_4px_30px_rgba(6,182,212,0.15)] mb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
            <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {profile.name} — Curriculum Vitae
            </h1>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 font-mono">
            {profile.title} · {profile.location}
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/"
            className="px-4 py-2 rounded-xl text-xs sm:text-sm font-medium text-slate-300 bg-[#070d1e] border border-slate-700 hover:border-cyan-400 hover:text-cyan-300 transition-all duration-200"
          >
            ← Back Home
          </Link>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl text-xs sm:text-sm font-medium text-slate-200 bg-slate-800 border border-slate-700 hover:bg-slate-700 hover:text-white transition-all duration-200 flex items-center gap-1.5"
          >
            <span>Open in New Tab</span>
            <span className="font-mono text-xs">↗</span>
          </a>
          <a
            href={url}
            download="Hafiz_Abdullah_Amjad_Resume.pdf"
            className="px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.7)] transition-all duration-200 flex items-center gap-1.5"
          >
            <span>Download PDF</span>
            <span>⬇</span>
          </a>
        </div>
      </div>

      {/* PDF Viewport Frame */}
      <div className="w-full h-[78vh] min-h-[600px] rounded-2xl bg-[#070d1e] border border-cyan-500/20 overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.6)] relative flex flex-col">
        <object
          data={`${url}#toolbar=1&navpanes=0&scrollbar=1`}
          type="application/pdf"
          className="w-full h-full"
        >
          <iframe
            src={`${url}#toolbar=1&navpanes=0`}
            className="w-full h-full border-none"
            title={`${profile.name} Resume`}
          >
            <div className="flex flex-col items-center justify-center h-full p-8 text-center bg-[#070d1e] text-slate-300">
              <p className="text-lg font-semibold text-white mb-2">
                Unable to display PDF directly in your browser.
              </p>
              <p className="text-sm text-slate-400 mb-6">
                You can download the resume or open it in a dedicated viewer.
              </p>
              <a
                href={url}
                download="Hafiz_Abdullah_Amjad_Resume.pdf"
                className="px-6 py-3 rounded-xl font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors"
              >
                Download Resume PDF ⬇
              </a>
            </div>
          </iframe>
        </object>
      </div>
    </div>
  );
};

export default memo(PdfViewer);