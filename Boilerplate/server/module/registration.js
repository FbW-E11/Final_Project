
import { Schema, model } from "mongoose";

const registerSchema = new Schema({
  firstname: String,
  lastname: String,
  age: Number,
  email: String,
  password: String,
  country :String,
  city :String
});

const Register = model("register", registerSchema);
export default Register;
