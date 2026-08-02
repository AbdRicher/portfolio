import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

const useIsActiveLink = () => {
    const pathname = usePathname();
    const [activeSection, setActiveSection] = useState<string>("home");

    useEffect(() => {
        if (pathname !== '/' && pathname !== '') return;
        const sectionIds = ["home", "about", "skills", "projects", "experience", "education", "contact"];
        
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 220;
            for (let i = sectionIds.length - 1; i >= 0; i--) {
                const section = document.getElementById(sectionIds[i]);
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(sectionIds[i]);
                    break;
                }
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, [pathname]);

    const isActive = useCallback(
        (href: string) => {
            if (href.startsWith('/#') || href.startsWith('#')) {
                const sectionId = href.replace('/#', '').replace('#', '');
                return (pathname === '/' || pathname === '') && activeSection === sectionId;
            }
            if (href === '/' && pathname === '/') return true; 
            if (pathname === href) return true; 
            if (href !== '/' && pathname.startsWith(href)) return true;
            return false;
        },
        [pathname, activeSection]
    );

    return isActive;
};

export default useIsActiveLink;
