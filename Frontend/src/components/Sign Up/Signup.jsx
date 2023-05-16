import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const REGISTER_URL = "auth/signup";

export const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleSecondNameChange = (e) => {
    setSecondName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      // eslint-disable-next-line no-unused-vars
      const response = await axios.post(
        `${import.meta.env.VITE_REACT_APP_BASE_URL}${REGISTER_URL}`,
        JSON.stringify({ email, password }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      // eslint-disable-next-line no-constant-condition
      if (200){
        this.props.history.push('/login')
      }
    } catch (error) {
      console.log("auth error: ", error);
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <form
        className="py-3 w-30p px-10 overflow-y-auto rounded-2xl shadow-md box-border bg-[#d6dce9]"
        onSubmit={handleClick}
      >
        <div className="grid grid-cols-2 gap-2 my-2">
          <div className="my-2">
            <label className="block my-2">First Name</label>
            <input
              className="box-border shadow py-2 px-5 rounded-md w-100p placeholder:font-medium"
              placeholder="First name"
              type="text"
              value={firstName}
              onChange={handleFirstNameChange}
            />
          </div>
          <div className="my-2">
            <label className="block my-2">Second Name</label>
            <input
              className="box-border shadow py-2 px-5 rounded-md w-100p placeholder:font-medium"
              placeholder="Second name"
              type="text"
              value={secondName}
              onChange={handleSecondNameChange}
            />
          </div>
        </div>
        <div className="my-2">
          <label className="block my-2">Email</label>
          <input
            className="box-border shadow py-2 px-5 rounded-md w-100p placeholder:font-medium"
            placeholder="Email"
            type="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="my-2">
          <label className="block my-2">Password</label>
          <input
            className="box-border shadow py-2 px-5 rounded-md w-100p placeholder:font-medium"
            placeholder="Password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className="my-2">
          <label className="block my-2">Confirm Password</label>
          <input
            className="box-border shadow py-2 px-5 rounded-md w-100p placeholder:font-medium"
            placeholder="Confirm password"
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
        </div>
        <button className="py-2 px-5 my-3 text-secondary rounded-md w-100p bg-lightPrimary hover:bg-darkPrimary">
          Sign up
        </button>
        <p className="my-3 text-center">
          Already have an account?{" "}
          <Link to="/login">
            {" "}
            <span className="text-blue">Login</span>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
