import BreadCumb from "../Components/Common/BreadCumb";
import ServiceDetails from "../Components/ServiceDetails/ServiceDetails";
import {Helmet} from "react-helmet-async";
const About = () => {
  return (
    <>
      <Helmet>
        <title>
          International Engineering Conference Malaysia | ICMDRSE 2025
        </title>
        <meta
          name="description"
          content="ICMDRSE 2025 brings together global experts to discuss advancements in 8th International Conference on Multi-Disciplinary Research Studies and Education. Discover the latest research, innovations, and networking opportunities"
        />
      </Helmet>

      <div className="serviceDetails">
        <BreadCumb bgImg="assets/img/page_heading_1.jpg" Title="About Us" />
        <ServiceDetails />
      </div>
    </>
  );
};

export default About;
