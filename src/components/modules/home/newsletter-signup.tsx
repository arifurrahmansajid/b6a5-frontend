import { TypographyMuted } from "@/components/shared/typography";
import { Button } from "@/components/ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { ArrowRight, AtSign, Mail, Sparkles } from "lucide-react";

export function NewsletterSignup() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Cinematic Glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 size-[500px] bg-primary/5 blur-[100px] rounded-full -z-10 -translate-x-1/2" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 size-[500px] bg-emerald-500/5 blur-[100px] rounded-full -z-10 translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="relative group p-1 rounded-[3rem] bg-gradient-to-r from-border/50 via-primary/20 to-border/50 transition-all duration-700 hover:shadow-2xl hover:shadow-primary/5 overflow-hidden">
          {/* Animated Background Gradient */}
          <div className="absolute inset-0 bg-card opacity-95" />
          
          <div className="relative z-10 px-8 py-16 md:py-20 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1 space-y-6 text-center md:text-start max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary">
                <Sparkles className="size-3" />
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase">Impact Updates</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight">
                Stay in the <span className="text-primary underline underline-offset-8 decoration-primary/20">Loop</span>
              </h2>
              <TypographyMuted className="text-lg md:text-xl max-w-xl">
                Join our global community of changemakers. Get the latest humanitarian insights and impact stories delivered to your inbox.
              </TypographyMuted>
            </div>

            <div className="w-full md:w-auto flex flex-col sm:flex-row items-center gap-4 bg-background/50 backdrop-blur-xl p-2 rounded-[2rem] border border-border/50 shadow-2xl">
              <div className="relative flex-1 min-w-[300px]">
                <InputGroup className="bg-transparent border-none focus-within:ring-0">
                  <InputGroupAddon className="pl-4 text-muted-foreground/50">
                    <AtSign className="size-5" />
                  </InputGroupAddon>
                  <InputGroupInput 
                    placeholder="your.email@example.com" 
                    className="h-14 bg-transparent border-none text-base focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </InputGroup>
              </div>
              <Button size="lg" className="w-full sm:w-auto h-14 px-8 rounded-2xl font-bold group/btn relative overflow-hidden shadow-xl shadow-primary/20">
                <Mail className="size-4 mr-2" />
                Subscribe
                <ArrowRight className="size-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
              </Button>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -bottom-12 -right-12 size-64 bg-primary/5 blur-3xl rounded-full" />
        </div>
      </div>
    </section>
  );
}
