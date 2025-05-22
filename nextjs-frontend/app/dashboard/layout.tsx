"use client";

import React, { ReactNode } from "react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { DynamicBreadcrumb } from "@/components/ui/navigation-path";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/sidebar/sidebar";
import { logout } from "@/components/actions/logout-action";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";

interface LayoutProps {
  readonly children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <main>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset className="mx-auto">
          <header className="fixed w-full top-0 z-50 flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear backdrop-blur-md bg-white/10 group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 border-b">
            <div className="flex items-center gap-2 px-4">
              <SidebarTrigger className="-ml-1 w-4 h-4" />
              <Separator orientation="vertical" className="mr-2 h-4" />
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink href="/dashboard"><DynamicBreadcrumb /></BreadcrumbLink>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
            <div className="relative">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-300 hover:bg-gray-400">
                  <Avatar>
                    <AvatarFallback>GO</AvatarFallback>
                  </Avatar>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" side="bottom">
                <DropdownMenuItem>
                  <Link
                    href="/support"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Support
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <button
                    onClick={logout}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          </header>
          <div className="p-4 mt-[4rem]">{children}</div>
        </SidebarInset>
      </SidebarProvider>
    </main>
  );
}
