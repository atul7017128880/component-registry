"use client";

import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import * as React from "react";

export function HeaderThemeToggle() {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = React.useState(false);

	// Avoid hydration mismatch by only rendering after mount
	React.useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return <div className="h-9 w-9" />;
	}

	return (
		<Button
			variant="outline"
			size="sm"
			className="h-8 w-8 rounded-full border-muted bg-background px-0"
			onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
			title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
		>
			<Sun className="dark:-rotate-90 h-4 w-4 rotate-0 scale-100 transition-all dark:scale-0" />
			<Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
			<span className="sr-only">Toggle theme</span>
		</Button>
	);
}
