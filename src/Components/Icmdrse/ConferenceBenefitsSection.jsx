import React from "react";
import {useNavigate} from "react-router-dom";

const ConferenceBenefitsSection = () => {
  const navigate = useNavigate();
  return (
    <section
      className="testimonial-section py-4"
      style={{background: "#e8efff "}}>
      <div className="container">
        <div className="row clearfix">
          {/* Introduction */}
          <div className="mt-3 text-center">
            <h4 className="text-color-h4 mb-2">
              Scope &amp; Benefits of Attending ICMDRSE-2025 Conference:
            </h4>
            <p className="text">
              Discover the transformative potential of (ICMDRSE-2025) with a
              focus on sustainable innovation and technology-driven solutions to
              address pressing environmental challenges.
            </p>
          </div>

          {/* Left Column */}
          <div className="col-lg-5">
            <div className="inner-column tex-container">
              <img src="assets/img/benefits.png" alt="ICMDRSE Session" />
              {/* <div className="tex-container-1">
                <h2>
                  Benefits of Attending ICMDRSE <br /> 2025
                </h2>
              </div> */}
            </div>
          </div>

          {/* Right Column */}
          <div className="col-lg-7">
            <div className="inner-column h-100">
              <div className="skewed-element h-100 d-flex justify-content-center align-items-center">
                <div className="content-topic">
                  <ul className="ul-style">
                    <li>
                      Explore a myriad of innovative engineering solutions
                      specifically tailored to address the complex challenges
                      posed by sustainability. Gain valuable insights into the
                      realm of sustainable infrastructure development, renewable
                      energy technologies, and the fundamental principles of
                      eco-friendly design. Furthermore, seize the opportunity to
                      network with esteemed experts in the field, fostering
                      dynamic exchanges of ideas and facilitating potential
                      collaborations on projects geared towards sustainable
                      engineering endeavours. Additionally, access a wealth of
                      cutting-edge research materials focusing on sustainable
                      materials, effective waste management strategies, and
                      innovative environmental conservation practices.
                    </li>
                    <li>
                      Delve deep into comprehensive research exploring the
                      multifaceted facets of biodiversity conservation, climate
                      change adaptation, and the inherent resilience of
                      ecosystems. Uncover a vast array of sustainable
                      agriculture practices, cutting-edge environmental
                      monitoring technologies, and strategies for effective
                      natural resource management. Engage in intellectually
                      stimulating discussions at the crossroads of science and
                      sustainability, delving into critical topics such as the
                      advancement of renewable energy sources, the mitigation of
                      pollution, and the fostering of sustainable urban
                      development initiatives. Furthermore, seize the
                      opportunity to connect with prominent researchers and
                      policymakers to explore collaborative, interdisciplinary
                      approaches to effectively address the myriad challenges
                      posed by sustainability.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Full-width Section */}
          <div className="col-lg-12 mt-3">
            <ul className="ul-style">
              <li>
                Embark on a transformative journey to discover the
                transformative potential of technology in the realm of
                education, particularly concerning sustainability-focused
                initiatives. Explore a diverse array of topics ranging from
                innovative e-learning platforms and educational applications to
                the seamless integration of digital resources aimed at enhancing
                sustainability literacy. Gain valuable insights into the pivotal
                role of education in championing sustainable development goals
                and fostering heightened environmental awareness amongst
                learners. Moreover, delve into the cutting-edge trends and
                emerging technologies within the realm of educational
                technology, including the gamification of learning, adaptive
                learning methodologies, and the immersive world of virtual
                reality.
              </li>
              <li>
                Embark on an in-depth exploration of sustainable business
                models, delving into the intricacies of corporate social
                responsibility practices and pioneering green finance
                initiatives. Explore innovative strategies for seamlessly
                integrating sustainability into the fabric of organisational
                culture, supply chain management practices, and overarching
                management methodologies. Engage in insightful discussions
                surrounding the pivotal role of accounting in meticulously
                measuring and effectively reporting on sustainability
                performance metrics and environmental impacts. Furthermore,
                glean valuable insights from real-world case studies and best
                practices in sustainable business development, innovation, and
                stakeholder engagement strategies.
              </li>
              <li>
                Immerse yourself in a rich tapestry of discourse centred on the
                social, cultural, and ethical dimensions of sustainability,
                exploring pressing issues related to equity, justice, and human
                rights. Embrace interdisciplinary perspectives drawn from the
                realms of history, philosophy, anthropology, and sociology,
                shedding light on the intricate interplay between societal
                dynamics and sustainable development initiatives. Engage in
                thought-provoking discussions concerning the formulation of
                sustainable development policies, the establishment of robust
                frameworks, and the implementation of community-based
                initiatives aimed at fostering environmental stewardship.
              </li>
              <li>
                Contribute to critical dialogues surrounding sustainability
                challenges, ranging from the urgent need to address climate
                change and global health crises to the persistent issues of
                social inequality and environmental degradation.
              </li>
            </ul>
            <div className="mt-3 text-center">
              {/* <a
                href="#"
                onClick={() => navigate("/conference-registration")}
                class="cs_reply_btn cs_heading_bg cs_fs_14 cs_bold cs_white_color text-uppercase"
              >
                Register our conference
              </a> */}
              <button
                onClick={() => {
                  navigate("/conference-registration");
                  window.scrollTo({top: 0, behavior: "smooth"});
                }}
                className="cs_btn cs_style_2 wow fadeInLeft">
                <span>Register our conference </span>
                <i class="bi bi-arrow-right" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConferenceBenefitsSection;
