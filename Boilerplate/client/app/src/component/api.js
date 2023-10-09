
//import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import Login from "./components/Login/index";
import Register from "./components/Register/index";
import axios from "axios";
//import { ColorRing } from "react-loader-spinner";
function App() {
  const [user, setUser] = useState(null);
  //const [isLoading, setIsLoading] = useState(false);

  const logoutUser = async () => {
    const res = await axios.get("user/logout", { withCredentials: true });
    if (res.data === "Bye bye") {
      setUser(null);
    }
  };
  return (
    <div>
      {/* {false? ( */}
      {/* <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={["#E15B64", "#F47E60", "#F8B26A", "#ABBD81", "#849B87"]}
        /> */}
      {/* ) : ( */}
      <>
        {" "}
        {user ? (
          <>
            {" "}
            <h2>Welcome {user.username}</h2>{" "}
          </>
        ) : (
          <div className="app-container">
            {/*    <Register /> */}
            <Login user={user} setUser={setUser} />

            <div>
              <button className="logout-button" onClick={<Register />}>
                Register
              </button>
            </div>
          </div>
        )}
      </>
      {/*  )} */}
    </div>
  );
}
export default App;