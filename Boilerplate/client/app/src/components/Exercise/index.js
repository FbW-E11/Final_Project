import React, { useState, useEffect } from "react";
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







































































