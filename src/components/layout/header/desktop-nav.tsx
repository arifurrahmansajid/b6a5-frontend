"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { navLinks } from "./nav-links";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useScroll } from "@/hooks/use-scroll";

export default function DesktopNav() {
  const scrolled = useScroll(10);
  
  return (
    <div className="hidden items-center gap-2 md:flex">
      {navLinks.map((link) => (
        <Button 
          asChild 
          key={link.label} 
          size="sm" 
          variant="ghost" 
          className={cn(
            "rounded-lg font-bold transition-all flex items-center gap-1 px-4",
            scrolled 
              ? "text-foreground hover:text-primary hover:bg-primary/5" 
              : "text-white hover:text-[#F9D362] hover:bg-white/10"
          )}
        >
          <Link href={link.href}>
            {link.label}
            {link.label === "Pages" && <ChevronDown className="size-3" />}
          </Link>
        </Button>
      ))}
    </div>
  );
}
