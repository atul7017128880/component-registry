import "./App.css";
import FormTest from "./from-test/FormTest";
import TableTest from "./table-test/TableTest";

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
			<TableTest />
		</div>
	);
}

export default App;
