"use client";

import * as React from "react";
import {
  AudioWaveform,
  Command,
  GalleryVerticalEnd,
  Frame,
  Map,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

// Sidebar UI components
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "./sidebar";

// Sidebar navigation logic
import {
  sidebarItems,
  sidebarItemsLaunchPad,
  sidebarItemsRecruitingSpace,
  sidebarItemsContributorSpace,
  sidebarItemsAdminSpace,
  NavGroup,
} from "@/navigation/sidebar/sidebar-items";

import {
  InfoCard,
  InfoCardContent,
  InfoCardTitle,
  InfoCardDescription,
  InfoCardMedia,
  InfoCardFooter,
  InfoCardDismiss,
  InfoCardAction,
} from "../ui/info-card";

// Custom components
import SidebarFooterMenu from "./sidebar-footer-menu";
import SidebarNavigation from "./sidebar-navigation";
import { TeamIconSwitcher } from "./team-switcher";

// Teams setup
const teams = [
  { name: "Community", logo: Command, plan: "Free" },
  { name: "Recruitment", logo: AudioWaveform, plan: "OpenCV recruit" },
  { name: "Launch pad", logo: GalleryVerticalEnd, plan: "Community" },
  { name: "Contributor", logo: Map, plan: "Writer Hub" },
  { name: "Admin", logo: Frame, plan: "Admin Panel" },
];

const teamToSidebarItems: Record<string, NavGroup[]> = {
  Community: sidebarItems,
  Recruitment: sidebarItemsRecruitingSpace,
  "Launch pad": sidebarItemsLaunchPad,
  Contributor: sidebarItemsContributorSpace,
  Admin: sidebarItemsAdminSpace,
};

const teamToDefaultRoute: Record<string, string> = {
  Community: "/home",
  Recruitment: "/recruiting-home",
  "Launch pad": "/launchpad-home",
  Contributor: "/contributor-home",
  Admin: "/admin-home",
};

const teamRoutePrefixes: Record<string, string> = {
  Community: "/community",
  Recruitment: "/recruiting",
  "Launch pad": "/launchpad",
  Contributor: "/contributor",
  Admin: "/admin",
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  // const { data: session } = useSession();
  const router = useRouter();
  const pathname = usePathname();

  const [selectedTeam, setSelectedTeam] = React.useState(() => {
    for (const [team, prefix] of Object.entries(teamRoutePrefixes)) {
      if (pathname.startsWith(prefix)) return team;
    }
    return "Community";
  });

  const handleTeamChange = (teamName: string) => {
    const defaultRoute = teamToDefaultRoute[teamName];
    if (defaultRoute) {
      setSelectedTeam(teamName);
      router.push(defaultRoute);
    }
  };

  // const user = {
  //   name: session?.user?.name || "",
  //   email: session?.user?.email || "",
  //   avatar: session?.user?.image || "",
  // };

  React.useEffect(() => {
    for (const [team, prefix] of Object.entries(teamRoutePrefixes)) {
      if (pathname.startsWith(prefix)) {
        if (team !== selectedTeam) {
          setSelectedTeam(team);
        }
        break;
      }
    }
  }, [pathname, selectedTeam]);

  const markActive = (items: NavGroup[]): NavGroup[] => {
    return items.map((group) => ({
      ...group,
      items: group.items.map((item) => {
        const isActive =
          pathname === item.path ||
          item.subItems?.some((s) => s.path === pathname);
        return {
          ...item,
          isActive,
          subItems: item.subItems?.map((sub) => ({
            ...sub,
            isActive: pathname === sub.path,
          })),
        };
      }),
    }));
  };

  const getSidebarItems = (): NavGroup[] => {
    const items = teamToSidebarItems[selectedTeam] || sidebarItems;
    return markActive(items);
  };

  // Optional: redirect from `/` to first available item
  React.useEffect(() => {
    if (pathname === "/" && sidebarItems.length > 0) {
      const first = sidebarItems[0]?.items?.[0]?.path;
      if (first) router.push(first);
    }
  }, [pathname, router]);

  return (
    <Sidebar collapsible="icon" {...props}>
      <div className="flex h-full">
        <TeamIconSwitcher
          teams={teams}
          selectedTeam={selectedTeam}
          onTeamChange={handleTeamChange}
        />
        <div className="flex flex-col flex-1">
          <SidebarHeader />
          <SidebarContent>
            <SidebarNavigation sidebarItems={getSidebarItems()} />
          </SidebarContent>

          <InfoCard className="mx-2 mt-2">
            <InfoCardContent>
              <InfoCardTitle>Video Walkthrough</InfoCardTitle>
              <InfoCardDescription>
                Watch how the new dashboard works.
              </InfoCardDescription>
              <InfoCardMedia
                media={[
                  {
                    type: "video",
                    src: "/ad-opencv.mp4",
                    autoPlay: true,
                    loop: true,
                  },
                ]}
              />
              <InfoCardFooter>
                <InfoCardDismiss>Dismiss</InfoCardDismiss>
                <InfoCardAction>
                  <Link
                    href="https://opencv.org/university/?utm_source=launch-pad"
                    target="_blank"
                    className="flex flex-row items-center gap-1 underline"
                  >
                    Learn more <ExternalLink size={12} />
                  </Link>
                </InfoCardAction>
              </InfoCardFooter>
            </InfoCardContent>
          </InfoCard>

          {/* <SidebarFooter>
            <SidebarFooterMenu user={user} />
          </SidebarFooter> */}
        </div>
      </div>
      <SidebarRail />
    </Sidebar>
  );
}
