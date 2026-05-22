import nodemailer from "nodemailer";

export const createMailTransporter = () => {
  if (!process.env.MAIL_USER || !process.env.MAIL_PASSWORD) {
    throw new Error("SMTP Credentials are missing in .env!");
  }

  return nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASSWORD,
    },
  });
};
