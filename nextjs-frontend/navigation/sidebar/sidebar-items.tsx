import { File, House, School, AppWindow, FileBadge2, LucideIcon, PanelsTopLeft, Dot } from "lucide-react";
import Image from "next/image";
import { FaCircle } from "react-icons/fa";
import { SiOpencv } from "react-icons/si";

export interface NavSubItem {
  title: string;
  path: string;
}

export interface NavMainItem {
  title: string;
  path: string;
  icon?: LucideIcon | any;
  isActive?: boolean;
  subItems?: NavSubItem[];
}

export interface NavGroup {
  id: number;
  label: string;
  items: NavMainItem[];
}

const basePath = "/";

export const sidebarItems: NavGroup[] = [
  {
    id: 1,
    label: "",
    items: [
      {
        title: "Home",
        path: `${basePath}home`,
        icon: <House  className="text-gray-400 !w-4 !h-4 rounded-full inline-block"/>,
      },
      {
        title: "Events",
        path: `${basePath}events`,
        icon: <AppWindow className="text-[#f7957f] !w-4 !h-4 rounded-full inline-block"/>,
      },
      {
        title: "Courses",
        path: `${basePath}courses`,
        icon: <File className="text-[#7ac9fd] !w-4 !h-4 rounded-full inline-block" />,
      },
      {
        title: "Certifications",
        path: `${basePath}certifications`,
        icon: <FileBadge2 className="text-gray-400 !w-4 !h-4 rounded-full inline-block" />,
      },
      {
        title: "Competitions",
        path: `${basePath}competitions`,
        icon: <School className="text-gray-400 !w-4 !h-4 rounded-full inline-block"  />,
      },
      {
        title: "Job Portal",
        path: `${basePath}job-portal`,
        icon: <Image src={"/logo.png"} alt={"job-portal"} width={20} height={20} className="text-gray-400 rounded-full inline-block" />,
      },
    ],
  },
  {
    id: 2,
    label: "Get Started",
    items: [
      {
        title: "Start here",
        path: `${basePath}start-here`,
        icon: <FaCircle className="text-[#7ac9fd] !w-4 !h-4 rounded-full inline-block" />,
      },
      {
        title: "Introductions",
        path: `${basePath}introductions`,
        icon: <FaCircle className="text-[#7ac9fd] !w-4 !h-4 rounded-full inline-block" />,
      },
    ],
  },
  {
    id: 3,
    label: "Community Hub",
    items: [
      {
        title: "Discussions",
        path: `${basePath}discussions`,
        icon: <FaCircle className="text-[#a4fd7a] !w-4 !h-4 rounded-full inline-block" />,     
      },
      {
        title: "Contributions",
        path: `${basePath}contributions`,
        icon: <FaCircle className="text-[#a4fd7a] !w-4 !h-4 rounded-full inline-block" />,
      },
      {
        title: "Latest Trends",
        path: `${basePath}latest-trends`,
        icon: <FaCircle className="text-[#a4fd7a] !w-4 !h-4 rounded-full inline-block" />,
      },
    ],
  },
];

export const sidebarItemsLaunchPad: NavGroup[] = [
  {
    id: 1,
    label: "",
    items: [
      {
        title: "Home",
        path: `${basePath}home`,
        icon: House,
      },
      {
        title: "My Courses",
        path: `${basePath}my-courses`,
        icon: File,
      },
      {
        title: "Certifications",
        path: `${basePath}my-certifications`,
        icon: FileBadge2,
      },
    ],
  },
  {
    id: 2,
    label: "Get Started",
    items: [
      {
        title: "Start here",
        path: `${basePath}start-here`,
        icon: <FaCircle className="text-[#7ac9fd] !w-4 !h-4 rounded-full inline-block" />,
      },
      {
        title: "Introductions",
        path: `${basePath}introductions`,
        icon: <FaCircle className="text-[#7ac9fd] !w-4 !h-4 rounded-full inline-block" />,
      },
    ],
  },
];

export const sidebarItemsRecruitingSpace: NavGroup[] = [
  {
    id: 1,
    label: "",
    items: [
      {
        title: "Home",
        path: `${basePath}recruiting-home`,
        icon: House,
      },
      {
        title: "Hand pick candidates",
        path: `${basePath}hand-pick-candidates`,
        icon: FileBadge2,
      },
    ],
  },
  {
    id: 2,
    label: "Manage Hiring",
    items: [
      {
        title: "Job Posting",
        path: `${basePath}post-job`,
        icon: <FaCircle className="text-[#ffab00] !w-4 !h-4 rounded-full inline-block" />,
      },
      {
        title: "Applications",
        path: `${basePath}applications-status`,
        icon: <FaCircle className="text-[#ffab00] !w-4 !h-4 rounded-full inline-block" />,
      },
    ],
  }
];

export const sidebarItemsContributorSpace: NavGroup[] = [
  {
    id: 1,
    label: "Writer Hub",
    items: [
      {
        title: "Home",
        path: `${basePath}contributor-home`,
        icon: House,
      },
      {
        title: "Post Articles",
        path: `${basePath}post-articles`,
        icon: FileBadge2,
      },
      {
        title: "My Articles",
        path: `${basePath}my-articles`,
        icon: FileBadge2,
      },
    ],
  },
];

export const sidebarItemsAdminSpace: NavGroup[] = [
  {
    id: 1,
    label: "Community Hub",
    items: [
      {
        title: "Home",
        path: `${basePath}admin-home`,
        icon: House,
      },
      {
        title: "Monetization Discussions",
        path: `${basePath}monetization-discussions`,
        icon: File,
      },
      {
        title: "Assign Control",
        path: `${basePath}assign-control`,
        icon: FileBadge2,
      },
      {
        title: "Page Controls",
        path: `${basePath}page-control`,
        icon: FileBadge2,
      },
    ],
  },
  {
    id: 2,
    label: "Reports",
    items: [
      {
        title: "Acitivity Reports",
        path: `${basePath}activity-reports`,
        icon: House,
      },
      {
        title: "Recruiting Reports",
        path: `${basePath}recruiting-reports`,
        icon: File,
      },
      {
        title: "Monetization Reports",
        path: `${basePath}monetization-reports`,
        icon: FileBadge2,
      },
    ],
  }
];
