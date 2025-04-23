"use client";

import type * as React from "react";

import { NavMain } from "./nav-main";
import { NavProjects } from "./nav-projects";
import { NavUser } from "./nav-user";
import {
	type SideBarColorVariant,
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarRail,
} from "./sidebar";
import { TeamSwitcher } from "./team-switcher";

export function AppSidebar({
	buttonColors,
	...props
}: React.ComponentProps<typeof Sidebar> & {
	buttonColors: SideBarColorVariant;
}) {
	return (
		<Sidebar collapsible="icon" {...props}>
			<SidebarHeader>
				<TeamSwitcher />
			</SidebarHeader>
			<SidebarContent>
				<NavMain variant={buttonColors} />
			</SidebarContent>
			<SidebarFooter>
				<NavUser />
			</SidebarFooter>
			<SidebarRail />
		</Sidebar>
	);
}
