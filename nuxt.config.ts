import { defineNuxtConfig } from 'nuxt/config'
import { fileURLToPath } from "url"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  alias: {
    "@": fileURLToPath(new URL(".", import.meta.url)),
    "@env": fileURLToPath(new URL("./utils/env", import.meta.url)),
    "@styles": fileURLToPath(new URL("./styles", import.meta.url)),
    "@components": fileURLToPath(new URL("./components", import.meta.url)),
    "@layouts": fileURLToPath(new URL("./layouts", import.meta.url)),
    "@utils": fileURLToPath(new URL("./utils", import.meta.url)),
    "@data": fileURLToPath(new URL("./utils/data", import.meta.url)),
    "@pages": fileURLToPath(new URL("./pages", import.meta.url)),
    "@public": fileURLToPath(new URL("./public", import.meta.url)),
    "@svgs": fileURLToPath(new URL("./public/svgs", import.meta.url)),
    "@assets": fileURLToPath(new URL("./assets/svgs", import.meta.url)),
    "@composables": fileURLToPath(new URL("./composables", import.meta.url)),
    "@interfaces": fileURLToPath(new URL("./utils/interfaces", import.meta.url)),
    "@mock": fileURLToPath(new URL("./utils/data/mock", import.meta.url)),
    "@plugins": fileURLToPath(new URL("./utils/plugins", import.meta.url)),
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'pt-br',
      },
      title: 'Hangens',
      meta: [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
        {
          name: 'description',
          content: 'Portifolio of Franz Weber Pimentel a Software Developer Engineer',
        }
      ],
      link: [
        { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' },
        { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com' }
      ],
    },
  },

  css: [ '~/assets/scss/main.scss' ],
  
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "./assets/scss/base.scss" as *;`
        }
      }
    }
  },

  modules: [['@nuxtjs/google-fonts', {
    preconnect: true, 
    prefetch: true,
    preload: true,
    families: {
      'Montserrat': [300, 400, 600, 700, 800],
    },
    display: 'swap'
  }], "@nuxt/image"],

  image: {
    presets: {
      // logo: {
      //   modifiers: {
      //     format: 'webp',
      //     quality: 100,
      //     width: 140, 200
      //     height: 140, 200
      //   }
      // },
      logo: {
        modifiers: {
          format: 'webp',
          quality: 100,
          width: 140,
          height: 140,
        },
        sizes: '(min-width: 768px) 200px, 140px',
      },
      fullimage: {
        modifiers: {
          format: 'webp',
          quality: 100,
          width: 1920,
          height: 560
        }
      },
      // entreprises: {
      //   modifiers: {
      //     format: 'webp',
      //     quality: 100,
      //     width: 300,425
      //     height: 245,280
      //   }
      // },
      family: {
        modifiers: {
          format: 'webp',
          quality: 100,
          width: 485,
          height: 485
        }
      }
    }
  },

  devtools: { enabled: true }
})