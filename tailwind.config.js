/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#007aff",
				"primary-dark": "#0056d6",
				"primary-light": "#4da3ff",
			},
			animation: {
				float: "float 6s ease-in-out infinite",
				"bounce-slow": "bounce 2s infinite",
				"pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
				"slide-up": "slideUp 0.5s ease-out",
			},
			keyframes: {
				float: {
					"0%, 100%": { transform: "translateY(0px)" },
					"50%": { transform: "translateY(-20px)" },
				},
				slideUp: {
					"0%": { transform: "translateY(100px)", opacity: "0" },
					"100%": { transform: "translateY(0px)", opacity: "1" },
				},
			},
			fontFamily: {
				mono: ["JetBrains Mono", "monospace"],
			},
		},
	},
	plugins: [],
};
