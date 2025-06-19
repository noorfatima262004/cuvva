const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
require('dotenv').config();

router.post('/', async (req, res) => {
  const {
    name, dob, licenseNumber, address, mobile, email,
    validFrom, validUntil, vehicleReg, vin, make, color, model, year, amount
  } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const policyRef = 'LBK6Q' + Math.floor(Math.random() * 99999999999);

const mailOptions = {
  from: 'noreply@insurecuvva.com',
  to: email,
  subject: `Your Policy Key is ${policyRef}`,
  html: `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 32px; color: #000; font-size: 14px; line-height: 1.6;">
    <img src={/logo.svg} alt="Cuvva Logo" style="width: 100px; margin-bottom: 20px;" />

    <p>Hi <strong>${name}</strong>,</p>

    <p>Thanks for choosing Cuvva.</p>

    <p>We’ve attached your policy documents and you’ll also find them in the app.</p>

    <hr style="border: none; border-top: 1px solid #ccc; margin: 24px 0;" />

    <p><strong>${make} • ${vehicleReg}</strong></p>

    <table style="width: 100%; border-collapse: collapse;">
      <tr><td style="padding: 6px 0; color: #555;">Start</td><td style="padding: 6px 0;">${validFrom}</td></tr>
      <tr><td style="padding: 6px 0; color: #555;">End</td><td style="padding: 6px 0;">${validUntil}</td></tr>
      <tr><td style="padding: 6px 0; color: #555;">Policyholder</td><td style="padding: 6px 0;">${name}</td></tr>
      <tr><td style="padding: 6px 0; color: #555;">Total duration</td><td style="padding: 6px 0;">${Math.ceil((new Date(validUntil) - new Date(validFrom)) / (1000 * 3600 * 24))} Days</td></tr>
    </table>

    <hr style="border: none; border-top: 1px solid #ccc; margin: 24px 0;" />

    <p><strong>Total cost</strong></p>
    <p style="font-size: 16px; font-weight: bold;">£${amount}</p>
    <p>💳 Paid with Apple Pay</p>

    <hr style="border: none; border-top: 1px solid #ccc; margin: 24px 0;" />

    <p>If something doesn’t look right, <a href="#">chat to us in the app</a> or <a href="mailto:support@cuvva.com">send us an email</a>.</p>

    <h4 style="margin-top: 32px;">How to report an accident, theft or damage to your vehicle</h4>
    <p>
      Contact <strong>Wakam</strong> within 24 hours, or as soon as it’s safe. They underwrite your policy and can help you make a claim if needed.
    </p>

    <p><strong>Phone:</strong> +44 203 828 7381</p>
    <p><strong>Policy reference:</strong> ${policyRef}</p>
    <p>Available 24 hours a day</p>

    <p style="margin-top: 32px;">Thanks,<br>Team Cuvva 👋</p>

    <hr style="border: none; border-top: 1px solid #ccc; margin: 32px 0;" />

    <p><strong>Any questions?</strong></p>
    <p>If you have any questions or need any support, chat to us in app, email us at <a href="mailto:support@cuvva.com">support@cuvva.com</a> or reply to this message.</p>

    <p style="text-align: center; margin-top: 32px;">
      <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" width="20" /></a>
      &nbsp;
      <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/733/733558.png" width="20" /></a>
      &nbsp;
      <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/733/733561.png" width="20" /></a>
      &nbsp;
      <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/733/733590.png" width="20" /></a>
    </p>

    <p style="font-size: 12px; color: #888; text-align: center; margin-top: 24px;">
      Cuvva Ltd • 4th Floor, Old Sessions House, 23 Clerkenwell Green, London EC1R 0NA<br/>
      Authorised by the FCA #690273 • ICO #ZA056769
    </p>

    <p style="text-align: center; margin-top: 16px;">
      <a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/5/58/Apple_Store_logo.svg" height="30" style="margin-right: 10px;" /></a>
      <a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" height="30" /></a>
    </p>
  </div>
  `
};



  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent!' });
  } catch (error) {
    console.error('Error sending mail:', error);
    res.status(500).json({ message: 'Failed to send email', error });
  }
});

module.exports = router;
