// gatsby-config.js
const path = require('path');
const dotenv = require('dotenv');

const envFile = `.env.${process.env.NODE_ENV || 'development'}`;
const envResult = dotenv.config({ path: envFile });

if (envResult.error) {
  dotenv.config();
}

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
  resolve: `gatsby-source-contentful`,
  options: {
    spaceId: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  },
},
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `properties`, // This sources our .md files
        path: `${__dirname}/src/properties`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/content/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/`,
        ignore: [`**/node_modules/**`, `**/.git/**`, `**/.cache/**`, `**/public/**`, `**/src/**`]
      },
    },
  ],
};