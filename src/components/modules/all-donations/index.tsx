import { getAllDonations } from "@/actions/donate.action";
import { TypographyMuted } from "@/components/shared/typography";
import { QUERY_KEY } from "@/constants/query.const";
import { prefetchQuery } from "@/utils/server-query";
import { HydrationBoundary } from "@tanstack/react-query";
import { Landmark, Sparkles } from "lucide-react";
import AllDonationsTable from "./all-donations-table";

export default async function AllDonations({
  queryString,
}: {
  queryString: string;
}) {
  const { dehydratedState } = await prefetchQuery(
    [QUERY_KEY.DONATION.DONATIONS, queryString],
    () => getAllDonations(queryString),
  );

  return (
    <div className="relative min-h-[calc(100vh-10rem)] space-y-12 pb-20 overflow-hidden">
      {/* Ambient Background Glows */}
      <div className="absolute top-0 right-0 size-[500px] bg-primary/5 blur-[120px] rounded-full -z-10 animate-pulse" />
      <div className="absolute bottom-0 left-0 size-[400px] bg-emerald-500/5 blur-[100px] rounded-full -z-10" />

      <div className="space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary">
          <Sparkles className="size-3" />
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase">Treasury Hub</span>
        </div>

        <div className="space-y-2">
          <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[0.9] flex items-center gap-4">
            Financial <span className="text-primary">Ledger</span>
            <Landmark className="size-10 md:size-14 text-muted-foreground/20 shrink-0" />
          </h1>
          <TypographyMuted className="text-lg md:text-xl font-medium tracking-tight opacity-70 max-w-2xl">
            A comprehensive overview of all financial contributions and donations across the HopeLink platform.
          </TypographyMuted>
        </div>
      </div>

      <HydrationBoundary state={dehydratedState}>
        <div className="relative z-10">
          <AllDonationsTable queryString={queryString} />
        </div>
      </HydrationBoundary>
    </div>
  );
}
