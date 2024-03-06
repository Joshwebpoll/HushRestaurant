import { Firestore } from "firebase/firestore";
import React from "react";

const userCollection = Firestore().collection("cart");
const Blog = () => {
  function LoadData() {
    console.log("LOAD");
    let query = userCollection.orderBy("age"); // sort the data
    if (lastDocument !== undefined) {
      query = query.startAfter(lastDocument); // fetch data following the last document accessed
    }
    query
      .limit(3) // limit to your page size, 3 is just an example
      .get()
      .then((querySnapshot) => {
        setLastDocument(querySnapshot.docs[querySnapshot.docs.length - 1]);
        MakeUserData(querySnapshot.docs);
      });
  }

  return (
    <div>
      <h1>hello</h1>
    </div>
  );
};

export default Blog;
