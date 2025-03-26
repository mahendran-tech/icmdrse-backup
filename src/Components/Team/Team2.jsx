import { Link } from "react-router-dom";
import data from "../../Data/team1.json";

const Team2 = () => {
  return (
    <section>
      <div className="cs_height_120 cs_height_lg_80" />
      <div className="container">
        <div className="row cs_row_gap_30 cs_gap_y_30">
          {data.map((item, i) =>
            <div key={i} className="col-xl-3 col-sm-6 wow fadeInDown">
              <div className="cs_team cs_style_1 position-relative">
                <div className="cs_team_thumbnail cs_mb_10">
                  <img src={item.img} alt="Team Member Image" />
                  <div className="cs_social_btns cs_style_1 cs_white_bg">
                    <Link
                      to={item.linkedin}
                      className="cs_social_btn cs_center"
                    >
                      <i className="bi bi-linkedin" />
                    </Link>
                    <Link to={item.twitter} className="cs_social_btn cs_center">
                      <i className="bi bi-twitter" />
                    </Link>
                    <Link
                      to={item.facebook}
                      className="cs_social_btn cs_center"
                    >
                      <i className="bi bi-facebook" />
                    </Link>
                    <Link to={item.youtube} className="cs_social_btn cs_center">
                      <i className="bi bi-youtube" />
                    </Link>
                  </div>
                  <span className="cs_share_btn cs_center">
                    <i className="bi bi-dash" />
                    <i className="bi bi-plus" />
                  </span>
                </div>
                <div className="cs_team_info">
                  <h3 className="cs_fs_24 cs_semibold mb-0">
                    <Link to="/team/team-details">
                      {item.title}
                    </Link>
                  </h3>
                  <p className="cs_accent_color mb-0">
                    {item.desc}
                  </p>
                </div>
                <div className="cs_team_shape position-absolute">
                  <img
                    src="assets/img/shapes/team_shape_1.svg"
                    alt="Team Shape"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="cs_height_120 cs_height_lg_80" />
    </section>
  );
};

export default Team2;
