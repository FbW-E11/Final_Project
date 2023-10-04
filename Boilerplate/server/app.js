import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import loginRoute from "./routes/loginRoute.js";
import registerRoute from "./routes/registerRoute.js";
import workoutRoute from "./routes/workoutRoute.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use("/login", loginRoute);
app.use("/register", registerRoute);
app.use("/workout", workoutRoute);

mongoose
  //.connect("mongodb://localhost:27017/Final-project-DataBase")
  .connect(
    "mongodb+srv://Final-Pj-DB:XIG7hEPj5KDpGELN@cluster0.meb2lvg.mongodb.net/FutureConnect-DB"
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
