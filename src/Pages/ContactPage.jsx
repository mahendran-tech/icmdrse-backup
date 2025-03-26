import BreadCumb from "../Components/Common/BreadCumb";
import Contact from "../Components/Contact/Contact";
import {Helmet} from "react-helmet-async";
const ContactPage = () => {
  return (
    <div>
      <Helmet>
        <title>
          Contact us | International Conference Malaysia | ICMDRSE 2025
        </title>
        <meta
          name="description"
          content="Get in touch with ICMDRSE 2025 organizers for inquiries about registration, submissions, or sponsorship. Reach out to our support team for assistance and event-related questions"
        />
      </Helmet>
      <BreadCumb bgImg="assets/img/page_heading_1.jpg" Title="Contact" />
      <Contact />
    </div>
  );
};

export default ContactPage;
