import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import PaymentPage from "./components/PaymentPage";
import Invoice from "./components/Invoice";

function App() {
  return (
    <Router>
      <div className="bg-slate-200">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/invoice" element={<Invoice />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
