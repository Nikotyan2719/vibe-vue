// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@pinia/nuxt', '@nuxtjs/tailwindcss'],
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  srcDir: 'app/',
  compatibilityDate: '2025-07-15',
  typescript: {
    strict: true,
    shim: false,
    typeCheck: false
  },
  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },
  tailwindcss: {
    configPath: '~/app/tailwind.config.js'
  }
})
