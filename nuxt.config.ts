// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxt/fonts', '@nuxt/content'],
  extends: ['nuxt-umami'],
  appConfig: {
    umami: {
      id: 'f92f8d2b-4b83-4f8e-be0e-27c8e1844783',
      host: 'https://umami.cr.bswatcher.com', 
    }
  },
})