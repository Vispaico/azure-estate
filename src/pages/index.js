// src/pages/index.js
import * as React from 'react';
import Layout from '../components/layout.js';

const IndexPage = () => {
  return (
    <Layout>
      {/* Add some tall content to make the page scrollable */}
      <div style={{ height: '200vh', background: '#f0f0f0', padding: '5rem' }}>
        <h1>Azure Estates</h1>
        <p>Scroll down to feel the effect.</p>
      </div>
    </Layout>
  );
};

export default IndexPage;
export const Head = () => <title>Azure Estates</title>;