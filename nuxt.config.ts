// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxtjs/supabase"],
  typescript: {
    typeCheck: true,
  },
  ui: {
    icons: ["heroicons", "lucide"],
  },
  colorMode: {
    preference: "light",
  },
  routeRules: {
    "/": { prerender: true },
    "/overview/**": { ssr: false },
    "/projects/**": { ssr: false },
    "/settings/**": { ssr: false },
  },
  supabase: {
    redirectOptions: {
      login: "/",
      callback: "/confirm",
    },
  },
});
