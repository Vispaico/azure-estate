// src/pages/contact.js
import * as React from 'react';
import Layout from '../components/layout.js';

const ContactPage = (props) => {
  return (
    <Layout {...props}>
      <div style={{ padding: '8rem 2rem' }}>
        <h1 style={{ textAlign: 'center', fontFamily: 'Times New Roman, serif', fontSize: '3rem' }}>
          Contact Us
        </h1>
        <p style={{ textAlign: 'center', maxWidth: '600px', margin: '1rem auto' }}>
          For inquiries about our properties or to schedule a private viewing, please get in touch.
        </p>
        <div style={{ textAlign: 'center', marginTop: '2rem', fontSize: '1.5rem' }}>
          <a href="mailto:inquiries@azureestates.com" style={{ color: '#333', borderBottom: '1px solid #333', paddingBottom: '0.25rem' }}>
            inquiries@azureestates.com
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;

export const Head = () => <title>Contact | Azure Estates</title>;