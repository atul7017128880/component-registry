import { Eye } from "lucide-react";
import type { ActionButtonType } from "./types";

import { Button } from "@/components/ui/button";
import React from "react";

export default function AutoThingViewButtonDetails({
	row,
	openModal,
}: ActionButtonType) {
	return (
		<Button variant="outline" size="icon" onClick={openModal}>
			<Eye className="h-4 w-4" />
		</Button>
	);
}
