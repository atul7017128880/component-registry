import { Loader2 } from "lucide-react";
import type { FullTableLoadingComponentType } from "raw-auto-table-zod";

export default function AutoTableComponentFullTableLoading(
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	_props: FullTableLoadingComponentType,
) {
	return (
		<div className="flex min-h-[200px] w-full items-center justify-center">
			<Loader2 className="h-8 w-8 animate-spin text-primary" />
		</div>
	);
}
