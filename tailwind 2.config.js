/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontSize: {
			xs: ['0.8rem', '1rem'],
			sm: ['0.89rem', '1.25rem'],
			base: ['1rem', '1.5rem'],
			lg: ['1.14rem', '1.75rem'],
			xl: ['1.33rem', '2rem'],
			'2xl': ['1.6rem', '2.25rem'],
			'3xl': ['2rem', '2.5rem'],
			'4xl': ['2.67rem', '3.25rem'],
			'5xl': ['4rem', '4.5rem'],
			'6xl': ['8rem', '8rem'],
		},
		extend: {
			fontFamily: {
        'primary': "'Montserrat', 'Noto Sans JP', monospace",
      },
      spacing: {
        'gutter-x': 'max(2.5vw, 1rem)',
        'gutter-y-0.5': 'max(1.25vw, 1rem)',
        'gutter-y': 'max(2.5vw, 2rem)',
        'gutter-y-2': 'max(5vw, 4rem)',
			},
			zIndex: {
        header: 100,
      },
      aspectRatio: {
        'thumbnail': '1200 / 630',
      },
		},
	},
	plugins: [],
}
