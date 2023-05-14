import { Link } from "react-router-dom";
export const Login = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <form className="py-3 w-30p h-[400px] px-10 overflow-y-auto rounded-2xl shadow-md box-border bg-[#d6dce9]">
        <div className="my-5">
          <label className="block my-2">Email</label>
          <input
            className="box-border shadow py-2 px-5 rounded-md w-100p placeholder:font-medium"
            placeholder="Email"
            type="email"
          />
        </div>
        <div className="my-5">
          <label className="block my-2">Password</label>
          <input
            className="box-border shadow py-2 px-5 rounded-md w-100p placeholder:font-medium"
            placeholder="Password"
            type="Password"
          />
        </div>
        <p className="mt-3 text-blue">Forgot Password?</p>
          <button className="py-2 px-5 my-3 text-secondary rounded-md w-100p bg-lightPrimary hover:bg-darkPrimary">
            Login
          </button>
        <p className="mt-3 text-center">
          Don&apos;t have an account? <Link to="/signup"><span className="text-blue">Sign Up</span> </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
