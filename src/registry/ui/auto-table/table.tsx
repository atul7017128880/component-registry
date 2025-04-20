import {
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
	Table as TaleOfShad,
} from "@/components/ui/table";
import type {
	TableType,
	Table_TBody_Type,
	Table_TD_Type,
	Table_TH_Type,
	Table_THead_Type,
	Table_TR_Type,
} from "raw-auto-table-zod";
export function AutoTableComponentTable({ children }: TableType) {
	return <TaleOfShad>{children}</TaleOfShad>;
}
export function AutoTableComponentTableBody({ children }: Table_TBody_Type) {
	return <TableBody>{children}</TableBody>;
}
export function AutoTableComponentTableCell({ children }: Table_TD_Type) {
	return <TableCell>{children}</TableCell>;
}
export function AutoTableComponentTableHead({ children }: Table_TH_Type) {
	return (
		<TableHead className="bg-primary text-primary-foreground">
			{children}
		</TableHead>
	);
}
export function AutoTableComponentTableHeader({ children }: Table_THead_Type) {
	return <TableHeader className="bg-primary h-15">{children}</TableHeader>;
}
export function AutoTableComponentTableRow({ children }: Table_TR_Type) {
	return <TableRow>{children}</TableRow>;
}
