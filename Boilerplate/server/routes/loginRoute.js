import express from "express";
import { check, validationResult } from "express-validator";
import User from "../models/User.js";

let router = express.Router();

router.post(
  "/",
  check("email").notEmpty().withMessage("Email is required"),
  check("email").isEmail().withMessage("Email is not valid"),
  check("password").notEmpty().withMessage("Password is required"),
  check("password").isLength({ min: 5 }).withMessage("Not a strong password"),
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const { email, password } = req.body;

      // Search for a user with the provided email and password
      const user = await User.findOne({ email, password });

      if (user) {
        // If a user is found, return their details
        res.json(user);
      } else {
        // If no user is found, return "No User Found"
        res.json("No User Found");
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
);

export default router;
