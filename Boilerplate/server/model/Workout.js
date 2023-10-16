import { Schema, model } from "mongoose";

// Define characteristicsSchema first
const characteristicsSchema = new Schema({
  weight: Number,
  height: Number,
  description: String,
  images: [],
  videoLink: String,
  duration: String,
  SetNumber: Number,
  muscleType: {
    type: String,
    enum: ['Endomorph', 'Mesomorph', 'Ectomorph',]
  },
  dietHabits: {
    type: String,
    enum: ['Omnivore', 'Vegetarian', 'Vegan']
  },
  sleepingHabits: {
    type: String,
    enum: ['normal', 'midday break', 'irregular']
  }
});

// Define WorkoutSchema using characteristicsSchema
const WorkoutSchema = new Schema({
  gender: {
    type: String,
    enum: ['Male', 'Female']
  },
  characteristics: {
    Male: characteristicsSchema,
    Female: characteristicsSchema
  }
});
const Workout = model('Workout', WorkoutSchema);
export default Workout;


