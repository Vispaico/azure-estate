// src/pages/index.js
import * as React from 'react';
import Layout from '../components/layout.js';
import Hero from '../components/hero.js';

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      {/* We can add other sections below the hero section later */}
      <div style={{ height: '100vh', background: '#f0f0f0' }}>
        {/* Placeholder for next section */}
      </div>
    </Layout>
  );
};

export default IndexPage;
export const Head = () => <title>Azure Estates</title>;