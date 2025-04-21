import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import type { TableWrapperCardType } from "./types";
export default function AutoThingTableWrapperCard({
	children,
	title,
	description,
	openCreateModal,
	paginationData,
}: TableWrapperCardType) {
	return (
		<Card>
			<CardHeader className="flex flex-row justify-between">
				<div>
					<CardTitle>{title}</CardTitle>
					<CardDescription>{description}</CardDescription>
				</div>
				<Button size="sm" onClick={openCreateModal} className="mt-2 self-end">
					Create
				</Button>
			</CardHeader>
			<CardContent>{children}</CardContent>
			<CardFooter className="flex flex-row justify-between">
				<p>
					Page {paginationData.currentPage} of {paginationData.totalPage}
				</p>
				<div className="flex gap-2 ">
					<Button
						variant="outline"
						disabled={!paginationData.canGoToPreviousPage}
						onClick={() =>
							paginationData.onPageChange(paginationData.currentPage - 1)
						}
					>
						Previous
					</Button>
					<Button
						disabled={!paginationData.canGoToNextPage}
						variant="outline"
						onClick={() =>
							paginationData.onPageChange(paginationData.currentPage + 1)
						}
					>
						Next
					</Button>
				</div>
			</CardFooter>
		</Card>
	);
}
