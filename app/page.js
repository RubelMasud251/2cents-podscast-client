import Image from "next/image";
import Banner from "./components/home/Banner";
import Awards from "./components/home/Awards";
import MeetInfo from "./components/home/MeetInfo";
import FeaturePodsCast from "./components/home/FeaturePodcast";
import Community from "./components/home/Community";
import Contact from "./components/home/Contact";

export default function Home() {
  return (
    <main className="">
      <Banner />
      <Awards />
      <MeetInfo />
      <FeaturePodsCast />
      <Community />
      <Contact />
    </main>
  );
}
