import express from "express";
import aws from "aws-sdk";
import {emailToSend, emailSource} from "../constants/email.js";

const router = express.Router();

const ses = new aws.SES({
  region: "us-east-1",
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

router.post("/email", (req, res) => {
  const { email, message, name } = req.body;
  
  console.log('=== EMAIL REQUEST START ===');
  console.log('Received email request:', { email, message, name });
  console.log('Sending to:', emailToSend.email);
  console.log('From (Source):', emailSource.email);
  console.log('Reply-To (user):', email);
  console.log('AWS Region:', "us-east-1");
  console.log('AWS Access Key ID:', process.env.AWS_ACCESS_KEY_ID ? '✅ Found' : '❌ Missing');
  console.log('AWS Secret Access Key:', process.env.AWS_SECRET_ACCESS_KEY ? '✅ Found' : '❌ Missing');
  console.log('=== EMAIL REQUEST END ===');
  
  sesTest(emailToSend.email, email, message, name)
    .then((data) => {
      console.log('✅ Email accepted by SES. MessageId:', data?.MessageId);
      res.status(200).json({ ok: true, message: 'Email sent successfully', messageId: data?.MessageId });
    })
    .catch((err) => {
      console.error('❌ Email sending failed:', err);
      const payload = { code: err.code, message: err.message };
      console.error('Error details:', payload);
      res.status(500).json(payload);
    });
});

function sesTest(emailTo, userEmailFrom, message, name) {
  const params = {
    Destination: {
      ToAddresses: [emailTo],
    },
    Message: {
      Body: {
        Text: {
          Charset: 'UTF-8',
          Data: `Company Name: ${name}\n\nEmail: ${userEmailFrom}\n\nRequest: ${message}`,
        },
      },
      Subject: {
        Charset: 'UTF-8',
        Data: `New Contact Request from Al-Khamayseh Beverage Company: ${userEmailFrom}`,
      },
    },
    Source: emailSource.email,
    ReplyToAddresses: userEmailFrom ? [userEmailFrom] : [],
  };
  
  console.log('SES params:', params);
  return ses.sendEmail(params).promise();
}

export default router;
