const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();
// server used to send send emails
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));
console.log(process.env.EMAIL_USER);
console.log(process.env.EMAIL_PASS);

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
  secure: true, // Use SSL
requireTLS: true // Ensure TLS is used

});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});



app.post('/contact', async (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;

  console.log("Form Data Received:", { firstName, lastName, email, phone, message });

  if (firstName && email && message) {
      try {
          let mailOptions = {
              from: process.env.EMAIL_USER,
              to: process.env.EMAIL_USER,
              subject: 'New Contact Form Submission',
              text: `
                  First Name: ${firstName}
                  Last Name: ${lastName}
                  Email: ${email}
                  Phone: ${phone}
                  Message: ${message}
              `
          };

          contactEmail.sendMail(mailOptions, (error, info) => {
            if (info) {
              console.log('Email sent: ' + info.response);
              res.status(200).json({ success: true, message: 'Message sent successfully!' });
          } else {
              res.status(500).json({ success: false, message: 'Failed to send message.' });
          }
          
          });

      } catch (error) {
          console.error("Error sending email:", error);
          res.status(500).json({ status: 'fail', message: "Failed to send message." });
      }
  } else {
      res.status(400).json({ status: 'fail', message: "Please fill all required fields." });
  }
});
