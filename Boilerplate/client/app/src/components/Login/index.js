import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import "../Login/style.css";
import { useNavigate, Link } from "react-router-dom";
import {
  Button,
  FormLabel,
  Input,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
// Rest of your component code
const Login = ({ setUser }) => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const loginUser = async (data) => {
    try {
      const response = await axios.post(`http://localhost:5003/login`, data, {
        withCredentials: true,
      });
      return response.data; // Return data from the response, not the entire response object
    } catch (error) {
      setErrorMessage("Incorrect email or password. Please try again."); // Set error message
    }
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    const user = await loginUser(data);
    /*if (user) {
      setUser(user);*/
    navigate("/exercise/muscle");
  };
  return (
    <>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="formGroup">
            <TextField
              id="filled-basic"
              variant="filled"
              placeholder="email"
              {...register("email", { required: true })}
              style={{ color: "white", fontSize: "20px" }}
              className="commonInput"
            />
          </div>
          <div className="formGroup">
            <FormLabel className="formedLabel" htmlFor="password"></FormLabel>
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="password"
              {...register("password", { required: true, min: 8 })}
              style={{ color: "white", fontSize: "20px" }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    style={{ width: "10px" }}
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </IconButton>
                </InputAdornment>
              }
              className="commonInput"
            />
          </div>
          <div className="signButton">
            {
              <Button variant="contained" type="submit">
                SignIn
              </Button>
            }
            {
              <Button variant="contained">
                <Link
                  to="/register"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  SignUp
                </Link>
              </Button>
            }
          </div>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </form>
      </div>
    </>
  );
};
export default Login;
