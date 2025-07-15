// src/components/featured-properties.js
import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { motion } from 'framer-motion';
import * as styles from './featured-properties.module.css';

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

const FeaturedProperties = () => {
  const data = useStaticQuery(graphql`
    query FeaturedQuery {
      allMarkdownRemark(limit: 4) {
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
    <section className={styles.featuredSection}>
      <h2 className={styles.heading}>Featured Properties</h2>
      <div className={styles.scrollContainer}>
        {data.allMarkdownRemark.nodes.map((property) => {
          const image = getImage(property.frontmatter.featured_image);
          return (
            // 1. The 'propertyCard' style now goes on the motion.div
            <motion.div
              key={property.id}
              className={styles.propertyCard} // MOVED TO HERE
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
            >
              {/* 2. The Link no longer needs the class */}
              <Link to={property.frontmatter.slug}>
                <GatsbyImage image={image} alt={property.frontmatter.title} className={styles.propertyImage} />
                <div className={styles.cardContent}>
                  <h3>{property.frontmatter.title}</h3>
                  <p>{property.frontmatter.location}</p>
                  <span>{property.frontmatter.price}</span>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default FeaturedProperties;