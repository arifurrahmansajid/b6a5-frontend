"use client";

import { useScroll } from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";

export default function AnimatedHeader({
  children,
}: {
  children: React.ReactNode;
}) {
  const scrolled = useScroll(10);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 mx-auto w-full max-w-7xl transition-all duration-500 ease-in-out px-4 py-2",
        {
          "py-1": scrolled,
        },
      )}
    >
      <nav
        className={cn(
          "flex h-14 w-full items-center justify-between px-6 rounded-2xl transition-all duration-500 ease-in-out border border-transparent",
          {
            "bg-background/80 backdrop-blur-xl border-border shadow-2xl shadow-primary/5 h-12 md:max-w-5xl mx-auto":
              scrolled,
          },
        )}
      >
        {children}
      </nav>
    </header>
  );
}
