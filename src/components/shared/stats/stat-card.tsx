import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

type Props = {
  title: string;
  value: string | number;
  description: string;
  footer: string;
  icon: React.ElementType;
  trendIcon: React.ElementType;
  trendText: string;
  className?: string;
};

export function StatCard({
  title,
  value,
  description,
  footer,
  icon: Icon,
  trendIcon: TrendIcon,
  trendText,
  className,
}: Props) {
  return (
    <Card className={cn(
      "group relative overflow-hidden bg-card/40 backdrop-blur-3xl border-white/5 hover:border-primary/30 transition-all duration-500 shadow-2xl",
      className
    )}>
      {/* Ambient Glow */}
      <div className="absolute -top-12 -right-12 size-24 bg-primary/10 blur-3xl rounded-full group-hover:bg-primary/20 transition-colors" />

      <CardHeader className="pb-2">
        <div className="flex items-center justify-between mb-4">
          <div className="size-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shadow-inner">
            <Icon className="size-5" />
          </div>
          <Badge variant="outline" className="bg-background/50 border-white/5 text-[10px] font-bold uppercase tracking-wider py-0.5 px-2 flex items-center gap-1.5 transition-colors group-hover:border-primary/30">
            <TrendIcon className="size-3 text-primary" />
            {trendText}
          </Badge>
        </div>

        <CardDescription className="text-xs font-bold uppercase tracking-[0.1em] text-muted-foreground/60 mb-1">
          {title}
        </CardDescription>
        
        <CardTitle className="text-3xl md:text-4xl font-black tracking-tight tabular-nums text-foreground group-hover:text-primary transition-colors duration-500">
          {value}
        </CardTitle>
      </CardHeader>

      <CardFooter className="flex-col items-start gap-1 pt-2 pb-6 border-t border-white/[0.03]">
        <div className="text-xs font-bold text-foreground/80">{description}</div>
        <div className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider opacity-60 italic">{footer}</div>
      </CardFooter>
    </Card>
  );
}
