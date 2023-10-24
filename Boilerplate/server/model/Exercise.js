import { Schema, model } from "mongoose";

const ExerciseSchema = new Schema({

  time: {
     n: { type: Number, min: 10 },
    // required:true,
  },
  equipment: {
    type: String,
     required: true, 
    enum: ['dumbbell', 'ropes', 'bars','barbell','kettlebell',`bodyweight`,`Bench Press`],
  },
  muscle: {
    type: String,
     required: true, 
    enum: ['triceps', 'biceps','triceps','quadriceps','abs','hamstring,']
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
  exerciseType:{
    type :String,
    enum :['Bodyweight Squats','Bench Press','Push-Ups','Plank','Dumbbell Rows','Leg Raises','Deadlifts',,`Dumbbell Bicep Curls`,'Pull-Ups'
    ]
  },
  duration :{
    type :String,
    enum : ['5 sets of 10 reps','4 sets of 10 reps','3 sets of 10 reps','45 sets of 5 reps',`3 sets of 12 reps`

    ]
  },
  description:{
    type:String,
  },
  videoUrl:{
  type :String,
  },
  imageUrl:{
    type:String
  },

  user:{
    type : Schema.Types.ObjectId
  }
})



const Exercise = model("Exercise", ExerciseSchema);
export default Exercise;