import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // Your global CSS
import App from './App';  // Import the main App component
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />  {/* Only render the App component here */}
  </React.StrictMode>
);

// Performance reporting (optional)
reportWebVitals();
