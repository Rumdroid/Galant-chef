import { google } from 'googleapis';
import nodemailer from 'nodemailer';

const CLIENT_ID = process.env.GMAIL_CLIENT_ID;
const CLIENT_SECRET = process.env.GMAIL_CLIENT_SECRET;
const REDIRECT_URI = process.env.GMAIL_REDIRECT_URI;
const REFRESH_TOKEN = process.env.GMAIL_REFRESH_TOKEN;

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

async function createTransporter() {
  const accessToken = await oAuth2Client.getAccessToken();

  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: 'inquiries@safetyfirst-ppe.com',
      clientId: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
      refreshToken: REFRESH_TOKEN,
      accessToken: accessToken,
    },
  });
}

export async function sendInquiryEmail(inquiryData) {
  const transporter = await createTransporter();

  const mailOptions = {
    from: 'SafetyFirst PPE <inquiries@safetyfirst-ppe.com>',
    to: 'sales@safetyfirst-ppe.com',
    subject: 'New Inquiry from SafetyFirst PPE Website',
    text: `
      Name: ${inquiryData.name}
      Email: ${inquiryData.email}
      Phone: ${inquiryData.phone}
      Company: ${inquiryData.company || 'N/A'}
      Message: ${inquiryData.message || 'N/A'}
      
      Cart Items:
      ${inquiryData.cart.map(item => `- ${item.name} (Quantity: ${item.quantity})`).join('\n')}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send inquiry email');
  }
}