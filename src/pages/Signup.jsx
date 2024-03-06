import { useState } from "react";

import { useNavigate, Link } from "react-router-dom";
import { useGlobalContext } from "../contextApi/context";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { createUser } = useGlobalContext();
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createUser(email, password);
      navigate("/login");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };
  return (
    <div className="bg-[#F0F3F6] h-screen ">
      <form onSubmit={handleSubmit} className="max-w-sm mx-auto px-4 pt-40">
        <h1 className="text-center text-[25px] font-bold mb-5 pb-2">
          Hush Restaurant
        </h1>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Email"
            required
          />
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Password
          </label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>

        <div className="flex  items-center gap-5">
          <button
            type="submit"
            className="text-white bg-red-600  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Sign up
          </button>

          <p className="text-black  hover:underline">
            <Link to="/login">Login </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Signup;
