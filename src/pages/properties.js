// src/pages/properties.js
import * as React from 'react';
import Layout from '../components/layout.js';

const PropertiesPage = (props) => {
  return (
    <Layout {...props}>
      <div style={{ padding: '8rem 2rem' }}>
        <h1 style={{ textAlign: 'center', fontFamily: 'Times New Roman, serif', fontSize: '3rem' }}>
          Our Portfolio
        </h1>
        <p style={{ textAlign: 'center', maxWidth: '600px', margin: '1rem auto' }}>
          Discover our collection of curated properties, each selected for its unique character and exceptional quality.
        </p>
        {/* A grid of properties would be rendered here in the future */}
      </div>
    </Layout>
  );
};

export default PropertiesPage;

export const Head = () => <title>Properties | Azure Estates</title>;