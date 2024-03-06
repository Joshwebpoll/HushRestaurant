const Button = ({ title, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="text-white bg-red-600 p-2 rounded-md mt-2 font-bold"
    >
      {title}
    </button>
  );
};

export default Button;
