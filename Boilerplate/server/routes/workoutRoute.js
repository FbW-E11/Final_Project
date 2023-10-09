import express from "express";
import { check, validationResult } from "express-validator";
import Workout from "../model/Workout.js";
const router = express.Router();

// Create a new workout
router.post(
  "/",
  check("gender").notEmpty().withMessage("Gender is required"),
  check("characteristics")
    .isObject()
    .withMessage("Characteristics are required"),
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { gender, characteristics } = req.body;

      // Create a new workout document
      const newWorkout = new Workout({
        gender,
        characteristics,
      });

      await newWorkout.save();
      res.json(newWorkout);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
);

// Get all workouts
router.get("/", async (req, res) => {
  try {
    const workouts = await Workout.find();
    res.json(workouts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Get a specific workout by ID
router.get("/:id", async (req, res) => {
  try {
    const workout = await Workout.findById(req.params.id);
    if (!workout) {
      return res.status(404).json({ message: "Workout not found" });
    }
    res.json(workout);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Update a workout by ID
router.put("/:id", async (req, res) => {
  try {
    const { gender, characteristics } = req.body;
    const workout = await Workout.findByIdAndUpdate(
      req.params.id,
      { gender, characteristics },
      { new: true }
    );
    if (!workout) {
      return res.status(404).json({ message: "Workout not found" });
    }
    res.json(workout);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Delete a workout by ID
router.delete("/:id", async (req, res) => {
  try {
    const workout = await Workout.findByIdAndDelete(req.params.id);
    if (!workout) {
      return res.status(404).json({ message: "Workout not found" });
    }
    res.json({ message: "Workout deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

export default router;

/*


*Create a New Workout (POST Request):

{
  "gender": "Male",
  "characteristics": {
    "weight": 180,
    "height": 72,
    "muscleType": "Mesomorph",
    "dietHabits": "Omnivore",
    "sleepingHabits": "normal"
  }
}


*Update a Workout by ID (PUT Request):


{
  "gender": "Female",
  "characteristics": {
    "weight": 150,
    "height": 65,
    "muscleType": "Ectomorph",
    "dietHabits": "Vegan",
    "sleepingHabits": "midday break"
  }
}

*/
