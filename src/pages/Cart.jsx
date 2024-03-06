import Navbar from "../components/Navbar";
import { useGlobalContext } from "../contextApi/context";
import Cartdetails from "../components/Cartdetails";

export const Cart = () => {
  const { cart } = useGlobalContext();

  return (
    <>
      <Navbar />
      <div className=" flex h-[15rem] bg-[url('/src/assets/Images/cartbanner.png')] bg-cover bg-center bg-no-repeat">
        <h1 className="my-auto px-20 text-[35px]">Cart</h1>
      </div>

      <Cartdetails cart={cart} />
    </>
  );
};
