import { Badge } from "@/components/ui/badge";
import type { TableEnumComponentType } from "raw-auto-table-zod";
const colorPalette = [
	"#FF6B6B", // Vibrant Coral Red
	"#6BCB77", // Soft Green
	"#4D96FF", // Sky Blue
	"#F5B971", // Warm Apricot
	"#A66DD4", // Lavender Purple
	"#00C2A8", // Turquoise
	"#FFD166", // Golden Yellow
	"#F67280", // Rose Pink
	"#3A86FF", // Bright Indigo
	"#8D99AE", // Slate Grey-Blue
	"#F28482", // Blush
	"#118AB2", // Ocean Blue
	"#06D6A0", // Mint Green
	"#F94144", // Strawberry Red
];

const stringToColorIndex = (value: string, paletteLength: number): number => {
	let hash = 0;
	for (let i = 0; i < value.length; i++) {
		hash = value.charCodeAt(i) + ((hash << 5) - hash);
	}
	return Math.abs(hash) % paletteLength;
};

export const pickColorBasedOnValue = (value: string): string => {
	const index = stringToColorIndex(value.toLowerCase(), colorPalette.length);
	return colorPalette[index];
};
export default function AutoTableComponentEnum({
	value,
}: TableEnumComponentType) {
	return (
		<Badge
			style={{ backgroundColor: pickColorBasedOnValue(value) }}
			className="capitalize"
		>
			{value}
		</Badge>
	);
}
