import { defineConfig } from '@pandacss/dev'
import { createPreset } from '@park-ui/panda-preset'
import amber from '@park-ui/panda-preset/colors/amber'
import sand from '@park-ui/panda-preset/colors/sand'

export default defineConfig({
  presets: [createPreset({ accentColor: amber, grayColor: sand, radius: 'sm' })],

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


        },
        fonts: {
          body: { value: 'system-ui, sans-serif' },
        }
      },
      semanticTokens: {
        colors: {
          //     fg: {
          //       "default": {
          //         "value": {
          //           "_light": "{colors.gray.12}",
          //           "_dark": "{colors.gray.12}"
          //         }
          //       },
          //       "muted": {
          //         "value": {
          //           "_light": "{colors.gray.11}",
          //           "_dark": "{colors.gray.11}"
          //         }
          //       },
          //       "subtle": {
          //         "value": {
          //           "_light": "{colors.gray.10}",
          //           "_dark": "{colors.gray.10}"
          //         }
          //       },
          //       "disabled": {
          //         "value": {
          //           "_light": "{colors.gray.9}",
          //           "_dark": "{colors.gray.9}"
          //         }
          //       },
          //       "error": {
          //         "value": {
          //           "_light": "{colors.red.9}",
          //           "_dark": "{colors.red.9}"
          //         }
          //       }
          //     },
        }
      }
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
  globalCss: {
    body: {
      bg: 'gray.2',
      pt: '3.5rem',
      color: "textPrimary"
    }
  }
});
