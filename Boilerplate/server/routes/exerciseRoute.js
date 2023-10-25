import express from "express";
import { check, validationResult } from "express-validator";
import Exercise from "../model/Exercise.js";
const router = express.Router();
// Create a new exercise

router.get("/getall",  async (req, res) => {
  const allExercises = await Exercise.find()

  res.json(allExercises)
});

router.get("/getByMuscle/:muscle",  async (req, res) => {
  const muscle = req.params.muscle
  console.log(req.params)
  const allExercises = await Exercise.find({muscle :muscle})

  res.json(allExercises)
});



router.post(
  "/",

  check("time").notEmpty().withMessage("time is required"),
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const { time,equipment,muscle,fitness_level, fitness_goals } = req.body;
      // Create a new exercise document
      const newExercise = new Exercise({
        time,equipment,muscle,fitness_level, fitness_goals
      });
      await newExercise.save();
      res.json(newExercise);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
);
// Get all exercises
router.get("/", async (req, res) => {
  try {
    const exercises = await Exercise.find();
    res.json(exercises);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});
// Get a specific exercise by ID
router.get("/:id", async (req, res) => {
  try {
    const exercise = await Exercise.findById(req.params.id);
    if (!exercise) {
      return res.status(404).json({ message: "Exercise not found" });
    }
    res.json(exercise);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});
// Update a exercise by ID
router.put("/:id", async (req, res) => {
  try {
    const { time,equipment,muscle,fitness_level, fitness_goals } = req.body;
    const exercise = await Exercise.findByIdAndUpdate(
      req.params.id,
      { time,equipment,muscle,fitness_level, fitness_goals },
      { new: true }
    );
    if (!exercise) {
      return res.status(404).json({ message: "Exercise not found" });
    }
    res.json(exercise);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});
// Delete an exercise by ID
router.delete("/:id", async (req, res) => {
  try {
    const exercise = await Exercise.findByIdAndDelete(req.params.id);
    if (!exercise) {
      return res.status(404).json({ message: "Exercise not found" });
    }
    res.json({ message: "Exercise deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});
export default router;
