import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { sendInvoiceEmail } from "./emailService"; // Import the email service function

const PaymentPage = () => {
  const [amount, setAmount] = useState("");
  const [paymentType, setPaymentType] = useState("");
  const [email, setEmail] = useState(""); // Add state for the user's email
  const navigate = useNavigate();

  const handleDonate = () => {
    // Handle the donation logic and payment gateway integration here
    // Redirect the user or display a success message

    // Generate the invoice and send it via email
    const invoice = {
      amount,
      paymentType,
      email,
      // Include any other relevant information in the invoice
    };

    sendInvoiceEmail(invoice); // Call the email service function to send the invoice

    // Clear the form
    setAmount("");
    setPaymentType("");
    setEmail("");

    // Example navigation to a success page after donation
    navigate("/success");
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
        <div>
          <label htmlFor="email" className="block font-medium">
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded-md p-2 w-full"
          />
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
