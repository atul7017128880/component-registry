import { AutoThingComponentRegistryHelper } from "auto-thing-zod";
import ActionButtonWrapper from "./ActionButtonWrapper";
import CreateModal from "./CreateModal";
import DeleteButtonDetails from "./DeleteButtonDetails";
import DeleteModal from "./DeleteModal";
import EditButtonDetails from "./EditButtonDetails";
import EditModal from "./EditModal";
import SearchFilterWrapper from "./SearchFilterWrapper";
import TableWrapperCard from "./TableWrapperCard";
import ViewButtonDetails from "./ViewButtonDetails";
import ViewModal from "./ViewModal";

export const AutoThingComponents = AutoThingComponentRegistryHelper({
	ActionButtonWrapper,
	ViewButtonDetails,
	EditButtonDetails,
	DeleteButtonDetails,
	EditModal,
	ViewModal,
	DeleteModal,
	TableWrapperCard,
	CreateModal,
	SearchFilterWrapper,
});
