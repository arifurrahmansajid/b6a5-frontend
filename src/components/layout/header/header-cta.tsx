"use client";

import { Button } from "@/components/ui/button";
import { useSession } from "@/hooks/use-session";
import Link from "next/link";
import { ArrowUpRight, LayoutDashboard, LogOut, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { useScroll } from "@/hooks/use-scroll";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { singOutUser } from "@/actions/auth-actions";
import { useRouter } from "next/navigation";

interface HeaderCTAProps {
  dashboardPath: string;
}

export function HeaderCTA({ dashboardPath }: HeaderCTAProps) {
  const session = useSession();
  const scrolled = useScroll(10);
  const router = useRouter();

  const buttonClass = "rounded-lg font-bold bg-[#F9D362] hover:bg-[#eec13c] text-black border-none shadow-lg px-6 flex items-center gap-2 transition-all hover:scale-105 active:scale-95";

  const handleLogout = async () => {
    await singOutUser();
    router.push("/sign-in");
    router.refresh();
  };

  if (session && session.user) {
    const initials = session.user.name?.substring(0, 2).toUpperCase() || "U";
    
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative h-10 w-10 rounded-full">
            <Avatar className="h-10 w-10 border-2 border-[#F9D362]">
              <AvatarImage src={session.user.avatarUrl || ""} alt={session.user.name || "User"} />
              <AvatarFallback className="bg-primary/10 text-primary font-bold">{initials}</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" forceMount>
          <div className="flex flex-col space-y-1 p-2">
            <p className="text-sm font-medium leading-none">{session.user.name}</p>
            <p className="text-xs leading-none text-muted-foreground">
              {session.user.email}
            </p>
          </div>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild className="cursor-pointer">
            <Link href={dashboardPath} className="w-full flex items-center">
              <LayoutDashboard className="mr-2 h-4 w-4" />
              <span>Dashboard</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild className="cursor-pointer">
            <Link href="/my-profile" className="w-full flex items-center">
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleLogout} className="cursor-pointer text-red-600 focus:text-red-600 focus:bg-red-50">
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
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
