import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import Button from "./Button";
import { db } from "../config/firebaseConfig";
import { useGlobalContext } from "../contextApi/context";
import toast from "react-hot-toast";

const Cartdetails = ({ cart }) => {
  const { setTotal, total, user } = useGlobalContext();
  console.log(user.email);
  const unique = cart.filter((c) => {
    return c.email == user.email;
  });
  // console.log(unique);
  const handledelete = async (id) => {
    await deleteDoc(doc(db, "cart", id));
    toast("Meal deleted successfully");
  };

  // Update cart in firebase
  const IncreaseQuantity = async (data) => {
    await updateDoc(doc(db, "cart", data.id), {
      quantity: data.quantity + 1,
    });
  };
  const DecreaseQuantity = async (data) => {
    if (data.quantity <= 1) {
      await deleteDoc(doc(db, "cart", data.id));
    }

    await updateDoc(doc(db, "cart", data.id), {
      quantity: data.quantity - 1,
    });
  };

  const totalItem = cart.reduce((acc, item) => {
    acc += item.quantity * item.price;
    return acc;
  }, 0);
  setTotal(totalItem);
  if (cart.length === 0) {
    return (
      <div className="text-center  m-12">
        <h1 className=" bg-[#F4F8FF] py-5 border border-[#007CBA]">
          Your cart is currently empty.
        </h1>
        <Button title=" Return to Shop" />
      </div>
    );
  }
  return (
    <div className="px-10 py-10">
      <div>
        <div className="overflow-x-auto rounded-lg border border-gray-200">
          <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
            <thead className="">
              <tr>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-left"></th>
                <th className="whitespace-nowrap px-4 py-2 text-[16px] fw-semibold font-medium text-gray-900 text-left">
                  Product
                </th>
                <th className="whitespace-nowrap text-[16px] fw-semibold text-[16px] fw-semibold px-4 py-2 font-medium text-gray-900 text-left">
                  Price
                </th>
                <th className="whitespace-nowrap text-[16px] fw-semibold px-4 py-2 font-medium text-gray-900 text-left">
                  Quantity
                </th>
                <th className="whitespace-nowrap text-[16px] fw-semibold px-4 py-2 font-medium text-gray-900 text-left">
                  Subtotal
                </th>
              </tr>
            </thead>

            {cart.map((data) => {
              return (
                <tbody key={data.id} className="divide-y divide-gray-200">
                  <tr>
                    <td
                      onClick={() => handledelete(data.id)}
                      className="whitespace-nowrap px-4 py-2 fw-bold cursor-pointer font-medium text-red-600"
                    >
                      X
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-[16px] fw-semibold font-medium text-gray-900">
                      {data.name}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-[16px] fw-semibold">
                      ${data.price}
                    </td>
                    <td className="whitespace-nowrap   py-2 text-gray-700 text-[18px] cursor-pointer">
                      <div className="relative flex items-center max-w-[8rem]">
                        <button
                          type="button"
                          onClick={() => DecreaseQuantity(data)}
                          className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                        >
                          <svg
                            className="w-3 h-3 text-gray-900 dark:text-white"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 18 2"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M1 1h16"
                            />
                          </svg>
                        </button>
                        <input
                          type="text"
                          value={data.quantity}
                          className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="999"
                          min="1"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => IncreaseQuantity(data)}
                          className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                        >
                          <svg
                            className="w-3 h-3 text-gray-900 dark:text-white"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 18 18"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M9 1v16M1 9h16"
                            />
                          </svg>
                        </button>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-[16px] fw-semibold">
                      ${Number(data.price) * data.quantity}
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
      </div>
      <div className=" flex md:justify-center lg:justify-end">
        <div className=" w-[100%]  lg:w-[50%]   pt-5 ">
          <h1 className="text-[30px] pb-2">Cart totals</h1>

          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                {/* <tr>
                  <th scope="col" className="px-6 py-3">
                    Product name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Color
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Category
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr> */}
              </thead>
              <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-[16px] fw-semibold text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    SubTotal
                  </th>
                  <td className="px-6 py-4 text-[16px] fw-semibold">
                    ${total}
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-[16px] fw-semibold text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Total
                  </th>
                  <td className="px-6 py-4 text-[16px] fw-semibold">
                    ${total}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <button className="bg-red-600 shadow shadow-red-700 w-[100%] mt-4 py-3  text-white rounded-full fw-bold text-[16px]">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cartdetails;
