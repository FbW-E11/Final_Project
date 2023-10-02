import express from "express";
import { check, validationResult } from "express-validator";
import User from "../model/User.js";

let router = express.Router();

router.post(
  "/",
  check("email").notEmpty().withMessage("email is required"),
  check("email").isEmail().withMessage("Email is not valid"),
  check("password").notEmpty().withMessage("Password required"),
  check("password").isLength({ min: 5 }).withMessage("not a strong password"),
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const { email, password } = req.body;

      console.log(email);
      const result = await User.find();
      if (result) {
        res.json(result)
      const user = await User.findOne({ email, password });

      if (user) {
        res.json(user);
      } else {
        res.json("No User Found");
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
);

export default router;
