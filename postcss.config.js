export default {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': {},
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.REACT_APP_NODE_ENV === 'production' ? { cssnano: {} } : {}),
  },
}
