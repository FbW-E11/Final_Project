import mongoose from "mongoose";

// Define characteristicsSchema first
const characteristicsSchema = new mongoose.Schema({
  weight: Number,
  height: Number,
  muscleType: {
    type: String,
    enum: ["Endomorph", "Mesomorph", "Ectomorph"],
  },
  dietHabits: {
    type: String,
    enum: ["Omnivore", "Vegetarian", "Vegan"],
  },
  sleepingHabits: {
    type: String,
    enum: ["normal", "midday break", "irregular"],
  },
});

// Define WorkoutSchema using characteristicsSchema
const WorkoutSchema = new mongoose.Schema({
  gender: {
    type: String,
    enum: ["Male", "Female"],
  },
  characteristics: characteristicsSchema,
});

const Workout = mongoose.model("Workout", WorkoutSchema);

export default Workout;
