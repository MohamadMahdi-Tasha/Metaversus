// Codes By Mahdi Tasha
// Importing Part
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./app.tsx";
import "./assets/font/font.css";

// Variables
const rootElement = document.getElementById('root') as HTMLElement;
const reactRootElement = ReactDOM.createRoot(rootElement);

// Wrapping whole app inside Strict mode of React and rendering them in root element
reactRootElement.render(<React.StrictMode><App /></React.StrictMode>)
