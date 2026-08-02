'use client';

import { profile } from '@/constants';
import { memo } from 'react';

const Footer = () => {
  return (
    <footer className="w-full py-8 border-t border-slate-900 bg-[#04060f] text-center text-xs font-mono text-slate-500">
      <div className="max-w-7xl mx-auto px-4">
        <p>
          Designed &amp; built by <span className="text-cyan-400 font-semibold">{profile.name}</span> · 2026
        </p>
      </div>
    </footer>
  );
};

export default memo(Footer);
