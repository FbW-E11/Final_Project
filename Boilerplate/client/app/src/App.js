import "./App.css";
import Register from "./components/Register/index";
import { Routes, Route,Link} from "react-router-dom";
import Home from "./components/Home";


function App() {
  return (
    <Routes>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/" element={<Home />}></Route>
     
    </Routes>
  );
}

export default App;
