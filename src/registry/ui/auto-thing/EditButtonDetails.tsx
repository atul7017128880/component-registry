import { Pencil } from "lucide-react";
import type { ActionButtonType } from "./types";

import { Button } from "@/components/ui/button";

export default function AutoThingEditButtonDetails({
	row,
	openModal,
}: ActionButtonType) {
	return (
		<Button variant="outline" size="icon" onClick={openModal}>
			<Pencil className="h-4 w-4" />
		</Button>
	);
}
