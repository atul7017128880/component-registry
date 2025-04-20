import type { TableNumberComponentType } from "raw-auto-table-zod";

export default function AutoTableComponentNumber({
	value,
}: TableNumberComponentType) {
	return <span className="font-mono text-foreground">{value}</span>;
}
