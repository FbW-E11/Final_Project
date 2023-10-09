import React from "react";
import { useState } from "react";
import Login from "../Login/index.js";

import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
  const [user, setUser] = useState(null);

  const logoutUser = async () => {
    const res = await axios.get("user/logout", { withCredentials: true });
    if (res.data === "Bye bye") {
      setUser(null);
    }
  };
  return (
    <div>
      {user ? (
        <>
          <h2>Welcome {user.username}</h2>
          <button className="logout-button" onClick={logoutUser}>
            Logout
          </button>
        </>
      ) : (
        <div className="app-container">
          <Login user={user} setUser={setUser} />

          <Link to="/register" className="register-button">
            Register
          </Link>
        </div>
      )}
    </div>
  );
}

export default Home;
