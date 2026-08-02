import { personSchema, siteNavigationSchema, websiteSchema } from "@/app/schema";
import HighlightBackground from "@/components/HighlightBackground";
import ThemeProvider from "@/components/layout/ThemeProvider";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "@/components/ui/toaster";
import { poppins } from "./fonts";
import Footer from "@/components/layout/Footer";
import NavBar from "@/components/layout/NavBar";
import type { RootLayoutProps } from "@/types";
import { cn } from "@/lib/utils";
import metadata from "./metadata";
import "@/style/globals.css";
import SplashCursor from "@/components/SplashCursor";
import GlowingCursorOrb from "@/components/ui/GlowingCursorOrb";
import AccessibilityWidget from "@/components/AccessibilityWidget";
import SchemaScripts from "@/components/SchemaScripts";

const layout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={cn(
          "antialiased relative remove-scrollbar",
          poppins.className
        )}
        suppressHydrationWarning={true}
      >
        <SplashCursor
          SPLAT_RADIUS={0.04}
          SPLAT_FORCE={1000}
          DENSITY_DISSIPATION={5.8}
          VELOCITY_DISSIPATION={3.2}
          CURL={1.5}
        />
        <GlowingCursorOrb />
        <SchemaScripts schemas={[personSchema, websiteSchema, siteNavigationSchema]} />
        <HighlightBackground>
          <AccessibilityWidget />
          <NavBar />
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
          >
            {children}
          </ThemeProvider>
        </HighlightBackground>
        <Footer />
        <Toaster />
        <Analytics debug={false} />
      </body>
    </html>
  );
};
export { metadata };

export default layout;