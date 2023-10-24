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

  // Function to fetch data from your API
  const fetchDataFromAPI = async () => {
    try {
      const response = await fetch('http://localhost:5001/Exercise');
      const data = await response.json();
      setExerciseData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle errors as needed
    }
  };

  // Function to save data to local storage
  const saveDataToLocalStorage = () => {
    try {
      localStorage.setItem('apiData', JSON.stringify(exerciseData));
      console.log('Data saved to localStorage');
    } catch (error) {
      console.error('Error saving data to localStorage:', error);
      // Handle errors as needed
    }
  };

   //Load data from local storage on component mount
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('apiData'));
    if (storedData) {
      setExerciseData(storedData);
    }
  }, []);

  return (
    <div>
      {exerciseData && (
        <div>
          <h2>Exercise Data</h2>
          {exerciseData.map((exercise, i) => (
        <div className="container">
          <ul className='list-container'>
        <li key={i}></li>
       <li>
       <ReactPlayer url={exercise.videoUrl} />
       </li>
       <li key={i}></li>
       <li>Time: {exercise.time.n}</li>
       <li>{exercise.equipment}</li>
       <li>{exercise.description}</li>
       <li>{exercise.muscle}</li>
       <li>{exercise.fitness_level}</li>
       <li>{exercise.fitness_goals}</li>
       <li>{exercise.exerciseType}</li>
       <li><img src= {exercise.imageUrl}/></li>
       <li>{exercise.duration}</li>
       </ul>
        </div>
      ))}
        </div>
      )}
    </div>
  );
};

export default ExerciseForm;
