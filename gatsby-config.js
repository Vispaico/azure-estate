// In gatsby-config.js

  // ... inside module.exports = { ... }
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        // Tell Sass to look in the node_modules folder
        includePaths: ["node_modules"],
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
  ]