import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import {Button,FormLabel,Input,TextField} from '@mui/material';

 const Register = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState(null);
  const SignUpUser = async (data) => {
    try {
      const response = await axios.post(`http://localhost:5001/register`, data);
      console.log('response from register is', response)
      return response
    } catch (error) {
      console.log(error.message);
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
    const res = await SignUpUser(data);
    console.log("res", res);
    reset();
    if (res.data.success) {
          navigate("/")
    }
  };
  return (
    <div className="join">
      <div className="registration-container">
        <h2 className="registration-title"> Register if you are not a member</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <TextField id="filled-basic"  variant="filled"placeholder="Full Name"{...register("fullName",{required:true})} />
          </div>
          <div className="form-group">
            <TextField id="filled-basic"  variant="filled"placeholder="Age"{...register("Age",{required:true})} />
          </div>
          <div className="form-group">
            <TextField id="filled-basic"  variant="filled"placeholder="Gender"{...register("Gender",{required:true})} />
          </div>
          <div className="form-group">
            <TextField id="filled-basic"  variant="filled"placeholder="Phone"{...register("Phone",{required:true})} />
          </div>
          <div className="form-group">
            <TextField id="filled-basic"  variant="filled"placeholder="City"{...register("City",{required:true})} />
          </div>
          <div className="form-group">
            <TextField id="filled-basic"  variant="filled"placeholder="Address"{...register("Address",{required:true})} />
          </div>
          <div className="form-group">
            <TextField id="filled-basic"  variant="filled"placeholder="Email"{...register("Email",{required:true})} />
          </div>
          <div className="form-group">
            <TextField id="filled-basic"  variant="filled"placeholder="Password"{...register("Password",{required:true,min:8})} />
          </div>
          <Button variant="contained" type="submit">SignUp</Button>
        </form>
        <h2>{message && message}</h2>
      </div>
    </div>
  );
};
export default Register;