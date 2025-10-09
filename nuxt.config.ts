import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',
  css: ["~/assets/css/main.css"],
  modules: [
    '@nuxt/content',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    'shadcn-nuxt',
    '@nuxtjs/color-mode',
    '@hebilicious/form-actions-nuxt',
    '@vueuse/motion/nuxt',
    'nuxt-resend',
    '@nuxtjs/sitemap',
  ],
  future: {
    compatibilityVersion: 4,
  },
  colorMode: {
    preference: "system",
    classSuffix: ''
  },
  vite: {
    plugins: [tailwindcss()]
  },
  content: {
    database: {
      type: "libsql",
      url: process.env.TURSO_DATABASE_URL!,
      authToken: process.env.TURSO_AUTH_TOKEN!,
    }
  }
})
