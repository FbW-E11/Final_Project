import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button, TextField, IconButton, InputAdornment } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import zxcvbn from "zxcvbn";
import "./style.css";
const Register = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState("");
  const [passwordColor, setPasswordColor] = useState("red");
  const SignUpUser = async (data) => {
    try {
      const response = await axios.post("http://localhost:5003/register", data);
      if (response.data) {
        return response.data;
      } else {
        throw new Error("Response does not contain a data property.");
      }
    } catch (error) {
      throw error;
    }
  };
  const { control, handleSubmit, reset } = useForm();
  const handlePasswordChange = (event) => {
    const password = event.target.value;
    const result = zxcvbn(password);
    setPasswordStrength(result.score);
    setStrengthColor(result.score);
  };
  const setStrengthColor = (score) => {
    const colors = ["red", "orange", "yellow", "green", "green"];
    setPasswordColor(colors[score]);
  };
  const onSubmit = async (data) => {
    if (data.password !== confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }
    try {
      const res = await SignUpUser(data);
      reset();
      if (res.success) {
        navigate("/home");
      }
    } catch (error) {
      console.log("Error:", error.message);
    }
  };
  return (
    <div className="centered-text">
      <form onSubmit={handleSubmit(onSubmit)} className="wave-effect-form">
      <h2>REGISTER IF YOU ARE NOT A MEMBER</h2>
        <div>
          <Controller
            name="fullName"
            control={control}
            render={({ field }) => (
              <TextField variant="filled" placeholder="Full Name" {...field} />
            )}
          />
        </div>
        <div>
          <Controller
            name="age"
            control={control}
            render={({ field }) => (
              <TextField variant="filled" placeholder="Age" {...field} />
            )}
          />
        </div>
        <div>
          <Controller
            name="gender"
            control={control}
            render={({ field }) => (
              <TextField variant="filled" placeholder="Gender" {...field} />
            )}
          />
        </div>
        <div>
          <Controller
            name="phone"
            control={control}
            render={({ field }) => (
              <TextField variant="filled" placeholder="Phone" {...field} />
            )}
          />
        </div>
        <div>
          <Controller
            name="city"
            control={control}
            render={({ field }) => (
              <TextField variant="filled" placeholder="City" {...field} />
            )}
          />
        </div>
        <div>
          <Controller
            name="address"
            control={control}
            render={({ field }) => (
              <TextField variant="filled" placeholder="Address" {...field} />
            )}
          />
        </div>
        <div>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <TextField variant="filled" placeholder="Email" {...field} />
            )}
          />
        </div>
        <div>
          <Controller
            name="password"
            control={control}
            rules={{
              required: "*Password is required",
              validate: {
                minLength: (value) =>
                  value.length >= 8 || "At least 8 characters long",
                containsSpecialCharacter: (value) =>
                  /[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]/.test(value) ||
                  "At least one special character",
              },
            }}
            render={({ field, fieldState }) => (
              <div>
                <TextField
                  variant="filled"
                  placeholder="Password"
                  type={showPassword ? "text" : "password"}
                  {...field}
                  error={Boolean(fieldState.error)}
                  helperText={fieldState.error?.message}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                        style={{width:"5px"}}
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
                  onChange={(e) => {
                    field.onChange(e);
                    handlePasswordChange(e);
                  }}
                />
              </div>
            )}
          />
        </div>
        <div>
          <TextField
            variant="filled"
            placeholder="Confirm Password"
            type={showConfirmPassword ? "text" : "password"}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    style={{width:"5px"}}
                    aria-label="toggle password visibility"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
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
        <div>
        <Button style={{ width:"150px", marginTop: "18px" }}
          variant="contained"
          type="submit"
          className="signup-button" // Apply the "signup-button" class
        >
          Sign Up
        </Button>
        </div>
        <div className="password-strength-container">
          <div className="password-strength" style={{ color: passwordColor }}>
            Password Strength: {passwordStrength === 0 && "Weak"}
            {passwordStrength === 1 && "Moderate"}
            {passwordStrength === 2 && "Fair"}
            {passwordStrength === 3 && "Good"}
            {passwordStrength === 4 && "Strong"}
          </div>
        </div>
      </form>
      <h4>{message && message}</h4>
    </div>
  );
};
export default Register;