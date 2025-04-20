import { format } from "date-fns";
import type { TableMultiDateComponentType } from "raw-auto-table-zod";

export default function AutoTableComponentMultiDate({
	value,
}: TableMultiDateComponentType) {
	return (
		<div className="flex flex-row gap-1">
			{value.map((item, index) => (
				<div key={`date-${index}-${item}`}>
					<span className="text-foreground text-sm">
						{format(item, "MMM dd, yyyy hh:mm a")}
					</span>
					{index !== value.length - 1 && (
						<span className="text-foreground text-sm">,</span>
					)}
				</div>
			))}
		</div>
	);
}
