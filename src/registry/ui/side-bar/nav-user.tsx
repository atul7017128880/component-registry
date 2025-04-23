"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
	BadgeCheck,
	Bell,
	ChevronsUpDown,
	CreditCard,
	LogOut,
	Settings,
	User,
} from "lucide-react";
import { usePathname } from "next/navigation";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
	SidebarGroup,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	useSidebar,
} from "./sidebar";
import { ThemeToggle } from "./theme-toggle";

type NavItemProps = {
	title: string;
	href: string;
	icon: React.ElementType;
	isActive?: boolean;
};

export function NavUser() {
	const { isMobile } = useSidebar();
	const pathname = usePathname();

	const isActive = (href: string) => {
		return pathname === href;
	};

	return (
		<SidebarGroup className="mt-auto">
			<SidebarGroupLabel>
				<span>User</span>
			</SidebarGroupLabel>
			<SidebarMenu className="space-y-1">
				<SidebarMenuItem>
					<SidebarMenuButton
						asChild
						isActive={isActive("/settings")}
						tooltip="Settings"
					>
						<a href="/settings">
							<Settings className="size-4" />
							<span>Settings</span>
						</a>
					</SidebarMenuButton>
				</SidebarMenuItem>
				<ThemeToggle variant="default" />
				<SidebarMenuItem>
					<SidebarMenuButton tooltip="Logout">
						<LogOut className="size-4" />
						<span>Logout</span>
					</SidebarMenuButton>
				</SidebarMenuItem>
			</SidebarMenu>
		</SidebarGroup>
	);
}
