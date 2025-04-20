import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import type { TextAreaInput } from "zod-auto-form";
import FieldWarper from "./FieldWarper";

export default function AutoFormTextArea({
	disabled,
	onChange,
	placeholder,
	onBlur,
	title,
	value,
	...rest
}: TextAreaInput) {
	return (
		<FieldWarper title={title} {...rest}>
			<Textarea
				id={rest.id}
				className={cn(rest.errorMessages.length > 0 && "border-red-500")}
				value={value}
				onChange={(e) => onChange(e.target.value)}
				onBlur={onBlur}
				placeholder={placeholder}
				disabled={disabled}
			/>
		</FieldWarper>
	);
}
