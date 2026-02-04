const Contact = require("../models/contact.model");
const sendMail = require("../utils/mailer");

// Save contact form
exports.submitContactForm = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Save to DB
    const newContact = await Contact.create({
      name,
      email,
      message
    });

    // Mail Content
    const subject = "📩 New Contact Form Submission";
    const mailMessage = `
New Contact Received:

Name: ${name}
Email: ${email}
Message: ${message}
Time: ${new Date().toLocaleString()}
    `;

    // Send mail (pass user email here for reply-to)
    try {
      await sendMail(subject, mailMessage, email);
    } catch (mailError) {
      console.error("Email sending failed:", mailError);
      // We still return success for the form submission, but maybe log the error
      // Or we could return a warning. For now, let's assume if DB save is ok, it's a success, 
      // but strictly speaking the user wants the email to work.
      // If email fails, we might want to let the user know, but usually we don't want to rollback the DB save.
    }

    res.status(201).json({
      success: true,
      message: "Contact form submitted successfully",
      data: newContact
    });

  } catch (error) {
    console.error("Contact submission error:", error);
    res.status(500).json({ message: "Server error", error });
  }
};

// Admin can view all contact messages
exports.getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
