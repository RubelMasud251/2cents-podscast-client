import FadeLoader from "react-spinners/FadeLoader";

const loading = () => {
  return (
    <div className="h-screen w-full secondary_bg justify-center items-center text-center">
      <FadeLoader color="#36d7b7" />
    </div>
  );
};

export default loading;
