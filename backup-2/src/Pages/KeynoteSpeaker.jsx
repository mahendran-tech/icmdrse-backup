import React from "react";
import BreadCumb from "../Components/Common/BreadCumb";
import Team1 from "../Components/Team/Team1";

const KeynoteSpeaker = () => {
  return (
    <div className="serviceDetails">
      <BreadCumb
        bgImg="assets/img/page_heading_1.jpg"
        Title="Keynote Speakers"
      />
      <Team1 />
    </div>
  );
};

export default KeynoteSpeaker;
