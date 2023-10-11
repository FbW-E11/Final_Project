import { Schema, model } from "mongoose";

const ExerciseSchema = new Schema({

  time: {
     n: { type: Number, min: 10 },
    // required:true,
  },
  equipment: {
    type: String,
     required: true, 
    enum: ['dumbbells', 'ropes', 'bars','barbell','kettlebell'],
  },
  muscle: {
    type: String,
     required: true, 
    enum: ['triceps', 'biceps', 'quadriceps','abs','hamstring'],
  },
  fitness_level: {
    type: String,
    required: true,
    enum: ['beginner', 'intermediate', 'advanced', 'pro','expert'],
  },
  fitness_goals: {
    type: String,
     required: true, 
    enum: ['strength', 'weight-loss','building muscles', 'athletic', 'custom'],
  },
})



const Exercise = model("Exercise", ExerciseSchema);
export default Exercise;