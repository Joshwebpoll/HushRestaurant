import { FaShoppingCart } from "react-icons/fa";

import { Link, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../contextApi/context";
import { useState } from "react";
import toast from "react-hot-toast";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const { user, logout, cart } = useGlobalContext();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
      console.log("You are logged out");
    } catch (e) {
      console.log(e.message);
    }
  };
  // return (
  //   <nav className="px-20 ">
  //     <header className="flex  justify-between items-center mt-5 mb-4 py-2">
  //       <h1 className="text-black text-[30px] font-semibold">Josh Man</h1>
  //       <ul className=" flex gap-6">
  //         <li>
  //           <a href="" className="text-black hover:text-red-700">
  //             Home
  //           </a>
  //         </li>

  //         <li>
  //           <a href="" className="text-black hover:text-red-700">
  //             About
  //           </a>
  //         </li>

  //         <li>
  //           <a href="" className="text-black hover:text-red-700">
  //             Shop
  //           </a>
  //         </li>

  //         <li>
  //           <a href="" className="text-black hover:text-red-700">
  //             Contact
  //           </a>
  //         </li>
  <li>
    <a href="" className="text-white bg-red-600 p-2 rounded-md">
      Buy Now
    </a>
  </li>;
  //       </ul>
  //       <div className=" flex items-center gap-6">

  // <div style={{ position: "relative" }}>
  //   <Link to="/cart">
  //     <FaShoppingCart color="black" size={23} />
  //     <span
  //       className="bg-red-600 w-5 h-6 text-center rounded-full text-white"
  //       style={{ position: "absolute", top: -20, right: -10 }}
  //     >
  //       {cart.length}
  //     </span>
  //   </Link>
  // </div>;
  //         {user && (
  // <button
  //   onClick={handleLogout}
  //   type="submit"
  //   href=""
  //   className="text-white bg-red-600 p-2 rounded-md"
  // >
  //   Logout
  // </button>
  //         )}
  //       </div>
  //     </header>
  //   </nav>
  // );

  return (
    <nav className="w-full bg-white shadow">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-10 py-3">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <a href="/">
              <h2 className="text-[30px] font-bold">Hush Restaurant</h2>
            </a>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="text-black font-medium hover:text-red-600">
                <Link to="/">Home</Link>
              </li>
              <li className="text-black font-medium hover:text-red-600">
                <Link to="/shop">Shop</Link>
              </li>
              <li>
                <Link
                  to="/shop"
                  className="text-white bg-red-600 p-2 rounded-md"
                >
                  Buy Now
                </Link>
              </li>
              <div>
                <input
                  type="text"
                  className="p-2 bg-slate-100 outline-none rounded-full px-4 hidden  md:block"
                  placeholder="Search here"
                />
              </div>
              <div style={{ position: "relative" }}>
                <Link to="/cart">
                  <FaShoppingCart color="black" size={23} />
                  <span className="bg-red-600 w-5 h-6 text-center rounded-full text-white cart">
                    {cart.length}
                  </span>
                </Link>
              </div>
              {user && (
                <button
                  onClick={handleLogout}
                  type="submit"
                  href=""
                  className="text-white bg-red-600 p-2 rounded-md"
                >
                  Logout
                </button>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
