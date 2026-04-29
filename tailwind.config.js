/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'jade-green': '#03C03C',
        'vibrant-orange': '#FFA500',
        'dark-gray': '#111827',
        'mid-gray': '#6B7280',
        'light-bg': '#F9FAFB',
        'emerald-depths': '#00563B',
      },
    },
  },
  plugins: [],
}