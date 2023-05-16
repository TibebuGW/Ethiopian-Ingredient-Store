import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../contexts/auth-context";
const LOGIN_URL = "auth/signin"


export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {setAuth} = useContext(AuthContext)

  const handleClick = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(`${import.meta.env.VITE_REACT_APP_BASE_URL}${LOGIN_URL}`,
        JSON.stringify({email, password}),
        {
          headers: {'Content-Type': 'application/json'},
          withCredentials: true
        }
      )
      
      if (response.data.status === 200){
        const accessToken = response?.data?.accessToken
        const roles = response?.data?.roles
        setAuth({email, password, roles, accessToken})
        console.log("SUCESSFULLY LOGGED IN")
        this.props.history.push('/')
      }

    } catch (error) {
      console.log("auth error: ", error)
    }
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <form className="py-3 w-30p h-[400px] px-10 overflow-y-auto rounded-2xl shadow-md box-border bg-[#d6dce9]" onSubmit={handleClick}>
        <div className="my-5">
          <label className="block my-2">Email</label>
          <input
            className="box-border shadow py-2 px-5 rounded-md w-100p placeholder:font-medium"
            placeholder="Email"
            type="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="my-5">
          <label className="block my-2">Password</label>
          <input
            className="box-border shadow py-2 px-5 rounded-md w-100p placeholder:font-medium"
            placeholder="Password"
            type="Password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <p className="mt-3 text-blue">Forgot Password?</p>
        <button className="py-2 px-5 my-3 text-secondary rounded-md w-100p bg-lightPrimary hover:bg-darkPrimary">
          Login
        </button>
        <p className="mt-3 text-center">
          Don&apos;t have an account?{" "}
          <Link to="/signup">
            <span className="text-blue">Sign Up</span>{" "}
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
