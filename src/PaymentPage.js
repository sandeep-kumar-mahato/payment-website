// PaymentPage.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";

const PaymentPage = () => {
  const [amount, setAmount] = useState("");
  const [paymentType, setPaymentType] = useState("");
  const navigate = useNavigate();

  const handleDonate = () => {
    const email = prompt("Please enter your email address:");
    if (email) {
      // Handle the donation logic and payment gateway integration here

      // Send the invoice to the provided email address
      const templateParams = {
        to_email: email,
        subject: "Invoice for Donation",
        amount: amount, // Add the amount to the template params
      };

      // Replace 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', and 'YOUR_USER_ID' with your actual values
      emailjs
        .send(
          "service_59w9ui6",
          "template_idexlo9", // Replace this placeholder with your actual EmailJS template ID
          templateParams,
          "FM4SOtO9rjvT97whM"
        )
        .then(() => {
          // Success message or further navigation logic
          console.log("Invoice email sent successfully");
        })
        .catch((error) => {
          // Error handling
          console.error("Failed to send invoice email:", error);
        });

      // Clear the form
      setAmount("");
      setPaymentType("");

      // Example navigation to a success page after donation
      navigate("/");
    }
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-6">Payment Page</h1>
      <form className="space-y-4">
        <div>
          <label htmlFor="amount" className="block font-medium">
            Amount:
          </label>
          <input
            type="text"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="border rounded-md p-2 w-full"
          />
        </div>
        <div>
          <label htmlFor="paymentType" className="block font-medium">
            Payment Type:
          </label>
          <select
            id="paymentType"
            value={paymentType}
            onChange={(e) => setPaymentType(e.target.value)}
            className="border rounded-md p-2 w-full"
          >
            <option value="">Select Payment Type</option>
            <option value="creditCard">Credit Card</option>
            <option value="paypal">PayPal</option>
            {/* Add other payment types here */}
          </select>
        </div>
        <button
          type="button"
          onClick={handleDonate}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Donate
        </button>
      </form>
    </div>
  );
};

export default PaymentPage;
