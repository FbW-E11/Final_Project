
import { Schema, model } from "mongoose";

const registerSchema = new Schema({
  fullname: String,
  age: Number,
  gender : String,
  phone : Number,
  city :String,
  email: String,
  password: String,
  
});

const Register = model("register", registerSchema);
export default Register;
