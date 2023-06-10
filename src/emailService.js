const sgMail = require("@sendgrid/mail");
sgMail.setApiKey("YOUR_SENDGRID_API_KEY"); // Replace with your SendGrid API key

export const sendInvoiceEmail = (invoice) => {
  const { amount, paymentType, email } = invoice;

  const message = {
    to: email,
    from: "noreply@example.com", // Set the sender's email address
    subject: "Donation Invoice",
    text: `Thank you for your donation! Here is your invoice:\n\nAmount: ${amount}\nPayment Type: ${paymentType}`,
  };

  sgMail
    .send(message)
    .then(() => console.log("Invoice email sent"))
    .catch((error) => console.error("Error sending invoice email:", error));
};
