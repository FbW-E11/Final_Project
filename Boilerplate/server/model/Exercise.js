import { Schema, model } from "mongoose";

const ExerciseSchema = new Schema({
  time: {
    n: { type: Number, min: 10 },
    // required:true,
  },
  equipment: {
    type: String,
    required: true,
    enum: ["dumbbell", "ropes", "bars", "barbell", "kettlebell","bodyweight","Bench Press","Treadmill"]
  },
  muscle: {
    type: String,
    required: true,
    enum: ["triceps", "biceps","full-body", "quadriceps", "abs", "hamstring","Bigger Back Workout"]
  },
  fitness_level: {
    type: String,
    required: true,
    enum: ["beginner", "intermediate", "advanced", "pro", "expert"],
  },
  fitness_goals: {
    type: String,
    required: true,
    enum: ["strength", "weight-loss", "building muscles", "athletic", "custom"],
  },
  imageUrl: {
    type: String,
    required: true,
  },
  videoUrl: {
    type: String,
    required: true,
  },
  exerciseType:{
    type :String,
    required:true,
    enum:[
      "Cardio Exercise","Chest Exercise","Bench Press","Deadlifts","Bodyweight Squats","Burpees","Deadlifts","Leg Raises","dumbbell Rows","dumbbell Bicep Curls","Push-Ups","Plank","Bigger Back Workout","full-workout",
    ]
  }
});

const Exercise = model("Exercise", ExerciseSchema);
export default Exercise;
