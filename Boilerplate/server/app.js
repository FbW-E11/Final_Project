import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import loginRoute from "./routes/loginRoute.js";
import registerRoute from "./routes/registerRoute.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use("/login", loginRoute);
app.use("/register", registerRoute);

mongoose
  //.connect("mongodb://localhost:27017/Final-project-DataBase")
  .connect(
    "mongodb+srv://futureConnect:Future12345@cluster0.lbwroa5.mongodb.net/Final-project-DataBase"
  )

  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log("error", err);
  });

app.listen(5001, (req, res) => {
  console.log("listening on port 5001");
});
