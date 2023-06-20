import React from "react";
import { useLocation } from "react-router-dom";

const Invoice = () => {
  const location = useLocation();
  const invoiceData = location.state;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-semibold mb-4">Invoice</h2>

        <div className="flex flex-wrap mb-6">
          <div className="w-full sm:w-1/2">
            <p className="text-gray-700 font-bold">Name:</p>
            <p>{invoiceData.name}</p>
          </div>
          <div className="w-full sm:w-1/2">
            <p className="text-gray-700 font-bold">Email:</p>
            <p>{invoiceData.email}</p>
          </div>
        </div>

        <div className="flex flex-wrap mb-6">
          <div className="w-full sm:w-1/2">
            <p className="text-gray-700 font-bold">Amount:</p>
            <p>{invoiceData.amount}</p>
          </div>
          <div className="w-full sm:w-1/2">
            <p className="text-gray-700 font-bold">Payment Type:</p>
            <p>{invoiceData.paymentType}</p>
          </div>
        </div>

        <div className="mt-8">
          <p className="text-gray-700">
            Thank you for your payment. If you have any questions, please
            contact our customer support.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
