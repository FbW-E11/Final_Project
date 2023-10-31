import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import "../Login/style.css";
import { useNavigate, Link } from "react-router-dom";
import {
  Button,
  Input,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

// Rest of your component code



  const [passwordError, setPasswordError] = useState("");



    /*if (user) {
      setUser(user);*/

    navigate("/exercise/muscle");
  };
  return (
    <>
      <div>
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
          <div className="signButton">
            {
              <Button variant="contained" type="submit" style={{ marginRight: '100px'}}
              >
                SignIn
              </Button>
            }
            {
              <Button variant="contained">
                <Link
                  to="/register"
                  style={{  textDecoration: "none", color: "white" }}
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