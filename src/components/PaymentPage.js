import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PaymentPage = () => {
  const navigate = useNavigate();
  const [amount, setAmount] = useState("");
  const [paymentType, setPaymentType] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cardholderName, setCardholderName] = useState("");
  const [cvv, setCvv] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handlePaymentTypeChange = (event) => {
    setPaymentType(event.target.value);
  };

  const handleCardNumberChange = (event) => {
    const value = event.target.value.replace(/\D/g, "").slice(0, 16); // Remove non-digits and limit to 16 digits
    const formattedValue = value.replace(/(\d{4})(?=\d)/g, "$1 "); // Add space after every 4 digits except the last group
    setCardNumber(formattedValue);
  };

  const handleExpiryDateChange = (event) => {
    const value = event.target.value.replace(/\D/g, "");
    let formattedValue = value;

    if (value.length > 2) {
      formattedValue = value.slice(0, 2) + "/" + value.slice(2);
    }

    setExpiryDate(formattedValue);
  };

  const handleCardholderNameChange = (event) => {
    const value = event.target.value.replace(/[^a-zA-Z ]/g, ""); // Remove non-letter characters except space
    setCardholderName(value);
  };

  const handleCvvChange = (event) => {
    const value = event.target.value.replace(/\D/g, "").slice(0, 3);
    setCvv(value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const invoiceData = {
      name,
      email,
      amount,
      paymentType,
      cardNumber,
      expiryDate,
      cardholderName,
      cvv,
    };
    navigate("/invoice", { state: invoiceData });
    console.log(invoiceData);
  };

  const renderPaymentDetails = () => {
    if (paymentType === "creditCard") {
      return (
        <div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="cardNumber"
            >
              Card Number:
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="cardNumber"
              type="text"
              placeholder="Enter card number"
              value={cardNumber}
              onChange={handleCardNumberChange}
            />
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="expiryDate"
              >
                Expiry Date:
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="expiryDate"
                type="text"
                placeholder="MM/YY"
                value={expiryDate}
                onChange={handleExpiryDateChange}
                inputMode="numeric"
                pattern="[0-9]*"
                maxLength={5}
              />
            </div>

            <div>
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="cardholderName"
              >
                Cardholder Name:
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="cardholderName"
                type="text"
                placeholder="Enter cardholder name"
                value={cardholderName}
                onChange={handleCardholderNameChange}
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="cvv">
              CVV:
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="cvv"
              type="text"
              placeholder="Enter CVV"
              value={cvv}
              onChange={handleCvvChange}
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength={3}
            />
          </div>
        </div>
      );
    } else if (paymentType === "paypal") {
      return (
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="paypalEmail"
          >
            PayPal Email:
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="paypalEmail"
            type="email"
            placeholder="Enter PayPal email"
            value={cardholderName} // replace with correct state variable
            onChange={handleCardholderNameChange} // replace with correct handler
          />
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <div className="flex items-center justify-center mt-8 mb-20">
      <form className="w-full max-w-4xl p-8 bg-gray-100 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Payment Page</h2>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Name:
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={handleNameChange}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email Address:
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={handleEmailChange}
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="amount"
          >
            Amount:
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="amount"
            type="text"
            placeholder="Enter the amount"
            value={amount}
            onChange={handleAmountChange}
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="paymentType"
          >
            Payment Type:
          </label>
          <select
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="paymentType"
            value={paymentType}
            onChange={handlePaymentTypeChange}
          >
            <option value="">Select payment type</option>
            <option value="creditCard">Credit Card</option>
            <option value="paypal">PayPal</option>
          </select>
        </div>

        {renderPaymentDetails()}

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
          onClick={handleSubmit}
          disabled={!amount || !paymentType}
        >
          Pay
        </button>
      </form>
    </div>
  );
};

export default PaymentPage;
