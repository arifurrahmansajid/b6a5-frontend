"use client";

import { Button } from "@/components/ui/button";
import { useSession } from "@/hooks/use-session";
import Link from "next/link";
import { navLinks } from "./nav-links";

interface DesktopNavProps {
  dashboardPath: string;
}

export default function DesktopNav({ dashboardPath }: DesktopNavProps) {
  const session = useSession();

  return (
    <div className="hidden items-center gap-6 md:flex">
      <div className="flex items-center gap-2">
        {navLinks.map((link) => (
          <Button asChild key={link.label} size="sm" variant="ghost" className="rounded-lg font-medium text-muted-foreground hover:text-foreground transition-colors">
            <Link href={link.href}>{link.label}</Link>
          </Button>
        ))}
      </div>
      <div className="flex items-center gap-3 border-l pl-6 border-border">
        {session ? (
          <Button asChild size="sm" className="rounded-xl font-semibold shadow-lg shadow-primary/10">
            <Link href={dashboardPath}>Dashboard</Link>
          </Button>
        ) : (
          <>
            <Button asChild size="sm" variant="ghost" className="rounded-xl font-semibold">
              <Link href="/sign-in">Sign In</Link>
            </Button>
            <Button asChild size="sm" className="rounded-xl font-semibold shadow-lg shadow-primary/20">
              <Link href="/sign-up">Get Started</Link>
            </Button>
          </>
        )}
      </div>
    </div>
  );
}
