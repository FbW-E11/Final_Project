
import { Schema, model } from "mongoose";

const workoutSchema = new Schema({
  firstname: String,
  lastname: String,
  email: String,
  password: String,
  country :String,
  city :String
});

const Workout = model("workout", workoutSchema);
export default Workout;
