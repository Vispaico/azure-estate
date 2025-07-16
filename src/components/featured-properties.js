// src/components/featured-properties.js
import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import * as styles from './featured-properties.module.css';

const FeaturedProperties = () => {
  const data = useStaticQuery(graphql`
    query HomepageFeaturedQuery {
      allMarkdownRemark(limit: 3, sort: { frontmatter: { price: DESC }}) {
        nodes {
          frontmatter {
            title, location, price, slug
            featured_image {
              childImageSharp {
                gatsbyImageData(width: 600, placeholder: BLURRED, layout: CONSTRAINED)
              }
            }
          }
          id
        }
      }
    }
  `);

  return (
    <section className={styles.featuredSection} data-scroll-section>
      <h2 className={styles.heading}>Featured Properties</h2>
      <div className={styles.gridContainer}>
        {data.allMarkdownRemark.nodes.map((property) => {
          const image = getImage(property.frontmatter.featured_image);
          return (
            <Link to={property.frontmatter.slug} key={property.id} className={styles.propertyCard}>
              <GatsbyImage image={image} alt={property.frontmatter.title} />
              <div className={styles.cardContent}>
                <h3>{property.frontmatter.title}</h3>
                <p>{property.frontmatter.location}</p>
                <span>{property.frontmatter.price}</span>
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