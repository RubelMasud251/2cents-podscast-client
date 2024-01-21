import { CSSProperties } from "react";
import FadeLoader from "react-spinners/FadeLoader";

const loading = () => {
  return (
    <div className="h-screen w-full secondary_bg">
      <FadeLoader color="#36d7b7" />
    </div>
  );
};

export default loading;
