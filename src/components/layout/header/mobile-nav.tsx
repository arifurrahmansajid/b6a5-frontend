"use client";

import { Button } from "@/components/ui/button";
import { Portal, PortalBackdrop } from "@/components/ui/portal";
import { useSession } from "@/hooks/use-session";
import { cn } from "@/lib/utils";
import { MenuIcon, XIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { navLinks } from "./nav-links";
import { useScroll } from "@/hooks/use-scroll";
import { usePathname } from "next/navigation";

interface MobileNavProps {
  dashboardPath: string;
}

export function MobileNav({ dashboardPath }: MobileNavProps) {
  const [open, setOpen] = React.useState(false);
  const scrollOffset = useScroll(10);
  const pathname = usePathname();
  const scrolled = scrollOffset || pathname !== "/";

  const session = useSession();

  return (
    <div className="md:hidden">
      <Button
        aria-controls="mobile-menu"
        aria-expanded={open}
        aria-label="Toggle menu"
        className={cn(
          "md:hidden transition-all",
          scrolled 
            ? "text-foreground border-border" 
            : "text-white border-white/20 bg-white/10 backdrop-blur-md hover:bg-white/20"
        )}
        onClick={() => setOpen(!open)}
        size="icon"
        variant="outline"
      >
        {open ? (
          <XIcon className="size-4.5" />
        ) : (
          <MenuIcon className="size-4.5" />
        )}
      </Button>
      {open && (
        <Portal className="top-14" id="mobile-menu">
          <PortalBackdrop />
          <div
            className={cn(
              "data-[slot=open]:zoom-in-97 ease-out data-[slot=open]:animate-in",
              "size-full p-4",
            )}
            data-slot={open ? "open" : "closed"}
          >
            <div className="grid gap-y-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Button
                    asChild
                    className={cn("justify-start", isActive && "text-primary bg-primary/10")}
                    key={link.label}
                    variant={isActive ? "secondary" : "ghost"}
                  >
                    <Link href={link.href}>{link.label}</Link>
                  </Button>
                );
              })}
            </div>
            <div className="mt-12 flex flex-col gap-2">
              {session ? (
                <Button asChild size="sm">
                  <Link href={dashboardPath}>Dashboard</Link>
                </Button>
              ) : (
                <>
                  <Button asChild className="w-full" variant="outline">
                    <Link href="/sign-in">Sign In</Link>
                  </Button>
                  <Button asChild size="sm" className="w-full">
                    <Link href="/sign-up">Get Started</Link>
                  </Button>
                </>
              )}
            </div>
          </div>
        </Portal>
      )}
    </div>
  );
}
