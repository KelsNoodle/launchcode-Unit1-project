import { StrictMode } from 'react';
import { createRoot, BrowserRouter } from 'react-dom/client';
import reactDOM from "react-router-dom";
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <BrowserRouter>
      <App />
    </BrowserRouter>
    
  </StrictMode>,
)
