// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@pinia/nuxt', '@nuxtjs/tailwindcss', '@bubblesortt/nuxt-es-toolkit'],
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
  esToolkit: {
    prefix: 'use'
  },
  tailwindcss: {
    configPath: '~/app/tailwind.config.js',
    cssPath: '~/assets/css/tailwind.scss'
  }
})
