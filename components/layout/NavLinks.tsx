import { navLinks } from '@/constants';
import useIsActiveLink from '@/hooks/useIsActiveLink';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Dispatch, memo, SetStateAction, useCallback } from 'react';

import { usePathname } from 'next/navigation';

const NavLink = ({
    href,
    children,
    isActive = false,
    index,
    onClick
}: {
    href: string;
    children: React.ReactNode;
    isActive?: boolean;
    index: number;
    onClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}) => (
    <Link href={href} onClick={(e) => onClick(e, href)}>
        <motion.span
            className={`text-2xl sm:text-3xl font-mono font-semibold tracking-tight
            ${isActive
                    ? 'text-cyan-400 drop-shadow-[0_0_10px_rgba(6,182,212,0.6)]'
                    : 'text-slate-200 hover:text-cyan-300'} 
            transition-all duration-300 block py-2`}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
                delay: index * 0.06,
                duration: 0.35,
                ease: 'easeOut'
            }}
        >
            {children}
        </motion.span>
    </Link>
);

const NavLinks = ({ setSheetOpen }: { setSheetOpen: Dispatch<SetStateAction<boolean>>; }) => {
    const pathname = usePathname();
    const isActive = useIsActiveLink();

    const handleLinkClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        setSheetOpen(false);
        if (href.startsWith("/#") || href.startsWith("#")) {
            const targetId = href.replace("/#", "").replace("#", "");
            if (pathname === "/" || pathname === "") {
                const element = document.getElementById(targetId);
                if (element) {
                    e.preventDefault();
                    element.scrollIntoView({ behavior: "smooth" });
                    window.history.pushState(null, "", `/#${targetId}`);
                }
            }
        }
    }, [pathname, setSheetOpen]);

    return (
        <motion.nav
            className="flex flex-col mt-6 space-y-1"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
        >
            {navLinks.map(({ href, label }, index) => (
                <NavLink
                    key={href}
                    href={href}
                    isActive={isActive(href)}
                    index={index}
                    onClick={handleLinkClick}
                >
                    {label}
                </NavLink>
            ))}
        </motion.nav>
    );
};

export default memo(NavLinks);