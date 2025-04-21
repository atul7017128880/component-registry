import { Trash2 } from "lucide-react";
import type { ActionButtonType } from "./types";

import { Button } from "@/components/ui/button";

export default function AutoThingDeleteButtonDetails({
	row,
	openModal,
}: ActionButtonType) {
	return (
		<Button variant="outline" size="icon" onClick={openModal}>
			<Trash2 className="h-4 w-4" />
		</Button>
	);
}
