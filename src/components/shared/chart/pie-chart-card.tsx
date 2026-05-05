"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { cn } from "@/lib/utils";
import { LabelList, Pie, PieChart } from "recharts";
import { TypographyMuted } from "../typography";

type Props<T> = {
  title: string;
  description?: string;
  data: T[];
  config: ChartConfig;
  dataKey: keyof T & string;
  nameKey: keyof T & string;
  className?: string;
};

export function PieChartCard<T>({
  title,
  description,
  data,
  config,
  dataKey,
  nameKey,
  className,
}: Props<T>) {
  return (
    <Card className={cn(
      "group relative overflow-hidden bg-card/40 backdrop-blur-3xl border-white/5 hover:border-primary/30 transition-all duration-500 shadow-2xl flex flex-col",
      className
    )}>
      {/* Ambient Glow */}
      <div className="absolute -bottom-12 -left-12 size-32 bg-emerald-500/5 blur-3xl rounded-full group-hover:bg-emerald-500/10 transition-colors" />

      <CardHeader className="pb-0">
        <CardTitle className="text-xl font-black tracking-tight flex items-center gap-2">
          <div className="size-2 rounded-full bg-emerald-500" />
          {title}
        </CardTitle>
        {description && (
          <CardDescription className="text-xs font-medium uppercase tracking-[0.1em] opacity-60">
            {description}
          </CardDescription>
        )}
      </CardHeader>

      <CardContent className="flex-1 pb-8">
        {data.length > 0 ? (
          <ChartContainer
            config={config}
            className="mx-auto aspect-square max-h-64"
          >
            <PieChart>
              <ChartTooltip 
                content={<ChartTooltipContent className="bg-background/90 backdrop-blur-xl border-white/10" />} 
              />
              <Pie 
                data={data} 
                dataKey={dataKey} 
                nameKey={nameKey}
                innerRadius={60}
                strokeWidth={5}
                stroke="rgba(0,0,0,0.2)"
              >
                <LabelList 
                  dataKey={nameKey} 
                  className="fill-foreground text-[10px] font-bold uppercase tracking-tighter" 
                  position="outside"
                  offset={15}
                />
              </Pie>
            </PieChart>
          </ChartContainer>
        ) : (
          <div className="mt-8 flex h-56 flex-col items-center justify-center space-y-2 border-2 border-dashed border-white/5 rounded-2xl bg-white/[0.02]">
            <TypographyMuted className="text-sm font-bold uppercase tracking-widest opacity-40">
              No Data Available
            </TypographyMuted>
            <TypographyMuted className="text-[10px] uppercase tracking-widest opacity-30">
              Distribution data pending
            </TypographyMuted>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
