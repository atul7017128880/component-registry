import { useState } from "react";
import viteLogo from "/vite.svg";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { z } from "zod";
import {
	AutoForm,
	AutoFormComponentsProvider,
	ComponentRegistry,
} from "zod-auto-form";
import AutoFormArrayWrapper from "./registry/ui/auto-form/AutoFormArrayWrapper";
import AutoFormGroupedFieldsWrapper from "./registry/ui/auto-form/AutoFormGroupedFieldsWrapper";
import AutoFormObjectWrapper from "./registry/ui/auto-form/AutoFormObjectWrapper";
import AutoFormButton from "./registry/ui/auto-form/button";
import AutoFormCheckboxV1 from "./registry/ui/auto-form/checkbox_ui_1";
import AutoFormCheckboxV2 from "./registry/ui/auto-form/checkbox_ui_2";
import AutoFormDateTimePicker from "./registry/ui/auto-form/date-time-picker";
import AutoFormComponent from "./registry/ui/auto-form/form";
import AutoFormInput from "./registry/ui/auto-form/input";
import AutoFormMultiSelect from "./registry/ui/auto-form/multi-select";
import AutoFormNumberInput from "./registry/ui/auto-form/number-input";
import AutoFormRadioGroup from "./registry/ui/auto-form/radio-group";
import AutoFormSelect from "./registry/ui/auto-form/select";
import AutoFormSwitch from "./registry/ui/auto-form/switch";
import AutoFormTextArea from "./registry/ui/auto-form/textarea";
const componentRegistry = ComponentRegistry({
	Input: AutoFormInput,
	SubmitButton: AutoFormButton,
	Form: AutoFormComponent,
	NumberInput: AutoFormNumberInput,
	Select: AutoFormSelect,
	TextArea: AutoFormTextArea,
	MultiSelect: AutoFormMultiSelect,
	Checkbox: AutoFormCheckboxV2,
	RadioGroup: AutoFormRadioGroup,
	Switch: AutoFormSwitch,
	DateTimePicker: AutoFormDateTimePicker,
	ObjectWrapper: AutoFormObjectWrapper,
	ArrayWrapper: AutoFormArrayWrapper,
	GroupedFieldsWrapper: AutoFormGroupedFieldsWrapper,
});
function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="flex flex-col gap-4 w-[80%] mx-auto mt-29 mb-40">
			<AutoFormComponentsProvider components={componentRegistry}>
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
			</AutoFormComponentsProvider>
		</div>
	);
}

export default App;
