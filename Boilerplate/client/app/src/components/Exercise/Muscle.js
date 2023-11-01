

import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import "../Exercise/style.css";
import {Button,Input,} from "@mui/material";
const MuscleComponent = () => {
  const [user, setUser] = useState(null);
  const [muscleInput, setMuscleInput] = useState("biceps");
  const handleInputChange = (event) => {
    const data = event.target.value;
    setMuscleInput(data);
  };
  const handleSubmit=()=>{
    fetchDataFromAPI();
  }
  const [exerciseData, setExerciseData] = useState();
  const fetchDataFromAPI = async () => {
    try {
      const response = await fetch("http://localhost:5002/exercise/muscle/"+ muscleInput);
      const data = await response.json();
      console.log(data);
      setExerciseData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle errors as needed
    }
  };
  //Load data from local storage on component mount
  useEffect(() => {
  
    fetchDataFromAPI();
  }, []);

  return (
    <div>
      {exerciseData && (
        <div>
          <div>
            <h2>Welcome to BeFit Fitness App {user}</h2>
            <Input
        type="text"
        name="serach"
        onChange={handleInputChange}
        placeholder="type muscle type"/>
            <Button onClick={handleSubmit}>Search</Button>
          </div>

          {exerciseData.map((exercise, i) => (
            <div className="container">
              <ul className="list-container">
                <li key={i}></li>
                <li>
                  <li>
                    <img src={exercise.imageUrl} />
                  </li>
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
                <li>{exercise.duration}</li>
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default MuscleComponent;