/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
				yellow: "var(--yellow)",
				green: "var(--green)",
				black: "var(--black)",
				gray: "var(--gray)",
				myRed: "var(--myRed)",
				codeBackground: "var(--ode-background)",
			},
		},
	},
	plugins: [],
};
