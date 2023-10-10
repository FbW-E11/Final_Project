import { useState } from "react";
import "./App.css";
import Login from "./components/Login/index";
import Register from "./components/Register/index";
import axios from "axios";
function App() {
  const [user, setUser] = useState(null);
  const logoutUser = async () => {
    const res = await axios.get("user/logout", { withCredentials: true });
    if (res.data === "Bye bye") {
      setUser(null);
    }
  };
  return (
    <div>
      <>
        {" "}
        {user ? (
          <>
            {" "}
            <h2>Welcome {user.username}</h2>{" "}
          </>
        ) : (
          <div className="app-container">
            <Login user={user} setUser={setUser} />
            <div>
              <button className="logout-button" onClick={<Register />}>
                Register
              </button>
            </div>
          </div>
        )}
      </>
    </div>
  );
}
export default App;