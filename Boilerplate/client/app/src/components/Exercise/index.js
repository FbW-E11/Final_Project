import React, { useState } from "react";
import "../Exercise/style.css";
const ExerciseForm = () => {
  const [exerciseData, setExerciseData] = useState({
    time: 10,
    equipment: "dumbbells",
    muscle: "triceps",
    fitness_level: "beginner",
    fitness_goals: "strength",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExerciseData({
      ...exerciseData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to send exerciseData to the backend (e.g., via an API)
    console.log("Exercise data submitted:", exerciseData);
  };

  return (
    <div className="exercise-form-container">
      <h2>Add Exercise</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Time:
          <input
            type="number"
            name="time"
            value={exerciseData.time}
            onChange={handleChange}
          />
        </label>
        <label>
          Equipment:
          <select
            name="equipment"
            value={exerciseData.equipment}
            onChange={handleChange}
          >
            <option value="dumbbells">Dumbbells</option>
            <option value="ropes">Ropes</option>
            <option value="bars">Bars</option>
            <option value="barbell">Barbell</option>
            <option value="kettlebell">Kettlebell</option>
          </select>
        </label>
        <label>
          Muscle:
          <select
            name="muscle"
            value={exerciseData.muscle}
            onChange={handleChange}
          >
            <option value="triceps">Triceps</option>
            <option value="biceps">Biceps</option>
            <option value="quadriceps">Quadriceps</option>
            <option value="abs">Abs</option>
            <option value="hamstring">Hamstring</option>
          </select>
        </label>
        <label>
          Fitness Level:
          <select
            name="fitness_level"
            value={exerciseData.fitness_level}
            onChange={handleChange}
          >
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
            <option value="pro">Pro</option>
            <option value="expert">Expert</option>
          </select>
        </label>
        <label>
          Fitness Goals:
          <select
            name="fitness_goals"
            value={exerciseData.fitness_goals}
            onChange={handleChange}
          >
            <option value="strength">Strength</option>
            <option value="weight-loss">Weight Loss</option>
            <option value="building muscles">Building Muscles</option>
            <option value="athletic">Athletic</option>
            <option value="custom">Custom</option>
          </select>
        </label>
        <button onClick={handleSubmit} type="submit">Add Exercise</button>
      </form>
    </div>
  );
};

export default ExerciseForm;
