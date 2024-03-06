import React from "react";
import restaurant from "../assets/Images/reservation.png/";
import Contact from "./../pages/Contact";
const Reservation = () => {
  return (
    <section className="px-5 py-5 md:px-20  md:py-[5rem]">
      <h1 className="text-center text-[30px] pb-5 mb-2">Make a reservation</h1>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 items-center">
        <div className=" ">
          <img src={restaurant} alt="reservation" height={500} />
        </div>
        <div className=" rounded-lg  shadow-lg py-5">
          <div className="flex mb-5 gap-2 justify-center">
            <input
              type="date"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[40%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-[40%] block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              placeholder="9:00pm"
            />
          </div>
          <div className="flex mb-5 gap-2 justify-center">
            <div className="w-[40%]">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Adult(s)
              </label>
              <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option>Choose adult</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <div className="w-[40%]">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Kids(s)
              </label>
              <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg foc1:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option>Choose kids</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="5">6</option>
              </select>
            </div>
          </div>
          <div className="mb-5 text-center">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Special Request (optional)
            </label>
            <div className="flex justify-center">
              <textarea
                rows="4"
                className="block p-2.5 w-[82%]  text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Write your thoughts here..."
              ></textarea>
            </div>
          </div>
          <div className="flex mb-5 gap-2 justify-center">
            <div className="w-[40%]">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Name
              </label>

              <input
                type="text"
                placeholder="Name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div className="w-[40%]">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Contact Number
              </label>
              <input
                type="phone"
                placeholder="phone number"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
