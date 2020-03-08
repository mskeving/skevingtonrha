module.exports = {
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-transformer-json",
    {
      resolve: "gatsby-plugin-create-client-paths",
      options: { prefixes: ["/*"] }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: `${__dirname}/src/data/`
      }
    },
    {
      resolve: "gatsby-plugin-load-script",
      options: {
        src: "https://rawgithub.com/soulwire/sketch.js/v1.1/js/sketch.min.js"
      }
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-157526518-1",
        head: false
      }
    }
  ]
};
