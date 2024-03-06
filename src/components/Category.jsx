import { useGlobalContext } from "../contextApi/context";

export const Category = () => {
  const { selected, setSelected, allCategories, loading } = useGlobalContext();

  return (
    <div className="flex justify-center items-center flex-wrap gap-2 md:gap-4  py-3 rounded-full w-[60%] mx-auto mb-10">
      {allCategories.map((cat, index) => {
        return (
          <div key={index}>
            <button
              onClick={() => setSelected(cat)}
              className={`capitalize rounded-full cursor-pointer fw-bold  hover:bg-red-600
               hover:text-white px-4 py-2 hover:rounded-full ${
                 selected === cat ? "bg-red-600 text-white" : "bg-white"
               }`}
            >
              {cat}
            </button>
          </div>
        );
      })}
    </div>
  );
};
