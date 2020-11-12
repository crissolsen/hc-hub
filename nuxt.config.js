export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: "static",

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "Homecode | Serving you in tech",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "HomeCode is a web development and coding and robotics organisation based in Sedgefield, Western Cape. The Garden Route is where most of our business and homeschool clients reside."
      },
      {
        hid: `og:description`,
        name: "og:description"
      },
      {
        hid: `og:title`,
        name: "og:title"
      }
    ],
    link: [
      {
        rel: "icon",
        type: "image/ico",
        href:
          "https://res.cloudinary.com/dvwsiufhl/image/upload/f_ico,w_10/v1604046275/homeCode/HOMECODE_logo-03_qttemw.png"
      },
      {
        rel: "canonical",
        href: "https://homecode.co.za"
      }
    ],
    script: [
      {
        type: "text/javascript",
        src:
          "https://platform-api.sharethis.com/js/sharethis.js#property=5fad017d63b0cd00123cbb45&product=inline-share-buttons",
        async: "async"
      }
    ]
  },

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/content
    "@nuxt/content",
    "@nuxtjs/axios"
  ],

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {
    markdown: {
      // https://github.com/remarkjs/remark-external-links#options
      remarkExternalLinks: {
        target: "_self",
        rel: "nofollow"
      }
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  generate: {
    async routes() {
      const { $content } = require("@nuxt/content");
      const files = await $content({ deep: true })
        .only(["slug"])
        .fetch();

      return files.map(file =>
        file.path === "/blog/index" ? "/" : "/blog/" + file.slug
      );
    }
  }
};
