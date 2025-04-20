import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import type { SubmitButton } from "zod-auto-form";
export default function AutoFormButton({
	children,
	formId,
	isLoading,
	onClick,
}: SubmitButton) {
	return (
		<Button
			className="w-full mt-2"
			type="submit"
			form={formId}
			disabled={isLoading}
			onClick={onClick}
		>
			{isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : children}
		</Button>
	);
}
