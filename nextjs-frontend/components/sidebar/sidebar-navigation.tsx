"use client";

import { ChevronRight } from "lucide-react";

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "./sidebar";
import { NavGroup } from "@/navigation/sidebar/sidebar-items";
import React from "react";
import Link from "next/link";

export default function SidebarNavigation({ sidebarItems }: { readonly sidebarItems: NavGroup[] }) {
  return (
    <>
      {sidebarItems.map((navGroup) => (
        <SidebarGroup key={navGroup.id}>
          {navGroup.label && <SidebarGroupLabel>{navGroup.label}</SidebarGroupLabel>}
          <SidebarMenu>
            {navGroup.items.map((item) => (
              <Collapsible key={item.title} asChild defaultOpen={item.isActive} className="group/collapsible">
              <SidebarMenuItem className={item.isActive ? "bg-muted" : ""}>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton tooltip={item.title}>
                    {item.icon &&
                        (React.isValidElement(item.icon) ? (
                          item.icon // Render directly if it's already a JSX element
                        ) : (
                          React.createElement(item.icon) // Render if it's a React component
                        ))}
                        <Link href={item.path}>
                          <span>{item.title}</span>
                        </Link>
                      {item.subItems && (
                        <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                      )}
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  {item.subItems && (
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {item.subItems.map((subItem) => (
                          <SidebarMenuSubItem key={subItem.title}>
                            <SidebarMenuSubButton asChild>
                              <Link href={subItem.path}>
                                <span>{subItem.title}</span>
                              </Link>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  )}
                </SidebarMenuItem>
              </Collapsible>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      ))}
    </>
  );
}
