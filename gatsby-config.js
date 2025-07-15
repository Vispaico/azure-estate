// gatsby-config.js

const path = require('path'); // Import Node.js's path module

module.exports = {
  siteMetadata: {
    title: `Azure Estates`,
    description: `A showcase of luxury properties and high-end real estate.`,
    author: `@azure-estates`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        // This is a more explicit and robust configuration
        sassOptions: {
          includePaths: [path.resolve(__dirname, 'node_modules')],
        }
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
  ],
};