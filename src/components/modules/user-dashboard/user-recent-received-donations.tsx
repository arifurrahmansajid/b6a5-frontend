/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { DataTable } from "@/components/shared/table/data-table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TypographyP } from "@/components/shared/typography";
import useDataTable from "@/hooks/use-data-table";
import { cn } from "@/lib/utils";
import { IUserStats } from "@/types";
import { useEffect, useState } from "react";
import { userReceivedDonationsColumns } from "./user-recent-received-donations-columns";

type Props = {
  donations: IUserStats["recentReceivedDonations"];
  className?: string;
};

export function UserRecentReceivedDonations({ donations, className }: Props) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const table = useDataTable({
    data: donations,
    columns: userReceivedDonationsColumns,
  });

  if (!mounted) {
    return (
      <Card className={cn("bg-card/40 backdrop-blur-3xl border-white/5", className)}>
        <CardContent className="py-10">
          <TypographyP className="text-center opacity-50">Loading recent donations...</TypographyP>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={cn(
      "group relative overflow-hidden bg-card/40 backdrop-blur-3xl border-white/5 hover:border-primary/30 transition-all duration-500 shadow-2xl",
      className
    )}>
      {/* Ambient Glow */}
      <div className="absolute -top-12 -right-12 size-32 bg-primary/5 blur-3xl rounded-full group-hover:bg-primary/10 transition-colors" />

      <CardHeader>
        <CardTitle className="text-xl font-black tracking-tight flex items-center gap-2">
          <div className="size-2 rounded-full bg-primary" />
          Recent Received Donations
        </CardTitle>
        <CardDescription className="text-xs font-medium uppercase tracking-[0.1em] opacity-60">
          Donations received for your requests
        </CardDescription>
      </CardHeader>
      <CardContent className="relative z-10 animate-in fade-in duration-500">
        <DataTable
          table={table}
          data={donations as any}
          columns={userReceivedDonationsColumns}
        />
      </CardContent>
    </Card>
  );
}
