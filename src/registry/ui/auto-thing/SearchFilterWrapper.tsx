import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import type { SearchFilterWrapperType } from "./types";
export default function AutoThingSearchFilterWrapper({
	children,
}: SearchFilterWrapperType) {
	return (
		<Card className="flex w-[100%] gap-2 md:w-[85%]">
			<CardHeader>
				<CardTitle>Search</CardTitle>
				<CardDescription>Search Information</CardDescription>
			</CardHeader>
			<CardContent>
				<Accordion type="single" collapsible>
					<AccordionItem value="search">
						<AccordionTrigger>Open Search</AccordionTrigger>
						<AccordionContent>{children}</AccordionContent>
					</AccordionItem>
				</Accordion>
			</CardContent>
		</Card>
	);
}
