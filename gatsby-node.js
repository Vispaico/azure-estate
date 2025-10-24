// gatsby-node.js
const path = require('path');

// Custom function to escape a string for use in a regular expression
function escapeRegExp(string) {
  if (typeof string !== 'string') {
    return '';
  }
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the matched substring
}

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
      allMarkdownRemark {
        nodes {
          frontmatter {
            path
            title
          }
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

  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`);

  result.data.allMarkdownRemark.nodes.forEach((node) => {
    if (!node.frontmatter || !node.frontmatter.path) {
      console.warn(`Skipping blog post creation for node with missing frontmatter or path:`, node);
      return;
    }
    const fullPath = node.frontmatter.path;
    const escapedPath = escapeRegExp(fullPath);
    console.log(`Creating blog post page: ${fullPath}`);
    console.log(`Context for blog post page: { path: ${escapedPath} }`);
    createPage({
      path: fullPath,
      component: blogPostTemplate,
      context: {
        path: escapedPath,
      },
    });
  });
};