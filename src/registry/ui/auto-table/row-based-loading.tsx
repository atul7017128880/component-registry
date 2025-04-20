import { Skeleton } from "@/components/ui/skeleton";
import type { RowBasedLoadingComponentType } from "raw-auto-table-zod";

export default function AutoTableComponentRowBasedLoading(
	// Using any type for now until proper typing is available
	props: RowBasedLoadingComponentType,
) {
	// Default to 4 columns if not specified

	return <Skeleton className="h-5 w-full" />;
}
