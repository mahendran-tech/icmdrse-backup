import BreadCumb from "../Components/Common/BreadCumb";
import ServiceDetails from "../Components/ServiceDetails/ServiceDetails";

const About = () => {
  return (
    <div className="serviceDetails">
      <BreadCumb bgImg="assets/img/page_heading_1.jpg" Title="About Us" />
      <ServiceDetails />
    </div>
  );
};

export default About;
