import {
	AlertTriangle,
	AudioWaveform,
	BookOpen,
	Bot,
	Command,
	ExternalLink,
	Frame,
	GalleryVerticalEnd,
	Info,
	LayoutDashboard,
	LayoutGrid,
	type LucideIcon,
	MapIcon,
	PieChart,
	Settings2,
	SquareTerminal,
	Ticket,
	User,
	UserPlus,
	UserX,
} from "lucide-react";

type Submenu = {
	href: string;
	label: string;
	active: boolean;
};

type Menu = {
	href: string;
	label: string;
	active: boolean;
	icon: LucideIcon;
	submenus: Submenu[];
};

type Group = {
	groupLabel: string;
	menus: Menu[];
};

export function getMenuList(pathnames: string[]): Group[] {
	// Helper function to check if a route is active
	const isActive = (route: string) => {
		// For route segments starting with parentheses
		if (route.startsWith("(")) {
			return pathnames.some((segment) => segment === route);
		}

		// For regular routes, check if any pathname segment contains this route
		return pathnames.some(
			(segment) =>
				segment === route.replace(/^\//, "") ||
				segment.includes(route.replace(/^\//, "")),
		);
	};

	const menuGroups = [
		{
			groupLabel: "",
			menus: [
				{
					href: "/dashboard",
					label: "Dashboard",
					active: isActive("/dashboard"),
					icon: LayoutGrid,
					submenus: [],
				},
			],
		},
		{
			groupLabel: "",
			menus: [
				{
					href: "/jobs",
					label: "Job And Token",
					active: isActive("/jobs"),
					icon: LayoutGrid,
					submenus: [],
				},
			],
		},
		{
			groupLabel: "Users Actions",
			menus: [
				{
					href: "/users",
					label: "Users",
					active: isActive("(users)"),
					icon: User,
					submenus: [
						{
							href: "/create-user",
							label: "Create User",
							active: isActive("/create-user"),
						},
						{
							href: "/update-user",
							label: "Update User",
							active: isActive("/update-user"),
						},
					],
				},
			],
		},
		{
			groupLabel: "",
			menus: [
				{
					href: "/delete-user",
					label: "Delete User",
					active: isActive("/delete-user"),
					icon: UserX,
					submenus: [],
				},
			],
		},
		{
			groupLabel: "",
			menus: [
				{
					href: "/orders",
					label: "Orders",
					active: isActive("/orders"),
					icon: Ticket,
					submenus: [],
				},
			],
		},
		{
			groupLabel: "API Integrations",
			menus: [
				{
					href: "/xoxoday-requests",
					label: "Xoxoday Requests",
					active: isActive("/xoxoday-requests"),
					icon: ExternalLink,
					submenus: [],
				},
			],
		},
		{
			groupLabel: "Payments",
			menus: [
				{
					href: "/payments-failed",
					label: "Failed Payments",
					active: isActive("/payments-failed"),
					icon: AlertTriangle,
					submenus: [],
				},
			],
		},
	];

	// Make sure parent menu is active if any of its submenu is active
	for (const group of menuGroups) {
		for (const menu of group.menus) {
			if (menu.submenus.length > 0) {
				const hasActiveSubmenu = menu.submenus.some(
					(submenu) => submenu.active,
				);
				if (hasActiveSubmenu) {
					menu.active = true;
				}
			}
		}
	}

	return menuGroups;
}
