new Vue({
  el: "#app",
  vuetify: new Vuetify(),
  data: {
    title: "Vuetify CDN Boilerplate",
    brands: [
      {
        id: 0,
        show: false,
        name: "Lil Big Data",
        link: "https://lilbigdata.com",
        type: "Whitty Nerds",
        tagline: "Creators of the internets best placeholder content.",
        logo:
          "https://s3.amazonaws.com/appforest_uf/f1609901761698x711846183611060100/nice.png"
      },
      {
        id: 1,
        show: false,
        name: "Vuetify",
        link: "https://vuetifyjs.com/",
        type: "Material Design Framework",
        tagline:
          "Everything you need to create amazing applications is at your fingertips.",
        logo:
          "https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-dark.svg"
      }
    ],
    show: false,
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  }
});
