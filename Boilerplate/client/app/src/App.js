
import "./App.css";
import Register from "./components/Register/index";


function App() {
  return (

    <Routes>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/" element={<Home />}></Route>
    </Routes>

  );
}

export default App;
