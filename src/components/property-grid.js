// src/components/property-grid.js
import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import * as styles from './property-grid.module.css';

const PropertyGrid = () => {
  const data = useStaticQuery(graphql`
    query AllContentfulPropertiesQuery {
      allContentfulProperty(sort: { price: DESC }) {
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
              # The invalid 'transformOptions' line has been removed.
              aspectRatio: 1.25
            )
          }
        }
      }
    }
  `);

  return (
    <div className={styles.gridContainer}>
      {data.allContentfulProperty.nodes.map((property) => {
        const image = getImage(property.featuredImage);
        return (
          <Link to={`/properties/${property.slug}`} key={property.id} className={styles.propertyCard}>
            <GatsbyImage image={image} alt={property.title} className={styles.propertyImage} />
            <div className={styles.cardContent}>
              <h3>{property.title}</h3>
              <p>{property.location}</p>
              <span>{property.price}</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default PropertyGrid;