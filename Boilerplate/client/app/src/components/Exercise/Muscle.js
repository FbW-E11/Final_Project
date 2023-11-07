

import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import "../Exercise/style.css";
import { Button, Input, } from "@mui/material";

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
    <div className="main-container">
      {exerciseData && (
        <div>
          <div>
            <h2 className="font">Welcome to BeFit {user}</h2>
            <Input
        type="text"
        name="search"
        onChange={handleInputChange}
        placeholder="Enter muscle name..."
        className="custom-input"/>

            <Button style={{
          color: "white", // Text color
          backgroundColor: "orange", // Background color
              fontSize: "16px", // Font size
          fontWeight:"bold",
          padding: "15px 16px", // Padding
          border: "white", // Border
          borderRadius: "5px", // Border radius
          cursor: "pointer", // Cursor style
                textAlign: "center", // Center the text horizontally
          marginLeft:"25px"
        }}  onClick={handleSubmit}>Search</Button>
          </div>

          {exerciseData.map((exercise, i) => (
            <div className="cont">
              <ul className="list-cont">
                <li key={i}></li>
                <li className="position-align">
                  <li>
                    <img src={exercise.imageUrl} />
                  </li>
                  <ReactPlayer className="react-player" url={exercise.videoUrl} />
                </li>
                <li key={i}></li>
                <li>Time: {exercise.time.n}</li>
                <li>Equipment: {exercise.equipment}</li>
                <li>{exercise.description}</li>
                <li>Muscle: {exercise.muscle}</li>
                <li>Level: {exercise.fitness_level}</li>
                <li>Goal: {exercise.fitness_goals}</li>
                <li>{exercise.exerciseType}</li>
                <li>{exercise.duration}</li>
                
              </ul>
              <div className="instruction">
              <p>Instructions:</p>
              <ul>
                  <li>Warm-Up (5 minutes):<br/> Begin with a 5-minute warm-up, like jumping jacks or jogging in place, to prepare your body for the workout.</li><br/>
                  <li>Exercise 1 (Bicep Curls - 10 minutes):<br/> Stand with feet shoulder-width apart. Hold a comfortable dumbbell in one hand and curl it up toward your shoulder, then lower it with control. Repeat this motion for 10 minutes, focusing on controlled movements.</li><br/>
                  <li>Rest (2 minutes): <br/>Take a 2-minute break to catch your breath and hydrate.</li><br/>
                  <li>Exercise 2 (Hammer Curls - 5 minutes):<br/> Hold the dumbbell with your palm facing your body and perform curls in the same way as before. This targets a different part of your biceps.</li><br/>
                  <li>Exercise 3 (Concentration Curls - 5 minutes): <br/>Sit on a chair or bench, rest your elbow against your inner thigh, and curl the dumbbell, focusing on each arm individually.</li><br/>
                  <li>Cool-Down (3 minutes): <br/>Finish with a 3-minute cool-down. Stretch your biceps and arms by gently reaching your arms behind your head and pulling your elbow with the opposite hand to stretch the biceps.</li><br/>
                  <li>Post-Workout Stretch (5 minutes): <br/>Spend 5 minutes on post-workout stretches to improve flexibility and reduce muscle soreness.</li>
              </ul>
             
                </div>


            </div>
          ))}
        </div>
      )}
      
    </div>
  );
};
 export default MuscleComponent; 

 
