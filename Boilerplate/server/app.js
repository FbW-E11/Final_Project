import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import loginRoute from "./routes/loginroutes.js";
import registerRoute from "./routes/registerRoute.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use("/login", loginRoute);
app.use("/register", registerRoute);

mongoose
  .connect("mongodb+srv://Fazan_786:1234@fazandci.yj4w2nz.mongodb.net/Final")
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log("error", err);
  });

app.listen(5001, (req, res) => {
  console.log("listening on port 5001");
});
