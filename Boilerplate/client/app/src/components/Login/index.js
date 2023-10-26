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

const Login = ({ setUser }) => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  const loginUser = async (data) => {
    try {
      const response = await axios.post(`http://localhost:5005/login`, data, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      setErrorMessage("Incorrect email or password. Please try again.");
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    if (data.password.length < 8) {
      setPasswordError("*Password or Email not correct");
      return;
    }

    const user = await loginUser(data);
    // Handle user authentication and navigation here
    navigate("/exercise");
  };

  return (
    <>
      <div className="registration-container">
      <h2>Welcome to BeFit</h2>
        <h2 className="registration-title">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <TextField
              id="filled-basic"
              variant="filled"
              placeholder="email"
              {...register("email", { required: true })}
              className="common-input"
            />
          </div>
          <div className="form-group">
            <FormLabel className="form-label" htmlFor="password">
              Password:
            </FormLabel>
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="password"
              {...register("password", { required: true })}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </IconButton>
                </InputAdornment>
              }
              className="common-input"
            />
            {passwordError && <p className="error-message">{passwordError}</p>}
          </div>

          <Button variant="contained" type="submit">
            SignIn
          </Button>
          <Button variant="contained">
            <Link
              to="/register"
              style={{ textDecoration: "none", color: "white" }}
            >
              SignUp
            </Link>
          </Button>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </form>
      </div>
    </>
  );
};

export default Login;