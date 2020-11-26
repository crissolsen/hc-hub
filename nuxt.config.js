export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: "static",

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: "HomeCode | %s",
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
        hid: "og:title",
        name: "og:title",
        content: "HomeCode | Make life better with tech"
      },
      {
        hid: "og:description",
        name: "og:description",
        content:
          "HomeCode is a web development and coding and robotics organisation based in Sedgefield, Western Cape. The Garden Route is where most of our business and homeschool clients reside."
      },
      {
        hid: "og:image",
        name: "og:image",
        content:
          "https://res.cloudinary.com/dvwsiufhl/image/upload/v1604046275/homeCode/HOMECODE_logo-03_qttemw.png"
      },
      {
        hid: "og:url",
        name: "og:url",
        content:
          "https:homecode.co.za"
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
    ]
  },

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [],

  //Re enable for google analytics
  // plugins: [{ src: "~plugins/ga.js", mode: "client" }],
  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/content
    "@nuxt/content",
    "@nuxtjs/axios",
    "@nuxtjs/sitemap"
  ],

  sitemap: {
    hostname: "https://homecode.co.za",
    gzip: true
  },
  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {
    markdown: {
      // https://github.com/remarkjs/remark-external-links#options
      remarkExternalLinks: {
        target: "_blank",
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
