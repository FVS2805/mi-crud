import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './App.css';

ReactDOM.createRoot(document.getElementById('root')).render(// Renderiza el componente principal de la aplicación dentro del elemento con id 'root'.
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
