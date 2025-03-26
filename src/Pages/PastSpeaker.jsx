import React from "react";
import TopContent from "../Components/Icmdrse/TopContent";
import BreadCumb from "../Components/Common/BreadCumb";
import {Helmet} from "react-helmet-async";
const PastSpeaker = () => {
  return (
    <>
      <Helmet>
        <title>
          Past ICMDRSE Conference Speakers – Insights from Industry Leaders
        </title>
        <meta
          name="description"
          content="Explore the profiles of past ICMDRSE conference speakers, featuring global experts who have presented pioneering research in Multi-Disciplinary Research Studies and Education. Learn from industry leaders and innovators who shape advancements in these fields"
        />
      </Helmet>
      <div className="serviceDetails">
        <BreadCumb
          bgImg="assets/img/page_heading_1.jpg"
          Title="Past Conference Speakers"
        />
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-lg-10 col-sm-12">
              <div className="border border-2 rounded mt-2">
                <TopContent
                  title="International Speakers"
                  image="https://cdn.iferp.in/conf-img/2024/international-past-speaker.jpg"
                />
              </div>

              <div className="border border-2 rounded mt-2">
                <TopContent
                  title="National Speakers"
                  image="https://cdn.iferp.in/conf-img/2024/national-past-speaker.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PastSpeaker;
