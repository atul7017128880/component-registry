import type { TableTextComponentType } from "raw-auto-table-zod";

export default function AutoTableComponentText({
	value,
}: TableTextComponentType) {
	return <span className="text-foreground">{value}</span>;
}
