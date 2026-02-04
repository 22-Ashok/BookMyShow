import nodemailer from "nodemailer";

let transporter: nodemailer.Transporter;

export async function initMail() {
  const testAccount = await nodemailer.createTestAccount();

  transporter = nodemailer.createTransport({
    host: testAccount.smtp.host,
    port: testAccount.smtp.port,
    secure: testAccount.smtp.secure,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
  });
}

export function getTransporter() {
  if (!transporter) {
    throw new Error("Mail transporter not initialized");
  }
  return transporter;
}
