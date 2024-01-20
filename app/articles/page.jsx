import Link from "next/link";
import Image from "next/image";
import ArticlesSlider from "../components/articles/ArticlesSlider";
import ContentSlider from "../components/articles/ContentSlider";
import BrandLogo from "@/public/Brand.webp";

const Articles = () => {
  return (
    <div className="bg-yellow-200 ">
      <h2 className="text-6xl text-center font-semibold  pt-20 pb-8">
        {" "}
        Articles
      </h2>

      <ArticlesSlider />
      <div className="secondary_bg text-white py-12">
        <ContentSlider />
        {/* Brands section */}
        <div className="">
          <h2 className="Title primary_color text-center py-12 md:w-9/12 mx-auto">
            {" "}
            Brands worked with
          </h2>
          <div className="flex flex-col gap-12">
            <div className="grid grid-cols-4 ">
              <Image src={BrandLogo} alt="BrandLogo" className="w-32 mx-auto" />
              <Image src={BrandLogo} alt="BrandLogo" className="w-32 mx-auto" />
              <Image src={BrandLogo} alt="BrandLogo" className="w-32 mx-auto" />
              <Image src={BrandLogo} alt="BrandLogo" className="w-32 mx-auto" />
            </div>
            <div className="grid grid-cols-5 ">
              <Image src={BrandLogo} alt="BrandLogo" className="w-32 mx-auto" />
              <Image src={BrandLogo} alt="BrandLogo" className="w-32 mx-auto" />
              <Image src={BrandLogo} alt="BrandLogo" className="w-32 mx-auto" />
              <Image src={BrandLogo} alt="BrandLogo" className="w-32 mx-auto" />
              <Image src={BrandLogo} alt="BrandLogo" className="w-32 mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
