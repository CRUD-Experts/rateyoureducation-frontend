import Feature from "./Feature";
import capIcon from "../../assets/icons/Graduation Cap.svg";
import uniIcon from "../../assets/icons/University Campus.svg";
import starIcon from "../../assets/icons/Star Filled.svg";

const Features = () => {
  return (
    <section className="w-full max-w-6xl me-auto ms-auto bg-light-100 relative z-20 tablet:-mt-20 mb-9 p-8 flex flex-col mobile:flex-row justify-between gap-4 rounded-md shadow-xl">
      <Feature
        icon={capIcon}
        title="Lecturer"
        summary="Rate and review individual lectures based on factors 
        like teaching quality, engagement, and content. Gain insights 
        into the best and most impactful lectures at your university 
        to optimize your learning experience."
      />
      <Feature
        icon={uniIcon}
        title="University"
        summary=" Explore comprehensive rankings of universities worldwide. 
        Our algorithm combines research papers and the on-ground learning
        environment to provide a holistic assessment of each institution, 
        helping you make informed decisions about your education."
      />
      <Feature
        icon={starIcon}
        title="Rate"
        summary="Contribute to the community by sharing your experiences 
        and rating lecturers. Your feedback plays a crucial role in enhancing 
        transparency and empowering students to make educated choices when 
        selecting courses and lecturers."
      />
    </section>
  );
};

export default Features;
