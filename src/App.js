// App.js
import React from "react";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div className="container mx-auto text-center">
      <h1 className="text-3xl font-bold mb-6">
        Welcome to the Donation Website
      </h1>
      <Link
        to="/payment"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Donate Now
      </Link>
    </div>
  );
};

export default App;
