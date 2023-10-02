
import mongoose from "mongoose";

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
  
  
  const characteristicsSchema = new mongoose.Schema({
  weight: Number,
  height: Number,
  muscleType: {
    type: String,
    enum: ['Endomorphic', 'Mesomorphic', 'Ectomorphic']
  },
  dietHabits: {
    type: String,
    enum: ['Omnivore', 'Vegetarian', 'Vegan']
  },
  sleepingHabits: String,
  enum: ['normal', 'midday break', 'irregular']
});

const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = Workout;