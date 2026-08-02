import { skills } from "@/constants/techData";
import Image from "next/image";
import { memo } from "react";

const TechnologyIcon = ({ techIndex }: { techIndex: number }) => {
    const skill = skills[techIndex];
    if (!skill) return null;

    if (skill.url) {
        return (
            <Image
                key={techIndex}
                src={skill.url}
                alt={skill.name}
                width={80}
                height={20}
                className="h-6 w-auto cursor-pointer"
            />
        );
    }

    return (
        <span className="px-2 py-0.5 rounded text-xs font-mono bg-[#070d1e] text-slate-300 border border-slate-700">
            {skill.name}
        </span>
    );
};

export default memo(TechnologyIcon);