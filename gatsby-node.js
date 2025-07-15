// gatsby-node.js
const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const propertyTemplate = path.resolve(`src/templates/property-template.js`);

  const result = await graphql(`
    query {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  result.data.allMarkdownRemark.nodes.forEach((node) => {
    createPage({
      path: node.frontmatter.slug,
      component: propertyTemplate,
      context: {
        // This 'slug' is passed as a variable to the page query in the template
        slug: node.frontmatter.slug,
      },
    });
  });
};