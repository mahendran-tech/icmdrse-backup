import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import PricingCard from "../Pricing/PricingCard";
import ConferenceForm from "./ConferenceForm";
import EligibilityCriteria from "./EligibilityCriteria";

const Committee = () => {
  const [isActive, setIsActive] = useState("monthly");
  return (
    <section className="cs_tabs cs_style_1 position-relative">
      <div className="container">
        <div className="cs_section_heading cs_style_1 cs_type_1 cs_mb_47">
          <div className="cs_section_heading_left">
            <SectionTitle
              Title={
                isActive === "monthly"
                  ? "Apply For Committee Members"
                  : "Eligibility criteria"
              }
            />
          </div>
        </div>
        <ul className="cs_tab_links cs_style_1 cs_type_1 cs_fs_18 cs_semibold cs_heading_color cs_heading_font cs_mp_0 wow fadeInUp">
          <li
            className={`${isActive === "monthly" ? "active" : ""}`}
            onClick={() => setIsActive("monthly")}
          >
            <a>Application form</a>
          </li>
          <li
            className={`${isActive === "yearly" ? "active" : ""}`}
            onClick={() => setIsActive("yearly")}
          >
            <a>Eligibility criteria </a>
          </li>
        </ul>
        <div className="cs_tab_body">
          <div className={`cs_tab ${isActive === "monthly" ? "active" : ""}`}>
            <div className="row cs_row_gap_30 cs_gap_y_30 justify-content-center">
              <ConferenceForm />
            </div>
          </div>
          <div className={`cs_tab ${isActive === "yearly" ? "active" : ""}`}>
            <div className="row cs_row_gap_30 cs_gap_y_30 justify-content-center">
              <EligibilityCriteria setActive={setIsActive} />
            </div>
          </div>
        </div>
        <div className="cs_height_120 cs_height_lg_80" />
      </div>
    </section>
  );
};

export default Committee;
