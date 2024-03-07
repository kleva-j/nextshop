/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // we've added our own colour that maps to Payload's css variable so we can re-use the same theme styling!
        error: 'var(--theme-error-400)',
      },
    },
  },
  plugins: [],
};
