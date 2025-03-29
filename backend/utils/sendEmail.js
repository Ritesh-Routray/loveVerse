import nodemailer from "nodemailer";
import dotenv from "dotenv";
import FutureLoveTimeCapsuleModel from "../models/futureLoveTimeCapsule/futureLoveTimeCapsule.js";

dotenv.config();

const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE || "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

/**
 * @param {string} to
 * @param {string} subject
 * @param {string} text
 * @param {string} html
 */
export const sendEmail = async (to, subject, text, html) => {
  try {
    if (!to) {
      throw new Error("No recipient email defined.");
    }
    const mailOptions = {
      from: `"LoveVerse" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      text,
      html,
    };

    await transporter.sendMail(mailOptions);
    console.log(`📨 Email sent successfully to ${to}`);
  } catch (error) {
    console.error(`❌ Failed to send email to ${to}:`, error.message);
  }
};

/**
 * @param {string} userId
 */
export const sendFutureLoveTimeCapsule = async (userId) => {
  try {
    const capsule = await FutureLoveTimeCapsuleModel.findOne({
      isDelivered: false,
    });
    console.log(capsule)

    if (!capsule) {
      console.log("❌ No time capsule found for this user.");
      return;
    }

    const recipientEmail = capsule.recipientEmail
    console.log("recipientEmail", recipientEmail)
    if (!recipientEmail) {
      console.log("❌ No recipient email found.");
      return;
    }

    const subject = capsule.title;

    const htmlContent = `
      <!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${subject}</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f4f4;
      text-align: center;
      padding: 20px;
      margin: 0;
    }
    .container {
      max-width: 600px;
      background: #ffffff;
      padding: 25px;
      border-radius: 10px;
      box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
      margin: auto;
      text-align: left;
    }
    .title {
      color: #d32f2f;
      font-size: 26px;
      font-weight: bold;
      text-align: center;
    }
    .message {
      font-size: 16px;
      color: #333;
      margin: 20px 0;
      line-height: 1.6;
    }
    .quote {
      font-style: italic;
      color: #555;
      border-left: 4px solid #d32f2f;
      padding-left: 12px;
      margin: 15px 0;
    }
    .footer {
      font-size: 14px;
      color: #666;
      text-align: center;
      margin-top: 20px;
    }
    @media (max-width: 600px) {
      .container {
        padding: 20px;
      }
      .title {
        font-size: 22px;
      }
      .message {
        font-size: 15px;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h2 class="title">${subject}</h2>
    <p class="message">
      Dear <strong>ME</strong>,
      <br><br>
      Time moves forward, but love and memories remain eternal. Today, you are reading a message from the past—a piece of my heart sealed just for you.
    </p>
    <p class="quote">"${capsule.content}"</p>
    <p class="message">
      No matter where life has taken us, know that my love, my hopes, and my dreams for you have remained true.
    </p>
    <p class="footer">
      With love, <br> <strong>${
        "Someone Special"
      }</strong>
    </p>
  </div>
</body>
</html>

    `;

    await sendEmail(
      capsule.recipientEmail,
      capsule.title,
      capsule.content,
      htmlContent
    );
  } catch (error) {
    console.error("❌ Error sending future love time capsule:", error.message);
  }
};
