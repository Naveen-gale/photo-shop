const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendMail = async (subject, message, userEmail) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,      // your Gmail
    to: process.env.ADMIN_EMAIL,       // admin Gmail
    replyTo: userEmail,                // user email from frontend
    subject: subject,
    text: message,
  };

  await transporter.sendMail(mailOptions);
};


console.log(sendMail)

module.exports = sendMail;
