"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { navLinks } from "./nav-links";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useScroll } from "@/hooks/use-scroll";
import { usePathname } from "next/navigation";

export default function DesktopNav() {
  const scrollOffset = useScroll(10);
  const pathname = usePathname();
  const scrolled = scrollOffset || pathname !== "/";
  
  return (
    <div className="hidden items-center gap-2 md:flex">
      {navLinks.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Button 
            asChild 
            key={link.label} 
            size="sm" 
            variant="ghost" 
            className={cn(
              "rounded-lg font-bold transition-all flex items-center gap-1 px-4",
              scrolled 
                ? cn("text-foreground hover:text-primary hover:bg-primary/5", isActive && "text-primary bg-primary/5 underline decoration-2 underline-offset-4") 
                : cn("text-white hover:text-[#F9D362] hover:bg-white/10", isActive && "text-[#F9D362] bg-white/10 underline decoration-2 underline-offset-4")
            )}
          >
            <Link href={link.href}>
              {link.label}
              {link.label === "Pages" && <ChevronDown className="size-3" />}
            </Link>
          </Button>
        );
      })}
    </div>
  );
}
