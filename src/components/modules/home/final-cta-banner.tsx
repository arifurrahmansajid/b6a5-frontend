import {
  TypographyBlockquote,
  TypographyH1,
} from "@/components/shared/typography";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

export function FinalCtaBanner({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "relative rounded-3xl text-foreground py-24 px-10 overflow-hidden border border-primary/20 shadow-2xl mx-6 mb-20",
        className,
      )}
      {...props}
    >
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.png"
          alt="HopeLink CTA Background"
          fill
          className="object-cover opacity-20 dark:opacity-10 grayscale hover:grayscale-0 transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-background to-background/50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(var(--primary-rgb),0.15),transparent_70%)]" />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-0">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary mb-8">
          <span className="text-xs font-bold tracking-widest uppercase">Start Your Journey</span>
        </div>
        
        <TypographyH1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight tracking-tight">
          Grow Your <span className="text-primary underline decoration-primary/30 underline-offset-8">Akhirat</span> <br />
          by Serving the HopeLink
        </TypographyH1>
        
        <TypographyBlockquote className="mt-8 text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto border-none italic">
          "Join as a donor or volunteer and make a lasting impact. Every act of giving—whether your time or contributions—brightens lives and brings eternal rewards."
        </TypographyBlockquote>

        <div className="flex flex-col sm:flex-row justify-center gap-6 mt-12">
          <Button asChild size="lg" variant="outline" className="h-14 px-10 rounded-2xl border-primary/20 hover:bg-primary/5 backdrop-blur-sm">
            <Link href="/sign-up">Join as Volunteer</Link>
          </Button>
          <Button asChild size="lg" className="h-14 px-10 rounded-2xl shadow-lg shadow-primary/20">
            <Link href="/sign-up">Join as Donor</Link>
          </Button>
        </div>
      </div>

      {/* Decorative Gradient Blob */}
      <div className="absolute -bottom-24 -left-24 size-96 bg-primary/20 rounded-full blur-[100px] -z-1" />
    </div>
  );
}
