// src/components/property-grid.js
import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import * as styles from './property-grid.module.css';

const PropertyGrid = () => {
  const data = useStaticQuery(graphql`
    query AllPropertiesQuery {
      allMarkdownRemark(sort: { frontmatter: { price: DESC }}) { # Sort by price
        nodes {
          frontmatter {
            title
            location
            price
            slug
            featured_image {
              childImageSharp {
                gatsbyImageData(
                  width: 600
                  placeholder: BLURRED
                  layout: CONSTRAINED
                  transformOptions: {fit: COVER, cropFocus: CENTER}
                  aspectRatio: 1.25 
                )
              }
            }
          }
          id
        }
      }
    }
  `);

  return (
    <div className={styles.gridContainer}>
      {data.allMarkdownRemark.nodes.map((property) => {
        const image = getImage(property.frontmatter.featured_image);
        return (
          <Link to={property.frontmatter.slug} key={property.id} className={styles.propertyCard}>
            <GatsbyImage image={image} alt={property.frontmatter.title} className={styles.propertyImage} />
            <div className={styles.cardContent}>
              <h3>{property.frontmatter.title}</h3>
              <p>{property.frontmatter.location}</p>
              <span>{property.frontmatter.price}</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default PropertyGrid;