"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Fatima Noor",
    role: "Donor",
    avatar: "https://mockmind-api.uifaces.co/content/human/45.jpg",
    testimonial:
      "What I love most is the transparency. I can see exactly where my donation goes and how it helps someone in real life.",
  },
  {
    name: "Omar Hassan",
    role: "Volunteer",
    avatar: "https://mockmind-api.uifaces.co/content/human/33.jpg",
    testimonial:
      "Being able to physically help people in my area and track progress through the platform is an amazing experience.",
  },
  {
    name: "Mahmudul Hasan",
    role: "Community Member",
    avatar: "https://mockmind-api.uifaces.co/content/human/77.jpg",
    testimonial:
      "This platform builds trust. You know the requests are real, and the system keeps everything transparent.",
  },
  {
    name: "Zainab Ali",
    role: "Donor",
    avatar: "https://mockmind-api.uifaces.co/content/human/91.jpg",
    testimonial:
      "Even small contributions feel meaningful because you can see the real impact. That’s what makes HopeLink special.",
  },
];

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    align: "start",
    loop: true,
    slidesToScroll: 1,
  });

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="relative py-24 bg-[#F8FBF9] overflow-hidden">
      {/* Subtle Dot Pattern Background */}
      <div className="absolute inset-0 opacity-[0.4] pointer-events-none" style={{ 
        backgroundImage: `radial-gradient(#022C22 0.5px, transparent 0.5px)`,
        backgroundSize: '30px 30px'
      }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div className="text-start space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-border text-[10px] font-bold uppercase tracking-widest text-muted-foreground shadow-sm">
              Our Testimonials
            </div>
            <h2 className="text-[48px] font-black tracking-tight text-[#022C22]">
              Voices of Real Peoples
            </h2>
            <p className="text-[18px] text-muted-foreground leading-relaxed">
              Hear directly from the people, volunteers, and partners whose lives have been touched by our work and who continue to believe in our mission.
            </p>
          </div>

          <div className="flex gap-3">
            <Button 
              onClick={scrollPrev}
              variant="outline" 
              size="icon" 
              className="size-12 rounded-full bg-white border-emerald-100 hover:bg-[#F9D362] hover:text-black transition-all shadow-lg shadow-black/5"
            >
              <ChevronLeft className="size-6" />
            </Button>
            <Button 
              onClick={scrollNext}
              variant="outline" 
              size="icon" 
              className="size-12 rounded-full bg-white border-emerald-100 hover:bg-[#F9D362] hover:text-black transition-all shadow-lg shadow-black/5"
            >
              <ChevronRight className="size-6" />
            </Button>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-6">
            {testimonials.map((item, idx) => (
              <div key={idx} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.33%] pl-6">
                <div className="bg-white p-10 rounded-3xl shadow-xl shadow-black/5 h-full flex flex-col justify-between border border-emerald-50">
                  <div className="space-y-6">
                    {/* Stars */}
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} className="size-4 fill-[#F9D362] text-[#F9D362]" />
                      ))}
                    </div>
                    {/* Quote */}
                    <p className="text-[#022C22] font-bold leading-relaxed text-lg italic">
                      "{item.testimonial}"
                    </p>
                  </div>

                  {/* Author Info */}
                  <div className="flex items-end justify-between pt-10 mt-auto">
                    <div className="space-y-1">
                      <h4 className="font-black text-[#022C22]">{item.name}</h4>
                      <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">{item.role}</p>
                    </div>
                    <div className="relative">
                      <div className="size-14 rounded-full overflow-hidden border-2 border-emerald-50 shadow-lg">
                        <Image src={item.avatar} alt={item.name} width={56} height={56} className="object-cover" />
                      </div>
                      <div className="absolute -bottom-1 -right-1 size-7 rounded-full bg-[#F9D362] flex items-center justify-center border-2 border-white shadow-sm">
                        <Quote className="size-3 text-black fill-black" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center gap-6">
          <div className="inline-flex flex-wrap justify-center items-center gap-3 px-6 py-3 rounded-full bg-white border border-emerald-50 shadow-lg shadow-black/5">
            <span className="bg-[#F9D362] text-[10px] font-black px-2 py-0.5 rounded text-black">$350</span>
            <p className="text-xs font-bold text-[#022C22]">
              Help Our Kids with Education, Food, Health Support. 
              <button className="ml-2 text-[#F9D362] underline hover:text-[#eec13c] transition-colors">View All Testimonials</button>
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-sm font-black text-[#022C22]">4.9</span>
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="size-3 fill-[#F9D362] text-[#F9D362]" />
              ))}
            </div>
            <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Over 2000 Reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
}
