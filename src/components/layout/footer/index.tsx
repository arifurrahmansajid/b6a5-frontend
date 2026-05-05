import { Logo } from "@/components/layout/logo";
import { ModeToggle } from "../mode-toggle";
import FooterBottom from "./footer-bottom";
import { navLinks } from "./footer-links";
import Link from "next/link";
import { Code, Image, Link as LinkIcon, Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-border/50 bg-background/50 backdrop-blur-sm pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-5 flex flex-col items-start gap-6">
            <Logo />
            <p className="max-w-xs text-muted-foreground leading-relaxed">
              Empowering humanity through seamless, transparent support. Join our global mission to make a lasting impact.
            </p>
            <div className="flex items-center gap-4 text-muted-foreground">
              <Link href="#" className="hover:text-primary transition-colors"><Send className="size-5" /></Link>
              <Link href="#" className="hover:text-primary transition-colors"><LinkIcon className="size-5" /></Link>
              <Link href="#" className="hover:text-primary transition-colors"><Image className="size-5" /></Link>
              <Link href="#" className="hover:text-primary transition-colors"><Code className="size-5" /></Link>
            </div>
          </div>

          {/* Nav Columns */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div className="flex flex-col gap-4">
              <h4 className="font-bold text-sm uppercase tracking-widest text-foreground">Platform</h4>
              <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
                 {navLinks.map(link => (
                   <li key={link.label}><Link href={link.href} className="hover:text-primary transition-colors">{link.label}</Link></li>
                 ))}
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="font-bold text-sm uppercase tracking-widest text-foreground">Community</h4>
              <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
                 <li><Link href="/volunteer" className="hover:text-primary transition-colors">Volunteer</Link></li>
                 <li><Link href="/donors" className="hover:text-primary transition-colors">Donors</Link></li>
                 <li><Link href="/organizations" className="hover:text-primary transition-colors">Organizations</Link></li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="font-bold text-sm uppercase tracking-widest text-foreground">Support</h4>
              <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
                 <li><Link href="/help" className="hover:text-primary transition-colors">Help Center</Link></li>
                 <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
                 <li><Link href="/faq" className="hover:text-primary transition-colors">FAQs</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-6">
          <FooterBottom />
          <div className="flex items-center gap-6">
             <div className="flex items-center gap-4 text-xs font-medium text-muted-foreground border-r pr-6 border-border/50">
                <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy</Link>
                <Link href="/terms" className="hover:text-foreground transition-colors">Terms</Link>
             </div>
             <ModeToggle />
          </div>
        </div>
      </div>
    </footer>
  );
}
