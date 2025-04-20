import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import type { ObjectWrapper } from "zod-auto-form";

export default function AutoFormObjectWrapper({
	children,
	description,
	label,
	title,
}: ObjectWrapper) {
	return (
		<Card>
			<CardHeader>
				<CardTitle>{title || label}</CardTitle>
				<CardDescription>{description}</CardDescription>
			</CardHeader>
			<CardContent className="flex flex-col gap-4">{children}</CardContent>
		</Card>
	);
}
