import { HomeCarousel } from "../../components/HomeCarousel";
import icon from "../../assets/icons/Graduation Cap.svg";
import Features from "../../components/HomeFeatures/Features";

export const Home = () => {
  return (
    <>
      <section className="w-full h-md mobile:h-lg desktop:h-xl bg-light-900 relative">
        <HomeCarousel />
      </section>
      <Features />  
    </>
  );
};
