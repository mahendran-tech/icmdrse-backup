import React from "react";
import TopContent from "../Components/Icmdrse/TopContent";
import BreadCumb from "../Components/Common/BreadCumb";

const PastSpeaker = () => {
  return (
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
  );
};

export default PastSpeaker;
