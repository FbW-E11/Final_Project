import express from "express";
import { check, validationResult } from "express-validator";
import User from "../model/User.js";

let router = express.Router();
const SECRET_KEY = "OUR SECRET KEY";
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

      const newUser = await User.findOne({
        email,
      });
      console.log(newUser);
      if (!newUser) {
        throw new Error("The user doesn't exist");
        return;
      }
      const passwordCheck = bcrypt.compareSync(password, newUser.password);
      if (!passwordCheck) {
        throw new Error("wrong password");
        return;
      }
      const token = jwt.sign({ loginId: newUser._id }, SECRET_KEY, {
        expiresIn: "1hour",
      });
      console.log(token);
      res
        .cookie("token", token, {
          httpOnly: true,
          sameSite: "none",
          secure: true,
        })
        .json(newUser);
    } catch (error) {
      res.json(error);
    }
  }
);

export default router;
