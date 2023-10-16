import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button, TextField, IconButton, InputAdornment } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const Register = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState(null);
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  const SignUpUser = async (data) => {
    try {
      const response = await axios.post(`http://localhost:5001/register`, data);
      console.log("response from register is", response);

      if (response.data) {
        return response.data;
      } else {
        throw new Error("Response does not contain data property.");
      }
    } catch (error) {
      console.log(error.message);
      throw error;
    }
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const res = await SignUpUser(data);
      console.log("res", res);
      reset();
      if (res.success) {
        navigate("/home");
      }
    } catch (error) {
      console.log("Error:", error.message);
    }
  };

  return (
    <div className="join">
      <div className="registration-container">
        <h2 className="registration-title">Register if you are not a member</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <TextField
              id="filled-basic"
              variant="filled"
              placeholder="Full Name"
              {...register("fullName", { required: true })}
            />
          </div>
          <div className="form-group">
            <TextField
              id="filled-basic"
              variant="filled"
              placeholder="Age"
              {...register("age", { required: true })}
            />
          </div>
          <div className="form-group">
            <TextField
              id="filled-basic"
              variant="filled"
              placeholder="Gender"
              {...register("gender", { required: true })}
            />
          </div>
          <div className="form-group">
            <TextField
              id="filled-basic"
              variant="filled"
              placeholder="Phone"
              {...register("phone", { required: true })}
            />
          </div>
          <div className="form-group">
            <TextField
              id="filled-basic"
              variant="filled"
              placeholder="City"
              {...register("city", { required: true })}
            />
          </div>
          <div className="form-group">
            <TextField
              id="filled-basic"
              variant="filled"
              placeholder="Address"
              {...register("address", { required: true })}
            />
          </div>
          <div className="form-group">
            <TextField
              id="filled-basic"
              variant="filled"
              placeholder="Email"
              {...register("email", { required: true })}
            />
          </div>
          <div className="form-group">
            <TextField
              id="filled-basic"
              variant="filled"
              placeholder="Password"
              {...register("password", { required: true, min: 8 })}
              type={showPassword ? "text" : "password"} // Toggle password visibility
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <VisibilityIcon />
                      ) : (
                        <VisibilityOffIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <Button variant="contained" type="submit">
            SignUp
          </Button>
        </form>
        <h2>{message && message}</h2>
      </div>
    </div>
  );
};

export default Register;
