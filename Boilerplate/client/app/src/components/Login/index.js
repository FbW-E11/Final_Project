import axios from 'axios';
import { useForm } from 'react-hook-form';

const Login = ({user, setUser}) => {
console.log(user)

    const loginUser = async (data) => {
        try {
            const response = await axios.post(`/login`,  data ,  { withCredentials: true } )
          return response;
        } catch (error) {
          return error;
        }
      };
      
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) =>{
       console.log(data);
      const res = await loginUser(data)
       
       if (res.data) {
        setUser(res.data)
       }
      }
  return (
    <>
    <div className="registration-container">
      <h2 className="registration-title">Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label className="form-label" htmlFor="username">
            Email: 
          </label>
          <input type="email" placeholder="email" {...register("email", {})} />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="password">
            Password:
          </label>
          <input
            type="password"
            placeholder="password"
            {...register("password", {})}
          />
        </div>
        <button className="submit-button" type="submit">
          Login
        </button>
      </form>
    </div>
    </>
  );
};
export default Login;























