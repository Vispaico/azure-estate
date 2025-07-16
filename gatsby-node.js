// gatsby-node.js
const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const propertyTemplate = path.resolve(`src/templates/property-template.js`);

  const result = await graphql(`
    query {
      allContentfulProperty {
        nodes {
          slug
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  result.data.allContentfulProperty.nodes.forEach((node) => {
    createPage({
      path: `/properties/${node.slug}`, // Create pages at /properties/your-slug
      component: propertyTemplate,
      context: {
        slug: node.slug,
      },
    });
  });
};