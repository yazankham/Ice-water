import express from "express";
import cors from "cors";
import Router from "./routes/router.js";
import { config } from "dotenv";

config();
const app = express();

app.use(express.json());
app.use(cors());
app.use(Router);

app.use(express.static("public"));
app.use(express.static("../build"));

// app.use((req, res, next) => {
//   res.sendFile("../build/index.html");
// });

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console.log(`Listening on port ${port}`);
});

