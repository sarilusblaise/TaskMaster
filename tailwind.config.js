/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Montserrat", "Helvetica", "Arial", "sans-serif"],
			},

			screens: {
				xsm: "500px",
			},
		},
	},
	plugins: [
		require("@tailwindcss/forms")({
			strategy: "class", // only generate classes
		}),
	],
};
