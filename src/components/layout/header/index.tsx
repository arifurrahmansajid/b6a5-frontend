import { getSession } from "@/actions/auth-actions";
import { MobileNav } from "@/components/layout/header/mobile-nav";
import { Logo } from "@/components/layout/logo";
import { routeRulesUtil } from "@/utils/route-rules-util";
import AnimatedHeader from "./animated-header";
import DesktopNav from "./desktop-nav";
import { HeaderCTA } from "./header-cta";

export default async function Header() {
  const { data } = await getSession();

  const user = data?.user;

  const dashboardPath = user
    ? routeRulesUtil.getDefaultDashboardRoute(user)
    : "/sign-in";

  return (
    <AnimatedHeader>
      <div className="flex items-center gap-2">
        <Logo />
      </div>

      <div className="hidden md:flex flex-1 justify-center">
        <DesktopNav />
      </div>

      <div className="flex items-center gap-4">
        <HeaderCTA dashboardPath={dashboardPath} />
        <MobileNav dashboardPath={dashboardPath} />
      </div>
    </AnimatedHeader>
  );
}
