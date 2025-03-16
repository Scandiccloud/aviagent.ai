import nodemailer from "nodemailer";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Only POST requests allowed" });
    }

    const { name, email, message } = req.body;

    let transporter = nodemailer.createTransport({
        host: "smtp.zoho.com",
        port: 465,
        secure: true,
        auth: {
            user: "post@aviagent.ai", // Your Zoho email
            pass: process.env.ZOHO_PASSWORD, // Store in Vercel environment variables
        },
    });

    try {
        await transporter.sendMail({
            from: `"AviAgent Contact" <post@aviagent.ai>`,
            to: "post@aviagent.ai",
            subject: "New Contact Form Submission",
            text: `From: ${name} (${email})\n\nMessage:\n${message}`,
        });
        res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
        res.status(500).json({ message: "Error sending email", error: error.message });
    }
}
