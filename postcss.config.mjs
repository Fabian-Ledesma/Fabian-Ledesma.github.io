/** @type {import('postcss-load-config').Config} */
import autoprefixer from 'autoprefixer'

const config = {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer,
  },
}

export default config
