
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
      const response = await fetch("http://localhost:5010/exercise/muscle/"+ muscleInput);
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
            <h2 className="font">Welcome to BeFit Fitness App {user}</h2>
<<<<<<< HEAD
            <Input 
        type="text"
              name="search"
        onChange={handleInputChange}
              placeholder="Enter muscle name..."
             className="custom-input"
            />
        <Button
        style={{
=======
            <Input
        type="text"
        name="search"
        onChange={handleInputChange}
        placeholder="Enter muscle name..."
        className="custom-input"/>

            <Button style={{
>>>>>>> 0a758a2ff1cf6ac943d333ac1928201d37439a23
          color: "black", // Text color
          backgroundColor: "lightgray", // Background color
          fontSize: "14px", // Font size
          padding: "6px 16px", // Padding
          border: "white", // Border
          borderRadius: "5px", // Border radius
          cursor: "pointer", // Cursor style
                textAlign: "center", // Center the text horizontally
          marginLeft:"10px"
<<<<<<< HEAD
        }}
        onClick={handleSubmit}
      >
        Search
      </Button>
=======
        }}  onClick={handleSubmit}>Search</Button>
>>>>>>> 0a758a2ff1cf6ac943d333ac1928201d37439a23
          </div>

          {exerciseData.map((exercise, i) => (
            <div className="cont">
              <ul className="list-cont">
                <li key={i}></li>
                <li>
                  <li>
                    <img src={exercise.imageUrl} />
                  </li>
<<<<<<< HEAD
                  
                  <ReactPlayer className="react-player"  url={exercise.videoUrl} />
                  </li>
                <li key={i}></li>
                <li>Time: {exercise.time.n}</li>
                <li>Equipment:{exercise.equipment}</li>
                <li>{exercise.description}</li>
                <li>Muscle:{exercise.muscle}</li>
                <li>Level{exercise.fitness_level}</li>
                <li>{exercise.fitness_goals}</li>
=======
                  <ReactPlayer className="react-player" url={exercise.videoUrl} />
                </li>
                <li key={i}></li>
                <li>Time: {exercise.time.n}</li>
                <li>Equipment: {exercise.equipment}</li>
                <li>{exercise.description}</li>
                <li>Muscle: {exercise.muscle}</li>
                <li>Level: {exercise.fitness_level}</li>
                <li>Goal: {exercise.fitness_goals}</li>
>>>>>>> 0a758a2ff1cf6ac943d333ac1928201d37439a23
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

 
