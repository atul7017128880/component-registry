import { Check, X } from "lucide-react";
import type { TableBooleanComponentType } from "raw-auto-table-zod";

export default function AutoTableComponentBoolean({
	value,
}: TableBooleanComponentType) {
	return value ? (
		<Check className="h-4 w-4 text-green-500" />
	) : (
		<X className="h-4 w-4 text-red-500" />
	);
}
