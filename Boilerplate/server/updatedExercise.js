
import mongoose from "mongoose";
import { promises as fs } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';
import { json } from "express";
import Exercise from "./model/Exercise.js";


mongoose
  //.connect("mongodb://localhost:27017/Final-project-DataBase")
  .connect(
    "mongodb+srv://Final-Pj-DB:XIG7hEPj5KDpGELN@cluster0.meb2lvg.mongodb.net/FutureConnect-DB"
  )
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log("error", err);
  });
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, 'data.json');
const readData = async () => {
    try {
      const data = await fs.readFile(filePath, 'utf8');
      //console.log(JSON.parse(data));
      return JSON.parse(data);
    } catch (error) {
      console.error('Error reading the file', error);
      throw error;
    }
  };
    const saveData = async() => {
      await Exercise.deleteMany()
      const data = await readData()
      for (const exercise of data.workouts){
        const newExercise = new Exercise(exercise)
        await newExercise.save()
      }
    };
   saveData();
