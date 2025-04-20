import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import type { TextInput } from "zod-auto-form";
import FieldWarper from "./FieldWarper";

export default function AutoFormInput({
	description,
	disabled,
	errorMessages,
	id,
	isError,
	label,
	onBlur,
	onChange,
	placeholder,
	title,
	value,
}: TextInput) {
	console.log(errorMessages);
	return (
		<FieldWarper
			title={title || label}
			label={label}
			errorMessages={errorMessages}
			description={description}
			id={id}
		>
			<Input
				disabled={disabled}
				onChange={(e) => onChange(e.target.value)}
				onBlur={onBlur}
				className={cn(isError && "border-red-500")}
				id={id}
				placeholder={placeholder}
				value={value}
			/>
		</FieldWarper>
	);
}
