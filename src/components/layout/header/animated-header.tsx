"use client";

import { useScroll } from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";
import React from "react";
import { usePathname } from "next/navigation";

export default function AnimatedHeader({
  children,
}: {
  children: React.ReactNode;
}) {
  const scrollOffset = useScroll(10);
  const pathname = usePathname();
  
  // If we are not on the homepage, always treat the header as scrolled
  // so it has a solid background and visible text.
  const scrolled = scrollOffset || pathname !== "/";

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-500 ease-in-out px-4 py-4 md:px-10",
        {
          "py-2": scrolled,
        },
      )}
    >
      <nav
        className={cn(
          "flex h-16 w-full items-center justify-between px-6 transition-all duration-500 ease-in-out",
          {
            "bg-background/80 backdrop-blur-xl border border-border shadow-2xl rounded-2xl h-14 md:max-w-6xl mx-auto":
              scrolled,
          },
        )}
      >
        {children}
      </nav>
    </header>
  );
}
