import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Plus, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    question: "What is HopeLink?",
    answer:
      "HopeLink Care is a community-driven platform where people can request help and others can respond by donating, volunteering, or organizing support.",
  },
  {
    question: "Who can request help?",
    answer:
      "Any registered user can post a help request. You can specify your need, urgency, and location to get the right support.",
  },
  {
    question: "How does the help process work?",
    answer:
      "Users create requests → donors or volunteers respond → organizations can manage and assign tasks → the request is completed and verified.",
  },
  {
    question: "What roles are available on the platform?",
    answer:
      "There are four main roles: Users (request help), Donors (provide money), Volunteers (provide physical help), and Organizations (manage large-scale support).",
  },
  {
    question: "How are donations tracked?",
    answer:
      "All donations follow a transparent flow: Pledged → Sent → Confirmed. This ensures accountability and trust for everyone involved.",
  },
  {
    question: "Can organizations manage volunteers?",
    answer:
      "Yes. Organizations can assign volunteers to specific tasks, monitor progress, and ensure help is delivered efficiently.",
  },
  {
    question: "Is my information secure?",
    answer:
      "Yes. We use secure authentication and data protection practices to keep your personal and activity data safe.",
  },
  {
    question: "How do I know if a request is genuine?",
    answer:
      "Requests can be verified by organizations and community feedback. Transparency and tracking help ensure trust.",
  },
];

export function FAQ() {
  // Split FAQs into two columns for the layout
  const midPoint = Math.ceil(faqs.length / 2);
  const leftColumn = faqs.slice(0, midPoint);
  const rightColumn = faqs.slice(midPoint);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-20">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-[10px] font-bold uppercase tracking-widest text-[#022C22]">
              <div className="size-1 bg-[#F9D362] rounded-full" />
              Frequently Asked Questions
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight text-[#022C22] leading-[1.1]">
              Helping you Understand <br /> Our Work Better
            </h2>
          </div>
          <div className="space-y-8 max-w-xl lg:ml-auto">
            <p className="text-lg text-muted-foreground leading-relaxed">
              We've gathered answers to the questions we hear most, making it easy for you to learn about our work, values, and the impact we create together.
            </p>
            <Button asChild size="lg" className="h-14 px-10 rounded-xl !bg-[#F9D362] hover:!bg-[#eec13c] !text-black font-black group border-none">
              <Link href="/contact" className="flex items-center gap-2">
                Contact Us Now
                <ArrowUpRight className="size-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12">
          {/* Left Column */}
          <Accordion type="single" collapsible className="w-full space-y-4">
            {leftColumn.map((faq, idx) => (
              <AccordionItem 
                key={idx} 
                value={`left-${idx}`}
                className="border-none bg-[#F8FBF9] rounded-2xl px-8 py-2 transition-all hover:shadow-lg hover:shadow-black/5"
              >
                <AccordionTrigger className="hover:no-underline py-6 group [&>svg]:hidden">
                  <div className="flex items-center gap-5 text-start flex-1 mr-4">
                    <span className="text-[#022C22]/30 font-black text-xl">{idx + 1}.</span>
                    <span className="text-[#022C22] font-bold text-lg leading-snug group-data-[state=open]:text-emerald-800 transition-colors">
                      {faq.question}
                    </span>
                  </div>
                  <div className="size-10 rounded-full bg-[#F9D362] flex items-center justify-center shrink-0 transition-all duration-300 shadow-lg shadow-[#F9D362]/20 group-data-[state=open]:rotate-45 group-data-[state=open]:bg-[#022C22]">
                    <Plus className="size-6 text-black group-data-[state=open]:text-white" />
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-8 pt-2 text-[#022C22]/70 text-lg leading-relaxed pl-12 border-t border-emerald-500/5 mt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Right Column */}
          <Accordion type="single" collapsible className="w-full space-y-4 mt-4 lg:mt-0">
            {rightColumn.map((faq, idx) => (
              <AccordionItem 
                key={idx} 
                value={`right-${idx}`}
                className="border-none bg-[#F8FBF9] rounded-2xl px-8 py-2 transition-all hover:shadow-lg hover:shadow-black/5"
              >
                <AccordionTrigger className="hover:no-underline py-6 group [&>svg]:hidden">
                  <div className="flex items-center gap-5 text-start flex-1 mr-4">
                    <span className="text-[#022C22]/30 font-black text-xl">{idx + midPoint + 1}.</span>
                    <span className="text-[#022C22] font-bold text-lg leading-snug group-data-[state=open]:text-emerald-800 transition-colors">
                      {faq.question}
                    </span>
                  </div>
                  <div className="size-10 rounded-full bg-[#F9D362] flex items-center justify-center shrink-0 transition-all duration-300 shadow-lg shadow-[#F9D362]/20 group-data-[state=open]:rotate-45 group-data-[state=open]:bg-[#022C22]">
                    <Plus className="size-6 text-black group-data-[state=open]:text-white" />
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-8 pt-2 text-[#022C22]/70 text-lg leading-relaxed pl-12 border-t border-emerald-500/5 mt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
