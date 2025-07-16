// src/templates/property-template.js
import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import Layout from '../components/layout.js';
import * as styles from './property-template.module.css';

const PropertyTemplate = ({ data, ...props }) => {
  const property = data.contentfulProperty;
  const image = getImage(property.featuredImage);

  return (
    <Layout {...props}>
      <div className={styles.propertyContainer}>
        <GatsbyImage image={image} alt={property.title} className={styles.heroImage} />
        <div className={styles.contentWrapper} id="property-content">
          <div className={styles.mainContent}>
            <h1>{property.title}</h1>
            <p className={styles.location}>{property.location}</p>
            {/* Use renderRichText to safely render the description */}
            <div className={styles.description}>
              {property.description && renderRichText(property.description)}
            </div>
          </div>
          <div className={styles.sidebar}>
            <div className={styles.statsCard}>
              <h2>{property.price}</h2>
              <div className={styles.statsGrid}>
                <span>{property.beds} Beds</span>
                <span>{property.baths} Baths</span>
                <span>{property.sqft} Sq. Ft.</span>
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
  query ContentfulPropertyPageQuery($slug: String!) {
    contentfulProperty(slug: { eq: $slug }) {
      title
      price
      location
      beds
      baths
      sqft
      slug
      featuredImage {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
      }
      description {
        raw
      }
    }
  }
`;

export default PropertyTemplate;