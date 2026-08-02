import { memo } from "react";
import { socialMediaLinks } from "@/constants";
import Link from "next/link";
import Image from "next/image";

const SocialLinks = () => {
    return (
        <div className="flex items-center gap-3 w-full justify-center">
            {socialMediaLinks.map((link) => (
                <Link
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center h-10 w-10 rounded-lg bg-[#0b1329] border border-cyan-500/30 hover:border-cyan-400 hover:bg-cyan-500/10 text-cyan-400 transition-all duration-200"
                    aria-label={`Visit ${link.title}`}
                >
                    <Image
                        src={link.icon}
                        alt={`${link.title} icon`}
                        width={18}
                        height={18}
                        loading="lazy"
                        className="w-4 h-4 object-contain opacity-80 hover:opacity-100"
                    />
                </Link>
            ))}
        </div>
    );
};

export default memo(SocialLinks);
