import { cn } from "@/lib/utils";
import type { MultiSelectInput } from "zod-auto-form";
import FieldWarper from "./FieldWarper";
import { MultiSelect } from "./base-multi-select";

export default function AutoFormMultiSelect({
	selectOptions,
	placeholder,
	disabled,
	onChange,
	onBlur,
	title,
	value,
	...rest
}: MultiSelectInput) {
	if (!selectOptions) return null;
	return (
		<FieldWarper title={title} {...rest}>
			<MultiSelect
				className={cn(rest.errorMessages.length > 0 && "border-red-500")}
				options={selectOptions.map((option) => ({
					label: option,
					value: option,
				}))}
				id={rest.id}
				onBlur={onBlur}
				onValueChange={onChange}
				placeholder={placeholder}
				disabled={disabled}
				value={value}
			/>
		</FieldWarper>
	);
}
