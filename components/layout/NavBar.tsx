"use client";

import { memo, useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SocialLinks from "./SocialLinks";
import NavLinks from "./NavLinks";
import Logo from "../Logo";
import { navLinks } from "@/constants";
import Link from "next/link";
import useIsActiveLink from "@/hooks/useIsActiveLink";
import { usePathname } from "next/navigation";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();
    const isActive = useIsActiveLink();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Prevent body scrolling when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    // Close menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
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
    }, [pathname]);

    return (
        <header
            className={`sticky top-0 w-full z-[60] transition-all duration-300 ${
                scrolled || isOpen
                    ? "bg-[#050814] border-b border-cyan-500/10 shadow-lg shadow-black/40"
                    : "bg-transparent backdrop-blur-sm"
            }`}
            style={{
                backgroundColor: scrolled || isOpen ? "#050814" : undefined
            }}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between h-16 sm:h-20 px-4 sm:px-6 lg:px-8">
                <Logo onClick={() => setIsOpen(false)} />
                
                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
                    {navLinks.map((item) => {
                        const active = isActive(item.href);
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={(e) => handleNavClick(e, item.href)}
                            >
                                <motion.span
                                    className={`text-sm font-medium px-3.5 py-2 rounded-md transition-all duration-200 block ${
                                        active
                                            ? "text-cyan-400 bg-cyan-500/10 shadow-[0_0_12px_rgba(6,182,212,0.2)]"
                                            : "text-slate-300 hover:text-cyan-400 hover:bg-cyan-500/5"
                                    }`}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {item.label}
                                </motion.span>
                            </Link>
                        );
                    })}
                    <div className="pl-3">
                        <Link
                            href="/resume"
                            className="inline-flex items-center justify-center px-4 py-1.5 rounded-lg text-xs sm:text-sm font-medium border border-cyan-400/80 text-cyan-400 hover:bg-cyan-400/10 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all duration-300"
                        >
                            Resume
                        </Link>
                    </div>
                </nav>

                {/* Mobile Hamburger Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden relative z-[70] inline-flex flex-col items-center justify-center w-10 h-10 p-2 rounded-lg bg-slate-900 border border-cyan-500/20 text-cyan-400 cursor-pointer focus:outline-none"
                    aria-label="Toggle menu"
                    aria-expanded={isOpen}
                >
                    <div className="relative w-6 h-5 flex flex-col justify-between">
                        <motion.span
                            animate={{
                                rotate: isOpen ? 45 : 0,
                                y: isOpen ? 8 : 0,
                            }}
                            transition={{ duration: 0.3 }}
                            className="w-full h-[2px] bg-cyan-400 rounded-full origin-center"
                        />
                        <motion.span
                            animate={{
                                opacity: isOpen ? 0 : 1,
                            }}
                            transition={{ duration: 0.2 }}
                            className="w-full h-[2px] bg-cyan-400 rounded-full"
                        />
                        <motion.span
                            animate={{
                                rotate: isOpen ? -45 : 0,
                                y: isOpen ? -8 : 0,
                            }}
                            transition={{ duration: 0.3 }}
                            className="w-full h-[2px] bg-cyan-400 rounded-full origin-center"
                        />
                    </div>
                </button>
            </div>

            {/* Mobile Navigation Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.25 }}
                        className="fixed inset-x-0 top-16 sm:top-20 bottom-0 z-[60] bg-[#050814] px-6 py-8 md:hidden border-b border-cyan-500/20 flex flex-col justify-between overflow-y-auto"
                        style={{ backgroundColor: "#050814" }}
                    >
                        <div className="flex flex-col space-y-4">
                            <NavLinks setSheetOpen={setIsOpen} />
                            <div className="pt-4">
                                <Link
                                    href="/resume"
                                    onClick={() => setIsOpen(false)}
                                    className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded-lg text-sm font-semibold border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 transition-all duration-300"
                                >
                                    Resume
                                </Link>
                            </div>
                        </div>
                        <div className="pt-6 border-t border-slate-800/80">
                            <SocialLinks />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default memo(NavBar);
