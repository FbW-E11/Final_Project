# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

##latest for today

###
login CSS

.registration-container {
   
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid black;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #e0a8a8;
  box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);  }

.registration-title {
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
  color:pink;
  text-shadow: rgba(81, 52, 21, 0.8) 3px 0px 7px, rgba(81, 52, 21, 0.8) -3px 0px 7px, rgba(81, 52, 21, 0.8) 0px 4px 7px;
  
}

form * {
  color: #fff;
  letter-spacing: 0.5px;
  outline: none;
  border: none;
}


  form {
  height: 300px;
  width: 400px;

  background-color: rgba(260, 259, 259, 0.075); 
  position: absolute;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
  padding: 50px 35px;
}  

form h3 {
  font-size: 2rem;
  font-weight: 500;
  line-height: 42px;
  text-align: center;
}




.formGroup {
  height: 400px;

  margin-bottom: 25px;
  width: 400px;
  
}

.formGroup {
  margin-bottom: 15px;
  
}

.formedLabel {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

.commonInput {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
} 

  .submit-button {
  display: block;
  width: 50%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
}  

 .submit-button:hover {
  background-color: #0056b3;
} 











label {
  display: block;
  margin-top: 2rem;
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 5px;
}

input[type="email"],
input[type="password"] {
  width: 50%;
  height: 50px;
  
  margin-top: 0.5rem;
  padding: 0 10px;



  /* border: 1px solid #ccc; */
  border-radius: 5px;
  font-size: 18px;
  color:black; /* rgb(15, 1, 1) */
  display: block;
 /*  background-color: rgba(255, 255, 255, 0.07); */
  font-weight: 300;
}

button {
margin-top: 1rem; 
width: 20%;
background-color: #fff;
color: #080710;
padding: 15px 0;
font-size: 1.1rem; 
font-weight: 600;
border-radius: 5px;
cursor: pointer;
transition: all 0.3s ease;
align-items: center;}
button:hover {
background-color: #CECECE;
}

.signButton  {
text-align: center;
justify-content: center;
gap:50px
}



/* Add animation to navigation links when clicked */
.navbar a {
text-decoration: none;
color: #fff;
margin: 0 15px;
font-weight: bold;
position: relative; /* Add relative positioning for pseudo-element */
transition: color 0.3s ease, transform 0.3s ease; /* Add transitions for color and transform */
}

.navbar a::before {
content: "";
position: absolute;
bottom: -3px; /* Adjust the position of the animated line */
left: 0;
width: 100%;
height: 2px; /* Adjust the line height */
background-color: #f1e6e6;
transform: scaleX(0); /* Initial transform value for the line */
transform-origin: right;
transition: transform 0.3s ease; /* Add transition for the line */
}

.navbar a:hover {
color: #4d2be2;
}

.navbar a:hover::before {
transform: scaleX(1); /* Expand the line when the link is hovered */
transform-origin: left;
}

####
Register CSS
.registration-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid black;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-color: #E0A8A8;
    box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  }
  .registration-title {
    text-align: center;
    font-size: 24px;
    margin-bottom: 20px;
    color: pink;
    text-shadow: rgba(81, 52, 21, 0.8) 3px 0px 7px,
      rgba(81, 52, 21, 0.8) -3px 0px 7px, rgba(81, 52, 21, 0.8) 0px 4px 7px;
  }
  .centered-text {
    text-align: center;
    color: rgb(134, 222, 231);
    margin-top: 2rem;
    font-size: 1rem; /* Adjust font size */
    font-weight: bold; /* Make the text bold */
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Add a shadow effect */
  }
  /* Add animation to the form when hovered */
  .wave-effect-form {
    transition: transform 0.3s ease;
    transform-origin: center bottom;
  }
  /* Create a pseudo-element for the wave effect */
  .wave-effect-form::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.5),
      transparent
    );
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
  }
  /* Apply the wave effect on hover */
  .wave-effect-form:hover::before {
    opacity: 0.3;
    animation: wave 1s infinite linear;
  }
  /* Define the wave animation */
  @keyframes wave {
    0% {
      transform: scaleY(0.8);
    }
    100% {
      transform: scaleY(1);
    }
  }
  .password-strength-container {
    text-align: center;
  }
  .password-strength {
    display: inline-block;
  }
  form {
    width: 100%;
    max-width: 400px; /* Limit form width to 400px */
    margin: 0 auto; /* Center the form horizontally */
    padding: 50px 35px;
    background-color: rgba(100, 200, 200, 0.2);
    border-radius: 10px;
    backdrop-filter: blur(2px);
    border: 2px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
  }
  form {
    width: 100%;
    max-width: 400px; /* Limit form width to 400px */
    margin: 0 auto; /* Center the form horizontally */
    padding: 50px 35px;
    background-color: rgba(100, 200, 200, 0.2);
    border-radius: 10px;
    backdrop-filter: blur(2px);
    border: 2px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
  }
  form input[type="text"] {
    color: white;
  }
  form * {
    color: #fff;
    letter-spacing: 0.5px;
    outline: none;
    border: none;
  }
  form h3 {
    font-size: 2rem;
    font-weight: 500;
    line-height: 42px;
    text-align: center;
  }
  .form-group {
    margin-bottom: 15px;
  }
  label {
    display: block;
    margin-top: 2rem;
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 5px;
  }
  input[type="email"],
  input[type="password"] {
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    color: w;
    display: block;
    height: 50px;
    background-color: rgba(255, 255, 255, 0.07);
    padding: 0 10px;
    margin-top: 0.5rem;
    font-weight: 300;
  }
  /* Default styles for the button */
  /* Your custom CSS styles here */
  .signup-button {
    background-color: white;
    color: black;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    margin-top: 3rem;
    display: block;
    margin: 0 auto;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    transition: background-color 0.3s, color 0.3s;
    position: relative;
  }
  /* Wave animation on hover */
  .signup-button:hover {
    background-color: black;
    color: white;
    animation: wave 0.5s ease infinite; /* Apply the "wave" animation on hover */
  }
  @keyframes wave {
    0% {
      transform: scale(1); /* Initial scale (no change) */
    }
    50% {
      transform: scale(1.05); /* Scale up to 105% at 50% of the animation */
    }
    100% {
      transform: scale(
        1
      ); /* Return to the original scale at the end of the animation */
    }
  }
  /* Add animation to navigation links when clicked */
  .navbar a {
    text-decoration: none;
    color: #fff;
    margin: 0 15px;
    font-weight: bold;
    position: relative; /* Add relative positioning for pseudo-element */
    transition: color 0.3s ease, transform 0.3s ease; /* Add transitions for color and transform */
  }
  .navbar a::before {
    content: "";
    position: absolute;
    bottom: -3px; /* Adjust the position of the animated line */
    left: 0;
    width: 100%;
    height: 2px; /* Adjust the line height */
    background-color: #F1E6E6;
    transform: scaleX(0); /* Initial transform value for the line */
    transform-origin: right;
    transition: transform 0.3s ease; /* Add transition for the line */
  }
  .navbar a:hover {
    color: #4D2BE2;
  }
  .navbar a:hover::before {
    transform: scaleX(1); /* Expand the line when the link is hovered */
    transform-origin: left;
  }
  @media screen and (max-width: 768px) {
    /* Adjust styles for screens with a maximum width of 768px */
    .registration-container {
      max-width: 100%;
      padding: 10px;
    }
    .centered-text {
      font-size: 0.8rem;
    }
  }

Register ### index.js

import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button, TextField, IconButton, InputAdornment } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import zxcvbn from "zxcvbn";
import "../Register/style.css";
const Register = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [passwordColor, setPasswordColor] = useState("red");
  const SignUpUser = async (data) => {
    try {
      const response = await axios.post("http://localhost:3000/register", data);
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
        <div className="password-strength-container">
          <div className="password-strength" style={{ color: passwordColor }}>
            Password Strength: {passwordStrength === 0 && "Weak"}
            {passwordStrength === 1 && "Moderate"}
            {passwordStrength === 2 && "Fair"}
            {passwordStrength === 3 && "Good"}
            {passwordStrength === 4 && "Strong"}
          </div>
        </div>
        <Button
          variant="contained"
          type="submit"
          className="signup-button" // Apply the "signup-button" class
        >
          Sign Up
        </Button>
      </form>
      <h4>{message && message}</h4>
    </div>
  );
};
export default Register;