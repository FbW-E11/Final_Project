import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  fullName: String,
  age: Number,
  gender: String,
  phone: Number,
  city: String,
  address: String,
  email: String,
  password: String,
});

const User = model("User", UserSchema);
export default User;
