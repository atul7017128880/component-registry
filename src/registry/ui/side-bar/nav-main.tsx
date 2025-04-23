"use client";

import { ChevronRight } from "lucide-react";
import { useSelectedLayoutSegments } from "next/navigation";

import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible";
import Link from "next/link";
import { getMenuList } from "./menu-list";
import {
	type SideBarColorVariant,
	SideBarLink,
	SidebarGroup,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarMenuSub,
	SidebarMenuSubItem,
	useSidebar,
} from "./sidebar";

export function NavMain({ variant }: { variant: SideBarColorVariant }) {
	const segment = useSelectedLayoutSegments();
	const menuGroups = getMenuList(segment);
	const { isMobile, setOpenMobile } = useSidebar();

	// Function to handle link clicks
	const handleLinkClick = () => {
		// Only close sidebar on mobile
		if (isMobile) {
			setOpenMobile(false);
		}
	};

	return (
		<>
			{menuGroups.map((group, groupIndex) => (
				<SidebarGroup key={`group-${group.groupLabel || groupIndex}`}>
					{group.groupLabel && (
						<SidebarGroupLabel>{group.groupLabel}</SidebarGroupLabel>
					)}
					<SidebarMenu>
						{group.menus.map((item) => {
							// Check if the item has sub-items
							const hasSubItems = item.submenus && item.submenus.length > 0;

							// If it has sub-items, render as collapsible
							if (hasSubItems) {
								return (
									<Collapsible
										key={item.label}
										asChild
										defaultOpen={item.active}
										className="group/collapsible"
									>
										<SidebarMenuItem>
											<CollapsibleTrigger asChild>
												<SidebarMenuButton
													tooltip={item.label}
													isActive={item.active}
													variant={variant}
												>
													{item.icon && <item.icon />}
													<span>{item.label}</span>
													<ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
												</SidebarMenuButton>
											</CollapsibleTrigger>
											<CollapsibleContent>
												<SidebarMenuSub className="space-y-1">
													{item.submenus.map((subItem, subItemIndex) => (
														<SidebarMenuSubItem key={subItem.label}>
															<SideBarLink
																index={subItemIndex}
																href={subItem.href}
																onClick={handleLinkClick}
																variant={variant}
																isActive={subItem.active}
															>
																<span>{subItem.label}</span>
															</SideBarLink>
														</SidebarMenuSubItem>
													))}
												</SidebarMenuSub>
											</CollapsibleContent>
										</SidebarMenuItem>
									</Collapsible>
								);
							}

							// If it doesn't have sub-items, render as a single item
							return (
								<SidebarMenuItem key={item.label}>
									<SidebarMenuButton
										variant={variant}
										asChild
										tooltip={item.label}
										isActive={item.active}
									>
										<Link href={item.href} onClick={handleLinkClick}>
											{item.icon && <item.icon />}
											<span>{item.label}</span>
										</Link>
									</SidebarMenuButton>
								</SidebarMenuItem>
							);
						})}
					</SidebarMenu>
				</SidebarGroup>
			))}
		</>
	);
}
