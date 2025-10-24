import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";

const BlogPost = ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "8rem 2rem 2rem 2rem" }}>
        <Link to="/blog" style={{ textDecoration: "none", color: "#007bff", marginBottom: "1rem", display: "inline-block" }}>
          &larr; Back to all articles
        </Link>
        <p style={{ color: "#666", fontSize: "0.9rem", marginBottom: "2rem" }}>{post.frontmatter.date}</p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;

export default BlogPost;
