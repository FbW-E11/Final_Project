import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import {Button,TextField} from '@mui/material';

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
            <TextField id="filled-basic"  variant="filled"placeholder="full Name"{...register("fullName",{required:true})} />
          </div>
          <div className="form-group">
            <TextField id="filled-basic"  variant="filled"placeholder="age"{...register("age",{required:true})} />
          </div>
          <div className="form-group">
            <TextField id="filled-basic"  variant="filled"placeholder="gender"{...register("gender",{required:true})} />
          </div>
          <div className="form-group">
            <TextField id="filled-basic"  variant="filled"placeholder="phone"{...register("phone",{required:true})} />
          </div>
          <div className="form-group">
            <TextField id="filled-basic"  variant="filled"placeholder="city"{...register("city",{required:true})} />
          </div>
          <div className="form-group">
            <TextField id="filled-basic"  variant="filled"placeholder="address"{...register("address",{required:true})} />
          </div>
          <div className="form-group">
            <TextField id="filled-basic"  variant="filled"placeholder="email"{...register("email",{required:true})} />
          </div>
          <div className="form-group">
            <TextField id="filled-basic"  variant="filled"placeholder="password"{...register("password",{required:true,min:8})} />
          </div>
          <Button variant="contained" type="submit">signup</Button>
        </form>
        <h2>{message && message}</h2>
      </div>
    </div>
  );
};
export default Register;
