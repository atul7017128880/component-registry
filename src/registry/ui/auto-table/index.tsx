import { ComponentRegistryHelper } from "raw-auto-table-zod";
import AutoTableComponentAvatar from "./avatar";
import AutoTableComponentBoolean from "./boolean";
import AutoTableComponentDate from "./date";
import AutoTableComponentEnum from "./enum";
import AutoTableComponentFullTableLoading from "./full-table-loading";
import AutoTableComponentMultiBoolean from "./multi-boolean";
import AutoTableComponentMultiDate from "./multi-date";
import AutoTableComponentMultiEnum from "./multi-enum";
import AutoTableComponentMultiNumber from "./multi-number";
import AutoTableComponentMultiString from "./multi-string";
import AutoTableComponentNumber from "./number";
import AutoTableComponentRowBasedLoading from "./row-based-loading";
import {
	AutoTableComponentTable,
	AutoTableComponentTableBody,
	AutoTableComponentTableCell,
	AutoTableComponentTableHead,
	AutoTableComponentTableHeader,
	AutoTableComponentTableRow,
} from "./table";
import AutoTableComponentText from "./text";

const AutoTableRegistryComponents = ComponentRegistryHelper({
	Table: AutoTableComponentTable,
	TableTBody: AutoTableComponentTableBody,
	TableTD: AutoTableComponentTableCell,
	TableTH: AutoTableComponentTableHead,
	TableTHead: AutoTableComponentTableHeader,
	TableTR: AutoTableComponentTableRow,
	image: AutoTableComponentAvatar,
	text: AutoTableComponentText,
	number: AutoTableComponentNumber,
	enum: AutoTableComponentEnum,
	date: AutoTableComponentDate,
	boolean: AutoTableComponentBoolean,
	FullTableLoading: AutoTableComponentFullTableLoading,
	multi_boolean: AutoTableComponentMultiBoolean,
	multi_date: AutoTableComponentMultiDate,
	multi_enum: AutoTableComponentMultiEnum,
	multi_number: AutoTableComponentMultiNumber,
	multi_string: AutoTableComponentMultiString,
	RowBasedLoading: AutoTableComponentRowBasedLoading,
});

export default AutoTableRegistryComponents;
