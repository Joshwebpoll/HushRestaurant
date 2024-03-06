import { Carousel } from "antd";
import { Link } from "react-router-dom";

const Carousels = () => {
  const contentStyle = {
    height: " 100vh",
    color: "#fff",

    // background: "#364d79",
  };
  return (
    <div className="">
      <Carousel autoplay>
        <div>
          <div
            style={contentStyle}
            className=" relative bg-[url('/src/assets/Images/slider1.png')] bg-cover bg-center bg-no-repeat"
          >
            <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
              <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                <h1 className="text-[25px] text-[#222] font-medium sm:text-5xl">
                  Choosing tasty Premium Restaurant & Cafe
                </h1>

                <p className="mt-4 text-[#707070] max-w-lg sm:text-xl/relaxed">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Nesciunt illo tenetur fuga ducimus numquam ea!
                </p>

                <div className="mt-8 flex flex-wrap gap-4 text-center">
                  <Link
                    to="/shop"
                    className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                  >
                    Order Now
                  </Link>

                  <Link
                    to="/shop"
                    className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                  >
                    See Menu
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            style={contentStyle}
            className="bg-[url('/src/assets/Images/slider2.png')] bg-cover bg-center bg-no-repeat"
          >
            <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
              <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                <h1 className="text-[25px] text-[#222] font-medium sm:text-5xl">
                  Choosing tasty Premium Restaurant & Cafe
                </h1>

                <p className="mt-4 text-[#707070] max-w-lg sm:text-xl/relaxed">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Nesciunt illo tenetur fuga ducimus numquam ea!
                </p>

                <div className="mt-8 flex flex-wrap gap-4 text-center">
                  <Link
                    to="/shop"
                    className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                  >
                    Order Now
                  </Link>

                  <Link
                    to="/shop"
                    className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                  >
                    See Menu
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            style={contentStyle}
            className="bg-[url('/src/assets/Images/slider3.png')] bg-cover bg-center bg-no-repeat"
          >
            <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
              <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                <h1 className="text-[25px] text-[#222] font-medium sm:text-5xl">
                  Choosing tasty Premium Restaurant & Cafe
                </h1>

                <p className="mt-4 text-[#707070] max-w-lg sm:text-xl/relaxed">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Nesciunt illo tenetur fuga ducimus numquam ea!
                </p>

                <div className="mt-8 flex flex-wrap gap-4 text-center">
                  <Link
                    to="/shop"
                    className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                  >
                    Order Now
                  </Link>

                  <Link
                    to="/shop"
                    className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                  >
                    See Menu
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Carousels;
