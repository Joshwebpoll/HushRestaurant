import About from "../components/About";
import Carousels from "../components/Carousels";
import Fotter from "../components/Fotter";
import Meals from "../components/Meals";
import Navbar from "../components/Navbar";
import Reservation from "../components/Reservation";

export const Home = () => {
  return (
    <>
      <Navbar />
      <Carousels />
      <Meals />
      <Reservation />
      <About />
      <Fotter />
    </>
  );
};
