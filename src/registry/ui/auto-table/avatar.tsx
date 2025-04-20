import { Avatar, AvatarImage } from "@/components/ui/avatar";
import type { TableImageComponentType } from "raw-auto-table-zod";

export default function AutoTableComponentAvatar({
	value,
}: TableImageComponentType) {
	return (
		<Avatar>
			<AvatarImage className="rounded-full" src={value} />
		</Avatar>
	);
}
