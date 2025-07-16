// src/pages/properties.js
import * as React from 'react';
import Layout from '../components/layout.js';
import PropertyGrid from '../components/property-grid.js'; // Import our new component

const PropertiesPage = (props) => {
  return (
    <Layout {...props}>
      <div style={{ padding: '8rem 2rem' }}>
        <h1 style={{ textAlign: 'center', fontFamily: 'Times New Roman, serif', fontSize: '3rem', marginBottom: '1rem' }}>
          Our Portfolio
        </h1>
        <p style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 4rem auto' }}>
          Discover our collection of curated properties, each selected for its unique character and exceptional quality.
        </p>
        <PropertyGrid /> {/* Use the grid component here */}
      </div>
    </Layout>
  );
};

export default PropertiesPage;

export const Head = () => <title>Properties | Azure Estates</title>;