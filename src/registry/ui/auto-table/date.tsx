import { format } from "date-fns";
import type { TableDateComponentType } from "raw-auto-table-zod";

export default function AutoTableComponentDate({
	value,
}: TableDateComponentType) {
	const date = new Date(value);
	return (
		<span className="text-muted-foreground">
			{format(date, "MMM dd, yyyy hh:mm a")}
		</span>
	);
}
