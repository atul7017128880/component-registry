import type { FormComponent } from "zod-auto-form";

export default function AutoFormComponent({
	children,
	onSubmit,
	formId,
}: FormComponent) {
	return (
		<form className="flex flex-col gap-4" onSubmit={onSubmit} id={formId}>
			{children}
		</form>
	);
}
