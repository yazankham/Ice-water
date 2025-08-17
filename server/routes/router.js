import express from "express";
import aws from "aws-sdk";
import {emailToSend, emailSource} from "../constants/email.js";

const router = express.Router();

const ses = new aws.SES({
  region: "us-east-1", // المنطقة التي تم فيها توثيق بريدك الإلكتروني
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

router.post("/email", (req, res) => {
  const { email, message, name } = req.body;
  
  console.log('=== EMAIL REQUEST START ===');
  console.log('Received email request:', { email, message, name });
  console.log('Sending to:', emailToSend.email);
  console.log('From:', emailSource.email);
  console.log('AWS Region:', "us-east-1");
  console.log('AWS Access Key ID:', process.env.AWS_ACCESS_KEY_ID ? 'Found' : 'Missing');
  console.log('AWS Secret Access Key:', process.env.AWS_SECRET_ACCESS_KEY ? ' Found' : 'Missing');
  console.log('=== EMAIL REQUEST END ===');
  
  sesTest(emailToSend.email, email, message, name)
    .then(() => {
      console.log('Email sent successfully');
      res.status(200).send("Email sent successfully");
    })
    .catch((err) => {
      console.error('❌ Email sending failed:', err);
      console.error('Error details:', err.message);
      res.status(500).send(err.message);
    });
});

function sesTest(emailTo, emailFrom, message, name) {
  const params = {
    Destination: {
      ToAddresses: [emailTo], // بريدك الإلكتروني الموثق
    },
    Message: {
      Body: {
        Text: {
          Data: `Company Name: ${name}\n\nEmail: ${emailFrom}\n\nRequest: ${message}`,
        },
      },
      Subject: {
        Data: `New Contact Request from Al-Khamayseh Beverage Company: ${emailFrom}`,
      },
    },
    Source: emailSource.email, // بريدك الإلكتروني الموثق كمصدر
  };
  
  console.log('SES params:', params);
  return ses.sendEmail(params).promise();
}

export default router;
