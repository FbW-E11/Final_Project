import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import "../Exercise/style.css";
const ExerciseComponent = () => {
  const [user, setUser] = useState(null);
  const handleInputChange = (event) => {
    const data = event.target.value;
    setUser(data);
  };
  const [exerciseData, setExerciseData] = useState(null);
  //Load data from local storage on component mount
  useEffect(() => {
    const fetchDataFromAPI = async () => {
      try {
        const response = await fetch("http://localhost:500/exercise");
        const data = await response.json();
        console.log(data);
        setExerciseData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle errors as needed
      }
    };
    fetchDataFromAPI();
  }, []);

  return (
    <div>
      {exerciseData && (
        <div>
          <div>
            <h2>Welcome {user}</h2>
            <input type="text" onChange={handleInputChange} />
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
                <li>Equipment:{exercise.equipment}</li>
                <li>{exercise.description}</li>
                <li>Muscle:{exercise.muscle}</li>
                <li>{exercise.fitness_level}</li>
                <li>Strength:{exercise.fitness_goals}</li>
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
export default ExerciseComponent;