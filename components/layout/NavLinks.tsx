import { navLinks } from '@/constants';
import useIsActiveLink from '@/hooks/useIsActiveLink';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Dispatch, memo, SetStateAction, useCallback } from 'react';

const NavLink = ({
    href,
    children,
    isActive = false,
    index
}: {
    href: string;
    children: React.ReactNode;
    isActive?: boolean;
    index: number;
}) => (
    <Link href={href}>
        <motion.span
            className={`text-3xl sm:text-4xl font-mono font-semibold tracking-tight
            ${isActive
                    ? 'text-cyan-400 drop-shadow-[0_0_10px_rgba(6,182,212,0.6)]'
                    : 'text-slate-200 hover:text-cyan-300'} 
            transition-all duration-300 block py-2`}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
                delay: index * 0.08,
                duration: 0.4,
                ease: 'easeOut'
            }}
        >
            {children}
        </motion.span>
    </Link>
);

const NavLinks = ({ setSheetOpen }: { setSheetOpen: Dispatch<SetStateAction<boolean>>; }) => {
    const isActive = useIsActiveLink();

    const handleClick = useCallback((e: React.MouseEvent<HTMLElement>) => {
        const target = e.target as HTMLElement;
        if (target.tagName === 'SPAN' || target.tagName === 'A') {
            setSheetOpen(false);
        }
    }, [setSheetOpen]);

    return (
        <motion.nav
            className="flex flex-col mt-8 space-y-2"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            onClick={handleClick}
        >
            {navLinks.map(({ href, label }, index) => (
                <NavLink
                    key={href}
                    href={href}
                    isActive={isActive(href)}
                    index={index}
                >
                    {label}
                </NavLink>
            ))}
        </motion.nav>
    );
};

export default memo(NavLinks);