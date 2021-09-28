import { defineConfig } from 'vite-plugin-windicss'
import typography from 'windicss/plugin/typography'

export default defineConfig({
  darkMode: 'class',
  plugins: [
    typography(),
  ],
  theme: {
    extend: { padding: { "fluid-video": "56.25%" }, },
  },
  variants: {
    extend: {
      backgroundColor: ['hover'],
      textColor: ['hover'],
      filter: ['hover'],
      brightness: ['hover'],
    },
  },
})
