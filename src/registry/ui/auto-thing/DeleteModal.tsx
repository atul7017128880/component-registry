import {
	AlertDialog,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Loader2, Trash2 } from "lucide-react";
import { useState } from "react";
import { DescriptionList } from "./DescriptionList";
import type { DeleteModalType } from "./types";

export default function AutoThingDeleteModal({
	onClose,
	onDelete,
	open,
	row,
}: DeleteModalType) {
	const [isDeleting, setIsDeleting] = useState(false);

	const handleDelete = async () => {
		try {
			setIsDeleting(true);
			await onDelete();
			// Only close after successful deletion
			onClose();
		} catch (error) {
			console.error("Delete operation failed:", error);
		} finally {
			setIsDeleting(false);
		}
	};

	// Handle when user attempts to close modal
	const handleOpenChange = (isOpen: boolean) => {
		// If user is trying to close the modal (isOpen is false)
		// and we're not in the middle of deleting, allow it
		if (!isOpen && !isDeleting) {
			onClose();
		}
		// Otherwise, if we're deleting, prevent closing
	};

	// Extract displayable info from row

	return (
		<AlertDialog open={open} onOpenChange={handleOpenChange}>
			<AlertDialogContent className="max-w-md">
				<AlertDialogHeader>
					<div className="flex items-center gap-3">
						<div className="rounded-full bg-destructive/15 p-2">
							<Trash2 className="h-5 w-5 text-destructive" />
						</div>
						<AlertDialogTitle>Delete Confirmation</AlertDialogTitle>
					</div>
					<AlertDialogDescription>
						Are you sure you want to delete this item? This action cannot be
						undone and all associated data will be permanently removed.
					</AlertDialogDescription>
				</AlertDialogHeader>
				<div className="h-[40vh] overflow-scroll">
					<DescriptionList
						title="Row Details"
						data={row as Record<string, unknown>}
						className="mt-4"
					/>
				</div>
				{/* {getRowDetails()} */}

				<AlertDialogFooter>
					<AlertDialogCancel
						onClick={() => !isDeleting && onClose()}
						className="border-input hover:bg-muted"
						disabled={isDeleting}
					>
						Cancel
					</AlertDialogCancel>
					<Button
						onClick={handleDelete}
						className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
						disabled={isDeleting}
					>
						{isDeleting ? (
							<Loader2 className="h-4 w-4 animate-spin" />
						) : (
							"Delete"
						)}
					</Button>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
}
