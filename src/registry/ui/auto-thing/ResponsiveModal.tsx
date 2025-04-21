"use client";

import * as React from "react";

import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

interface BaseProps {
	children: React.ReactNode;
}

interface RootResponsiveModalProps extends BaseProps {
	open?: boolean;
	onOpenChange?: (open: boolean) => void;
}

interface ResponsiveModalProps extends BaseProps {
	className?: string;
	asChild?: true;
}

const ResponsiveModalContext = React.createContext<{ isDesktop: boolean }>({
	isDesktop: false,
});

const useResponsiveModalContext = () => {
	const context = React.useContext(ResponsiveModalContext);
	if (!context) {
		throw new Error(
			"ResponsiveModal components cannot be rendered outside the ResponsiveModal Context",
		);
	}
	return context;
};

const ResponsiveModal = ({ children, ...props }: RootResponsiveModalProps) => {
	const isMobile = useIsMobile();
	const isDesktop = !isMobile;
	const Component = isDesktop ? Dialog : Drawer;

	return (
		<ResponsiveModalContext.Provider value={{ isDesktop }}>
			<Component {...props} {...(!isDesktop && { autoFocus: true })}>
				{children}
			</Component>
		</ResponsiveModalContext.Provider>
	);
};

const ResponsiveModalTrigger = ({
	className,
	children,
	...props
}: ResponsiveModalProps) => {
	const { isDesktop } = useResponsiveModalContext();
	const Component = isDesktop ? DialogTrigger : DrawerTrigger;

	return (
		<Component className={className} {...props}>
			{children}
		</Component>
	);
};

const ResponsiveModalClose = ({
	className,
	children,
	...props
}: ResponsiveModalProps) => {
	const { isDesktop } = useResponsiveModalContext();
	const Component = isDesktop ? DialogClose : DrawerClose;

	return (
		<Component className={className} {...props}>
			{children}
		</Component>
	);
};

const ResponsiveModalContent = ({
	className,
	children,
	...props
}: ResponsiveModalProps) => {
	const { isDesktop } = useResponsiveModalContext();
	const Component = isDesktop ? DialogContent : DrawerContent;

	return (
		<Component className={className} {...props}>
			{children}
		</Component>
	);
};

const ResponsiveModalDescription = ({
	className,
	children,
	...props
}: ResponsiveModalProps) => {
	const { isDesktop } = useResponsiveModalContext();
	const Component = isDesktop ? DialogDescription : DrawerDescription;

	return (
		<Component className={className} {...props}>
			{children}
		</Component>
	);
};

const ResponsiveModalHeader = ({
	className,
	children,
	...props
}: ResponsiveModalProps) => {
	const { isDesktop } = useResponsiveModalContext();
	const Component = isDesktop ? DialogHeader : DrawerHeader;

	return (
		<Component className={className} {...props}>
			{children}
		</Component>
	);
};

const ResponsiveModalTitle = ({
	className,
	children,
	...props
}: ResponsiveModalProps) => {
	const { isDesktop } = useResponsiveModalContext();
	const Component = isDesktop ? DialogTitle : DrawerTitle;

	return (
		<Component className={className} {...props}>
			{children}
		</Component>
	);
};

const ResponsiveModalBody = ({
	className,
	children,
	...props
}: ResponsiveModalProps) => {
	return (
		<div className={cn("px-4 md:px-0", className)} {...props}>
			{children}
		</div>
	);
};

const ResponsiveModalFooter = ({
	className,
	children,
	...props
}: ResponsiveModalProps) => {
	const { isDesktop } = useResponsiveModalContext();
	const Component = isDesktop ? DialogFooter : DrawerFooter;

	return (
		<Component className={className} {...props}>
			{children}
		</Component>
	);
};

export {
	ResponsiveModal,
	ResponsiveModalTrigger,
	ResponsiveModalClose,
	ResponsiveModalContent,
	ResponsiveModalDescription,
	ResponsiveModalHeader,
	ResponsiveModalTitle,
	ResponsiveModalBody,
	ResponsiveModalFooter,
};
