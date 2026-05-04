import { TypographyMuted } from "@/components/shared/typography";
import Image from "next/image";
import Link from "next/link";
import { env } from "../../../../env";

export default function FooterBottom() {
  return (
    <div className="flex items-center justify-between gap-4 border-t py-4">
      <TypographyMuted>
        &copy; {new Date().getFullYear()} {env.NEXT_PUBLIC_APP_NAME}
      </TypographyMuted>
    </div>
  );
}
