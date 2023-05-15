import Navbar from "../Navbar/Navbar";

const CreateAccount = () => {
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center">
        <p className="text-4xl mt-10 font-bold">Create Admin Account</p>
      </div>
      <div className="flex justify-center">
        <form className="py-3 w-50p px-10 mt-10 overflow-y-auto rounded-2xl shadow-xl box-border">
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
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;
