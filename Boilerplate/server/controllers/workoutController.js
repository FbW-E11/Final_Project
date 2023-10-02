import { Workout } from "../model/Workout.js";
const getWorkouts = async (req, res) => {
  try {
    // We need to get  workouts from our local database or fetch from a Fitness Api
    const workouts = await Workout.find();
    res.json({ workouts });
  } catch (error) {
    console.error("Error fetching workouts:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const createWorkout = async (req, res) => {
  try {
    const { name, description, exercises } = req.body;
    // We need to create a new workout in the database of fetch from a fitness Api
    const newWorkout = new Workout({ name, description, exercises });
    await newWorkout.save();
    res.json({ message: "Workout created successfully", workout: newWorkout });
  } catch (error) {
    console.error("Error creating workout:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
export { getWorkouts, createWorkout };
