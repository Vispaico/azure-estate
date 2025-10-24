import * as React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout.js';
import Hero from '../components/hero.js';
import FeaturedProperties from '../components/featured-properties.js';
import * as blogStyles from "./blog.module.css"; // Reusing blog styles

const IndexPage = ({ data, ...props }) => {
  return (
    <Layout {...props}>
      <Hero />
      <FeaturedProperties />

      <section className={blogStyles.container}>
        <h2 className={blogStyles.pageTitle} style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Latest Insights</h2>
        <div className={blogStyles.articleGrid}>
          {data.allMarkdownRemark.nodes.map((post) => (
            <article key={post.frontmatter.path} className={blogStyles.articleCard}>
              <Link to={post.frontmatter.path} className={blogStyles.articleLink}>
                <h3 className={blogStyles.articleTitle}>{post.frontmatter.title}</h3>
                <p className={blogStyles.articleDate}>{post.frontmatter.date}</p>
                <p className={blogStyles.articleDescription}>{post.frontmatter.description}</p>
                <span className={blogStyles.readMore}>Read More &rarr;</span>
              </Link>
            </article>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link to="/blog" className={blogStyles.readMore} style={{ fontSize: '1.2rem', padding: '10px 20px', border: '1px solid #a07b4a', borderRadius: '5px' }}>
            View All Articles
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: { fileAbsolutePath: { regex: "/src/content/blog/" } }
      limit: 3
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

export default IndexPage;
export const Head = () => <title>Azure Estates</title>;
