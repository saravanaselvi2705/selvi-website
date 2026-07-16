import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

export const sendContactEmail = async (data) => {
    try {
        console.log("📧 Starting email send...");
        console.log("EMAIL_USER:", process.env.EMAIL_USER ? "Loaded" : "Missing");
        console.log("EMAIL_PASS:", process.env.EMAIL_PASS ? "Loaded" : "Missing");

        const info = await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: `New Portfolio Contact from ${data.name}`,
            html: `
        <h2>New Portfolio Contact</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Message:</strong> ${data.message}</p>
      `,
        });

        console.log("✅ Email sent successfully");
        console.log(info);

    } catch (err) {
        console.error("❌ EMAIL ERROR");
        console.error(err);
    }
};