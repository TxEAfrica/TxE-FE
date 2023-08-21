/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			backgroundColor: {
				bgColor: '#4F4F4F',
			},
			textColor: {
				speakerTextBrown: '#FF6E4A',
				speakerTextBlue: '#007BB8'
			}
		},
	},
	plugins: [],
};
