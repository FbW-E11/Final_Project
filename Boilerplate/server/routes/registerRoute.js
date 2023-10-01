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

// Update user information by ID
router.put(
  "/:id",
  check("fullName").notEmpty().withMessage("Full Name is required"),
  check("email").notEmpty().withMessage("Email is required"),
  check("phone").notEmpty().withMessage("Phone number is required"),
  check("city").notEmpty().withMessage("City is required"),
  check("address").notEmpty().withMessage("Address is required"),
  check("age").notEmpty().withMessage("Your real age is required"),
  check("email").isEmail().withMessage("Email is not valid"),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const userId = req.params.id;
    const { fullName, email, phone, city, address, age } = req.body;

    try {
      // Find the user by ID
      const user = await Register.findById(userId);

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      // Update the user's information
      user.fullName = fullName;
      user.email = email;
      user.phone = phone;
      user.city = city;
      user.address = address;
      user.age = age;

      // Save the updated user data
      await user.save();

      res.json({ success: true, message: "User information updated" });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
  }
);
/*
// Delete user by ID
router.delete("/:id", async (req, res) => {
  const userId = req.params.id;

  try {
    // Find the user by ID
    const user = await Register.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Perform the delete operation
    await user.remove();

    res.json({ success: true, message: "User deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

*/

export default router;
