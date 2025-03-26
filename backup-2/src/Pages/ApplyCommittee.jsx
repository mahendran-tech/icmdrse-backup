import React from "react";
import BreadCumb from "../Components/Common/BreadCumb";
import TopContent from "../Components/Icmdrse/TopContent";
import Committee from "../Components/Icmdrse/Committee";

const ApplyCommittee = () => {
  return (
    <div className="serviceDetails">
      <BreadCumb bgImg="assets/img/page_heading_1.jpg" Title="Committee" />
      <TopContent
        title="Apply For Committee Members"
        content="Do you have a passion for organizing events and fostering collaboration? As a Committee Member, you’ll help shape the future of our conferences and play a key role in creating memorable experiences. Bring your expertise and energy to our dynamic team and leave a lasting mark on our community.<br> Apply now and become part of something impactful!"
        hltext="Join Our Committee and Make an Impact!"
      />

      <Committee />
    </div>
  );
};

export default ApplyCommittee;
