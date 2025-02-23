// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxt/fonts', '@nuxt/content'],
  app: {
    head: {
      script: [
        {
          src: 'https://umami.cr.bswatcher.com/script.js',
          'data-website-id': '88b798c3-4599-4d29-bcc9-b11016c1ea94',
          async: true,
          defer: true,
        }
      ]
    }
  }
})