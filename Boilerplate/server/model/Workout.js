import mongoose from "mongoose";

const characteristicsSchema = new mongoose.Schema({
  weight: Number,
  height: Number,
  muscleType: {
    type: String,
    enum: ['Endomorph', 'Mesomorph', 'Ectomorph']
  },
  dietHabits: {
    type: String,
    enum: ['Omnivore', 'Vegetarian', 'Vegan']
  },
  sleepingHabits: String,
  enum: ['normal', 'midday break', 'irregular']
});

const WorkoutSchema = new mongoose.Schema({
  gender: {
    type: String,
    enum: ['Male', 'Female']
  },
  characteristics: {
    Male: characteristicsSchema,
    Female: characteristicsSchema
  }
});

const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = Workout;

