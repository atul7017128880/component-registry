"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import * as React from "react";

import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import {
	type SideBarColorVariant,
	SidebarMenuButton,
	SidebarMenuItem,
} from "./sidebar";

export function ThemeToggle({
	variant = "default",
}: { variant?: SideBarColorVariant }) {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = React.useState(false);

	// Avoid hydration mismatch by only rendering after mount
	React.useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return (
			<SidebarMenuItem>
				<SidebarMenuButton variant={variant}>
					<div className="size-4" />
					<span>Theme</span>
				</SidebarMenuButton>
			</SidebarMenuItem>
		);
	}

	return (
		<SidebarMenuItem>
			<Tooltip>
				<TooltipTrigger asChild>
					<SidebarMenuButton
						variant={variant}
						onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
					>
						{theme === "dark" ? (
							<Moon className="size-4" />
						) : (
							<Sun className="size-4" />
						)}
						<span>Theme: {theme === "dark" ? "Dark" : "Light"}</span>
					</SidebarMenuButton>
				</TooltipTrigger>
				<TooltipContent side="right">Toggle theme</TooltipContent>
			</Tooltip>
		</SidebarMenuItem>
	);
}
