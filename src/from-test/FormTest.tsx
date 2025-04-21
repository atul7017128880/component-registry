import componentRegistry from "@/registry/ui/auto-form";
import React from "react";
import { z } from "zod";
import { AutoForm } from "zod-auto-form";
import { AutoFormComponentsProvider } from "zod-auto-form";

export default function FormTest() {
	return (
		<div>
			<AutoFormComponentsProvider components={componentRegistry}>
				<AutoForm
					onSubmit={(data) => {
						console.log(data);
					}}
					schema={z.object({
						friends: z
							.array(
								z.string(),
							)
							.describe("Enter your friends"),
						name: z
							.string()
							.describe(
								"Enter your name,This Name Will be used to identify you in the system",
							),
						email: z
							.string()
							.describe(
								"Enter your email,This email will be used to identify you in the system",
							),
						age: z
							.number()
							.describe(
								"Enter your age,This age will be used to identify you in the system",
							),
						role: z
							.enum(["admin", "user", "guest"])
							.describe(
								"Enter your role,This role will be used to identify you in the system",
							),
						description: z
							.string()
							.describe(
								"Enter your description,This description will be used to identify you in the system",
							),
						skills: z
							.array(z.enum(["react", "node", "express", "mongodb"]))
							.nonempty("You must select at least one skill")
							.describe(
								"Enter your skills,This skills will be used to identify you in the system",
							),
						acceptTerms: z
							.boolean()
							.refine((val) => val, {
								message: "You must accept terms and conditions",
							})
							.describe(
								"Accept terms and conditions,This will be used to identify you in the system",
							),
						radioGroup: z
							.enum(["default", "comfortable", "compact"])
							.describe(
								"Select your radio group,This radio group will be used to identify you in the system",
							),
						isActive: z
							.boolean()
							.refine((val) => val, {
								message: "You must be active",
							})
							.describe(
								"Is the user active,This will be used to identify you in the system",
							),
						dateTimePicker: z.date().describe("Enter your date time picker"),
						address: z.object({
							street: z.string().describe("Enter your street"),
							city: z.string().describe("Enter your city"),
							state: z.string().describe("Enter your state"),
							zip: z.string().describe("Enter your zip"),
						}),
						addressWithArray: z
							.object({
								street: z.string().describe("Enter your street"),
								city: z.string().describe("Enter your city"),
								state: z.string().describe("Enter your state"),
								zip: z.string().describe("Enter your zip"),
							})
							.array(),
					})}
					groupByZodKeys={{
						users: ["name", "email", "age", "role", "description", "skills"],
					}}
					fieldTypeOverrides={{
						description: {
							typeOfField: "textarea",
						},
						radioGroup: {
							typeOfField: "radio",
						},
						isActive: {
							typeOfField: "switch",
						},
					}}
				/>
			</AutoFormComponentsProvider>
		</div>
	);
}
