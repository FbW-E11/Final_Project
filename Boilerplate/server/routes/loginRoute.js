
import express from "express";
import { check, validationResult } from "express-validator";
import Register from "../module/register.js";

let router = express.Router();

router.post(
  "/",
  check("email").notEmpty().withMessage("email is required"),
  check("email").isEmail().withMessage("Email is not valid"),
  check("password").notEmpty().withMessage("Password required"),
  check("password").isLength({ min: 5 }).withMessage("not a strong password"),
  async (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ error: error.array() });
    }
    const loginDataCount = await Register.find({
      email: req.body.email,
      password: req.body.password,
    }).count();
    if (loginDataCount >= 1) {
      res.json({ success: true });
    } else {
      res.json({ success: false });
    }
  }
);

export default router;
