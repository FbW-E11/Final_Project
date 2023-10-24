import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Exercise/style.css";



const Exercise = () => {
  const [results, setResults] = useState([]);
  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const options = {
          method: "GET",
          url: "https://api.api-ninjas.com/v1/exercises?muscle=biceps",
          headers: {
            "X-Api-Key": "oMU3CViQHefacZJoIy2o3A==Sq7psUz6uzquCPC7",
          },
        };
        const response = await axios.request(options);
        console.log(response.data);
        setResults(response.data);

      } 
      catch (error) {
        console.error("Error fetching exercises:", error);
      }
    };
    fetchExercises();
  }, []); // The empty dependency array ensures that the effect runs only once when the component mounts

  return (
    <div>
      <h1>Exercise List</h1>
      <ul>
        {results.map((result, i) => (
          <li key={i}>
            {i}
            {result.name}
            {result.type}
            {result.muscle}
            {result.equipment}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Exercise;










































































/* import React, { useState } from "react";
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
 */