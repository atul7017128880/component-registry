import type { ActionButtonWrapperType } from "./types";

export default function AutoThingActionButtonWrapper({
	children,
}: ActionButtonWrapperType) {
	return <div className="flex gap-2">{children}</div>;
}
