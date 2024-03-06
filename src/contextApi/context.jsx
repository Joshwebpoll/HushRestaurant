import {
  addDoc,
  collection,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../config/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import toast from "react-hot-toast";

const ThemeContext = createContext();

export const AppContext = ({ children }) => {
  const [filter, setFilter] = useState([]);
  const [selected, setSelected] = useState("all");
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [duplicate, setDuplicate] = useState([]);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    localStorage.removeItem("josh");
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    setLoading(true);
    const q = query(collection(db, "category"));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todosArr = [];
      querySnapshot.forEach((doc) => {
        todosArr.push({ ...doc.data(), id: doc.id });
      });

      setFilter(todosArr);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  localStorage.setItem("josh", user?.email);
  const get = localStorage.getItem("josh");

  useEffect(() => {
    const q = query(collection(db, "cart"), where("emails", "==", get));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todosArr = [];
      querySnapshot.forEach((doc) => {
        todosArr.push({ ...doc.data(), id: doc.id });
      });

      setCart(todosArr);
      setDuplicate(todosArr);
    });
    return () => unsubscribe();
  }, [get]);

  useEffect(() => {
    duplicate1();
  }, []);

  const duplicate1 = () => {
    const q = query(collection(db, "cart"));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let uniqueItem = [];

      querySnapshot.forEach((doc) => {
        return uniqueItem.push({ ...doc.data(), id: doc.id });
      });

      setDuplicate(uniqueItem);
    });
    return () => unsubscribe();
  };

  const handleAddtoCart = async (data) => {
    const isProductInCart = cart.some((cartItem) => cartItem.uid === data.uid);
    console.log(isProductInCart);
    if (isProductInCart) {
      toast("Meal already Exist");
      return;
    } else {
      await addDoc(collection(db, "cart"), {
        ...data,
        emails: user.email,
        uiid: user.uid,
      });
      toast("Added to cart Successfully");
    }
  };

  const allCategories = ["all", ...new Set(filter.map((item) => item.title))];

  return (
    <ThemeContext.Provider
      value={{
        filter,
        selected,
        setSelected,
        allCategories,
        loading,
        createUser,
        user,
        logout,
        signIn,
        handleAddtoCart,
        cart,
        total,
        setTotal,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(ThemeContext);
};
