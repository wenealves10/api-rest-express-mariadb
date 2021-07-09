import 'dotenv/config';
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.LOGIN_EMAIL,
    pass: process.env.LOGIN_EMAIL_PASSWORD,
  },
});

export default transport;
