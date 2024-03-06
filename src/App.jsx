// eslint-disable-next-line no-unused-vars

import { BrowserRouter, Route, Routes } from "react-router-dom";

import ProtectedRoute from "./components/ProtectedRoute";
import { Home } from "./pages/Home";
import { useGlobalContext } from "./contextApi/context";
import Login from "./pages/Login";
import Shop from "./pages/Shop";
import Details from "./pages/Details";
import { Cart } from "./pages/Cart";
import Signup from "./pages/Signup";
import { Toaster } from "react-hot-toast";
import AddProduct from "./pages/AddProduct";
import { AddCategory } from "./pages/AddCategory";

const App = () => {
  const { user } = useGlobalContext();
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/shop"
            element={
              <ProtectedRoute>
                <Shop />
              </ProtectedRoute>
            }
          />
          <Route
            path="/details/:id"
            element={
              <ProtectedRoute>
                <Details />
              </ProtectedRoute>
            }
          />
          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/addcategory" element={<AddCategory />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </>
  );
};
export default App;
