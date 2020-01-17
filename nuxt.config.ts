export default {
  env: {},
  head: {
    title: "wuhoucat",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "just a project for wuhoucat"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  loading: { color: "#3B8070" },
  css: [
    "~/assets/css/main.css",
    "element-ui/lib/theme-chalk/index.css",
    "mavon-editor/dist/css/index.css"
  ],
  build: {
    vendor: ["element-ui", "mavon-editor"]
  },
  buildModules: ["@nuxt/typescript-build"],
  modules: ["@nuxtjs/axios", "@nuxtjs/style-resources"],
  axios: {},
  styleResources: {
    less: "./assets/**/*.less"
  },
  plugins: [
    { src: "~/plugins/elementUI", ssr: false },
    { src: "~/plugins/mavonEditor", ssr: false }
  ]
}
