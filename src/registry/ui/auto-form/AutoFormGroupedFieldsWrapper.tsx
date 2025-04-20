import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { GroupedFieldsWrapper } from "zod-auto-form";
export default function AutoFormGroupedFieldsWrapper({
	children,
	groupName,
}: GroupedFieldsWrapper) {
	if (groupName === "other") {
		return <>{children}</>;
	}
	return (
		<Card>
			<CardHeader>
				<CardTitle>{groupName}</CardTitle>
			</CardHeader>
			<CardContent>{children}</CardContent>
		</Card>
	);
}
