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
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";
import { TypographyMuted } from "../typography";

type Series = {
  key: string;
  colorVar: string;
};

type Props<T> = {
  title: string;
  description?: string;
  data: T[];
  config: ChartConfig;
  xKey: string;
  series: Series[];
  className?: string;
};

export function LineChartCard<T>({
  title,
  description,
  data,
  config,
  xKey,
  series,
  className,
}: Props<T>) {
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
          {title}
        </CardTitle>
        {description && (
          <CardDescription className="text-xs font-medium uppercase tracking-[0.1em] opacity-60">
            {description}
          </CardDescription>
        )}
      </CardHeader>

      <CardContent className="pb-8">
        {data.length > 0 ? (
          <ChartContainer
            config={config}
            className="mx-auto aspect-square max-h-64 w-full"
          >
            <LineChart data={data} margin={{ top: 10, right: 10, left: 10, bottom: 10 }}>
              <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
              <XAxis 
                dataKey={xKey} 
                axisLine={false} 
                tickLine={false} 
                tick={{ fontSize: 10, fill: 'rgba(255,255,255,0.4)' }}
                dy={10}
              />
              <ChartTooltip 
                content={<ChartTooltipContent className="bg-background/90 backdrop-blur-xl border-white/10" />} 
              />
              {series.map((s) => (
                <Line
                  key={s.key}
                  dataKey={s.key}
                  type="monotone"
                  stroke={`var(--color-${s.key})`}
                  strokeWidth={3}
                  dot={false}
                  activeDot={{ r: 4, strokeWidth: 0 }}
                />
              ))}
            </LineChart>
          </ChartContainer>
        ) : (
          <div className="flex h-64 flex-col items-center justify-center space-y-2 border-2 border-dashed border-white/5 rounded-2xl bg-white/[0.02]">
            <TypographyMuted className="text-sm font-bold uppercase tracking-widest opacity-40">
              No Data Available
            </TypographyMuted>
            <TypographyMuted className="text-[10px] uppercase tracking-widest opacity-30">
              Metrics will appear as platform scales
            </TypographyMuted>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
