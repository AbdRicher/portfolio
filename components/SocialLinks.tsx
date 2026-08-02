'use client';

import { socialMediaLinks } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import { useTooltip } from '@/hooks/useTooltip';
import { memo, lazy, Suspense } from 'react';
import { motion } from "framer-motion";
import { containerVariants, techIconVariants } from '@/style';

const AnimatedTooltip = lazy(() => import("./AnimatedTooltip"));

const SocialLinks = () => {
    const { rotate, translateX, handleHover, hoveredItem, handleMouseMove } = useTooltip();

    return (
        <motion.ul
            variants={containerVariants}
            className="flex items-center gap-3.5"
            aria-label="Owner Social media links"
        >
            {socialMediaLinks.map((link, index) => (
                <motion.li
                    key={`${link.href}-${index}`}
                    className="relative flex items-center justify-center"
                    onMouseEnter={() => handleHover(link.href)}
                    onMouseLeave={() => handleHover(null)}
                    variants={techIconVariants}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={`Visit ${link.title}`}
                >
                    {hoveredItem === link.href && (
                        <Suspense fallback={null}>
                            <AnimatedTooltip
                                rotate={rotate}
                                translateX={translateX}
                                text={link.title}
                                show={hoveredItem === link.href}
                                isLink={true}
                            />
                        </Suspense>
                    )}

                    <Link
                        href={link.href}
                        className="flex items-center justify-center h-11 w-11 rounded-xl bg-[#0b1329]/90 border border-cyan-500/30 hover:border-cyan-400 hover:bg-cyan-500/10 hover:shadow-[0_0_16px_rgba(6,182,212,0.35)] transition-all duration-300 group"
                        target="_blank"
                        rel="noopener noreferrer"
                        prefetch={false}
                        onMouseMove={handleMouseMove}
                        aria-label={`Visit ${link.title}`}
                    >
                        <Image
                            src={link.icon}
                            alt={`${link.title} icon`}
                            width={20}
                            height={20}
                            loading="lazy"
                            className="w-5 h-5 object-contain opacity-80 group-hover:opacity-100 group-hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.8)] transition-all"
                        />
                    </Link>
                </motion.li>
            ))}
        </motion.ul>
    );
};

export default memo(SocialLinks);