import { ComponentRegistry } from "zod-auto-form";
import AutoFormArrayInputFieldWrapper from "./AutoFormArrayInputFieldWrapper";
import AutoFormArrayWrapper from "./AutoFormArrayWrapper";
import AutoFormGroupedFieldsWrapper from "./AutoFormGroupedFieldsWrapper";
import AutoFormObjectWrapper from "./AutoFormObjectWrapper";
import AutoFormButton from "./button";
import AutoFormCheckboxV1 from "./checkbox_ui_1";
import AutoFormCheckboxV2 from "./checkbox_ui_2";
import AutoFormDateTimePicker from "./date-time-picker";
import AutoFormComponent from "./form";
import AutoFormInput from "./input";
import AutoFormMultiSelect from "./multi-select";
import AutoFormNumberInput from "./number-input";
import AutoFormRadioGroup from "./radio-group";
import AutoFormSelect from "./select";
import AutoFormSwitch from "./switch";
import AutoFormTextArea from "./textarea";
const componentRegistry = ComponentRegistry({
	Input: AutoFormInput,
	SubmitButton: AutoFormButton,
	Form: AutoFormComponent,
	NumberInput: AutoFormNumberInput,
	Select: AutoFormSelect,
	TextArea: AutoFormTextArea,
	MultiSelect: AutoFormMultiSelect,
	Checkbox: AutoFormCheckboxV1,
	RadioGroup: AutoFormRadioGroup,
	Switch: AutoFormSwitch,
	DateTimePicker: AutoFormDateTimePicker,
	ObjectWrapper: AutoFormObjectWrapper,
	ArrayWrapper: AutoFormArrayWrapper,
	GroupedFieldsWrapper: AutoFormGroupedFieldsWrapper,
	ArrayInputFieldWrapper: AutoFormArrayInputFieldWrapper,
	arrayBoolean: AutoFormCheckboxV1,
	arrayDate: AutoFormDateTimePicker,
	arrayNumber: AutoFormNumberInput,
	arrayString: AutoFormInput,
});

export default componentRegistry;
