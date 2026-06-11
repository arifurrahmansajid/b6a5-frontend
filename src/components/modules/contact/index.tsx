import {
  TypographyH1,
  TypographyMuted,
  TypographyP,
} from "@/components/shared/typography";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import ContactForm from "./contact-form";
import { env } from "../../../../env";

export default function Contact() {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden pt-32 pb-24 px-6">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, var(--border) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />
      <div className="absolute top-0 right-0 size-[600px] bg-primary/10 blur-[120px] rounded-full -z-10 animate-pulse" />
      <div className="absolute bottom-0 left-0 size-[400px] bg-emerald-500/5 blur-[100px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Side: Hero & Info */}
          <div className="lg:col-span-5 space-y-12 animate-in fade-in slide-in-from-left-8 duration-700">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary">
                <span className="size-1.5 rounded-full bg-primary animate-ping" />
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase">Connect with us</span>
              </div>
              <TypographyH1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] mb-8">
                Let&apos;s build <br />
                <span className="text-primary">the future together</span>
              </TypographyH1>
              <TypographyP className="text-lg text-muted-foreground leading-relaxed max-w-md">
                Have questions about {env.NEXT_PUBLIC_APP_NAME}? We&apos;re here to ensure your journey in making a global impact is seamless and supported.
              </TypographyP>
            </div>

            <div className="space-y-4">
               {[
                 { icon: Mail, title: "Email Us", value: "support@hopelink.com", href: "mailto:support@hopelink.com" },
                 { icon: Phone, title: "Call Us", value: "+1 (555) 000-0000", href: "tel:+15550000000" },
                 { icon: MapPin, title: "Our Location", value: "Global Digital Network", href: "#" }
               ].map((item, i) => (
                 <a 
                   key={i} 
                   href={item.href}
                   className="flex items-center gap-6 p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-all group"
                 >
                   <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                     <item.icon className="size-6 text-primary" />
                   </div>
                   <div>
                     <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">{item.title}</p>
                     <p className="text-lg font-bold group-hover:text-primary transition-colors">{item.value}</p>
                   </div>
                 </a>
               ))}
            </div>
          </div>

          {/* Right Side: Form Card */}
          <div className="lg:col-span-7 animate-in fade-in slide-in-from-right-8 duration-700 delay-200">
            <div className="relative p-8 md:p-12 rounded-[2.5rem] bg-card border border-border/50 shadow-2xl overflow-hidden">
               <div className="absolute top-0 right-0 p-8 opacity-5">
                  <Send className="size-32 -rotate-12" />
               </div>
               
               <div className="relative z-10">
                 <div className="mb-10">
                   <h2 className="text-3xl font-black tracking-tight mb-2">Send a Message</h2>
                   <p className="text-muted-foreground">We typically respond within 24 hours.</p>
                 </div>
                 <ContactForm />
               </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
