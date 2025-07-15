// src/pages/about.js
import * as React from 'react';
import Layout from '../components/layout.js';

const AboutPage = (props) => {
  return (
    <Layout {...props}>
      <div style={{ padding: '8rem 2rem' }}>
        <h1 style={{ textAlign: 'center', fontFamily: 'Times New Roman, serif', fontSize: '3rem' }}>
          Our Philosophy
        </h1>
        <p style={{ textAlign: 'center', maxWidth: '600px', margin: '1rem auto' }}>
          Azure Estates was founded on the principle that a home is more than a structure; it's the backdrop to a life well-lived. We specialize in properties that inspire, from serene lakeside manors to breathtaking mountain retreats. Our commitment is to exceptional quality and unparalleled service.
        </p>
      </div>
    </Layout>
  );
};

export default AboutPage;

export const Head = () => <title>About | Azure Estates</title>;