import About2 from "../Components/About/About2";
import Brand1 from "../Components/Brand/Brand1";
import Choose1 from "../Components/Choose/Choose1";
import Counter1 from "../Components/Counter/Counter1";
import ContactForm from "../Components/Form/ContactForm";
import HeroBanner2 from "../Components/HeroBanner/HeroBanner2";
import AssociateSlider from "../Components/Icmdrse/AssociateSlider";
import Downloads from "../Components/Icmdrse/Downloads";
import GlimpsesOfConferences from "../Components/Icmdrse/GlimpsesOfConferences";
import Objectives from "../Components/Icmdrse/Objectives";
import Research from "../Components/Icmdrse/Research";
import ScopeConf from "../Components/Icmdrse/ScopeConf";
import ScrollingGallery from "../Components/Icmdrse/ScrollingGallery";
import SdgGoal from "../Components/Icmdrse/SdgGoal";
import Supporting from "../Components/Icmdrse/Supporting";
import VolunteerScholarship from "../Components/Icmdrse/VolunteerScholarship";
import WhyShould from "../Components/Icmdrse/WhyShould";
import Sdg from "../Components/Services/Sdg";
import Team1 from "../Components/Team/Team1";
import Testimonial1 from "../Components/Testimonial/Testimonial1";
import Testimonial2 from "../Components/Testimonial/Testimonial2";
import Video1 from "../Components/Video/Video1";
import {backgroundImages, aboutImg} from "../assets/assets";
import Event from "../Components/Icmdrse/Event";
import ImageColumn from "../Components/Common/ImageGrid";
import Academic from "../Components/Icmdrse/Academic";
import {Helmet} from "react-helmet-async";
import {Modal, Button} from "react-bootstrap";
import {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
const Home2 = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setShow(true); // Show modal when component mounts
  }, []);

  const handleImageClick = () => {
    setShow(false); // Close the modal
    navigate("/conference-registration"); // Redirect to the component
  };

  const supportingData = {
    imgSrc: aboutImg.support,
    sectionTitle: "Supporting Researchers Every Step of the Way",
    description:
      "We are here to assist you in presenting your research at its best. Our services include:",
    listItems: [
      {
        title: "Paper Revision and Formatting:",
        description: " Ensuring your manuscript meets the highest standards.",
      },
      {
        title: "Journal Cover Letter Preparation:",
        description:
          " Crafting compelling cover letters tailored to your target journal.",
      },
      {
        title: "Conference Presentation Formatting:",
        description: " Designing professional and impactful PowerPoint slides.",
      },
      {
        title: "Graphical Abstract Creation:",
        description:
          " Developing visually engaging summaries of your research.",
      },
      {
        title: "Illustrations and Visual Enhancements:",
        description: " Creating customized illustrations to enhance your work.",
      },
    ],
    additionalContent: "Let us help you make your research shine!",
  };

  return (
    <div>
      <Helmet>
        <title>
          International Educational Conference | Multi-Disciplinary | ICMDRSE
          2025
        </title>
        <meta
          name="description"
          content="Explore cutting-edge research at ICMDRSE 2025, the international conference on Multi-Disciplinary Research Studies and Education. Connect with industry leaders and drive future innovations in these critical "
        />
      </Helmet>

      <div className="homepage2">
        <HeroBanner2
          bgimg={backgroundImages.banner_1}
          subtitle="8th International Conference on"
          title="Multi-Disciplinary Research Studies <br>
and Education (ICMDRSE-2025)"
          conetnt=" IFERP Academy - Malaysia Society"
          btnname="Abstract Submission"
          btnname1="Registration"
          btnurl="/abstract-submission"
          btnurlReg="/conference-registration"
          videoname="Watch Our Story"
        />
        <ScrollingGallery />
        <Downloads />
        <Academic />
        <About2
          img1={aboutImg.about_1}
          img2={aboutImg.about_2}
          expNumber="58"
          expTitle="IFERP"
          exYear="IFERP"
          // subTitle="About Us"
          Title="Welcome to ICMDRSE 2025!"
          Content="Where ideas meet innovation and the brightest minds converge to shape the future of education. For years, ICMDRSE has been the premier platform for educators, researchers, policymakers, and industry professionals to network, exchange ideas, and grow in their fields."
        />

        <Choose1
          img1={aboutImg.about_5}
          content="This is your chance to play a pivotal role in shaping the future of global education. At ICMDRSE 2025, your voice matters in building a community dedicated to <b>  academic excellence </b> and <b>positive change. </b>
                 "
          btnName="Read more"
          btnUrl="/"
          // img2="/assets/img/feature_img_2.jpg"
          // img3="/assets/img/feature_img_3.jpg"
        />

        <Objectives
          title="Objective of the Conference"
          description="8th ICMDRSE 2025 aims to create a dynamic environment for collaboration, inspiration, and educational excellence. Below are the key objectives this conference strives to achieve:"
          objectives={[
            {
              title: "Promote Comprehensive Discussions:",
              description:
                "Facilitate meaningful conversations on current trends, challenges, and innovative solutions in education and research.",
            },
            {
              title: "Showcase Innovation:",
              description:
                "Highlight cutting-edge research and practices that could inspire new ideas and methods in the field of education.",
            },
            {
              title: "Foster Global Collaboration:",
              description:
                "Bring together a diverse group of experts from around the world to deepen understanding and share knowledge across disciplines.",
            },
            {
              title: "Encourage Cross-Disciplinary Conversations:",
              description:
                "Spark cross-disciplinary exchanges that lead to fresh perspectives and enrich educational discussions.",
            },
            {
              title: "Inspire New Approaches:",
              description:
                "Encourage scholars and educators to explore novel research methodologies and embrace multidisciplinary collaboration.",
            },
            {
              title: "Address Challenges:",
              description:
                "Create a forum for debating new trends and addressing challenges in multidisciplinary research and teaching approaches.",
            },
            {
              title: "Networking Opportunities:",
              description:
                "Provide a platform for attendees to connect, share insights, and collaborate on innovative educational projects.",
            },
          ]}
          showImage={true}
          imageUrl="assets/img/faq_img_1.jpg"
        />

        <ScopeConf
          img1={aboutImg.about4}
          content="8th ICMDRSE-2025 in Kuala Lumpur, Malaysia, on May 22-23,
              2025, brings together scholars, educators, and researchers from
              diverse disciplines. This vibrant conference will focus on the
              transformative impact of technology on education, especially in
              higher education, with an emphasis on critical areas such as
              engineering, technology, business administration, climate change,
              sustainable development, and social science."
        />

        <Research img1={aboutImg.publication} />

        <Counter1 />
        <Team1 isShow={true} />

        {/* <Supporting img1={aboutImg.about_3} /> */}
        <Supporting {...supportingData} />

        <Testimonial2 />
        <Brand1 isClass={false} />

        <Event />

        {/* <Services2 /> */}
        <Video1 />
        {/* <Sdg /> */}

        <ImageColumn />

        <SdgGoal />

        <WhyShould />

        <ContactForm />
        <VolunteerScholarship />
        <Testimonial1
          title="Explore Your Research Journey With IFERP"
          bgImg={backgroundImages.bg_Img}
        />
        <GlimpsesOfConferences />
        {/* <Project2 /> */}
        <AssociateSlider />
        {/* <Blog2 /> */}
      </div>
      <div>
        <Modal show={show} onHide={() => setShow(false)} centered>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <img
              src="https://cdn.iferp.in/iferp-cms/2025/ramzan-1.jpg"
              alt="Conference"
              style={{cursor: "pointer", width: "100%"}}
              onClick={handleImageClick} // Handle click event
            />
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};

export default Home2;
