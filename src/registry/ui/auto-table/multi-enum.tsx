import { Badge } from "@/components/ui/badge";
import type { TableMultiEnumComponentType } from "raw-auto-table-zod";
import { pickColorBasedOnValue } from "./enum";

export default function AutoTableComponentMultiEnum({
	value,
}: TableMultiEnumComponentType) {
	return (
		<div className="flex flex-wrap gap-1">
			{value.map((item, index) => (
				<Badge
					key={`enum-${index}-${item}`}
					style={{ backgroundColor: pickColorBasedOnValue(item) }}
					className="capitalize"
				>
					{item}
				</Badge>
			))}
		</div>
	);
}
