import Contact from "../components/home/Contact";
import CategoryDropdown from "../components/podscasts/CategoryDropdown";
import PodCastSlider from "../components/podscasts/PodCastSlider";

const PodsCasts = async () => {
  return (
    <div>
      <div className="container-div secondary_bg text-white py-12">
        <h2 className="Title text-center pb-12">Podcasts</h2>
        <CategoryDropdown />
        <div className="pt-10">
          <PodCastSlider />
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default PodsCasts;
