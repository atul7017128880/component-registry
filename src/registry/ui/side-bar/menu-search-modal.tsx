"use client";

import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "@/components/ui/command";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { CommandIcon, FolderIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import type React from "react";
import { useEffect, useState } from "react";
import { getMenuList } from "./menu-list";

type MenuItem = {
	label: string;
	href: string;
	icon?: React.ElementType;
	submenus?: { label: string; href: string }[];
};

type FlatMenuItem = {
	label: string;
	href: string;
	group?: string;
	parent?: string;
};

export function MenuSearchModal({
	open,
	onOpenChange,
}: {
	open: boolean;
	onOpenChange: (open: boolean) => void;
}) {
	const [searchResults, setSearchResults] = useState<FlatMenuItem[]>([]);
	const [query, setQuery] = useState("");
	const router = useRouter();

	// Flatten menu items including submenus for easier searching
	const flattenMenuItems = (): FlatMenuItem[] => {
		const menuGroups = getMenuList([]);
		const flatItems: FlatMenuItem[] = [];

		menuGroups.forEach((group) => {
			group.menus.forEach((menu) => {
				// Add the main menu item
				flatItems.push({
					label: menu.label,
					href: menu.href,
					group: group.groupLabel || "Main",
				});

				// Add submenu items if any
				if (menu.submenus && menu.submenus.length > 0) {
					menu.submenus.forEach((submenu) => {
						flatItems.push({
							label: submenu.label,
							href: submenu.href,
							group: group.groupLabel || "Main",
							parent: menu.label,
						});
					});
				}
			});
		});

		return flatItems;
	};

	// Filter menu items based on search query
	useEffect(() => {
		if (query.trim() === "") {
			setSearchResults(flattenMenuItems());
			return;
		}

		const lowerQuery = query.toLowerCase();
		const filtered = flattenMenuItems().filter(
			(item) =>
				item.label.toLowerCase().includes(lowerQuery) ||
				(item.parent && item.parent.toLowerCase().includes(lowerQuery)) ||
				(item.group && item.group.toLowerCase().includes(lowerQuery)),
		);

		setSearchResults(filtered);
	}, [query]);

	const handleSelect = (item: FlatMenuItem) => {
		router.push(item.href);
		onOpenChange(false);
	};

	// Handle keyboard shortcut
	useEffect(() => {
		const down = (e: KeyboardEvent) => {
			if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
				e.preventDefault();
				onOpenChange(!open);
			}
		};

		document.addEventListener("keydown", down);
		return () => document.removeEventListener("keydown", down);
	}, [open, onOpenChange]);

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent className="p-0 sm:max-w-[550px]">
				<DialogHeader className="px-4 pt-4 pb-0">
					<DialogTitle>Search Menu</DialogTitle>
				</DialogHeader>
				<Command className="overflow-hidden rounded-lg border-0 shadow-none">
					<CommandInput
						placeholder="Search menu items..."
						value={query}
						onValueChange={setQuery}
						className="border-none outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
					/>
					<CommandList>
						<CommandEmpty>No results found.</CommandEmpty>
						<CommandGroup heading="Menu Items">
							{searchResults.map((item, index) => (
								<CommandItem
									key={index}
									onSelect={() => handleSelect(item)}
									className="flex items-center py-2"
								>
									{item.parent ? (
										<FolderIcon className="mr-2 h-4 w-4 text-muted-foreground" />
									) : (
										<CommandIcon className="mr-2 h-4 w-4 text-muted-foreground" />
									)}
									<span>{item.label}</span>
									{item.parent && (
										<span className="ml-2 text-muted-foreground text-xs">
											in {item.parent}
										</span>
									)}
								</CommandItem>
							))}
						</CommandGroup>
					</CommandList>
				</Command>
			</DialogContent>
		</Dialog>
	);
}
