import { TypographyMuted } from "@/components/shared/typography";
import { cn } from "@/lib/utils";
import {
  CircleDollarSign,
  Compass,
  Heart,
  MessageSquare,
  ShieldCheck,
  Sparkles,
  Users2,
  Zap
} from "lucide-react";

const faqs = [
  {
    question: "What is HopeLink?",
    answer: "HopeLink is a community-driven platform where people can request help and others can respond by donating, volunteering, or organizing support.",
    icon: Sparkles,
  },
  {
    question: "Who can request help?",
    answer: "Any registered user can post a help request. You can specify your need, urgency, and location to get the right support quickly.",
    icon: Users2,
  },
  {
    question: "How does the process work?",
    answer: "Create a request, donors or volunteers respond, organizations manage the tasks, and the process is verified upon completion.",
    icon: Compass,
  },
  {
    question: "What roles are available?",
    answer: "Four main roles: Users (requesters), Donors (financial aid), Volunteers (hands-on help), and Organizations (coordination).",
    icon: Zap,
  },
  {
    question: "How are donations tracked?",
    answer: "All donations follow a transparent flow: Pledged → Sent → Confirmed, ensuring accountability for everyone involved.",
    icon: CircleDollarSign,
  },
  {
    question: "Is my information secure?",
    answer: "Absolutely. We use industry-standard encryption and secure authentication to keep your personal and activity data safe.",
    icon: ShieldCheck,
  },
  {
    question: "How is help verified?",
    answer: "Requests are verified through organization oversight and community feedback systems to ensure complete transparency.",
    icon: Heart,
  },
  {
    question: "Is there real-time chat?",
    answer: "Yes, our built-in secure messaging allows instant coordination between all parties involved in a help request.",
    icon: MessageSquare,
  },
];

export function FAQ() {
  return (
    <section id="faq" className="relative py-32 overflow-hidden bg-background/50">
      {/* Cinematic Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[800px] bg-primary/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20 space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase">Support Center</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight">
            Frequently Asked <span className="text-primary underline underline-offset-8 decoration-primary/20">Questions</span>
          </h2>
          <TypographyMuted className="text-lg md:text-xl max-w-2xl mx-auto">
            Everything you need to know about HopeLink and how you can start making an impact today.
          </TypographyMuted>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className={cn(
                "group relative p-8 rounded-[2rem] bg-card border border-border/50 transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5",
                "animate-in fade-in slide-in-from-bottom-12 duration-700",
                `delay-${(idx % 4) * 100}`
              )}
            >
              <div className="relative z-10 flex gap-6">
                <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 transition-all duration-500 group-hover:bg-primary group-hover:text-primary-foreground shadow-lg shadow-primary/5">
                  <faq.icon className="size-6 transition-transform duration-500 group-hover:scale-110" />
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-lg font-black tracking-tight group-hover:text-primary transition-colors">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                    {faq.answer}
                  </p>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-[2rem] bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
