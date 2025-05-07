import {useEffect, useRef, useState} from "react";
import {Link} from "react-router-dom";
// import data from "../../Data/faq.json";
import Objectives from "../Icmdrse/Objectives";

const ServiceDetails = () => {
  // const accordionContentRef = useRef(null);
  const [openItemIndex, setOpenItemIndex] = useState(-1);
  const [firstItemOpen, setFirstItemOpen] = useState(true);

  const handleItemClick = (index) => {
    if (index === openItemIndex) {
      setOpenItemIndex(-1);
    } else {
      setOpenItemIndex(index);
    }
  };
  useEffect(() => {
    if (firstItemOpen) {
      setOpenItemIndex(0);
      setFirstItemOpen(false);
    }
  }, [firstItemOpen]);

  const handleScroll = (e, id) => {
    e.preventDefault(); // Prevent default anchor behavior
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section>
      <div className="cs_height_120 cs_height_lg_80" />
      <div className="container">
        <div className="row cs_row_gap_30 cs_gap_y_60">
          <div className="col-xl-9 col-lg-8">
            <div className="cs_service_details">
              {/* <img src="/assets/img/service_banner.jpg" alt="Service Banner" /> */}
              <h2>About 8th ICMDRSE 2025</h2>
              <p className="text-justify">
                8th International Conference on Multi-Disciplinary Research
                Studies and Education (ICMDRSE-2025) is a vibrant platform that
                brings together scholars, educators, and researchers from a
                variety of disciplines. It is a hub for exchanging innovative
                research, investigating diverse educational practices, and
                fostering multidisciplinary exchanges. ICMDRSE-2025 conference
                will take place on the 22nd and 23rd of May 2025 in Kuala
                Lumpur, Malaysia. Organized by Manipal GlobalNxt University
                Malaysia , SEGi University & Colleges Malaysia, Multimedia
                University (MMU) Malaysia and IFERP Academy, this conference
                intends to spark lively debates, advance novel approaches in
                research, and promote excellence in education across all
                disciplines. This event represents a priceless chance for
                intellectual development and scholarly engagement, with a focus
                on expanding knowledge and advancing multidisciplinary research.
              </p>
              <div id="section4">
                <div className="row mt-5 mb-3">
                  <div className="col-md-5 d-flex justify-content-center align-content-center">
                    <div className="cs_sidebar_widget cs_accent_bg align-content-center">
                      <h4 className="text-white text-center">ICMDRSE-2025</h4>
                      <p className="text-white text-center text-justify">
                        {" "}
                        <span>Conference Theme: </span>
                        "Applications in Multi-Disciplinary Research Studies :
                        Technology and Innovation for Sustainable Learning"
                      </p>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div className="cs_accordians_wrapper cs_style_1">
                      <ul className="cs_list cs_style_1 cs_fs_16  cs_heading_font cs_mb_10 p-0">
                        <li>
                          <span className="cs_list_icon cs_center cs_accent_bg cs_white_color cs_radius_50">
                            <i className="bi bi-check" />
                          </span>
                          <span>
                            The conference theme "Applications in
                            Multi-Disciplinary Research Studies : Technology and
                            Innovation for Sustainable Learning" represents a
                            collaborative place where multiple academic subjects
                            interact. It fosters cross-disciplinary conversation
                            by providing a place for the sharing of ideas and
                            techniques
                          </span>
                        </li>
                        <li>
                          <span className="cs_list_icon cs_center cs_accent_bg cs_white_color cs_radius_50">
                            <i className="bi bi-check" />
                          </span>
                          <span>
                            This theme invites people to explore the connections
                            between various subjects and underlines the value of
                            different points of view in promoting innovation and
                            enhancing the educational landscape.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-12 mt-4">
                  <ul className="cs_list cs_style_1 cs_fs_16  cs_heading_font cs_mb_10 p-0">
                    <li>
                      <span className="cs_list_icon cs_center cs_accent_bg cs_white_color cs_radius_50">
                        <i className="bi bi-check" />
                      </span>
                      <span>
                        8th ICMDRSE aims to break down disciplinary silos by
                        bringing together specialists from many subjects to
                        create an exciting environment for collaboration. The
                        theme aims to foster the synergy of ideas, ultimately
                        contributing to breakthroughs in education and
                        transdisciplinary studies.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div id="section1" className="mt-5">
                <h2>Who Can Attend</h2>
                <p>
                  Invest in high-quality diagnostic tools, lifts, and other
                  essential repair equipment certified mechanics and provide
                  ongoing training to keep up with evolving car technologies.
                </p>
                <div className="row">
                  <div className="col-lg-6 col-sm-12">
                    <ul className="list-group list-group-1">
                      <li className="list-group-item">
                        {" "}
                        <i className="bi bi-bookmarks-fill" /> Research Scholars
                      </li>
                      <li className="list-group-item">
                        {" "}
                        <i className="bi bi-bookmarks-fill" /> Educators
                      </li>
                      <li className="list-group-item">
                        <i className="bi bi-bookmarks-fill" /> Industry
                        Professionals
                      </li>
                      <li className="list-group-item">
                        <i className="bi bi-bookmarks-fill" /> Practitioners
                        (Brand Specialists, Head of Marketing)
                      </li>
                      <li className="list-group-item">
                        {" "}
                        <i className="bi bi-bookmarks-fill" /> Delegates
                      </li>
                      <li className="list-group-item">
                        {" "}
                        <i className="bi bi-bookmarks-fill" /> Stakeholders
                      </li>
                      <li className="list-group-item">
                        <i className="bi bi-bookmarks-fill" /> Editorial Board
                        Members of Journals
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6 col-sm-12">
                    <ul className="list-group">
                      <li className="list-group-item">
                        {" "}
                        <i className="bi bi-bookmarks-fill" /> Faculty Scholars
                      </li>
                      <li className="list-group-item">
                        {" "}
                        <i className="bi bi-bookmarks-fill" /> Innovators
                      </li>
                      <li className="list-group-item">
                        {" "}
                        <i className="bi bi-bookmarks-fill" /> PhD Scholars
                      </li>
                      <li className="list-group-item">
                        {" "}
                        <i className="bi bi-bookmarks-fill" /> MBA/Msc. Students
                      </li>
                      <li className="list-group-item">
                        {" "}
                        <i className="bi bi-bookmarks-fill" /> Government
                        Officials
                      </li>
                      <li className="list-group-item">
                        {" "}
                        <i className="bi bi-bookmarks-fill" /> Technology
                        Experts
                      </li>
                      <li className="list-group-item">
                        {" "}
                        <i className="bi bi-bookmarks-fill" /> Students &
                        Alumini’s
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Benefits of Conference */}

              <div id="section2" className="mt-5">
                <h2>Benefits of Conference</h2>
                <p>
                  In today's fast-changing society, various issues emerge that
                  can slow down progress, To efficiently address these complex
                  problems, multidisciplinary research has become crucial. This
                  upcoming educational conference involves collaboration between
                  individuals from different fields, forming what we call a
                  multidisciplinary research team.
                </p>
                <p>
                  This collaboration, a subset of collaborative research, is a
                  key focus of "8th ICMDRSE." By promoting collaborative
                  multidisciplinary research, this event aims to bring together
                  diverse perspectives and offer participants valuable benefits.
                </p>

                <div>
                  <ul className="cs_list cs_style_1 cs_fs_16  cs_heading_font cs_mb_10 p-0">
                    <li>
                      <span className="cs_list_icon cs_center cs_accent_bg cs_white_color cs_radius_50">
                        <i className="bi bi-check" />
                      </span>
                      <span>
                        {" "}
                        <b className="cs_heading_color cs_semibold">
                          {" "}
                          Access to Expertise:
                        </b>{" "}
                        Meet with professionals in various fields to broaden
                        your knowledge and insights.
                      </span>
                    </li>
                    <li>
                      <span className="cs_list_icon cs_center cs_accent_bg cs_white_color cs_radius_50">
                        <i className="bi bi-check" />
                      </span>
                      <span>
                        {" "}
                        <b className="cs_heading_color cs_semibold">
                          {" "}
                          Out-of-the-Box Thinking:
                        </b>{" "}
                        Participate in conversations that inspire creative and
                        innovative approaches to solving problems.
                      </span>
                    </li>
                    <li>
                      <span className="cs_list_icon cs_center cs_accent_bg cs_white_color cs_radius_50">
                        <i className="bi bi-check" />
                      </span>
                      <span>
                        {" "}
                        <b className="cs_heading_color cs_semibold">
                          {" "}
                          Formal Division of Labour:{" "}
                        </b>{" "}
                        Study structured collaboration as a means of increasing
                        efficiency and productivity in research activities.
                      </span>
                    </li>
                    <li>
                      <span className="cs_list_icon cs_center cs_accent_bg cs_white_color cs_radius_50">
                        <i className="bi bi-check" />
                      </span>
                      <span>
                        {" "}
                        <b className="cs_heading_color cs_semibold">
                          Networking Opportunities:{" "}
                        </b>{" "}
                        Build beneficial connections with professionals to
                        create new partnerships and future prospects.
                      </span>
                    </li>
                    <li>
                      <span className="cs_list_icon cs_center cs_accent_bg cs_white_color cs_radius_50">
                        <i className="bi bi-check" />
                      </span>
                      <span>
                        {" "}
                        <b className="cs_heading_color cs_semibold">
                          Exchange of Knowledge & Skills:{" "}
                        </b>{" "}
                        Gain fresh knowledge, acquire new skills, and understand
                        a topic from different perspectives to contribute toward
                        personal and professional development.
                      </span>
                    </li>
                    <li>
                      <span className="cs_list_icon cs_center cs_accent_bg cs_white_color cs_radius_50">
                        <i className="bi bi-check" />
                      </span>
                      <span>
                        {" "}
                        <b className="cs_heading_color cs_semibold">
                          Increased Visibility of Work:{" "}
                        </b>{" "}
                        Present your findings to a larger audience and gain
                        recognition and visibility in your profession.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div id="section3" className="mt-5">
                <Objectives
                  title="Objective of the Conference"
                  description="This section outlines the core highlights and takeaways from the conference, emphasizing the importance of innovation and collaboration."
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
                    // Add more objectives here
                  ]}
                  showImage={false}
                />
              </div>
            </div>
            <div className="cs_height_20 cs_height_lg_20" />
            {/* <div className="cs_accordians_wrapper cs_style_1 p-0">
              {data.map((item, index) =>
                <div
                  key={index}
                  className={`cs_accordian cs_style_1 cs_type_1 ${index ===
                  openItemIndex
                    ? "active"
                    : ""}`}
                >
                  <div
                    className="cs_accordian_head"
                    onClick={() => handleItemClick(index)}
                  >
                    <h2 className="cs_fs_18 cs_semibold mb-0">
                      {item.title}
                    </h2>
                    <span className="cs_accordian_toggle">
                      <i className="bi bi-eye" />
                      <i className="bi bi-eye-slash" />
                    </span>
                  </div>
                  <div className="cs_accordian_body" ref={accordionContentRef}>
                    <p className="mb-0">
                      {item.desc}
                    </p>
                  </div>
                </div>
              )}
            </div> */}
          </div>
          <aside className="col-xl-3 col-lg-4">
            <div className="cs_sidebar cs_style_1 sticky-top">
              <div className="cs_sidebar_widget cs_accent_bg_light position-relative">
                <div className="cs_separator" />
                <h3 className="cs_sidebar_title cs_fs_30 cs_mb_43">
                  Categories
                </h3>
                <ul className="cs_categories cs_fs_16 cs_semibold cs_mp_0 service-list-two">
                  <li>
                    <Link
                      to="#section1"
                      onClick={(e) => handleScroll(e, "#section1")}>
                      <span>Who Can Attend?</span>
                      <span>
                        <i className="bi bi-arrow-right" />
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#section2"
                      onClick={(e) => handleScroll(e, "#section2")}>
                      <span>Benefits of Conference</span>
                      <span>
                        <i className="bi bi-arrow-right" />
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#section2"
                      onClick={(e) => handleScroll(e, "#section3")}>
                      <span>Objective of the Conference</span>
                      <span>
                        <i className="bi bi-arrow-right" />
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#section2"
                      onClick={(e) => handleScroll(e, "#section4")}>
                      <span>Conference Theme</span>
                      <span>
                        <i className="bi bi-arrow-right" />
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
              {/* <div className="cs_sidebar_widget cs_accent_bg">
                <div className="cs_card cs_style_6">
                  <h3 className="cs_fs_30 cs_white_color cs_mb_30">
                    Emergency Car Repair Services
                  </h3>
                  <div className="cs_card_icon cs_center cs_mb_32">
                    <img
                      src="/assets/img/icons/phone-call_2.svg"
                      alt="Phone Icon"
                    />
                  </div>
                  <p className="cs_white_color cs_mb_5">Requesting A Call</p>
                  <a
                    href="tel:+111(564)56825"
                    className="cs_call_text cs_fs_30 cs_bold cs_heading_font cs_mb_23"
                  >
                    +111 (564) 568 25
                  </a>
                  <p className="cs_card_subtitle cs_white_color cs_mb_33">
                    Invest in high-quality diagnostic tools, lifts, and other
                    essential repair equipment certified mechanics and provide
                  </p>
                  <Link to="/about" className="cs_card_btn">
                    <span>Read more</span>
                    <span>
                      <i className="bi bi-arrow-right" />
                    </span>
                  </Link>
                </div>
              </div> */}
            </div>
          </aside>
        </div>
      </div>
      <div className="cs_height_120 cs_height_lg_80" />
    </section>
  );
};

export default ServiceDetails;
