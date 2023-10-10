import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const Register = () => {
  const [message, setMessage] = useState(null);
  const SignUpUser = async (data) => {
    try {
      const response = await axios.post(`http://localhost:5001/register`, data);
      console.log("response from register is", response);
      return response;
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
    if (res.data.username) {
      setMessage("You successfully signed up");
    }
  };
  return (
    <div className="join">
      <div className="registration-container">
        <h2 className="registration-title">Register</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label className="form-label" htmlFor="fullName">
              FullName:
            </label>
            <input
              type="text"
              placeholder="fullName"
              {...register("fullName")}
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="age">
              Age:
            </label>
            <input type="age" placeholder="age" {...register("age")} />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="gender">
              Gender:
            </label>
            <input type="gender" placeholder="gender" {...register("gender")} />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="phone">
              Phone:
            </label>
            <input type="phone" placeholder="phone" {...register("phone")} />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="city">
              City:
            </label>
            <input type="city" placeholder="city" {...register("city")} />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="address">
              Address:
            </label>
            <input
              type="address"
              placeholder="address"
              {...register("address")}
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="email">
              Email:
            </label>
            <input type="email" placeholder="email" {...register("email")} />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="password">
              Password:
            </label>
            <input
              type="password"
              placeholder="password"
              {...register("password")}
            />
          </div>

          <button className="submit-button" type="submit">
            Register
          </button>
        </form>
        <h2>{message && message}</h2>
      </div>
    </div>
  );
};
export default Register;
