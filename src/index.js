// index.js
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import PaymentPage from "./PaymentPage";
import "./tailwind.css";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/payment" element={<PaymentPage />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);
