import express from "express";
import aws from "aws-sdk";
import {emailToSend, emailSource} from "../constants/email.js";

const router = express.Router();

const ses = new aws.SES({
  region: "us-west-2",
});

router.post("/email", (req, res) => {
  const { email, message, name } = req.body;
  sesTest(emailToSend.email, email, message, name)
    .then(() => {
      res.status(200).send("Email sent");
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

function sesTest(emailTo, emailFrom, message, name) {
  const params = {
    Destination: {
      ToAddresses: [emailTo],
    },
    Message: {
      Body: {
        Text: {
          Data: "Company Name: " + name + "\n\n" + "Request: " + "\n\n" + message,
        },
      },
      Subject: {
        Data: "For Awesome Container Company: " + emailFrom,
      },
    },
    Source: emailSource.email,
  };
  return ses.sendEmail(params).promise();
}

export default router;
