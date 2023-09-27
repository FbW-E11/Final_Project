import express from "express";
import Login from "../module/login";
import bcrypt from "bcrypt";

// register
export const userRegister = async (req, res) => {
  try {
    const { password } = req.body;

    const salt = bcrypt.genSaltSync(5);
    const hashedPassword = bcrypt.hashSync(password, salt);

    const newLogin = await Login.create({
      ...req.body,
      password: hashedPassword,
    });
  } catch (error) {
    res.json(error);
  }
};

// login
export const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const newLogin = await Login.find({
      email});

    if (!login) {
      throw new Error("The user doesn't exist");
      return;
    }

    const passwordCheck = bcrypt.compareSync(password, user.password);

    if (!password) {
      throw new Error("wrong password");
      return;
    }

    const token = jwt.sign({ loginId:Login._id }, SECRET_KEY, {
      expiresIn: "1hour",
    });
  } catch (error) {
    res.json(error);
  }
};

// find the login
export const getLogin = (req, res) => {
  res.json(req.login);
};

// Update the login
export const updateLogin = async (req, res) => {
  try {
    const updatedLogin = await Login.findByIdAndUpdate(req.login.id, req.body, {
      new: true,
    });

    res.json(updateLogin);
  } catch (error) {
    res.json(error.message);
  }
};

// get all the logins
export const getAllLogin = async (req, res) => {
  try {
    const updatedLogin = await Login.find();

    res.json(getAllLogin);
  } catch (error) {
    res.json(error.message);
  }
};

// delete the login
export const deletedLogin = async (req, res) => {
  try {
    await Login.findByIdAndDelete(req.login._id);
    res.json("Login has been deleted");
  } catch (error) {
    res.json(error.message);
  }
};

// logoutLogin
export const logoutLogin = async (req, res, next) => {
  res.json("Goodbye");
};
