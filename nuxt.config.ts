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
  routeRules: {
    "/": { prerender: true },
    "/dashboard/**": { ssr: false },
  },
  supabase: {
    redirectOptions: {
      login: "/",
      callback: "/confirm",
    },
  },
});
