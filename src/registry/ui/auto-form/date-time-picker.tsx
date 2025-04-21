/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarClock } from "lucide-react";
import React from "react";
import type { DateTimeInput } from "zod-auto-form";
import FieldWarper from "./FieldWarper";
import { TimePicker } from "./base-time-picker";

export default function AutoFormDateTimePicker({
	value: date,
	onChange: setDate,
	description,
	disabled,
	errorMessages,
	id,
	isError,
	label,
	placeholder,
	title,
}: DateTimeInput) {
	const [isOpenMobile, setIsOpenMobile] = React.useState(false);
	const [isPopoverOpen, setIsPopoverOpen] = React.useState(false);

	const [selectedTime, setSelectedTime] = React.useState<{
		hours: number;
		minutes: number;
	}>({
		hours: date?.getHours() || 0,
		minutes: date?.getMinutes() || 0,
	});

	const isMobile = useIsMobile();

	const handleSelect = (selectedDate: Date | undefined) => {
		if (selectedDate) {
			const newDate = new Date(selectedDate);
			newDate.setHours(selectedTime.hours);
			newDate.setMinutes(selectedTime.minutes);
			setDate(newDate);
		}
	};

	const handleTimeChange = (hours: number, minutes: number) => {
		setSelectedTime({ hours, minutes });
		if (date) {
			const newDate = new Date(date);
			newDate.setHours(hours);
			newDate.setMinutes(minutes);
			setDate(newDate);
		}
	};

	const DateTimeContent = () => (
		<div className="px-4 space-y-4 w-full flex flex-col justify-center items-center">
			<Calendar
				mode="single"
				selected={date}
				onSelect={handleSelect}
				initialFocus
				className={cn("mx-auto")}
			/>
			<div className="flex justify-center mb-3">
				<TimePicker
					hours={selectedTime.hours}
					minutes={selectedTime.minutes}
					onChange={handleTimeChange}
				/>
			</div>
		</div>
	);

	// Using Button directly instead of a functional component
	const triggerButtonContent = (
		<FieldWarper
			title={title}
			label={label}
			errorMessages={errorMessages}
			description={description}
			id={id}
		>
			<Button
				variant={"outline"}
				type="button"
				onClick={() => setIsPopoverOpen(true)}
				disabled={disabled}
				className={cn(
					"w-full justify-start text-left font-normal ",
					!date && "text-muted-foreground",
					isError && "border-red-500",
				)}
			>
				<CalendarClock
					className={cn("mr-2 h-4 w-4", isError && "text-red-500")}
				/>
				{date ? format(date, "PP p") : <span>{placeholder}</span>}
			</Button>
		</FieldWarper>
	);

	if (isMobile) {
		return (
			<Drawer open={isOpenMobile} onOpenChange={setIsOpenMobile}>
				<DrawerTrigger>{triggerButtonContent}</DrawerTrigger>
				<DrawerContent>
					<DrawerHeader className="text-center">
						<DrawerTitle>Select Date and Time</DrawerTitle>
					</DrawerHeader>
					<DateTimeContent />
					<DrawerFooter className="pt-2">
						<DrawerClose asChild>
							<Button variant="default" className="w-full">
								Done
							</Button>
						</DrawerClose>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		);
	}

	return (
		<Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
			<PopoverTrigger>{triggerButtonContent}</PopoverTrigger>
			<PopoverContent className="w-auto p-0" align="start">
				<DateTimeContent />
			</PopoverContent>
		</Popover>
	);
}
