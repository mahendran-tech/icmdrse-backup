import React, {useState} from "react";
import {Table, Container, Row, Col, Card, Image} from "react-bootstrap";
import parse from "html-react-parser";

// Speaker Data with Images
const speakerInfo = {
  "Assoc. Prof Dr Nor  Adha Binti Ab Hamid": {
    img: "assets/img/icmdrse-ks-3.jpg",
    title:
      "Faculty Of Sharia And Law (FSU),Centre Of Postgraduate Studies (PPS),Universiti Islam Selangor (UIS), Malaysia",
  },
  "Prof. Dr. Nalin Abeysekera": {
    img: "assets/img/ses-spk-1.jpg",
    title:
      "Dean, Faculty of Management Studies, The Open University of Sri Lanka",
  },
  "Dr. Anu Sayal": {
    img: "assets/img/icmdrse-ks-4.jpg",
    title:
      "Faculty of Business and Law, School of Accounting and Finance,Taylor’s University,Malaysia.",
  },
  "Prof. Ts. Dr. Norazah Mohd Suki": {
    img: "assets/img/icmdrse-ks-5.jpg",
    title:
      "Professor of Marketing & E-Commerce, Deputy Dean of Research, Innovation & Corporate Relations,Othman Yeop Abdullah Graduate School of Business (OYAGSB),Malaysia.",
  },
  "Dr. Jyothi AP": {
    img: "assets/img/icmdrse-kspk-6.jpg",
    title:
      "Faculty of Engineering and Technology,Department of CSE,M.S Ramaiah University Of Applied Sciences,India.",
  },
  "Assoc Prof. Dr Hoshang Kolivand": {
    img: "assets/img/icmdrse-kspk-7.jpg",
    title: "Liverpool John Moores University, United Kingdom.",
  },
  "Assoc. Prof. Ts. Ir. Dr. Mohammad Lutfi Bin Othman, PEPC ": {
    img: "assets/img/icmdrse-kspk-8.png",
    title:
      "ACPE PTech CEng REEM CPMV,Universiti Putra Malaysia Selangor, Malaysia.",
  },
};

// Conference Schedule Data
const agendaData = [
  {
    day: "Day 1 - 22nd May 2025",
    sessions: [
      {time: "08:50 AM - 09:00 AM", title: "Registration Desk"},
      {time: "09:00 AM - 09:05 AM", title: "National Anthem of Malaysia"},
      {time: "09:05 AM - 09:10 AM", title: "National Anthem of India"},
      {time: "09:10 AM - 09:20 AM", title: "Welcome Speech by Moderator"},
      {
        time: "09:30 AM - 10:00 AM",
        title: "Speech by Keynote Speaker",
        speaker: "Assoc. Prof Dr Nor  Adha Binti Ab Hamid",
      },
      {
        time: "10:00 AM - 10:30 AM",
        title: "Speech by Session Speaker",
        speaker: "Prof. Dr. Nalin Abeysekera",
      },
      {
        time: "10:30 AM - 11:00 AM",
        title: "Speech by Session Speaker",
        speaker: "Dr. Anu Sayal",
      },
      {time: "11:00 AM - 11:10 AM", title: "Photographic Session"},
      {time: "11:10 AM - 11:20 AM", title: "Refreshment Break"},
      {time: "11:20 AM - 11:40 AM", title: "Speech by Session Speaker"},
      {time: "11:40 AM - 12:30 PM", title: "Technical Session I"},
      {time: "12:30 PM - 01:30 PM", title: "Lunch break"},
      {
        time: "01:30 PM - 01:50 PM",
        title: "Speech by Keynote Speaker",
        speaker: "Prof. Ts. Dr. Norazah Mohd Suki",
      },
      {time: "01:50 PM - 03:00 PM", title: "Technical Session II"},
      {time: "03:00 PM - 03:10 PM", title: "Refreshment Break"},
      {time: "03:10 PM - 03:20 PM", title: "Valedictory"},
      {time: "03:20 PM - 03:40 PM", title: "Vote of Thanks"},
    ],
  },

  {
    day: "Day 2 - 23rd May 2025",
    sessions: [
      {time: "09:00 AM - 09:10 AM", title: "Welcome Speech by Moderator"},
      {time: "09:10 AM - 09:20 AM", title: "Welcome Speech by "},
      {
        time: "09:20 AM - 09:50 AM",
        title: "Speech by Exclusive Event Speaker ",
      },
      {
        time: "09:50 AM - 10:20 AM",
        title: "Speech by Keynote Speaker",
        speaker: "Dr. Jyothi AP",
      },
      {
        time: "10:20 AM - 11:40 PM",
        title: "Technical Session 1 A <br/> Technical Session 1 B ",
      },
      {
        time: "11:40 AM - 12:00 PM",
        title: "Speech by Keynote Speaker",
        speaker: "Assoc Prof. Dr Hoshang Kolivand",
      },
      {
        time: "12:00 PM - 01:00 PM",
        title: "Lunch Break",
      },
      {
        time: "01:00 PM - 01:20 PM",
        title: "Speech by Keynote Speaker",
        speaker: "Assoc. Prof. Ts. Ir. Dr. Mohammad Lutfi Bin Othman, PEPC ",
      },
      {
        time: "01:20 PM - 01:40 PM",
        title: "Speech by Session Speaker ",
      },
      {
        time: "01:20 PM - 03:00 PM",
        title: "Technical Session II A <br/> Technical Session II B ",
      },
      {
        time: "03:00 PM - 03:20 PM",
        title: "Speech by Session Speaker",
      },
      {
        time: "03:20 PM - 05:00 PM",
        title: "Technical Session III A <br/> Technical Session III B ",
      },
      {
        time: "05:00 PM - 05:10 PM",
        title: "Valedictory",
      },
      {
        time: "05:10 PM - 05:20 PM",
        title: "Vote of Thanks",
      },
    ],
  },
];

const ConferenceAgenda = () => {
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);

  // Function to handle speaker cell click
  const handleSpeakerClick = (speaker) => {
    setSelectedSpeaker(
      speakerInfo[speaker] ? {name: speaker, ...speakerInfo[speaker]} : null
    );
  };

  return (
    <Container className="mt-4">
      <h4 className="text-center mb-4 ">ICMDRSE 2025 Tentative Agenda</h4>
      {agendaData.map((dayData, index) => (
        <div key={index} className="mb-5">
          <h4 className="text-primary text-xl-center">{dayData.day}</h4>
          <Row className="d-flex justify-content-center">
            {/* Left Column - Table */}
            <Col lg={10} md={12}>
              <div className="table-responsive">
                <Table striped bordered hover className="table-style">
                  <thead className="bg-dark text-white">
                    <tr>
                      <th style={{width: "25%"}}>Time</th>
                      <th>Session</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dayData.sessions.map((session, idx) => (
                      <tr key={idx}>
                        <td>{session.time}</td>
                        <td
                          style={{
                            cursor: session.speaker ? "pointer" : "default",
                            fontWeight: session.speaker ? "bold" : "normal",
                          }}>
                          {parse(session.title)}
                          {session.speaker && (
                            <>
                              {session.speaker &&
                                speakerInfo[session.speaker] && (
                                  <div className="d-flex align-items-center">
                                    <Image
                                      src={speakerInfo[session.speaker].img}
                                      roundedCircle
                                      width="60"
                                      height="60"
                                      className="me-2"
                                    />
                                    <div>
                                      <strong style={{color: "#ef0f3a"}}>
                                        {session.speaker}
                                      </strong>
                                      <br />
                                      <small
                                        style={{
                                          lineHeight: "16px",
                                          fontWeight: "400",
                                        }}>
                                        {parse(
                                          speakerInfo[session.speaker].title
                                        )}
                                      </small>
                                    </div>
                                  </div>
                                )}
                            </>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </Col>
          </Row>
        </div>
      ))}
    </Container>
  );
};

export default ConferenceAgenda;
