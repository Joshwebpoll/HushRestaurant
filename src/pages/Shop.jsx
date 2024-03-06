import React, { useEffect, useState } from "react";
import { db } from "../config/firebaseConfig";
import {
  collection,
  getDocs,
  limit,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { useGlobalContext } from "../contextApi/context";
import Navbar from "../components/Navbar";
import Fotter from "./../components/Fotter";
import { Link } from "react-router-dom";

const itemsPerPage = 6;
const Shop = () => {
  const [list, setList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");

  const { handleAddtoCart, allCategories } = useGlobalContext();

  // console.log(list);
  useEffect(() => {
    const fetchdata = () => {
      const q = query(collection(db, "foodapp"));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        let todosArr = [];
        querySnapshot.forEach((doc) => {
          todosArr.push({ ...doc.data(), id: doc.id });
        });
        setLoading(false);
        setList(todosArr);
      });
      return () => unsubscribe();
    };
    fetchdata();
  }, [currentPage]);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // console.log(startIndex);
  const currentItems = list.slice(startIndex, endIndex).filter((item) => {
    if (filter === "all") {
      return item;
    }
    return item.category === filter;
  });

  const totalPages = Math.ceil(list.length / itemsPerPage);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  if (loading) {
    return (
      <div className="flex  h-screen justify-center items-center">
        <h1 className=" text-[20px]">Loading</h1>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="px-10 py-5 mt-2 ">
        <div className="max-w-sm mb-4">
          <select
            onChange={(e) => setFilter(e.target.value)}
            value={filter}
            className="bg-gray-50 border capitalize border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            {allCategories.map((cat) => {
              return (
                <option key={cat.id} value={cat}>
                  {cat}
                </option>
              );
            })}
          </select>
        </div>
        {currentItems.length == 0 ? (
          <h1 className="text-center my-44">No Meal Available</h1>
        ) : (
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
            {currentItems.map((data) => {
              return (
                <div
                  key={data.id}
                  className="max-w-sm bg-white  rounded-lg dark:bg-gray-800 dark:border-gray-700"
                >
                  <Link to={`/details/${data.uid}`}>
                    <img
                      className="rounded-t-sm h-[60%] w-[100%]"
                      src={data.file}
                      alt={data.name}
                    />
                  </Link>
                  <div className="p-5 text-center">
                    <a href="#">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight capitalize text-gray-900 dark:text-white">
                        {data.name}
                      </h5>
                    </a>
                    <p className="mb-3 font-semibold text-red-600 text-[20px]">
                      ${data.price}
                    </p>
                    <button
                      onClick={() => handleAddtoCart(data)}
                      className="inline-flex items-center px-4 py-2 text-[16px] shadow-lg font-bold text-center text-white bg-red-700 rounded-full n"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
        {currentItems.length === 0 || (
          <div className="flex justify-center py-5 gap-3">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`bg-red-600 p-3 text-white font-bold rounded ${
                currentPage === 1 ? "bg-slate-400" : ""
              }`}
            >
              Previous
            </button>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`bg-red-600 p-3 text-white font-bold rounded ${
                currentPage === totalPages ? "bg-slate-400" : ""
              }`}
            >
              Next
            </button>
          </div>
        )}
      </div>
      <Fotter />
    </div>
  );
};

export default Shop;
