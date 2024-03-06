import {
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../config/firebaseConfig";
Button;
import { useGlobalContext } from "../contextApi/context";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import Fotter from "../components/Fotter";

const Details = () => {
  const { id } = useParams();
  const { handleAddtoCart } = useGlobalContext();

  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(details);
  useEffect(() => {
    setLoading(true);
    const q = query(collection(db, "foodapp"), where("uid", "==", Number(id)));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todosArr = [];

      querySnapshot.forEach((doc) => {
        // console.log(doc);
        todosArr.push({ ...doc.data(), id: doc.id });
      });
      setLoading(false);
      setDetails(todosArr);
    });
    return () => unsubscribe();
  }, []);

  // const joshman = async () => {
  //   const docRef = doc(db, "foodapp", "43");
  //   const docSnap = await getDoc(docRef);
  //   console.log(docSnap.data());
  //   // if (docSnap.exists()) {
  //   //   console.log("Document data:", docSnap.data());
  //   // } else {
  //   //   // docSnap.data() will be undefined in this case
  //   //   console.log("No such document!");
  //   // }
  // };

  // useEffect(() => {
  //   joshman();
  // }, []);
  //   const getProuctdetails = async () => {
  //     const q = query(collection(db, "foodapp"));
  //     const snapshot = await getDoc(q);
  //     snapshot.forEach((doc) => {
  //       console.log(doc.data());
  //       30;
  //     });
  //   };
  return (
    <section>
      <Navbar />
      <div className="px-10 py-10">
        <div>
          {loading ? (
            <h1 className="text-center py-40">Loading....</h1>
          ) : (
            details.map((details) => {
              return (
                <div
                  key={details.id}
                  className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8"
                >
                  <div className=" rounded-lg ">
                    <img
                      src={details.file}
                      alt={details.name}
                      className="rounded-sm"
                    />
                  </div>
                  <div className=" px-3">
                    <h1 className="text-[30px] pb-2 capitalize">
                      {details.name}
                    </h1>
                    <h3 className="text-red-600 text-[25px] pb-2">
                      ${details.price}
                    </h3>
                    <p className=" text-[16px] pb-5">{details.description}</p>
                    <Button
                      title="Add to cart"
                      onClick={() => handleAddtoCart(details)}
                    />
                    <p className=" fw-bold pt-5 text-[16px]">
                      Category : {details.category}
                    </p>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
      <Fotter />
    </section>
  );
};

export default Details;
