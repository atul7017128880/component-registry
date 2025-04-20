import { Check, X } from "lucide-react";
import type { TableMultiBooleanComponentType } from "raw-auto-table-zod";

export default function AutoTableComponentMultiBoolean({
	value,
}: TableMultiBooleanComponentType) {
	return (
		<div className="flex flex-wrap gap-1">
			{value.map((item, index) => (
				<span key={`bool-${index}-${item}`} className="flex items-center">
					{item ? (
						<Check className="h-4 w-4 text-green-500" />
					) : (
						<X className="h-4 w-4 text-red-500" />
					)}
				</span>
			))}
		</div>
	);
}
