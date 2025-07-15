// src/pages/index.js
import * as React from 'react';
import Layout from '../components/layout.js';
import Hero from '../components/hero.js';
import FeaturedProperties from '../components/featured-properties.js';

const IndexPage = (props) => { // Accept props here
  return (
    <Layout {...props}> {/* Pass all page props down to Layout */}
      <Hero />
      <FeaturedProperties />
    </Layout>
  );
};

export default IndexPage;
export const Head = () => <title>Azure Estates</title>;