import { getResponses } from "@/actions/response.actions";
import { TypographyMuted } from "@/components/shared/typography";
import { QUERY_KEY } from "@/constants/query.const";
import { prefetchQuery } from "@/utils/server-query";
import { HydrationBoundary } from "@tanstack/react-query";
import { MessageSquareReply, Sparkles } from "lucide-react";
import AllResponsesTable from "./all-responses-table";

export default async function AllResponses({
  queryString,
}: {
  queryString: string;
}) {
  const { dehydratedState } = await prefetchQuery(
    [QUERY_KEY.RESPONSE.ALL_RESPONSE, queryString],
    () => getResponses(queryString),
  );

  return (
    <div className="relative min-h-[calc(100vh-10rem)] space-y-12 pb-20 overflow-hidden">
      {/* Ambient Background Glows */}
      <div className="absolute top-0 right-0 size-[500px] bg-primary/5 blur-[120px] rounded-full -z-10 animate-pulse" />
      <div className="absolute bottom-0 left-0 size-[400px] bg-emerald-500/5 blur-[100px] rounded-full -z-10" />

      <div className="space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary">
          <Sparkles className="size-3" />
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase">Communications Hub</span>
        </div>

        <div className="space-y-2">
          <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[0.9] flex items-center gap-4">
            Interaction <span className="text-primary">Log</span>
            <MessageSquareReply className="size-10 md:size-14 text-muted-foreground/20 shrink-0" />
          </h1>
          <TypographyMuted className="text-lg md:text-xl font-medium tracking-tight opacity-70 max-w-2xl">
            Monitor and manage all user responses and interactions across the HopeLink platform.
          </TypographyMuted>
        </div>
      </div>

      <HydrationBoundary state={dehydratedState}>
        <div className="relative z-10">
          <AllResponsesTable queryString={queryString} />
        </div>
      </HydrationBoundary>
    </div>
  );
}
