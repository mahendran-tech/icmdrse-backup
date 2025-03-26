import {useState, useEffect} from "react";
import {Modal, Button} from "react-bootstrap";
import SectionTitle2 from "../Common/SectionTitle2";
import parse from "html-react-parser";

const SpeakerSection = ({title, speakerType, data}) => {
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
          ["Session Speakers", "Session Speaker"].includes(title)
            ? "cs_height_10 cs_height_lg_10"
            : "cs_height_80 cs_height_lg_80"
        }
      />

      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-12 d-flex justify-content-center">
            <h2 className="cs_section_title cs_fs_30 mb-4 wow pulse text-center">
              {title}
            </h2>
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
                      <p>No flag available</p>
                    )}
                  </div>
                  <div className="cs_team_thumbnail cs_mb_10">
                    <img src={item.img} alt="Team Member" />
                    <div
                      className="cs_social_btns cs_style_1 cs_white_bg"
                      style={{cursor: "pointer"}}
                      onClick={() => handleShowModal(item)}>
                      <p>View Bio</p>
                    </div>
                    <span className="cs_share_btn cs_center">
                      <i className="bi bi-dash" />
                      <i className="bi bi-plus" />
                    </span>
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

const Speakers = () => {
  const [data, setData] = useState([]);

  // Fetch JSON dynamically
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("assets/team1.json"); // Dynamically load the JSON file
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching team data:", error);
      }
    };

    fetchData();
  }, []);

  const keynoteSpeakers = data.filter(
    (item) => item.type === "Keynote Speakers"
  );
  const sessionSpeakers = data.filter(
    (item) => item.type === "Session Speakers"
  );

  return (
    <>
      {keynoteSpeakers.length > 0 && (
        <SpeakerSection
          title="Keynote Speakers"
          speakerType="Keynote Speakers"
          data={data}
        />
      )}
      {sessionSpeakers.length > 0 && (
        <SpeakerSection
          title={`Session Speaker${sessionSpeakers.length > 1 ? "s" : ""}`}
          speakerType="Session Speakers"
          data={data}
        />
      )}
    </>
  );
};

export default Speakers;
