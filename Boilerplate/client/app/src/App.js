import "./App.css";
import Register from "./components/Register/index";
import Workout from "./components/Workout/index";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import MuscleComponent from "./components/Exercise/Muscle";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Workout />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/home" element={<Home />}></Route>
      
      <Route path="/exercise/muscle" element={<MuscleComponent />}></Route>
    </Routes>
  );
}

export default App;
