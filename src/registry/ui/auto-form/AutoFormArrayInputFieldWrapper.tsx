import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { X } from "lucide-react";
import type { ArrayInputFieldWrapper } from "zod-auto-form";
export default function AutoFormArrayInputFieldWrapper({
	children,
	onAddField,
	onRemoveField,
	description,
	label,
	title,
}: ArrayInputFieldWrapper) {
	return (
		<Card>
			<CardHeader>
				<CardTitle>{title || label}</CardTitle>
				<CardDescription>{description}</CardDescription>
			</CardHeader>
			<CardContent>
				<div className="flex flex-col gap-2">
					{children.map((child, index) => (
						<div
							key={index.toString()}
							className="flex flex-row items-center gap-2"
						>
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
