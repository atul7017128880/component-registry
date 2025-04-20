import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { X } from "lucide-react";

import type { ArrayWrapper } from "zod-auto-form";
export default function AutoFormArrayWrapper({
	children,
	onAddField,
	onRemoveField,
	description,
	label,
	title,
}: ArrayWrapper) {
	return (
		<Card>
			<CardHeader>
				<CardTitle>{title || label}</CardTitle>
				<CardDescription>{description}</CardDescription>
			</CardHeader>
			<CardContent>
				<div className="flex flex-col gap-2">
					{children.map((child, index) => (
						<div key={index.toString()} className="flex flex-col gap-2">
							{child}
							<Button
								variant="destructive"
								onClick={() => onRemoveField(index)}
								type="button"
								size="icon"
								className="self-end"
							>
								<X />
							</Button>
							<Separator className="my-2 h-3" />
						</div>
					))}
				</div>
			</CardContent>
			<CardFooter>
				<Button type="button" onClick={onAddField}>
					Add
				</Button>
			</CardFooter>
		</Card>
	);
}
