import express from "express";
import User from "../model/User";
import bcrypt from "bcrypt";

// register
export const userRegister = async (req, res) => {
  try {
    const { password } = req.body;

    const salt = bcrypt.genSaltSync(5);
    const hashedPassword = bcrypt.hashSync(password, salt);

    const newUser = await User.create({
      ...req.body,
      password: hashedPassword,
      s,
    });
  } catch (error) {
    res.json(error);
  }
};

// login


// find the login
export const getUser = (req, res) => {
  res.json(req.user);
};

// Update the User
export const updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.user.id, req.body, {
      new: true,
    });

    res.json(updateUser);
  } catch (error) {
    res.json(error.message);
  }
};

// get all the User
export const getAllUser = async (req, res) => {
  try {
    const updatedUser = await User.find();

    res.json(getUser);
  } catch (error) {
    res.json(error.message);
  }
};

// delete the User
export const deletedUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.login._id);
    res.json("User has been deleted");
  } catch (error) {
    res.json(error.message);
  }
};

// logout User
export const logoutUser = async (req, res, next) => {
  res.json("Goodbye");
};
