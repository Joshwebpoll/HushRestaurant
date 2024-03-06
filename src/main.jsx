import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AppContext } from "./contextApi/context.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/login",
//     element: <Login />,
//   },
//   {
//     path: "/",
//     element: (
//       <ProtectedRoute>
//         <App />
//       </ProtectedRoute>
//     ),
//   },
//   {
//     path: "/shop",
//     element: (
//       <ProtectedRoute>
//         <Shop />
//       </ProtectedRoute>
//     ),
//   },

//   {
//     path: "/details/:id",
//     element: (
//       <ProtectedRoute>
//         <Details />
//       </ProtectedRoute>
//     ),
//   },

//   {
//     path: "/signup",
//     element: <Signup />,
//   },
//   {
//     path: "/about/:Josh",
//     element: <About />,
//   },
//   {
//     path: "/addproduct",
//     element: (
//       <ProtectedRoute>
//         <AddProduct />
//       </ProtectedRoute>
//     ),
//   },
//   {
//     path: "/addcategory",
//     element: (
//       <ProtectedRoute>
//         <AddCategory />
//       </ProtectedRoute>
//     ),
//   },
//   {
//     path: "/cart",
//     element: (
//       <ProtectedRoute>
//         <Cart />
//       </ProtectedRoute>
//     ),
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>

  <AppContext>
    <App />
  </AppContext>

  /* </React.StrictMode> */
);
