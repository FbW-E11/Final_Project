

import "../Exercise/style.css"
const ExerciseComponent = () => {
  const [exerciseData, setExerciseData] = useState(null);
   //Load data from local storage on component mount
  useEffect(() => {
    const fetchDataFromAPI = async () => {
      try {
        const response = await fetch('http://localhost:5001/Exercise');
        const data = await response.json();
        console.log(data)
        setExerciseData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle errors as needed
      }
    };
    fetchDataFromAPI()

import "../Exercise/style.css";



const ExerciseComponent = () => {
  const [exerciseData, setExerciseData] = useState(null);
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
export default ExerciseComponent;









































































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

<<<<<<< HEAD
export default ExerciseForm;*/
=======
export default ExerciseComponent; */
>>>>>>> bd03cb581f71afd7f63d53778bd23e34acce1631
