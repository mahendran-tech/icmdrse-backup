import React from "react";
import TopContent from "../Components/Icmdrse/TopContent";
import BreadCumb from "../Components/Common/BreadCumb";
import CommitteeMembers from "../Components/Icmdrse/CommitteeMembers";

const CommitteMember = () => {
  return (
    <div className="serviceDetails">
      <BreadCumb bgImg="assets/img/page_heading_1.jpg" Title="Committee" />

      <TopContent
        title="Organizing Committee Member"
        content="Meet the creative minds that work behind the scenes! Our conference's Organizing Committee Members are its beating heart — they put forth endless effort to make sure every little detail is flawless. Their commitment and knowledge mould the event, transforming concepts into a smooth execution. We would like to express our gratitude to these amazing people whose efforts have made our conference a huge success!"
      />

      {/* <h5 className="mb-3 text-center">--- Will be Updated Soon --- </h5> */}

      <CommitteeMembers />
      <div className="cs_height_108 cs_height_lg_0" />
    </div>
  );
};

export default CommitteMember;
