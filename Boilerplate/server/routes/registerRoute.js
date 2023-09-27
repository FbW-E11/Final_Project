import express from "express";
import { check, validationResult } from "express-validator";
<<<<<<< HEAD
import Register from "../models/register.js";
=======
import Register from "../module/User.js";
>>>>>>> 30171b5d66ce76688b79593a962bbb115b2909e1
let router = express.Router();

router.post(
  "/",
  check("fullName").notEmpty().withMessage("fullname is required"),
  check("gender").notEmpty().withMessage("gender is required"),
  check("email").notEmpty().withMessage("email is required"),
  check("phone").notEmpty().withMessage("phone number is required"),
  check("city").notEmpty().withMessage("city is required"),
  check("address").notEmpty().withMessage("address is required"),
  check("age").notEmpty().withMessage(" your real age required"),
  check("email").isEmail().withMessage("Email is not valid"),
  check("password").notEmpty().withMessage("Password required"),
  check("password").isLength({ min: 5 }).withMessage("not a strong password"),
  check("address").notEmpty().withMessage("address is required"),

  async (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ error: error.array() });
    }
    const loginDataCount = await Register.create(req.body);
    if (loginDataCount) {
      res.json({ success: true });
    } else {
      res.json({ success: false });
    }
  }
);

export default router;
