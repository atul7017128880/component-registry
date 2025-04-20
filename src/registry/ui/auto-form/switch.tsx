import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import type { SwitchInput } from "zod-auto-form";

export default function AutoFormSwitch({
	description,
	disabled,
	errorMessages,
	isError,
	onChange,
	onBlur,
	title,
	value,
	id,
	label,
}: SwitchInput) {
	return (
		<Card className={cn(isError && "border-red-500")}>
			<CardContent className="flex flex-row items-center justify-between ">
				<div className="space-y-0.5 px-4">
					<Label htmlFor={id} className={cn(isError && "text-red-500")}>
						{title || label}
					</Label>
					<p
						className={cn(
							"text-muted-foreground text-xs",
							isError && "text-red-500",
						)}
					>
						{description}
					</p>
				</div>
				<div>
					<Switch
						className={cn(isError && "border-red-500")}
						id={id}
						disabled={disabled}
						checked={value}
						onBlur={onBlur}
						onCheckedChange={onChange}
					/>
				</div>
			</CardContent>
			{isError && (
				<CardFooter>
					<p className="text-red-500 text-sm">
						{errorMessages.map((error) => error.message).join(", ")}
					</p>
				</CardFooter>
			)}
		</Card>
	);
}
