import {
	AutoTableComponentsProvider,
	ComponentRegistryHelper,
	FieldCustomizer,
	RawAutoTable,
} from "raw-auto-table-zod";
import { z } from "zod";
import "./App.css";
import AutoTableComponentAvatar from "./registry/ui/auto-table/avatar";
import AutoTableComponentBoolean from "./registry/ui/auto-table/boolean";
import AutoTableComponentDate from "./registry/ui/auto-table/date";
import AutoTableComponentEnum from "./registry/ui/auto-table/enum";
import AutoTableComponentFullTableLoading from "./registry/ui/auto-table/full-table-loading";
import AutoTableComponentMultiBoolean from "./registry/ui/auto-table/multi-boolean";
import AutoTableComponentMultiDate from "./registry/ui/auto-table/multi-date";
import AutoTableComponentMultiEnum from "./registry/ui/auto-table/multi-enum";
import AutoTableComponentMultiNumber from "./registry/ui/auto-table/multi-number";
import AutoTableComponentMultiString from "./registry/ui/auto-table/multi-string";
import AutoTableComponentNumber from "./registry/ui/auto-table/number";
import AutoTableComponentRowBasedLoading from "./registry/ui/auto-table/row-based-loading";
import {
	AutoTableComponentTable,
	AutoTableComponentTableBody,
	AutoTableComponentTableCell,
	AutoTableComponentTableHead,
	AutoTableComponentTableHeader,
	AutoTableComponentTableRow,
} from "./registry/ui/auto-table/table";
import AutoTableComponentText from "./registry/ui/auto-table/text";

const schema = z.object({
	profile: z
		.string()
		.url()
		.describe(
			FieldCustomizer({
				isImage: true,
			}),
		),
	id: z.string(),
	name: z.string(),
	email: z.string(),
	age: z.number(),
	role: z.enum(["admin", "user", "guest"]),
	skills: z.array(z.enum(["react", "node", "express", "mongodb"])),
	array: z.array(z.string()),
	date: z.date(),
	multiDate: z.array(z.date()),
	isBanned: z.boolean(),
});
const randomDataGenerator = (length: number) => {
	const array: z.infer<typeof schema>[] = [];
	for (let i = 0; i < length; i++) {
		const skills = ["react", "node", "express", "mongodb"];
		const randomSkills = skills.sort(() => Math.random() - 0.5).slice(0, 2);
		array.push({
			profile: `https://i.pravatar.cc/150?img=${i}`,
			id: `id-${i}`,
			name: `name-${i}`,
			email: `email-${i}@gmail.com`,
			age: i,
			role: Math.random() > 0.5 ? "admin" : "user",
			skills: randomSkills,
			array: ["1", "2", "3", "4", "5"],
			date: new Date(),
			multiDate: [new Date(), new Date(), new Date()],
			isBanned: Math.random() > 0.5,
		});
	}
	return array;
};
const componentRegistry = ComponentRegistryHelper({
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
// const componentRegistry = ComponentRegistry({
// 	Input: AutoFormInput,
// 	SubmitButton: AutoFormButton,
// 	Form: AutoFormComponent,
// 	NumberInput: AutoFormNumberInput,
// 	Select: AutoFormSelect,
// 	TextArea: AutoFormTextArea,
// 	MultiSelect: AutoFormMultiSelect,
// 	Checkbox: AutoFormCheckboxV2,
// 	RadioGroup: AutoFormRadioGroup,
// 	Switch: AutoFormSwitch,
// 	DateTimePicker: AutoFormDateTimePicker,
// 	ObjectWrapper: AutoFormObjectWrapper,
// 	ArrayWrapper: AutoFormArrayWrapper,
// 	GroupedFieldsWrapper: AutoFormGroupedFieldsWrapper,
// });
function App() {
	return (
		<div className="flex flex-col gap-4 w-[80%] mx-auto mt-29 mb-40">
			<AutoTableComponentsProvider components={componentRegistry}>
				<RawAutoTable
					isLoading
					loadingType="row-based"
					data={randomDataGenerator(10)}
					schema={schema}
				/>
			</AutoTableComponentsProvider>
			{/* <AutoFormComponentsProvider components={componentRegistry}>
				<AutoForm
					onSubmit={(data) => {
						console.log(data);
					}}
					schema={z.object({
						name: z
							.string()
							.describe(
								"Enter your name,This Name Will be used to identify you in the system",
							),
						email: z
							.string()
							.describe(
								"Enter your email,This email will be used to identify you in the system",
							),
						age: z
							.number()
							.describe(
								"Enter your age,This age will be used to identify you in the system",
							),
						role: z
							.enum(["admin", "user", "guest"])
							.describe(
								"Enter your role,This role will be used to identify you in the system",
							),
						description: z
							.string()
							.describe(
								"Enter your description,This description will be used to identify you in the system",
							),
						skills: z
							.array(z.enum(["react", "node", "express", "mongodb"]))
							.nonempty("You must select at least one skill")
							.describe(
								"Enter your skills,This skills will be used to identify you in the system",
							),
						acceptTerms: z
							.boolean()
							.refine((val) => val, {
								message: "You must accept terms and conditions",
							})
							.describe(
								"Accept terms and conditions,This will be used to identify you in the system",
							),
						radioGroup: z
							.enum(["default", "comfortable", "compact"])
							.describe(
								"Select your radio group,This radio group will be used to identify you in the system",
							),
						isActive: z
							.boolean()
							.refine((val) => val, {
								message: "You must be active",
							})
							.describe(
								"Is the user active,This will be used to identify you in the system",
							),
						dateTimePicker: z.date().describe("Enter your date time picker"),
						address: z.object({
							street: z.string().describe("Enter your street"),
							city: z.string().describe("Enter your city"),
							state: z.string().describe("Enter your state"),
							zip: z.string().describe("Enter your zip"),
						}),
						addressWithArray: z
							.object({
								street: z.string().describe("Enter your street"),
								city: z.string().describe("Enter your city"),
								state: z.string().describe("Enter your state"),
								zip: z.string().describe("Enter your zip"),
							})
							.array(),
					})}
					groupByZodKeys={{
						users: ["name", "email", "age", "role", "description", "skills"],
					}}
					fieldTypeOverrides={{
						description: {
							typeOfField: "textarea",
						},
						radioGroup: {
							typeOfField: "radio",
						},
						isActive: {
							typeOfField: "switch",
						},
					}}
				/>
			</AutoFormComponentsProvider> */}
		</div>
	);
}

export default App;
