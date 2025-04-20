import type { TableMultiStringComponentType } from "raw-auto-table-zod";

export default function AutoTableComponentMultiString({
	value,
}: TableMultiStringComponentType) {
	return (
		<div className="flex flex-row gap-1">
			{value.map((item, index) => (
				<div key={`string-${index}-${item}`}>
					<span className="text-foreground text-sm">{item}</span>
					{index !== value.length - 1 && (
						<span className="text-foreground text-sm">,</span>
					)}
				</div>
			))}
		</div>
	);
}
