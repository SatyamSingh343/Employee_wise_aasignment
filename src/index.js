import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { CssBaseline } from '@mui/material';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CssBaseline />
    <App />
  </React.StrictMode>
);