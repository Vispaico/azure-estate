// src/components/featured-properties.js
import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import * as styles from './featured-properties.module.css';

const FeaturedProperties = () => {
  const data = useStaticQuery(graphql`
    query HomepageContentfulFeaturedQuery {
      allContentfulProperty(
        limit: 3
        sort: { price: DESC }
        # The problematic filter line has been removed.
      ) {
        nodes {
          id
          title
          location
          price
          slug
          featuredImage {
            gatsbyImageData(
              width: 600
              placeholder: BLURRED
              layout: CONSTRAINED
            )
          }
        }
      }
    }
  `);

  return (
    <section className={styles.featuredSection} data-scroll-section>
      <h2 className={styles.heading}>Featured Properties</h2>
      <div className={styles.gridContainer}>
        {data.allContentfulProperty.nodes.map((property) => {
          const image = getImage(property.featuredImage);
          return (
            <Link to={`/properties/${property.slug}`} key={property.id} className={styles.propertyCard}>
              <GatsbyImage image={image} alt={property.title} />
              <div className={styles.cardContent}>
                <h3>{property.title}</h3>
                <p>{property.location}</p>
                <span>{property.price}</span>
              </div>
            </Link>
          );
        })}
      </div>
      <div className={styles.viewAllContainer}>
        <Link to="/properties" className={styles.viewAllButton}>View All Properties</Link>
      </div>
    </section>
  );
};

export default FeaturedProperties;