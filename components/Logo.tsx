'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { memo, useCallback } from 'react';
import { usePathname } from 'next/navigation';

const Logo = ({ onClick }: { onClick?: () => void; }) => {
    const pathname = usePathname();

    const handleClick = useCallback((e: React.MouseEvent) => {
        if (onClick) onClick();
        if (pathname === '/' || pathname === '') {
            const homeElem = document.getElementById('home');
            if (homeElem) {
                e.preventDefault();
                homeElem.scrollIntoView({ behavior: 'smooth' });
                window.history.pushState(null, '', '/#home');
            }
        }
    }, [onClick, pathname]);

    return (
        <Link href="/#home" onClick={handleClick} className="flex items-center space-x-2 z-50 group">
            <motion.div
                className="font-mono font-bold text-xl sm:text-2xl tracking-tight text-white flex items-center"
                whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.95 }}
            >
                <span className="text-cyan-400 group-hover:text-cyan-300 transition-colors drop-shadow-[0_0_12px_rgba(6,182,212,0.6)]">
                    &lt;
                </span>
                <span className="bg-gradient-to-r from-white via-slate-100 to-cyan-200 bg-clip-text text-transparent px-0.5">
                    HAA
                </span>
                <span className="text-cyan-400 group-hover:text-cyan-300 transition-colors drop-shadow-[0_0_12px_rgba(6,182,212,0.6)]">
                    /&gt;
                </span>
            </motion.div>
        </Link>
    );
};

export default memo(Logo);