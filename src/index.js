import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Main App component
import './index.css'; // Global styles

// Render the application
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
