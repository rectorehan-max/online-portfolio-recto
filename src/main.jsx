// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import { HashRouter as Router } from 'react-router-dom'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <Router basename={ import.meta.env.BASE_URL }>
//       <App />
//     </Router>
//   </StrictMode>
// )

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/online-portfolio-recto/">
      <Routes>
        <Route path="*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);