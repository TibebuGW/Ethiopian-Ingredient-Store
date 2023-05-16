import {Link} from 'react-router-dom'
export const Signup = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <form className="py-3 w-30p px-10 overflow-y-auto rounded-2xl shadow-md box-border bg-[#d6dce9]">
        <div className="grid grid-cols-2 gap-2 my-2">
          <div className="my-2">
            <label className="block my-2">First Name</label>
            <input
              className="box-border shadow py-2 px-5 rounded-md w-100p placeholder:font-medium"
              placeholder="First name"
              type="text"
            />
          </div>
          <div className="my-2">
            <label className="block my-2">Second Name</label>
            <input
              className="box-border shadow py-2 px-5 rounded-md w-100p placeholder:font-medium"
              placeholder="Second name"
              type="text"
            />
          </div>
        </div>
        <div className="my-2">
          <label className="block my-2">Email</label>
          <input
            className="box-border shadow py-2 px-5 rounded-md w-100p placeholder:font-medium"
            placeholder="Email"
            type="email"
          />
        </div>
        <div className="my-2">
          <label className="block my-2">Password</label>
          <input
            className="box-border shadow py-2 px-5 rounded-md w-100p placeholder:font-medium"
            placeholder="Password"
            type="password"
          />
        </div>
        <div className="my-2">
          <label className="block my-2">Confirm Password</label>
          <input
            className="box-border shadow py-2 px-5 rounded-md w-100p placeholder:font-medium"
            placeholder="Confirm password"
            type="password"
          />
        </div>
        <button className="py-2 px-5 my-3 text-secondary rounded-md w-100p bg-lightPrimary hover:bg-darkPrimary">
          Sign up
        </button>
        <p className="my-3 text-center">
          Already have an account? <Link to="/login"> <span className="text-blue">Login</span></Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
