// gatsby-config.js
const path = require('path');

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
        sassOptions: {
          includePaths: [path.resolve(__dirname, 'node_modules')],
        },
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`, // Ensures the Markdown transformer is loaded
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `properties`, // This sources our .md files
        path: `${__dirname}/src/properties`,
      },
    },
  ],
};