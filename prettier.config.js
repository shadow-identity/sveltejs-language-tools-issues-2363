export default {
	plugins: ["prettier-plugin-svelte"],
	printWidth: 80,
	semi: false,
	bracketSameLine: false,
	singleAttributePerLine: false,
	overrides: [{ files: "*.svelte", options: { parser: "svelte" } }],
}
