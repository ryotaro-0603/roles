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
      '6xl': ['8rem', '10rem'],
    },
    // colors: {
    // 	'primary': "#fafcfc",
    // },
    extend: {
      fontFamily: {
        primary: "'Montserrat', 'Noto Sans JP', monospace",
      },
      spacing: {
        'gutter-x-0.5': 'max(1.25vw, 1rem)',
        'gutter-x': 'max(2.5vw, 1rem)',
        'gutter-y-0.5': 'max(1.25vw, 1rem)',
        'gutter-y': 'max(2.5vw, 2rem)',
        'gutter-y-2': 'max(5vw, 4rem)',
      },
      zIndex: {
        header: 100,
      },
      aspectRatio: {
        thumbnail: '1200 / 630',
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(0)', opacity: 1 },
          '48%': { transform: 'translateX(100%)', opacity: 0 },
          '52%': { transform: 'translateX(-100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        diagonal: {
          '0%': {
            transform: 'translateX(0) translateY(0) scale(1.05)',
            opacity: 1,
          },
          '48%': {
            transform: 'translateX(80%) translateY(-80%) scale(1)',
            opacity: 0,
          },
          '52%': {
            transform: 'translateX(-80%) translateY(80%)',
            opacity: 0,
          },
          '100%': { transform: 'translateX(0) translateY(0)', opacity: 1 },
        },
      },
      animation: {
        diagonal: 'diagonal .6s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
      typography: {
        DEFAULT: {
          css: {
            fontSize: '1rem',
            lineHeight: '1.75rem',
            color: '#333',
            a: {
              color: '#cecece',
              '&:hover': {
                color: '#2c5282',
              },
            },
            h2: {
              fontSize: '1.14rem',
              lineHeight: '1.75rem',
              marginTop: 40,
              marginBottom: 20,
            },
            h3: {
              fontSize: '1rem',
              lineHeight: '1.5rem',
              marginTop: 40,
              marginBottom: 20,
            },
            h4: {
              marginTop: 40,
              marginBottom: 20,
            },
            blockquote: {
              fontWeight: '400',
              fontStyle: 'normal',
              color: 'var(--tw-prose-quotes)',
              borderLeftWidth: '0.25rem',
              borderLeftColor: 'var(--tw-prose-quote-borders)',
              quotes: '"\\201C""\\201D""\\2018""\\2019"',
            },
            code: {
              color: 'var(--tw-prose-code)',
              backgroundColor: 'var(--tw-prose-code)',
              fontWeight: '600',
            },
            'code::before': {
              content: '"`"',
            },
            'code::after': {
              content: '"`"',
            },
          },
        },
        md: {
          css: {
            fontSize: '1rem',
            lineHeight: '1.75rem',
            h2: {
              fontSize: '1.6rem',
              lineHeight: '2.25rem',
              marginBottom: 20,
            },
            h3: {
              fontSize: '1.33rem',
              lineHeight: '2rem',
              marginBottom: 20,
            },
          },
        },
      },
    },
  },
  // plugins: [require('@tailwindcss/typography')],
};
