import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import {
	ResponsiveModal,
	ResponsiveModalBody,
	ResponsiveModalContent,
	ResponsiveModalDescription,
	ResponsiveModalFooter,
	ResponsiveModalHeader,
	ResponsiveModalTitle,
} from "./ResponsiveModal";
import type { CreateModalType } from "./types";
export default function AutoThingCreateModal({
	open,
	onClose,
	children,

	formId,
	isLoading,
}: CreateModalType) {
	return (
		<ResponsiveModal open={open} onOpenChange={onClose}>
			<ResponsiveModalContent>
				<ResponsiveModalHeader>
					<ResponsiveModalTitle>
						{/* @ts-ignore */}
						Create
					</ResponsiveModalTitle>
					<ResponsiveModalDescription>
						Create the details of row
					</ResponsiveModalDescription>
				</ResponsiveModalHeader>
				<ResponsiveModalBody className="max-h-[80vh] overflow-scroll py-5">
					{children}
				</ResponsiveModalBody>
				<ResponsiveModalFooter>
					<Button onClick={onClose} variant="outline">
						Close
					</Button>
					<Button form={formId} type="submit">
						{isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Save"}
					</Button>
				</ResponsiveModalFooter>
			</ResponsiveModalContent>
		</ResponsiveModal>
	);
}
