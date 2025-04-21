import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import React from "react";
import { DescriptionList } from "./DescriptionList";
import type { ViewModalType } from "./types";
export default function ViewModal({ open, onClose, row }: ViewModalType) {
	return (
		<AlertDialog open={open} onOpenChange={onClose}>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>View Details</AlertDialogTitle>
					<AlertDialogDescription>
						View the details of Row
					</AlertDialogDescription>
					<div className="h-[50vh] overflow-scroll">
						<DescriptionList data={row as Record<string, unknown>} />
					</div>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel>Cancel</AlertDialogCancel>
					<AlertDialogAction>Continue</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
}
