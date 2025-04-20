import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Clock } from "lucide-react";

interface TimePickerProps {
	hours: number;
	minutes: number;
	onChange: (hours: number, minutes: number) => void;
}

export function TimePicker({ hours, minutes, onChange }: TimePickerProps) {
	// Convert 24-hour format to 12-hour format for display
	const displayHour = hours % 12 === 0 ? 12 : hours % 12;
	const period = hours >= 12 ? "PM" : "AM";

	const handleHourChange = (value: string) => {
		// Convert selected 12-hour format to 24-hour format
		const selectedHour = Number.parseInt(value);
		const newHour =
			period === "PM"
				? selectedHour === 12
					? 12
					: selectedHour + 12
				: selectedHour === 12
					? 0
					: selectedHour;
		onChange(newHour, minutes);
	};

	const handlePeriodChange = (value: string) => {
		// Adjust hours based on AM/PM selection
		const newHour =
			value === "PM"
				? hours >= 12
					? hours
					: hours + 12
				: hours >= 12
					? hours - 12
					: hours;
		onChange(newHour, minutes);
	};

	return (
		<div className="flex items-center gap-2">
			<Clock className="h-4 w-4 text-muted-foreground" />
			<div className="flex items-center gap-2 flex-wrap justify-center">
				<Select value={displayHour.toString()} onValueChange={handleHourChange}>
					<SelectTrigger className="w-[70px]">
						<SelectValue placeholder="Hours" />
					</SelectTrigger>
					<SelectContent className="max-h-[200px]">
						{Array.from({ length: 12 }).map((_, i) => {
							const hour = i + 1; // 1-12 for 12-hour format
							return (
								<SelectItem key={hour} value={hour.toString()}>
									{hour.toString().padStart(2, "0")}
								</SelectItem>
							);
						})}
					</SelectContent>
				</Select>
				<span className="text-muted-foreground">:</span>
				<Select
					value={minutes.toString()}
					onValueChange={(value) => onChange(hours, Number.parseInt(value))}
				>
					<SelectTrigger className="w-[70px]">
						<SelectValue placeholder="Minutes" />
					</SelectTrigger>
					<SelectContent className="max-h-[200px]">
						{Array.from({ length: 60 }).map((_, i) => (
							<SelectItem key={i.toString()} value={i.toString()}>
								{i.toString().padStart(2, "0")}
							</SelectItem>
						))}
					</SelectContent>
				</Select>
				<Select value={period} onValueChange={handlePeriodChange}>
					<SelectTrigger className="w-[70px]">
						<SelectValue placeholder="AM/PM" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="AM">AM</SelectItem>
						<SelectItem value="PM">PM</SelectItem>
					</SelectContent>
				</Select>
			</div>
		</div>
	);
}
