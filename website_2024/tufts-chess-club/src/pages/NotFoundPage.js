// src/pages/NotFoundPage.js
import React from 'react';

const NotFoundPage = () => {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <a href="/" style={{ textDecoration: 'underline' }}>Go back to Home</a>
    </div>
  );
};

export default NotFoundPage;