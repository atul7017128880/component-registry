import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import type React from "react";

export default function FieldWarper({
	title,
	label,
	errorMessages,
	description,
	id,
	children,
}: {
	title: string;
	label: string;
	errorMessages: { message: string }[];
	description: string;
	id: string;
	children: React.ReactNode;
}) {
	return (
		<div className="w-full justify-start text-left font-normal">
			<Label
				className={cn(
					"text-sm mb-1 ml-1",
					errorMessages.length > 0 && "text-red-500",
				)}
				htmlFor={id}
			>
				{title || label}
			</Label>
			{children}
			<p className="text-sm text-red-500">
				{errorMessages.map((error) => error.message)}
			</p>
			{description && (
				<p
					className={cn(
						"px-1 text-xs text-gray-500 dark:text-gray-400 mt-1",
						errorMessages.length > 0 && "text-red-500",
					)}
				>
					{description}
				</p>
			)}
		</div>
	);
}
