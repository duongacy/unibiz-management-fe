import headlessuiPlugin from '@headlessui/tailwindcss'
import formsPlugin from '@tailwindcss/forms'
import { type Config } from 'tailwindcss'
import {
  scopedPreflightStyles,
  isolateInsideOfContainer,
} from 'tailwindcss-scoped-preflight'
const colors = require('tailwindcss/colors')

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      base: ['1rem', { lineHeight: '1.75rem' }],
      lg: ['1.125rem', { lineHeight: '2rem' }],
      xl: ['1.25rem', { lineHeight: '2rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['2rem', { lineHeight: '2.5rem' }],
      '4xl': ['2.5rem', { lineHeight: '3.5rem' }],
      '5xl': ['3rem', { lineHeight: '3.5rem' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1.1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    extend: {
      colors: {
        primary: colors.blue,
        secondary: colors.purple,
        neutral: colors.gray,
      },
      borderRadius: {
        '4xl': '2rem',
      },
      fontFamily: {
        sans: 'var(--font-inter)',
        display: 'var(--font-lexend)',
        Source_Code_Pro: 'var(--font-Source_Code_Pro)',
      },
      maxWidth: {
        '2xl': '40rem',
      },
    },
  },
  plugins: [
    formsPlugin,
    headlessuiPlugin,
    scopedPreflightStyles({
      isolationStrategy: isolateInsideOfContainer('', {
        except: '.no-twp', // optional, to exclude some elements under .twp from being preflighted, like external markup
      }),
    }),
    require('@tailwindcss/aspect-ratio'),
  ],
} satisfies Config
