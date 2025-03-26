import React from "react";
import {Container} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const UpgradeModal = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [earlyBird, setEarlyBird] = React.useState(false);

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <h5 className="text-center"> Premium Membership Benefits</h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row d-flex justify-content-center">
            <h6 className="text-center">
              Certificates will be provided for Premium members
            </h6>
            <p className="text-left">
              Joining the IFERP Premium Membership community allows you to
              network with other like-minded individuals, and focus on your
              professional development skills as you progress through academics
              and into your professional journey.
            </p>
            <div className="col-lg-6 mt-2">
              <div className="inner-column">
                <ul className="list-style-three-1">
                  <li> Digital Interface for Virtual Partnership.</li>
                  <li> Financial Discount on IFERP Conferences.</li>
                  <li>
                    {" "}
                    Financial Discount on IFERP Webinars and Scientific Events.
                  </li>
                  <li>
                    {" "}
                    Obtain Permission to Publish in Reputable High Impact
                    Journals Journals.
                  </li>
                  <li> Zero Plagiarism Study for Research articles.</li>
                  <li>
                    {" "}
                    Possibility to become a Co-Supervisor depending on the
                    profile.
                  </li>
                  <li>
                    {" "}
                    Come, and be a part of the thriving tech innovation
                    community by becoming a full-fledged IFERP premium member
                    today.
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 mt-2">
              <div>
                <img
                  src="https://www.icmdrse.com/img/Premium-Membership.png"
                  alt=""
                  style={{width: "65%"}}
                />
              </div>
            </div>
          </div>
        </Modal.Body>
        {/* <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer> */}
      </Modal>
    );
  }

  function MyVerticallyCentered(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <h5 className="text-center"> Early Bird Benefits</h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row d-flex justify-content-center">
            <div className="col-lg-12 mt-2">
              <div className="inner-column">
                <ul className="list-style-three-1">
                  <li>
                    {" "}
                    <b>Cost Savings: </b> Enjoy significant savings on
                    registration fees by taking advantage of our Early Bird
                    rates. This is your opportunity to attend a world-class
                    conference at a more affordable price.
                  </li>
                  <li>
                    {" "}
                    <b>Priority Access:</b> Be at the forefront of the
                    conference experience. Early Bird registrants gain priority
                    access to high-demand sessions, workshops, and networking
                    events, ensuring you don't miss out on any key aspect of the
                    conference.
                  </li>
                  <li>
                    {" "}
                    <b>Exclusive Materials:</b> Gain early access to conference
                    materials, research papers, and pre-conference resources
                    through IFERP Dashboard. Stay ahead by delving into the
                    content that will be discussed and presented during the
                    event.
                  </li>
                  <li>
                    {" "}
                    <b>Special Offers: </b> Enjoy additional perks such as
                    exclusive networking opportunities, and access to special
                    sessions designed to enhance your overall conference
                    experience.
                  </li>
                  <li>
                    {" "}
                    <b>Flexibility: </b>
                    Benefit from more flexible Submission policies. Early Bird
                    registrants often have greater flexibility in making changes
                    to their Research paper, Presentation ppt and preferable
                    Presentation time slot , providing you with added
                    convenience.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Modal.Body>
        {/* <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer> */}
      </Modal>
    );
  }

  return (
    <Container>
      <div className="row mt-4">
        <div className="col-lg-6 col-sm-12">
          <div className="comman-area d-flex flex-column ">
            <h6
              className="text-white text-center mb-0"
              style={{fontWeight: "500"}}>
              Upgrade to IFERP Premium Membership and Get 10% discount on
              Registration Fee{" "}
              <span
                style={{color: "#ef0f3a", fontSize: "18px", lineHeight: "2"}}>
                Unlock 10% Discount{" "}
              </span>{" "}
            </h6>
            <div className="mx-auto">
              <button
                onClick={() => setModalShow(true)}
                className="cs_text_btn cs_style_1 cs_white_bg cs_heading_color cs_bold">
                <span className="cs_btn_text text-uppercase">
                  Premium Membership Benefits{" "}
                </span>
                <span className="cs_btn_icon cs_center">
                  <i className="bi bi-arrow-right" />
                  <i className="bi bi-arrow-right" />
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-sm-12">
          <div
            className="comman-area h-100 d-flex flex-column justify-content-center align-item-center"
            style={{backgroundColor: "#ef0f3a"}}>
            <h6 className="text-white text-center " style={{fontWeight: "500"}}>
              Early Bird Benefits
            </h6>
            <div className="mx-auto">
              <button
                onClick={() => setEarlyBird(true)}
                className="cs_text_btn cs_style_1 cs_white_bg cs_heading_color cs_bold">
                <span className="cs_btn_text text-uppercase">Know More </span>
                <span className="cs_btn_icon cs_center">
                  <i className="bi bi-arrow-right" />
                  <i className="bi bi-arrow-right" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <MyVerticallyCentered
        show={earlyBird}
        onHide={() => setEarlyBird(false)}
      />
    </Container>
  );
};

export default UpgradeModal;
