/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {},
	},
	plugins: [
		require("@tailwindcss/forms")({
			// only generate global styles
			strategy: "class", // only generate classes
		}),
	],
};