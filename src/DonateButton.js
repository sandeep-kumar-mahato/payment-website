import React from "react";

const DonateButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Donate
    </button>
  );
};

export default DonateButton;
