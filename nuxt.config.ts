// https://nuxt.com/docs/api/configuration/nuxt-config
import removeConsole from 'vite-plugin-remove-console'

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@unocss/nuxt',
  ],
  vite: {
    plugins: [
      removeConsole(),
    ],
  },
})
