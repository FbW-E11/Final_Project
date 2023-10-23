import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form"; // Import Controller
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button, TextField, IconButton, InputAdornment } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const Register = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");

  const SignUpUser = async (data) => {
    try {
      const response = await axios.post(`http://localhost:5001/register`, data);
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

  const { control, handleSubmit, reset } = useForm(); // Use control instead of register

  const onSubmit = async (data) => {
    console.log(data);

    // Check if the password and confirm password match
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
            <Controller // Use Controller instead of register
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
            <Controller // Use Controller instead of register
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
            <Controller // Use Controller instead of register
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
            <Controller // Use Controller instead of register
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
            <Controller // Use Controller instead of register
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
            <Controller // Use Controller instead of register
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
            <Controller // Use Controller instead of register
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
          <Controller // Use Controller instead of register
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
                />
              </div>
            )}
          />

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
              backgroundColor: "pink",
              color: "black",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
            }}
          >
            SignUp
          </Button>
        </form>
        <h2>{message && message}</h2>
      </div>
    </div>
  );
};

export default Register;
