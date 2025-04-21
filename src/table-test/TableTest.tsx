import componentRegistry from "@/registry/ui/auto-table";
import { FieldCustomizer, RawAutoTable } from "raw-auto-table-zod";
import { AutoTableComponentsProvider } from "raw-auto-table-zod";
import React from "react";
import { z } from "zod";
const schema = z.object({
	profile: z
		.string()
		.url()
		.describe(
			FieldCustomizer({
				isImage: true,
			}),
		),
	id: z.string(),
	name: z.string(),
	email: z.string(),
	age: z.number(),
	role: z.enum(["admin", "user", "guest"]),
	skills: z.array(z.enum(["react", "node", "express", "mongodb"])),
	array: z.array(z.string()),
	date: z.date(),
	multiDate: z.array(z.date()),
	isBanned: z.boolean(),
});

const randomDataGenerator = (length: number) => {
	const array: z.infer<typeof schema>[] = [];
	for (let i = 0; i < length; i++) {
		const skills = ["react", "node", "express", "mongodb"];
		const randomSkills = skills.sort(() => Math.random() - 0.5).slice(0, 2);
		array.push({
			profile: `https://i.pravatar.cc/150?img=${i}`,
			id: `id-${i}`,
			name: `name-${i}`,
			email: `email-${i}@gmail.com`,
			age: i,
			role: Math.random() > 0.5 ? "admin" : "user",
			skills: randomSkills,
			array: ["1", "2", "3", "4", "5"],
			date: new Date(),
			multiDate: [new Date(), new Date(), new Date()],
			isBanned: Math.random() > 0.5,
		});
	}
	return array;
};
export default function TableTest() {
	return (
		<div>
			<AutoTableComponentsProvider components={componentRegistry}>
				<RawAutoTable
					isLoading
					loadingType="row-based"
					data={randomDataGenerator(10)}
					schema={schema}
				/>
			</AutoTableComponentsProvider>
		</div>
	);
}
