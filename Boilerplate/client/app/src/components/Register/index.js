import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form"; // Import Controller
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button, TextField, IconButton, InputAdornment } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import zxcvbn from "zxcvbn"; // Import zxcvbn

const Register = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState(0); // Password strength score
  const [passwordColor, setPasswordColor] = useState("red");

  const SignUpUser = async (data) => {
    try {
      const response = await axios.post("http://localhost:5006/register", data);
      console.log("response from register is", response);

      if (response.data) {
        return response.data;
      } else {
        throw new Error("Response does not contain a data property.");
      }
    } catch (error) {
      console.log(error.message);
      throw error;
    }
  };

  const { control, handleSubmit, reset } = useForm();

  const handlePasswordChange = (event) => {
    const password = event.target.value;
    const result = zxcvbn(password);
    setPasswordStrength(result.score);
    setStrengthColor(result.score); // Set the password strength color
  };

  const setStrengthColor = (score) => {
    const colors = ["red", "orange", "yellow", "green", "green"];
    setPasswordColor(colors[score]);
  };

  const onSubmit = async (data) => {
    console.log(data);

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
    <div className="join">
      <div className="registration-container">
        <h2 className="registration-title" style={{ textAlign: "center" }}>
          Register if you are not a member
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div className="form-group">
            <Controller
              name="fullName"
              control={control}
              render={({ field }) => (
                <TextField
                  id="filled-basic"
                  variant="filled"
                  placeholder="Full Name"
                  {...field}
                />
              )}
            />
          </div>
          <div className="form-group">
            <Controller
              name="age"
              control={control}
              render={({ field }) => (
                <TextField
                  id="filled-basic"
                  variant="filled"
                  placeholder="Age"
                  {...field}
                />
              )}
            />
          </div>
          <div className="form-group">
            <Controller
              name="gender"
              control={control}
              render={({ field }) => (
                <TextField
                  id="filled-basic"
                  variant="filled"
                  placeholder="Gender"
                  {...field}
                />
              )}
            />
          </div>
          <div className="form-group">
            <Controller
              name="phone"
              control={control}
              render={({ field }) => (
                <TextField
                  id="filled-basic"
                  variant="filled"
                  placeholder="Phone"
                  {...field}
                />
              )}
            />
          </div>
          <div className="form-group">
            <Controller
              name="city"
              control={control}
              render={({ field }) => (
                <TextField
                  id="filled-basic"
                  variant="filled"
                  placeholder="City"
                  {...field}
                />
              )}
            />
          </div>
          <div className="form-group">
            <Controller
              name="address"
              control={control}
              render={({ field }) => (
                <TextField
                  id="filled-basic"
                  variant="filled"
                  placeholder="Address"
                  {...field}
                />
              )}
            />
          </div>
          <div className="form-group">
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <TextField
                  id="filled-basic"
                  variant="filled"
                  placeholder="Email"
                  {...field}
                />
              )}
            />
          </div>
          <div className="form-group">
            <Controller
              name="password"
              control={control}
              rules={{
                required: "*Password is required",
                validate: {
                  minLength: (value) =>
                    value.length >= 8 ||
                    "Password must be at least 8 characters long",
                  containsSpecialCharacter: (value) =>
                    /[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]/.test(value) ||
                    "Password must contain at least one special character",
                },
              }}
              render={({ field, fieldState }) => (
                <div className="form-group">
                  <TextField
                    id="filled-basic"
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

          <div className="form-group">
            <TextField
              id="filled-basic"
              variant="filled"
              placeholder="Confirm Password"
              type={showConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
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

          <Button
            variant="contained"
            type="submit"
            style={{
              backgroundColor: "#0056b3",
              color: "black",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
            }}
          >
            Sign Up
          </Button>
        </form>
        <h2>{message && message}</h2>
        <div style={{ color: passwordColor }}>
          Password Strength: {passwordStrength} (Weak to Strong)
        </div>
      </div>
    </div>
  );
};

export default Register;