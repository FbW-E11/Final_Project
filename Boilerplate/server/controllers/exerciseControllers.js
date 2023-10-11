
import Exercise from "../model/Exercise.js";

const getExercises = async (req, res) => {
  try {
    // We need to get  exercises from our local database or fetch from a fitness Api 
    const exercises = await Exercise.find();
    res.json({ exercises });
  } catch (error) {

    console.error("Error fetching exercises:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const createExercise = async (req, res) => {
  try {
    const { time, equipment, muscle,fitness_level,fitness_goals } = req.body;
    // We need to create a new exercise in the database or fetch from a fitness Api
    const newExercise = new Exercise({ time, equipment, muscle,fitness_level,fitness_goals });
    await newExercise.save();
    res.json({ message: "Exercise created successfully", Exercise: newExercise });

  } catch (error) {
    console.error("Error creating exercise:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export { getExercises, createExercise };
