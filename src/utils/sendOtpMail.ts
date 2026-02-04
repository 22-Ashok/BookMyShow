import nodemailer from "nodemailer"
import { getTransporter } from "../lib/mail";

export default async function sendOtpMail(email: string, otp: string) {
  const transporter = getTransporter();

  const info = await transporter.sendMail({
    from: "test@.email",
    to: email,
    subject: "OTP Code",
    text: otp,
  });

  console.log(nodemailer.getTestMessageUrl(info));
}
