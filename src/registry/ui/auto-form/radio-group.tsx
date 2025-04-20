import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import type { RadioGroupInput } from "zod-auto-form";

export default function AutoFormRadioGroup({
	description,
	disabled,
	errorMessages,
	isError,
	label,
	onBlur,
	onChange,
	selectOptions,
	title,
	value,
}: RadioGroupInput) {
	if (!selectOptions) {
		return null;
	}
	return (
		<Card className={cn(isError && "border-red-500")}>
			<CardHeader>
				<CardTitle className={cn(isError && "text-red-500")}>
					{title || label}
				</CardTitle>
				<CardDescription className={cn(isError && "text-red-500")}>
					{description}
				</CardDescription>
			</CardHeader>
			<CardContent className="flex flex-row items-start gap-3">
				<RadioGroup
					className={cn(isError && "border-red-500")}
					defaultValue={value}
					onValueChange={onChange}
					onBlur={onBlur}
					disabled={disabled}
				>
					{selectOptions.map((option) => (
						<div className="flex items-center space-x-2" key={option}>
							<RadioGroupItem
								className={cn(isError && "border-red-500")}
								value={option}
								id={option}
							/>
							<Label htmlFor={option} className={cn(isError && "text-red-500")}>
								{option}
							</Label>
						</div>
					))}
				</RadioGroup>
			</CardContent>
			{isError && errorMessages && (
				<CardFooter>
					<p className="text-sm text-red-500">
						{errorMessages.map((error) => error.message).join(", ")}
					</p>
				</CardFooter>
			)}
		</Card>
	);
}
