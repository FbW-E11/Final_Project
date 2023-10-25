

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
        const response = await fetch("http://localhost:5002/Exercise");
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
export default ExerciseComponent;
=======
import axios from "axios";



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








































































