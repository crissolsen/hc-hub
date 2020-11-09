export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: "static",

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "Homecode | Serving you in tech",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "HomeCode is a web development and coding and robotics organisation based in Sedgefield, Western Cape. The Garden Route is where most of our business and homeschool clients reside."
      }
    ],
    link: [
      {
        rel: "icon",
        type: "image/ico",
        href:
          "https://res.cloudinary.com/dvwsiufhl/image/upload/f_ico,w_10/v1604046275/homeCode/HOMECODE_logo-03_qttemw.png"
      }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/content
    "@nuxt/content"
  ],

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  generate: {
    async routes() {
      const { $content } = require("@nuxt/content");
      const files = await $content({ deep: true })
        .only(["path"])
        .fetch();

      return files.map(file => (file.path === "/index" ? "/" : file.path));
    }
  }
};
