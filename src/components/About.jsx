import ourstory from "../assets/Images/story.png";

const About = () => {
  return (
    <section className=" px-5 py-5 md:px-20  md:py-[5rem] ">
      <div className="grid md:grid-cols-2 items-center justify-center gap-10">
        <div>
          <img src={ourstory} alt="" />
        </div>
        <div>
          <span className="text-red-400 text-[20px] italic mb-2">
            Our Story
          </span>
          <h3 className="text-black font-bold text-[25px] mb-2">
            know why our Burgar are best
          </h3>
          <h1 className=" text-red-600 font-bold md:text-[30px] mb-2">
            Since 1987
          </h1>
          <div>
            <p className="mb-2">
              Sed do eiusmod tempor incididunt ut labore et dolore mag esena
              aliquauis ipsum suspendisse ultrices gravida. Risus commoesddo
              viverra maecenas accumsanlacus vel facilisis and the part commodo
              of life and the part of new maniues peopls.
            </p>
            <p>
              Risus commoesddo viverra maecenas accumsanlacus vel facilisis and
              the part commodo of life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
