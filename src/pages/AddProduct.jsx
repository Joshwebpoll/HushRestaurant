import React, { useEffect, useState } from "react";
import { db, storage } from "../config/firebaseConfig";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import {
  addDoc,
  collection,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { useGlobalContext } from "../contextApi/context";
import { Category } from "./../components/Category";

const AddProduct = () => {
  const { user } = useGlobalContext();
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    category: "",

    quantity: "",
    uid: "",
  });
  const [image, setImage] = useState("");
  const [loading, setloading] = useState(false);
  const [cat, setCat] = useState([]);

  // console.log(user.email);
  // console.log(product);
  const uid = Date.now();

  useEffect(() => {
    const storageRef = ref(storage, `foodapp/${image.name}`);

    uploadBytes(storageRef, image).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setProduct((prev) => ({
          ...prev,
          file: url,
        }));
        setloading(true);
      });
    });
  }, [image]);
  const handleInputchange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => {
      return { ...prev, [name]: value, uid: uid, quantity: 1 };
    });
  };
  // const handleFileChange = async (e) => {
  //   const file = e.target.files[0];
  //   setProduct((prevData) => ({
  //     ...prevData,
  //     image: file,
  //   }));
  // };
  const handlesubmit = async (e) => {
    e.preventDefault();

    const creatproduct = await addDoc(collection(db, "foodapp"), product);

    if (creatproduct) {
      console.log("added product");
      setProduct({
        name: "",
        description: "",
        price: "",
        category: "",
      });
    }
  };

  useEffect(() => {
    const q = query(collection(db, "category"));
    console.log(q);
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let addproduts = [];
      querySnapshot.forEach((doc) => {
        addproduts.push({ ...doc.data(), id: doc.id });
      });
      setCat(addproduts);
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl text-[#222222] font-bold sm:text-3xl">
            Add New Product
          </h1>
        </div>

        <form
          onSubmit={handlesubmit}
          className="mx-auto mb-0 mt-8 max-w-md space-y-4"
        >
          <div>
            <label htmlFor="name" className="sr-only">
              Product Name
            </label>

            <div className="relative">
              <input
                type="text"
                name="name"
                value={product.name}
                onChange={handleInputchange}
                className="w-full rounded-lg border border-solid border-neutral-300 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter Product Name"
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="sr-only">
              Description
            </label>

            <div className="relative">
              <input
                type="text"
                name="description"
                value={product.description}
                onChange={handleInputchange}
                className="w-full rounded-lg border border-solid border-neutral-300 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter Description"
              />
            </div>
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              Price
            </label>

            <div className="relative">
              <input
                type="number"
                name="price"
                value={product.price}
                onChange={handleInputchange}
                className="w-full rounded-lg border border-solid border-neutral-300 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter Price"
              />
            </div>

            <div className="relative">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Select an Category
              </label>
              <select
                name="category"
                value={product.category}
                onChange={handleInputchange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Choose a Category</option>
                {cat.map((c) => (
                  <option key={c.id}>{c.title}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="mb-3">
            <label className="mb-2 inline-block text-neutral-700 dark:text-neutral-200">
              Default file
            </label>
            <input
              className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
              type="file"
              name="image"
              onChange={(e) => setImage(e.target.files[0])}
              id="formFile"
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              disabled={!loading}
              type="submit"
              className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddProduct;
