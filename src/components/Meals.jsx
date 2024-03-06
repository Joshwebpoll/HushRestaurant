import { collection, onSnapshot, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../config/firebaseConfig";
import { Category } from "./Category";
import { useGlobalContext } from "../contextApi/context";
import Button from "./Button";
import { Link } from "react-router-dom";

const Meals = () => {
  const [item, setItem] = useState([]);
  const { selected, loading } = useGlobalContext();
  console.log(import.meta.env.VITE_APIKEYS);
  const filteredItems =
    selected == "all"
      ? item
      : item.filter((item) => item.category === selected);

  useEffect(() => {
    const q = query(collection(db, "foodapp"));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todosArr = [];
      querySnapshot.forEach((doc) => {
        todosArr.push({ ...doc.data(), id: doc.id });
      });
      setItem(todosArr);
    });
    return () => unsubscribe();
  }, []);
  return (
    <section className="px-5 py-5 md:px-20  md:py-[5rem] bg-[#F0F3F6]">
      <h1 className="text-center text-[30px] pb-10">Our Special Meals</h1>
      {loading ? <h1 className="text-center my-2">Loading</h1> : <Category />}
      {filteredItems.length == 0 ? (
        <h1 className="text-center text-[20px]">No Meals Available</h1>
      ) : (
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-8">
          {filteredItems.map((doc) => {
            return (
              <div key={doc.id} className="shadow-lg ">
                <Link to={`/details/${doc.uid}`}>
                  <img
                    alt=""
                    src={doc.file}
                    className="h-56 w-full object-cover rounded-t-sm"
                  />

                  <div className="bg-white p-4 sm:p-6">
                    <h3 className="mt-0.5 text-lg text-gray-900 capitalize">
                      {doc.name}
                    </h3>

                    <p className="mt-2 line-clamp-3 text-[18px] text-[#d31B27] font-bold">
                      ${doc.price}
                    </p>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default Meals;
