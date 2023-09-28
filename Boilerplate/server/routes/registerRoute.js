import express from "express";
import { check, validationResult } from "express-validator";
import bcrypt from "bcrypt";
import Register from "../model/User.js";
let router = express.Router();

router.post(
  "/",
  check("fullName").notEmpty().withMessage("Full Name is required"),
  check("gender").notEmpty().withMessage("Gender is required"),
  check("email").notEmpty().withMessage("Email is required"),
  check("phone").notEmpty().withMessage("Phone number is required"),
  check("city").notEmpty().withMessage("City is required"),
  check("address").notEmpty().withMessage("Address is required"),
  check("age").notEmpty().withMessage("Your real age is required"),
  check("email").isEmail().withMessage("Email is not valid"),
  check("password").notEmpty().withMessage("Password is required"),
  check("password").isLength({ min: 5 }).withMessage("Not a strong password"),
  check("address").notEmpty().withMessage("Address is required"),

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { fullName, gender, email, phone, city, address, age, password } =
      req.body;

    try {
      // Hash the password before saving it to the database
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create a new user with the hashed password
      const newUser = new Register({
        fullName,
        gender,
        email,
        phone,
        city,
        address,
        age,
        password: hashedPassword, // Store the hashed password
      });

      await newUser.save();
      res.json({ success: true });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
  }
);

export default router;

/*import express from "express";
import { check, validationResult } from "express-validator";
import Register from "../module/User.js";
let router = express.Router();

router.post(
  "/",
  check("fullName").notEmpty().withMessage("fullName is required"),
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

export default router;*/
