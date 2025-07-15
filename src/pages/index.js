// src/pages/index.js
import * as React from 'react';
import Layout from '../components/layout.js';
import Hero from '../components/hero.js';
import FeaturedProperties from '../components/featured-properties.js';

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <FeaturedProperties />
    </Layout>
  );
};

export default IndexPage;
export const Head = () => <title>Azure Estates</title>;