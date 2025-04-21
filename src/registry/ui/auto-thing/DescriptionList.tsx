import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronUp, Copy, Search, X } from "lucide-react";
import { type ReactNode, useState } from "react";

type ValueRenderer = (value: unknown, key: string) => ReactNode;

export interface DescriptionListProps {
	data: Record<string, unknown>;
	title?: string;
	className?: string;
	excludeKeys?: string[];
	includeKeys?: string[];
	customFormatters?: Record<string, ValueRenderer>;
	collapsible?: boolean;
	initiallyCollapsed?: boolean;
	searchable?: boolean;
	enableCopy?: boolean;
	dateFormat?: Intl.DateTimeFormatOptions;
	nestedListsCollapsible?: boolean;
	isWithoutCard?: boolean;
}

export function DescriptionList({
	data,
	title,
	className,
	excludeKeys = [],
	includeKeys,
	customFormatters = {},
	collapsible = false,
	initiallyCollapsed = false,
	searchable = false,
	enableCopy = true,
	dateFormat = {
		year: "numeric",
		month: "long",
		day: "numeric",
		hour: "2-digit",
		minute: "2-digit",
	},
	nestedListsCollapsible = true,
	isWithoutCard = false,
}: DescriptionListProps) {
	const [isCollapsed, setIsCollapsed] = useState(initiallyCollapsed);
	const [searchTerm, setSearchTerm] = useState("");
	const [expandedNested, setExpandedNested] = useState<Record<string, boolean>>(
		{},
	);

	// Function to format the key for display
	const formatKey = (key: string) => {
		return key
			.replace(/([A-Z])/g, " $1") // Add space before capital letters
			.replace(/^./, (str) => str.toUpperCase()) // Capitalize first letter
			.trim(); // Remove any extra spaces
	};

	// Function to copy content to clipboard
	const copyToClipboard = (text: string) => {
		navigator.clipboard.writeText(text);
	};

	// Function to toggle nested object expansion
	const toggleNestedExpansion = (key: string) => {
		setExpandedNested((prev) => ({
			...prev,
			[key]: !prev[key],
		}));
	};

	// Function to render different value types
	const renderValue = (value: unknown, key: string): ReactNode => {
		// Check for custom formatter first
		if (key in customFormatters && customFormatters[key]) {
			return customFormatters[key]?.(value, key);
		}

		if (value === null || value === undefined) {
			return (
				<span className="text-muted-foreground text-sm italic">
					Not provided
				</span>
			);
		}

		if (typeof value === "boolean") {
			return (
				<Badge
					variant={value ? "default" : "outline"}
					className={value ? "bg-green-500 hover:bg-green-600" : ""}
				>
					{value ? "Yes" : "No"}
				</Badge>
			);
		}

		if (value instanceof Date) {
			return (
				<span className="font-medium">
					{value.toLocaleDateString("en-US", dateFormat)}
				</span>
			);
		}

		if (typeof value === "object") {
			if (Array.isArray(value)) {
				return value.length === 0 ? (
					<span className="text-muted-foreground text-sm italic">
						Empty array
					</span>
				) : (
					<div className="flex flex-col gap-1.5">
						{value.map((item, index) => {
							if (typeof item === "object" && item !== null) {
								const itemId = `${key}-${index}`;
								const isExpanded = expandedNested[itemId] ?? false;

								return (
									<div
										key={`${key}-item-${typeof item === "object" && item !== null && "id" in item ? String(item.id) : index}`}
										className="w-full rounded-md border bg-muted/50 p-2 text-sm"
									>
										{nestedListsCollapsible ? (
											<div className="mb-1 flex items-center justify-between">
												<span className="font-medium text-xs">{`Item ${index + 1}`}</span>
												<Button
													variant="ghost"
													size="sm"
													className="h-6 w-6 p-0"
													onClick={() => toggleNestedExpansion(itemId)}
												>
													{isExpanded ? (
														<ChevronUp className="h-4 w-4" />
													) : (
														<ChevronDown className="h-4 w-4" />
													)}
												</Button>
											</div>
										) : null}
										{!nestedListsCollapsible || isExpanded ? (
											<pre className="whitespace-pre-wrap font-mono text-xs">
												{JSON.stringify(item, null, 2)}
											</pre>
										) : (
											<p className="text-muted-foreground text-xs">
												Click to expand
											</p>
										)}
									</div>
								);
							}
							return (
								<Badge
									key={`${key}-badge-${String(item)}-${index}`}
									variant="secondary"
									className="text-sm"
								>
									{String(item)}
								</Badge>
							);
						})}
					</div>
				);
			}

			// For nested objects
			const objectId = `nested-${key}`;
			const isExpanded = expandedNested[objectId] ?? true;

			return (
				<div className="rounded-md border bg-muted/50 p-2 text-sm">
					{nestedListsCollapsible ? (
						<div className="mb-1 flex items-center justify-between">
							<span className="font-medium text-xs">Object details</span>
							<Button
								variant="ghost"
								size="sm"
								className="h-6 w-6 p-0"
								onClick={() => toggleNestedExpansion(objectId)}
							>
								{isExpanded ? (
									<ChevronUp className="h-4 w-4" />
								) : (
									<ChevronDown className="h-4 w-4" />
								)}
							</Button>
						</div>
					) : null}
					{!nestedListsCollapsible || isExpanded ? (
						<DescriptionList
							data={value as Record<string, unknown>}
							className="border-none shadow-none"
							collapsible={false}
							searchable={false}
							enableCopy={enableCopy}
							nestedListsCollapsible={nestedListsCollapsible}
							dateFormat={dateFormat}
						/>
					) : (
						<p className="text-muted-foreground text-xs">Click to expand</p>
					)}
				</div>
			);
		}

		// For numbers, add special formatting
		if (typeof value === "number") {
			if (String(value).includes(".")) {
				// Likely a price or decimal number
				return <span className="font-medium">{value.toFixed(2)}</span>;
			}
			return <span className="font-medium">{value}</span>;
		}

		// Check if value is a date string
		if (typeof value === "string" && /^\d{4}-\d{2}-\d{2}/.test(value)) {
			try {
				const date = new Date(value);
				if (!Number.isNaN(date.getTime())) {
					return (
						<span className="font-medium">
							{date.toLocaleDateString("en-US", dateFormat)}
						</span>
					);
				}
			} catch (e) {
				// Not a valid date, continue with default rendering
			}
		}

		// For URLs, show as clickable links
		if (
			typeof value === "string" &&
			(value.startsWith("http://") ||
				value.startsWith("https://") ||
				value.startsWith("www."))
		) {
			return (
				<a
					href={value.startsWith("www.") ? `https://${value}` : value}
					target="_blank"
					rel="noopener noreferrer"
					className="text-primary hover:underline"
				>
					{value}
				</a>
			);
		}

		return <span>{String(value)}</span>;
	};

	// Filter the data based on search term and include/exclude lists
	const filteredEntries = Object.entries(data).filter(([key, value]) => {
		if (excludeKeys.includes(key)) return false;
		if (includeKeys && !includeKeys.includes(key)) return false;

		if (searchTerm) {
			const formattedKey = formatKey(key).toLowerCase();
			const valueStr = String(value).toLowerCase();
			const term = searchTerm.toLowerCase();

			return formattedKey.includes(term) || valueStr.includes(term);
		}

		return true;
	});

	return (
		<Card className={cn("w-full shadow-sm", className)}>
			<CardHeader
				className={cn(
					"pb-2",
					collapsible && "flex-row items-center justify-between",
				)}
			>
				<CardTitle>{title || "Details"}</CardTitle>
				{collapsible && (
					<Button
						variant="ghost"
						size="sm"
						onClick={() => setIsCollapsed(!isCollapsed)}
						className="ml-auto"
					>
						{isCollapsed ? (
							<ChevronDown className="h-4 w-4" />
						) : (
							<ChevronUp className="h-4 w-4" />
						)}
					</Button>
				)}
			</CardHeader>
			{(!collapsible || !isCollapsed) && (
				<CardContent>
					{searchable && (
						<div className="relative mb-4">
							<div className="relative">
								<Search className="absolute top-2.5 left-2 h-4 w-4 text-muted-foreground" />
								<Input
									placeholder="Search fields..."
									value={searchTerm}
									onChange={(e) => setSearchTerm(e.target.value)}
									className="pr-8 pl-8"
								/>
								{searchTerm && (
									<Button
										variant="ghost"
										size="sm"
										className="absolute top-1.5 right-1 h-7 w-7 p-0"
										onClick={() => setSearchTerm("")}
									>
										<X className="h-4 w-4" />
									</Button>
								)}
							</div>
						</div>
					)}
					<dl className="divide-y divide-border">
						{filteredEntries.length > 0 ? (
							filteredEntries.map(([key, value]) => (
								<div
									key={key}
									className="grid grid-cols-1 place-items-baseline gap-2 py-3 sm:grid-cols-3"
								>
									<dt className="font-medium text-muted-foreground text-sm sm:col-span-1">
										{formatKey(key)}
									</dt>
									<dd className="flex items-start gap-2 text-sm sm:col-span-2">
										<div className="flex-grow">{renderValue(value, key)}</div>
										{enableCopy && (
											<TooltipProvider>
												<Tooltip>
													<TooltipTrigger asChild>
														<Button
															variant="ghost"
															size="sm"
															className="h-6 w-6 p-0 opacity-50 hover:opacity-100"
															onClick={() =>
																copyToClipboard(JSON.stringify(value, null, 2))
															}
														>
															<Copy className="h-3.5 w-3.5" />
														</Button>
													</TooltipTrigger>
													<TooltipContent>
														<p className="text-xs">Copy value</p>
													</TooltipContent>
												</Tooltip>
											</TooltipProvider>
										)}
									</dd>
								</div>
							))
						) : (
							<div className="py-3 text-center text-muted-foreground text-sm">
								{searchTerm ? "No matching fields found" : "No data available"}
							</div>
						)}
					</dl>
				</CardContent>
			)}
		</Card>
	);
}
