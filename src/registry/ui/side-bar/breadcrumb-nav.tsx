"use client";

import { usePathname } from "next/navigation";
import { Fragment } from "react";

import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export function BreadcrumbNav() {
	const pathname = usePathname();

	// Skip the first empty string after splitting
	const pathSegments = pathname.split("/").filter((segment) => segment);

	// If we're at the root, just show "Dashboard"
	if (pathSegments.length === 0) {
		return (
			<Breadcrumb>
				<BreadcrumbList>
					<BreadcrumbItem>
						<BreadcrumbPage>Dashboard</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>
		);
	}

	// Format segment for display (capitalize, replace hyphens with spaces)
	const formatSegment = (segment: string) => {
		return segment
			.split("-")
			.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
			.join(" ");
	};

	return (
		<Breadcrumb>
			<BreadcrumbList>
				<BreadcrumbItem className="hidden md:block">
					<BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
				</BreadcrumbItem>

				{pathSegments.map((segment, index) => {
					const isLastSegment = index === pathSegments.length - 1;
					const href = `/${pathSegments.slice(0, index + 1).join("/")}`;

					return (
						<Fragment key={segment}>
							<BreadcrumbSeparator className="hidden md:block" />
							<BreadcrumbItem>
								{isLastSegment ? (
									<BreadcrumbPage>{formatSegment(segment)}</BreadcrumbPage>
								) : (
									<BreadcrumbLink href={href}>
										{formatSegment(segment)}
									</BreadcrumbLink>
								)}
							</BreadcrumbItem>
						</Fragment>
					);
				})}
			</BreadcrumbList>
		</Breadcrumb>
	);
}
