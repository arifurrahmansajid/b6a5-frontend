"use client";

import { Button } from "@/components/ui/button";
import { useSession } from "@/hooks/use-session";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useScroll } from "@/hooks/use-scroll";

interface HeaderCTAProps {
  dashboardPath: string;
}

export function HeaderCTA({ dashboardPath }: HeaderCTAProps) {
  const session = useSession();
  const scrolled = useScroll(10);

  const buttonClass = "rounded-lg font-bold bg-[#F9D362] hover:bg-[#eec13c] text-black border-none shadow-lg px-6 flex items-center gap-2 transition-all hover:scale-105 active:scale-95";

  if (session) {
    return (
      <Button asChild size="sm" className={buttonClass}>
        <Link href={dashboardPath}>
          Dashboard
          <ArrowUpRight className="size-4" />
        </Link>
      </Button>
    );
  }

  return (
    <div className="hidden md:flex items-center gap-3">
      <Button 
        asChild 
        size="sm" 
        variant="ghost" 
        className={cn(
          "font-semibold transition-colors",
          scrolled 
            ? "text-foreground hover:text-primary hover:bg-primary/5" 
            : "text-white hover:text-[#F9D362] hover:bg-white/10"
        )}
      >
        <Link href="/sign-in">Sign In</Link>
      </Button>
      <Button asChild size="sm" className={buttonClass}>
        <Link href="/sign-up">
          Get Started
          <ArrowUpRight className="size-4" />
        </Link>
      </Button>
    </div>
  );
}
