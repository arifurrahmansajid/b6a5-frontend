"use client";

import { SearchForm } from "@/components/layout/dashboard/search-form";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useSidebar } from "@/components/ui/sidebar";
import { PanelLeftIcon } from "lucide-react";

export function SiteHeader() {
  const { toggleSidebar } = useSidebar();

  return (
    <header className="sticky top-0 z-50 flex w-full items-center bg-background/60 backdrop-blur-3xl border-b border-white/5 shadow-sm transition-all duration-300">
      <div className="flex h-(--header-height) w-full items-center gap-4 px-6">
        <Button variant="ghost" size="icon" onClick={toggleSidebar} className="hover:bg-primary/10 hover:text-primary transition-colors">
          <PanelLeftIcon className="size-5" />
        </Button>
        <div className="h-6 w-px bg-white/10 hidden md:block" />
        <Breadcrumb className="hidden sm:block">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="#" className="text-xs font-bold uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity">Platform</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="opacity-20" />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-xs font-black uppercase tracking-[0.2em] text-primary">Command Center</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="ml-auto flex items-center gap-4">
          <SearchForm className="hidden md:block w-72" />
          <div className="size-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
            <div className="size-2 rounded-full bg-primary animate-pulse" />
          </div>
        </div>
      </div>
    </header>
  );
}
