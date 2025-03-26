import {useEffect} from "react";
// import data from "../../Data/counter.json";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import parse from "html-react-parser";
import {useState} from "react";
import axios from "axios";

const Counter1 = () => {
  const [importantDates, setImportantDates] = useState([]);
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://www.icmdrse.com/API/impdates.php"
        );
        setImportantDates(response.data.important_dates); // Extract only important_dates
        console.log(importantDates);
      } catch (error) {
        console.error("Error fetching important dates:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section
      className="cs_counter cs_style_1 cs_heading_bg cs_bg_filed position-relative"
      data-background="assets/img/footer_bg.jpg">
      <div className="cs_counter_overlay cs_heading_bg position-absolute" />
      <div className="cs_height_120 cs_height_lg_80" />
      <div className="container">
        <div className="cs_height_0 cs_height_lg_60" />
        <div className="cs_section_heading cs_style_1 cs_mb_47">
          <h2 className="cs_section_title cs_fs_30 cs_white_color mb-0">
            IMPORTANT DATES
          </h2>
        </div>
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
                  <h3 className="cs_iconbox_number cs_fs_16 cs_white_color cs_mb_2">
                    <span>{parse(item.idatemenu)}</span>
                  </h3>
                  <p className="cs_white_color mb-0">{item.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="cs_height_120 cs_height_lg_80" />
    </section>
  );
};

export default Counter1;
