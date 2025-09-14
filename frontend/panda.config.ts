import { defineConfig } from '@pandacss/dev';
import { createPreset } from '@park-ui/panda-preset';
import amber from '@park-ui/panda-preset/colors/amber';
import sand from '@park-ui/panda-preset/colors/sand';

const preset = createPreset({ accentColor: amber, grayColor: sand, radius: 'sm' });
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
          'html-background': {
            dark: {
              value: '#0e0d0c', // almost black
            },
          },
          "green": {
            "light": {
              "1": {
                "value": "#fbfefc"
              },
              "2": {
                "value": "#f2fcf5"
              },
              "3": {
                "value": "#e9f9ee"
              },
              "4": {
                "value": "#ddf3e4"
              },
              "5": {
                "value": "#ccebd7"
              },
              "6": {
                "value": "#b4dfc4"
              },
              "7": {
                "value": "#92ceac"
              },
              "8": {
                "value": "#5bb98c"
              },
              "9": {
                "value": "#30a46c"
              },
              "10": {
                "value": "#299764"
              },
              "11": {
                "value": "#18794e"
              },
              "12": {
                "value": "#153226"
              },
              "a1": {
                "value": "#00c04004"
              },
              "a2": {
                "value": "#00a32f16"
              },
              "a3": {
                "value": "#00a4333d"
              },
              "a4": {
                "value": "#00a43363"
              },
              "a5": {
                "value": "#00a43388"
              },
              "a6": {
                "value": "#009b2e8c"
              },
              "a7": {
                "value": "#008f299d"
              },
              "a8": {
                "value": "#008f29c9"
              },
              "a9": {
                "value": "#30a46cc2"
              },
              "a10": {
                "value": "#299764e7"
              },
              "a11": {
                "value": "#18794e"
              },
              "a12": {
                "value": "#153226dd"
              }
            },
            "dark": {
              "1": {
                "value": "#0d1912"
              },
              "2": {
                "value": "#0c1f17"
              },
              "3": {
                "value": "#0f291e"
              },
              "4": {
                "value": "#0d3325"
              },
              "5": {
                "value": "#123b2b"
              },
              "6": {
                "value": "#1a4a35"
              },
              "7": {
                "value": "#24543d"
              },
              "8": {
                "value": "#2f6147"
              },
              "9": {
                "value": "#30a46c"
              },
              "10": {
                "value": "#3cb179"
              },
              "11": {
                "value": "#4cc38a"
              },
              "12": {
                "value": "#e5fbeb"
              },
              "a1": {
                "value": "#00c04006"
              },
              "a2": {
                "value": "#00a32f0d"
              },
              "a3": {
                "value": "#00a43322"
              },
              "a4": {
                "value": "#00a43332"
              },
              "a5": {
                "value": "#00a43341"
              },
              "a6": {
                "value": "#009b2e51"
              },
              "a7": {
                "value": "#008f2967"
              },
              "a8": {
                "value": "#008f2987"
              },
              "a9": {
                "value": "#30a46c"
              },
              "a10": {
                "value": "#3cb179"
              },
              "a11": {
                "value": "#4cc38a"
              },
              "a12": {
                "value": "#e5fbeb"
              }
            }
          }
        },
      },
    },
    semanticTokens: {
      colors: {
        'html-background': {
          light: { 1: { value: '{colors.gray.3}' }, 2: { value: '{colors.gray.2}' } },
          dark: { 1: { value: '{colors.gray.1}' }, 2: { value: '{colors.html-background.dark}' } },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: 'styled-system',
  globalCss: {
    body: {
      ...preset?.globalCss?.body,
      pt: '3.5rem',
      background: 'unset', // use the html background
    },
  },
});
