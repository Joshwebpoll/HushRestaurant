import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../config/firebaseConfig";

export const AddCategory = () => {
  const [category, setCategory] = useState({
    title: "",
  });

  //   console.log(category);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCategory((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handlesubmit = async (e) => {
    e.preventDefault();
    console.log(category);
    await addDoc(collection(db, "category"), category);
    setCategory({
      title: "",
    });
  };
  return (
    <>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl text-[#222222] font-bold sm:text-3xl">
            Add Product Category
          </h1>
        </div>

        <form
          onSubmit={handlesubmit}
          className="mx-auto mb-0 mt-8 max-w-md space-y-4"
        >
          <div>
            <label htmlFor="email" className="sr-only">
              Category Name
            </label>

            <div className="relative">
              <input
                type="text"
                name="title"
                value={category.title}
                className="w-full rounded-lg border-gray-300 p-4 pe-12 text-sm shadow-sm text-[#140303ac]"
                placeholder="Enter Category Name"
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="sr-only">
              Icon
            </label>

            <div className="relative">
              <input
                type="text"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-[#140303ac] text-sm shadow-sm"
                placeholder="Enter Icon"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
            >
              Add Category
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
