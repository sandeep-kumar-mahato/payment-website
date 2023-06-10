import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import PaymentPage from "./PaymentPage";
import "./tailwind.css";

createRoot(document.getElementById("root")).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/payment" element={<PaymentPage />} />
    </Routes>
  </Router>
);
