import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/index.jsx";
import Register from "./components/Register/index.jsx";



function App() {
  return (
    <Routes>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/" element={<Home />}></Route>
    </Routes>
  );
}
export default App;
