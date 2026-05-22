import IMailService from "@/lib/mail/IMailService";
import { SendEmailRequest } from "@/types/mail";
import { Transporter } from "nodemailer";

export default class MailService implements IMailService {
  private readonly transporter: Transporter;
  private readonly logoUrl: string =
    "https://drive.usercontent.google.com/download?id=1zdzSsDOdDD2EMPQ8b-MV-OPcb2zgmOEH&export=view&authuser=0";

  constructor(transporter: Transporter) {
    this.transporter = transporter;
  }

  async send({
    name,
    email,
    phone,
    eventDate,
    message,
  }: SendEmailRequest): Promise<void> {
    await this.transporter.sendMail({
      from: `"Formularz kontaktowy" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_USER,
      subject: `Nowa wiadomość od ${name}`,
      html: `
       <div style="
  max-width: 600px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
  background-color: #1E2A25;
  color: white;
  padding: 20px;
  text-align: center;
  border-radius: 12px;
">
          <div style="margin-bottom: 20px;">
            <img 
              src="${this.logoUrl}" 
              width="90" 
              height="90" 
              alt="logo" 
              style="display: block; margin: 0 auto;" 
            />
          </div>
          <h2 style="
            color: white;
            font-size: 24px;
            margin-bottom: 10px;
          ">
            Nowa wiadomość z formularza
          </h2>
          <div style="
            background: #1A2421;
            color: #333;
            padding: 16px;
            border-radius: 8px;
            margin-top: 10px;
            font-size: 16px;
            text-align: left;
          ">
            <p style="font-size: 16px; color: #E4DECD; margin-bottom: 20px;"><strong>Imię:</strong> ${name}</p>
            <p style="font-size: 16px; color: #E4DECD; margin-bottom: 20px;"><strong>Email:</strong> ${email}</p>
            <p style="font-size: 16px; color: #E4DECD; margin-bottom: 20px;"><strong>Telefon:</strong> ${phone}</p>
            <p style="font-size: 16px; color: #E4DECD; margin-bottom: 20px;"><strong>Data wydarzenia:</strong> ${eventDate}</p>
            <p style="font-size: 16px; color: #E4DECD; margin-bottom: 20px;"><strong>Wiadomość:</strong> ${message}</p>
          </div>
    </div>
    `,
    });
  }
}
