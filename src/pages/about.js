import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import AboutContent from "../components/about-content";

const AboutPage = ({ data, location }) => {
  return (
    <Layout location={location}>
      <AboutContent htmlContent={data.markdownRemark.html} />
    </Layout>
  );
};

export const query = graphql`
  query {
    markdownRemark(fileAbsolutePath: { regex: "/aboutcopy.md/" }) {
      html
      frontmatter {
        title
      }
    }
  }
`;

export const Head = ({ data }) => <title>{data.markdownRemark.frontmatter.title} | Azure Estates</title>;

export default AboutPage;
