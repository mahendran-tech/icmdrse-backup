import React from "react";
import BreadCumb from "../Components/Common/BreadCumb";
import Brand1 from "../Components/Brand/Brand1";
import TopContent2 from "../Components/Icmdrse/TopContent2";
import TopContent from "../Components/Icmdrse/TopContent";

import Process from "../Components/Process/Process";
import LeftTabsExample from "../Components/Common/LeftTabsExample";

const PublicationOpp = () => {
  const journals = [
    {
      title:
        "International Journal on Recent and Innovation Trends in Computing and Communication",
      imageUrl: "https://www.icmdrse.com/old-2024/img/ijri.png",
      issn: "2321-8169",
    },
    {
      title:
        "International Journal of Communication Networks and Information Security",
      imageUrl: "https://cdn.iferp.in/conf-img/2024/temp/ijcnis.jpg",
      issn: "2073-607X",
    },
    {
      title:
        "International journal of Intelligent Systems and Applications in Engineering",
      imageUrl: "https://cdn.iferp.in/conf-img/2024/temp/ijisae.jpg",
      issn: "2147-6799",
    },
    {
      title: "African Journal of Biological Sciences.",
      imageUrl: "https://www.icmdrse.com/old-2024/img/pub-7.png",
      issn: "2663-2187",
    },
    {
      title: "Proceedings on Engineering Sciences",
      imageUrl: "https://cdn.iferp.in/iferp-journal/j7.png",
      issn: "2620-2832",
    },
    {
      title: "International Journal of Professional Business Review",
      imageUrl: "https://cdn.iferp.in/iferp-journal/j9.png",
      issn: "2525-3654",
    },
    {
      title: "SN Computer Science",
      imageUrl: "https://cdn.iferp.in/iferp-journal/SN.png",
      issn: "2662-995XE-ISSN:2661-8907",
    },
    {
      title: "Journal of Law and Sustainable Development",
      imageUrl: "https://cdn.iferp.in/iferp-journal/sd.png",
      issn: "2764-4170",
    },
    {
      title: "Gigiena i sanitariia",
      imageUrl: "https://cdn.iferp.in/iferp-journal/gs.png",
      issn: "2412-0650",
    },
    {
      title:
        "Boletin de Malariologia y Salud Ambiental(Malariology and Environmental Health Bulletin)",
      imageUrl: "https://cdn.iferp.in/iferp-journal/boletin.png",
      issn: "1690-4648",
    },
    {
      title: "NanoWorld Journal",
      imageUrl: "https://cdn.iferp.in/iferp-journal/nano.png",
      issn: "2379-1101",
    },
    {
      title: "Advances in Science and Technology Research Journal (ASTRJ)",
      imageUrl: "https://cdn.iferp.in/iferp-journal/astrj.png",
      issn: "2299-8624",
    },
    {
      title: "Applied Mathematics & Information Sciences",
      imageUrl: "https://cdn.iferp.in/iferp-journal/amis.png",
      issn: "2325-0399 (ONLINE) | ISSN : 1935-0090 (PRINT)",
    },
    {
      title: "Applied Computing and Informatics",
      imageUrl: "https://cdn.iferp.in/iferp-journal/aci.png",
      issn: "2634-1964E | ISSN : 2210-8327",
    },
    {
      title: "Applied Computer Science",
      imageUrl: "https://cdn.iferp.in/iferp-journal/acs.png",
      issn: "1895-3735E | ISSN : 2353-6977",
    },
    {
      title: "Journal of Advanced Zoology",
      imageUrl: "https://cdn.iferp.in/iferp-journal/jaz.png",
      issn: "0253-7214",
    },
  ];

  const journals2 = [
    {
      title:
        "Technoarete Transactions on Industrial Robotics and Automation Systems",
      issn: "2583-1941",
    },
    {
      title:
        "Technoarete Transactions on Advances in Social Sciences and Humanities",
      issn: "2583-1127",
    },
    {
      title:
        "Technoarate Transactions on Entrepreneurship and International Business",
      issn: "2583-3731",
    },
    {
      title: "Transaction on Biomedical Engineering Applications, Healthcare",
      issn: "2582-7405",
    },
    {
      title: "International Journal of Agro Nutrifood Practices",
      issn: "2583-066X",
    },
    {
      title: "Technoarete Transactions on Economics and Business Systems",
      issn: "2583-4649",
    },
    {
      title: "Neurocosm International Journal",
      issn: "2582-7480",
    },
    {
      title:
        "Technoarete Transactions on Application of Information and Communication Technology(ICT) in Education",
      issn: "2583-3154",
    },
  ];

  return (
    <div className="serviceDetails">
      <BreadCumb
        bgImg="assets/img/page_heading_1.jpg"
        Title="Publication Opportunities"
      />
      <TopContent2
        title="Publication Opportunities"
        content="Start your journey to recognition by publishing your research with ICMDRSE 2025. We prioritize publication ethics, ensuring that your work is subjected to thorough peer review by subject-matter experts. We believe in preserving the integrity of the peer-review publication process, which is essential in academia. With our commitment to assisting you throughout your research publication journey, ICMDRSE 2025 provides a platform where your work can gain the recognition it deserves."
        hltext="“Set out on a transformative research publication journey with our dedicated support!”"
      />
      <Brand1 title="Indexing Database" />
      <TopContent
        title="PEER-REVIEWED SCOPUS-INDEXED JOURNALS"
        content="Explore our selection of prestigious Scopus-Indexed Peer-Reviewed Journals, ensuring quality and reliability in research publications at 8th ICMDRSE.">
        <div className="cs_height_50 cs_height_lg_0" />
        <div className="container">
          <div className="row d-flex justify-content-center row-gap-5">
            {journals.map((item, index) => (
              <div key={index} className="col-lg-4 col-md-6 col-sm-12 mt-80">
                <div className="journal-con">
                  <div className="journal-img">
                    <img src={item.imageUrl} alt="" />
                  </div>
                  <div className="journal-content">
                    <h6>{item.title}</h6>
                    <hr className="m-0" />

                    <p>
                      <b>ISSN:</b> {item.issn}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            ;
          </div>
          {/* <div className="cs_height_50 cs_height_lg_0" /> */}
        </div>
      </TopContent>

      <TopContent
        title="Google Scholar Journals"
        content="Discover handpicked Google Scholar Journals for 8th ICMDRSE, which provide a variety of academic insights. Choose a journal that fits your research needs.">
        <div className="cs_height_50 cs_height_lg_0" />
        <div className="container">
          <div className="row d-flex justify-content-start row-gap-3">
            {journals2.map((item, index) => (
              <div key={index} className="col-lg-4 col-md-6 col-sm-12 mt-40">
                <div className="journal-con-1">
                  <div className="journal-content">
                    <h6>{item.title}</h6>

                    <hr className="m-0 w-75 mx-auto" />
                    <p className="m-0">ISSN : {item.issn}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* <div className="cs_height_50 cs_height_lg_0" /> */}
        </div>
      </TopContent>

      <Process />

      <div className="container">
        <div className="row">
          <LeftTabsExample />
        </div>
      </div>
    </div>
  );
};

export default PublicationOpp;
