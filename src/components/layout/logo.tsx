"use client";
import { cn } from "@/lib/utils";
import { Heart } from "lucide-react";
import Link from "next/link";
import { env } from "../../../env";
import { useScroll } from "@/hooks/use-scroll";
import { usePathname } from "next/navigation";

export const Logo = () => {
  const scrollOffset = useScroll(10);
  const pathname = usePathname();
  const scrolled = scrollOffset || pathname !== "/";
  
  return (
    <Link
      aria-label="Home"
      className={cn(
        "flex items-center gap-2 font-bold text-xl group transition-all",
        scrolled ? "text-primary" : "text-white"
      )}
      href="/"
    >
      <Heart className="text-[#F9D362] fill-[#F9D362] group-hover:scale-110 transition-transform" />
      <span className="tracking-tight">{env.NEXT_PUBLIC_APP_NAME}</span>
    </Link>
  );
};
