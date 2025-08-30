import { defineConfig } from '@pandacss/dev'
import { createPreset } from '@park-ui/panda-preset'
import amber from '@park-ui/panda-preset/colors/amber'
import sand from '@park-ui/panda-preset/colors/sand'

const preset = createPreset({ accentColor: amber, grayColor: sand, radius: 'sm' })
export default defineConfig({
  presets: [preset],

  // Whether to use css reset
  preflight: true,

  include: ['./src/**/*.{js,jsx,ts,tsx,vue}'],
  jsxFramework: 'solid',

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          "html-background": {
            dark: {
              value: '#0e0d0c' // almost black
            },
          }
        }
      }
    },
    semanticTokens: {
      colors: {
        "html-background": {
          light: { 1: { value: '{colors.gray.3}' }, 2: { value: '{colors.gray.2}' } },
          dark: { 1: { value: '{colors.gray.1}' }, 2: { value: '{colors.html-background.dark}' } }
        }
      }
    }
  },


  // The output directory for your css system
  outdir: "styled-system",
  globalCss: {
    body: {
      ...preset?.globalCss?.body,
      pt: '3.5rem',
      background: 'unset' // use the html background
    },

  }
});
