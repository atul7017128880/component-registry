import type { Registry } from "./schema";

const registryComponents: Registry = [
	{
		name: "Auto Form Component",
		type: "registry:block",
		registryDependencies: [
			"button",
			"input",
			"label",
			"card",
			"separator",
			"checkbox",
			"textarea",
			"radio-group",
			"select",
			"switch",
			"popover",
			"calendar",
			"badge",
			"command",
			"drawer",
		],
		dependencies: ["zod-auto-form"],
		files: [
			"ui/auto-form/button.tsx",
			"ui/auto-form/input.tsx",
			"ui/auto-form/FieldWarper.tsx",
			"ui/auto-form/textarea.tsx",
			"ui/auto-form/checkbox_ui_1.tsx",
			"ui/auto-form/checkbox_ui_2.tsx",
			"ui/auto-form/radio-group.tsx",
			"ui/auto-form/select.tsx",
			"ui/auto-form/switch.tsx",
			"ui/auto-form/date-time-picker.tsx",
			"ui/auto-form/AutoFormGroupedFieldsWrapper.tsx",
			"ui/auto-form/AutoFormArrayWrapper.tsx",
			"ui/auto-form/AutoFormObjectWrapper.tsx",
			"ui/auto-form/form.tsx",
			"ui/auto-form/multi-select.tsx",
			"ui/auto-form/number-input.tsx",
			"ui/auto-form/base-multi-select.tsx",
			"ui/auto-form/base-time-picker.tsx",
			"ui/auto-form/index.tsx",
		],
	},
];

export { registryComponents };
