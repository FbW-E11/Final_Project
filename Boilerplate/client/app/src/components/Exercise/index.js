import React, { useState, useEffect } from "react";
import axios from "axios";

const Exercise = () => {
  const [results, setResults] = useState([]);
  const [exercise, setExercise] = useState("");

  // Fetch exercises on component mount
  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const response = await axios.get("http://localhost:5000/exercise");
        // Assuming that the API returns an array of exercises
        setResults(response.data);
      } catch (error) {
        console.error("Error fetching exercises:", error);
      }
    };
    fetchExercises();
  }, []);

  // Send exercise data to the server
  const sendToServer = () => {
    if (exercise) {
      fetch("http://localhost:5000/exercise", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: exercise,
        }),
      })
        .then((response) => {
          if (response.status === 200) {
            console.log("Exercise data sent successfully");
          } else {
            console.error("Failed to send exercise data");
          }
        })
        .catch((error) => {
          console.error("Error sending exercise data:", error);
        });
    } else {
      console.error("Please enter exercise data.");
    }
  };

  return (
    <div>
      <h1>Exercise List</h1>
      <ul>
        {results.map((result, i) => (
          <li key={i}>
            {result.n} <br />

            {result.name} <br />
            {result.type} <br />
            {result.muscle} <br />
            {result.equipment} <br />
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={exercise}
          onChange={(e) => setExercise(e.target.value)}
          placeholder="Enter exercise data"
        />
        <button onClick={sendToServer}>Select Exercise</button>
      </div>
    </div>
  );
};

export default Exercise;














































































































































/*import React, { useState, useEffect } from "react";
import axios from "axios";




const Exercise = () => {
  const [results, setResults] = useState([]);
  const [exercise, setExercise] = useState();
  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const options = {
          method: "GET",
          url: "exerciseApi.js",
          
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

const sendToServer = () => {

  fetch('http://localhost:5000/exercise', {
    method: 'POST',
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({
      data: exercise.data
    })
  })



}






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

<div>
  <input type="text" onChange={e => setExercise(e.target.value)} />
  <button onClick={sendToServer}>Exercise</button>
</div>


    </div>


    
  );
};
export default Exercise;










































































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
 */