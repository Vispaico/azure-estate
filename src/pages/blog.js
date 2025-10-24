import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import * as styles from "./blog.module.css";

const BlogPage = ({ data, location }) => {
  return (
    <Layout location={location}>
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>Our Insights</h1>
        <p className={styles.subtitle}>Stay informed with our latest luxury real estate market analysis and trends.</p>
        <div className={styles.articleGrid}>
          {data.allMarkdownRemark.nodes.map((post) => (
            <article key={post.frontmatter.path} className={styles.articleCard}>
              <Link to={post.frontmatter.path} className={styles.articleLink}>
                <h2 className={styles.articleTitle}>{post.frontmatter.title}</h2>
                <p className={styles.articleDate}>{post.frontmatter.date}</p>
                <p className={styles.articleDescription}>{post.frontmatter.description}</p>
                <span className={styles.readMore}>Read More &rarr;</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: { fileAbsolutePath: { regex: "/src/content/blog/" } }
    ) {
      nodes {
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
          path
          description
        }
      }
    }
  }
`;

export default BlogPage;
