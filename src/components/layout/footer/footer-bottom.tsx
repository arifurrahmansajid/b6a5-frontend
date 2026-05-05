import { TypographyMuted } from "@/components/shared/typography";
import { env } from "../../../../env";

export default function FooterBottom() {
  return (
    <TypographyMuted className="text-xs">
      &copy; {new Date().getFullYear()} {env.NEXT_PUBLIC_APP_NAME}. All rights reserved.
    </TypographyMuted>
  );
}
