import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import type { SelectInput } from "zod-auto-form";
import FieldWarper from "./FieldWarper";

export default function AutoFormSelect({
	selectOptions,
	placeholder,
	disabled,
	onChange,
	title,
	value,
	...rest
}: SelectInput) {
	return (
		<FieldWarper title={title} {...rest}>
			<Select defaultValue={value} onValueChange={onChange} disabled={disabled}>
				<SelectTrigger
					id={rest.id}
					className={cn(
						"w-full",
						rest.errorMessages.length > 0 && "border-red-500 ",
					)}
				>
					<SelectValue placeholder={placeholder} />
				</SelectTrigger>
				<SelectContent>
					{selectOptions?.map((option) => (
						<SelectItem key={option} value={option}>
							{option}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
		</FieldWarper>
	);
}
