import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import type { NumberInput } from "zod-auto-form";
import FieldWarper from "./FieldWarper";

export default function AutoFormNumberInput({
	onBlur,
	onChange,
	placeholder,
	title,
	value,
	...rest
}: NumberInput) {
	return (
		<FieldWarper title={title} {...rest}>
			<Input
				id={rest.id}
				className={cn(rest.errorMessages.length > 0 && "border-red-500")}
				type="number"
				onBlur={onBlur}
				onChange={(e) => onChange(Number(e.target.value))}
				placeholder={placeholder}
				value={value === 0 ? "" : value}
			/>
		</FieldWarper>
	);
}
