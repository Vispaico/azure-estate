// src/templates/property-template.js
import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from '../components/layout.js'; // Add Layout import back
import * as styles from './property-template.module.css';

const PropertyTemplate = ({ data, ...props }) => { // Accept data and other props
  const property = data.markdownRemark;
  const image = getImage(property.frontmatter.featured_image);

  return (
    <Layout {...props}> {/* Pass all page props down to Layout */}
      <div className={styles.propertyContainer}>
        <GatsbyImage image={image} alt={property.frontmatter.title} className={styles.heroImage} />
        <div className={styles.contentWrapper} id="property-content">
          <div className={styles.mainContent}>
            <h1>{property.frontmatter.title}</h1>
            <p className={styles.location}>{property.frontmatter.location}</p>
            <div className={styles.description} dangerouslySetInnerHTML={{ __html: property.html }} />
          </div>
          <div className={styles.sidebar}>
            <div className={styles.statsCard}>
              <h2>{property.frontmatter.price}</h2>
              <div className={styles.statsGrid}>
                <span>{property.frontmatter.beds} Beds</span>
                <span>{property.frontmatter.baths} Baths</span>
                <span>{property.frontmatter.sqft} Sq. Ft.</span>
              </div>
              <button className={styles.inquireButton}>Inquire</button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query PropertyPageQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title, price, location, beds, baths, sqft, slug
        featured_image {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
          }
        }
      }
    }
  }
`;

export default PropertyTemplate;