import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import "../Login/style.css";
import { useNavigate,Link} from "react-router-dom";
import {Button,FormLabel,Input} from '@mui/material';
const Login = ({ setUser }) => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(""); // Initialize the error message state
  const loginUser = async (data) => {
    try {
      const response = await axios.post(`http://localhost:5001/login`, data, {
        withCredentials: true,
      });
      return response;
    } catch (error) {
      return error;
    }
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    const res = await loginUser(data);
    console.log(res.data);
    if (res.data) {
      setUser(res.data)
          navigate("/workoutpage");
        } 
      };
  return (
    <>
      <div className="registration-container">
        <h2 className="registration-title">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <FormLabel className="form-label" htmlFor="username">
              Email:
            </FormLabel>
            <Input
              type="email"
              placeholder="email"
              
              {...register("email", {required:true})}
            />
          </div>
          <div className="form-group">
            <FormLabel className="form-label" htmlFor="password">
              Password:
            </FormLabel>
            <Input
              type="password"
              placeholder="password"
              {...register("password", {required:true,min:8})}
            />
          </div>
          <Button variant="contained"type="submit">signin</Button>
          <Button variant="contained">
            <Link to="/register">
            signup
          </Link>
          </Button> 
          {errorMessage && <p className="error-message">{errorMessage}</p>}{" "}
          {/* Display error message */}
        </form>
      </div>
    </>
  );
};
export default Login;