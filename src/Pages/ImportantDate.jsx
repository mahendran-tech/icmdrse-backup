import React from "react";
import BreadCumb from "../Components/Common/BreadCumb";
import SectionTitle2 from "../Components/Common/SectionTitle2";
// import data from "../Data/counter.json";
import parse from "html-react-parser";
import {useState, useEffect} from "react";
import "../Components/Icmdrse/Card.css";
import axios from "axios";
import {Helmet} from "react-helmet-async";

const ImportantDate = () => {
  const [importantDates, setImportantDates] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://www.icmdrse.com/API/impdates.php"
        );
        setImportantDates(response.data.important_dates);
        console.log(importantDates);
      } catch (error) {
        console.error("Error fetching important dates:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Helmet>
        <title>
          International Conference Malaysia | May Month Conference | ICMDRSE
          2025
        </title>
        <meta
          name="description"
          content="Stay informed about important dates for ICMDRSE 2025, including registration deadlines, abstract submissions, and conference dates."
        />
      </Helmet>
      <div className="serviceDetails">
        <BreadCumb
          bgImg="assets/img/page_heading_1.jpg"
          Title="Important dates"
        />
        <section>
          <div className="container">
            <div className="cs_height_50 cs_height_lg_50" />
            <div className="row cs_row_gap_40 cs_gap_y_40 align-items-center">
              <div className="col-lg-12">
                <div className="cs_section_heading cs_style_1 cs_mb_10">
                  <SectionTitle2 Title="Important dates" />
                  <p className="mt-2 fw-bold">
                    Get ready to mark your calendars for ICMDRSE 2025! Here's a
                    quick look at the key dates you won't want to miss:
                  </p>
                </div>

                <div className="cs_height_108 cs_height_lg_0" />
              </div>
            </div>
          </div>
        </section>
        <div className="container">
          <div className="row cs_gap_y_40">
            {importantDates.map((item, i) => (
              <div key={i} className="col-lg-3 col-sm-6">
                <div className="cs_iconbox cs_style_4">
                  <div className="cs_iconbox_icon cs_center">
                    <img
                      src="assets/img/icons/counter_icon_1.svg"
                      alt="Counter Icon"
                    />
                  </div>
                  <div className="cs_iconbox_info">
                    <h3 className="cs_iconbox_number cs_fs_16  cs_mb_2">
                      <span>{parse(item.idatemenu)}</span>
                    </h3>
                    <p className=" mb-0">{item.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="cs_height_108 cs_height_lg_0" />
      </div>
    </>
  );
};

export default ImportantDate;
