
import { Schema, model } from "mongoose";

const registerSchema = new Schema({
  fullName: String,
  age : Number,
  gender: String,
  phone : Number,
  email: String,
  password: String,
  city :String,
  address: String

});

const Register = model("register", registerSchema);
export default Register;
