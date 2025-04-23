"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Search } from "lucide-react";
import type React from "react";
import { useState } from "react";
import { AppSidebar } from "./app-sidebar";
import { BreadcrumbNav } from "./breadcrumb-nav";
import { HeaderThemeToggle } from "./header-theme-toggle";
import { MenuSearchModal } from "./menu-search-modal";
import { SidebarTrigger } from "./sidebar";
import { SidebarInset } from "./sidebar";
import { SidebarProvider } from "./sidebar";

export default function MainSideBarProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [searchOpen, setSearchOpen] = useState(false);

	return (
		<SidebarProvider>
			<AppSidebar
				buttonColors="destructiveOnlyTextAndIconColor"
				variant="inset"
			/>
			<SidebarInset>
				<div className="sticky top-0 z-10 w-full">
					<header className="flex h-16 items-center justify-between border-b bg-background/95 backdrop-blur transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 supports-[backdrop-filter]:bg-background/60">
						<div className="flex items-center gap-2 px-4">
							<SidebarTrigger className="-ml-1" />
							<Separator
								orientation="vertical"
								className="mr-2 data-[orientation=vertical]:h-4"
							/>
							<div className="mr-4 hidden font-medium md:block">Xyz Admin</div>
							<BreadcrumbNav />
						</div>
						<div className="flex items-center gap-3 px-4">
							<Button
								variant="ghost"
								size="icon"
								className="h-8 w-8 rounded-full"
								onClick={() => setSearchOpen(true)}
							>
								<Search className="h-4 w-4" />
								<span className="sr-only">Search</span>
							</Button>
							<HeaderThemeToggle />
						</div>
					</header>
				</div>
				<div className="flex flex-1 flex-col gap-4 p-4 pt-2">{children}</div>
			</SidebarInset>
			<MenuSearchModal open={searchOpen} onOpenChange={setSearchOpen} />
		</SidebarProvider>
	);
}
