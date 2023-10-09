

/* 
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
const WorkoutSchema = new Schema({
  gender: {
    type: String,
    enum: ["Male", "Female"],
  },
  characteristics: {
    Male: characteristicsSchema,
    Female: characteristicsSchema,
  },
});

const Workout = model("Workout", WorkoutSchema);

export default Workout;



  characteristics: characteristicsSchema,
});

const Workout = mongoose.model("Workout", WorkoutSchema);

export default Workout;



  characteristics: {
    Male: characteristicsSchema,
    Female: characteristicsSchema,
  },
});

const Workout = model("Workout", WorkoutSchema);

export default Workout;

