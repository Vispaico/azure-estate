// gatsby-config.js
module.exports = {
  siteMetadata: {
    title: `Azure Estates`,
    description: `A showcase of luxury properties and high-end real estate.`,
    author: `@vispaico`,
  },
  plugins: [
    `gatsby-plugin-sass`, // Add this line
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    /* The gatsby-plugin-manifest has been removed to prevent icon errors.
       We can add it back later with a custom site icon. */
  ],
};
