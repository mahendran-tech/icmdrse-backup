import {useState, useEffect} from "react";
import {Modal, Button} from "react-bootstrap";
import SectionTitle2 from "../Common/SectionTitle2";
import parse from "html-react-parser";

const SpeakerSection = ({title, speakerType, data, subtitle, title1}) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);

  const handleShowModal = (item) => {
    setSelectedMember(item);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedMember(null);
  };

  return (
    <section>
      <div
        className={
          [
            "Session Speakers",
            "Session Speaker",
            "Panel Discussion Speaker",
            "Exclusive Workshop Speaker",
            "Session Chairs",
            "Workshop Speaker",
            "Debate Speaker",
            "Moderators",
            "Registration Desk",
          ].includes(title)
            ? "cs_height_10 cs_height_lg_10"
            : "cs_height_80 cs_height_lg_80"
        }
      />

      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-12 d-flex flex-column justify-content-center">
            <h4 className="text-center"> {title1}</h4>
            <h2 className="cs_section_title cs_fs_30 mb-4 wow pulse text-center">
              {title}
            </h2>
            {subtitle && (
              <h6 className="text-center mb-4"> {parse(subtitle)} </h6>
            )}
          </div>
        </div>
        {/* <div className="cs_section_heading cs_style_1 cs_type_1 cs_mb_47">
          <SectionTitle2 Title={title} isCenter={true} /> 
           <div className="cs_section_heading_left">
            <SectionTitle2 Title={title} isCenter={true} />
          </div>
        </div> */}
        <div className="row d-flex justify-content-center cs_row_gap_30 cs_gap_y_30">
          {data
            .filter((item) => item.type === speakerType)
            .map((item, i) => (
              <div key={i} className="col-xl-3 col-sm-6 wow fadeInDown">
                <div className="cs_team cs_style_1 position-relative">
                  <div className="flag-div">
                    {/* <img src={item.flagUrl} alt="Flag" /> */}
                    {item.flagUrl ? (
                      <img
                        src={item.flagUrl}
                        alt="Flag"
                        style={{width: "40px", height: "25px"}}
                      />
                    ) : (
                      <p>{""}</p>
                    )}
                  </div>
                  <div className="cs_team_thumbnail cs_mb_10">
                    <img src={item.img} alt="Team Member" />
                    {/* Only show the button if item.bio exists */}
                    {item.bio && (
                      <>
                        <div
                          className="cs_social_btns cs_style_1 cs_white_bg"
                          style={{cursor: "pointer"}}
                          onClick={() => handleShowModal(item)}>
                          <p>View Bio</p>
                        </div>
                        <span className="cs_share_btn cs_center">
                          <i className="bi bi-dash" />
                          <i className="bi bi-plus" />
                        </span>{" "}
                      </>
                    )}
                  </div>
                  <div className="cs_team_info">
                    <h3 className="cs_fs_18 cs_semibold mb-0">{item.title}</h3>
                    <p
                      className="cs_accent_color cs_fs_14 mb-0 mt-2"
                      style={{lineHeight: "20px", fontWeight: 500}}>
                      {item.desc} <br />
                      <span className="cs_heading_color">
                        {parse(item.desc1)}
                      </span>
                    </p>
                  </div>
                  <div className="cs_team_shape position-absolute">
                    <img src="assets/img/team_shape_1.png" alt="Team Shape" />
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Modal for Speaker Details */}
      {selectedMember && (
        <Modal
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={showModal}
          onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <h5>{selectedMember.title}</h5>
          </Modal.Header>
          <Modal.Body>
            <div className="d-flex flex-column">
              <div>
                <p>{selectedMember.bio}</p>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
      <div className="cs_height_60 cs_height_lg_40" />
    </section>
  );
};

const Speakers = ({isShow}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("assets/team1.json");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching team data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {/* Always show these two categories */}
      <SpeakerSection
        title="Keynote Speakers"
        speakerType="Keynote Speakers"
        data={data}
      />
      <SpeakerSection
        title="Session Speakers"
        speakerType="Session Speakers"
        data={data}
      />

      {/* Show these only when isShow is true */}
      {isShow && (
        <SpeakerSection
          title="Panel Discussion Speaker"
          subtitle="<b>Tech-Driven Sustainability:</b> Pioneering Solutions Across Education, Nutrition, and Environment"
          speakerType="Panel Discussion Speaker"
          data={data}
        />
      )}
      {isShow && (
        <SpeakerSection
          title="Session Chairs"
          speakerType="Session Chairs"
          data={data}
        />
      )}
      {isShow && (
        <SpeakerSection
          title="Exclusive Workshop Speaker"
          // title1="Exclusive Workshop at SEGi University & Colleges"
          subtitle="<b>Workshop Title : </b> 'Breaking Into High-Impact Journals: A Roadmap for Emerging Scholars to Publish in Reputed Journals'"
          speakerType="Exclusive Workshop Speaker"
          data={data}
        />
      )}
      {isShow && (
        <SpeakerSection
          title="Workshop Speaker"
          speakerType="Workshop Speaker"
          data={data}
        />
      )}
      {isShow && (
        <SpeakerSection
          title="Debate Speaker"
          subtitle="<b>Title : </b> Research for Impact or Research for Publication: What Should Be the Priority"
          speakerType="Debate Speaker"
          data={data}
        />
      )}
      {isShow && (
        <SpeakerSection
          title="Moderators"
          speakerType="Moderators"
          data={data}
        />
      )}
      {isShow && (
        <SpeakerSection
          title="Registration Desk"
          speakerType="Registration Desk"
          data={data}
        />
      )}
    </>
  );
};

export default Speakers;
