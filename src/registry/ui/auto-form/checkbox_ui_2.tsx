import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

import type { CheckboxInput } from "zod-auto-form";
function AutoFormCheckboxV2({
	description,
	disabled,
	errorMessages,
	id,
	isError,
	label,
	onBlur,
	onChange,
	title,
	value,
}: CheckboxInput) {
	return (
		<div className="flex flex-row items-start gap-3">
			<div>
				<Checkbox
					id={id}
					disabled={disabled}
					onBlur={onBlur}
					checked={value}
					onCheckedChange={onChange}
					className={cn(isError && "border-red-500")}
				/>
			</div>
			<div className="space-y-1 leading-none">
				<Label htmlFor={id} className={cn(isError && "text-red-500")}>
					{title || label}
				</Label>
				<label
					htmlFor={id}
					className={cn(
						"text-sm text-muted-foreground",
						isError && "text-red-500",
					)}
				>
					{description}
				</label>
				{isError && (
					<p className="text-sm text-red-500">
						{errorMessages.map((error) => error.message).join(", ")}
					</p>
				)}
			</div>
		</div>
	);
}

export default AutoFormCheckboxV2;
