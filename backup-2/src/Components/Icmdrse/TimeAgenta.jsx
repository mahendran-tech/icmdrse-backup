import React, {useState} from "react";
import {Table, Container, Row, Col, Form, Image} from "react-bootstrap";

// Available Timezones (Country -> Timezone Mapping)
const countryTimezones = {
  "India (IST)": "Asia/Kolkata",
  "Malaysia (MYT)": "Asia/Kuala_Lumpur",
  "USA (EST)": "America/New_York",
  "UK (GMT)": "Europe/London",
};

// Speaker Data
const speakerInfo = {
  "Assoc. Prof Dr Nor ' Adha Binti Ab Hamid": {
    img: "https://via.placeholder.com/100",
    title:
      "Faculty Of Sharia And Law (FSU), Universiti Islam Selangor, Malaysia",
  },
  "Prof. Dr. Nalin Abeysekera": {
    img: "https://via.placeholder.com/100",
    title:
      "Dean, Faculty of Management Studies, The Open University of Sri Lanka",
  },
  "Dr. Anu Sayal": {
    img: "https://via.placeholder.com/100",
    title: "Faculty of Business and Law, Taylor’s University, Malaysia",
  },
  "Prof. Ts. Dr. Norazah Mohd Suki": {
    img: "https://via.placeholder.com/100",
    title:
      "Deputy Dean, Othman Yeop Abdullah Graduate School of Business (OYAGSB), Malaysia",
  },
  "Prof. Dr. Ridwan Sanjaya": {
    img: "https://via.placeholder.com/100",
    title:
      "Department of Information Systems, Soegijapranata Catholic University (SCU), Indonesia",
  },
  "Assoc Prof. Dr Hoshang Kolivand": {
    img: "https://via.placeholder.com/100",
    title: "Liverpool John Moores University, United Kingdom",
  },
};

// Conference Schedule Data (Stored in GMT for conversion)
const agendaData = [
  {
    day: "Day 1 - 22nd May 2025",
    sessions: [
      {
        time: "2025-05-22T03:20:00Z",
        endTime: "2025-05-22T03:30:00Z",
        title: "Registration Desk",
      },
      {
        time: "2025-05-22T03:30:00Z",
        endTime: "2025-05-22T03:35:00Z",
        title: "National Anthem of Malaysia",
      },
      {
        time: "2025-05-22T03:35:00Z",
        endTime: "2025-05-22T03:40:00Z",
        title: "National Anthem of India",
      },
      {
        time: "2025-05-22T04:00:00Z",
        endTime: "2025-05-22T04:30:00Z",
        title: "Speech by Keynote Speaker",
        speaker: "Assoc. Prof Dr Nor ' Adha Binti Ab Hamid",
      },
      {
        time: "2025-05-22T04:30:00Z",
        endTime: "2025-05-22T05:00:00Z",
        title: "Speech by Session Speaker",
        speaker: "Prof. Dr. Nalin Abeysekera",
      },
    ],
  },
  {
    day: "Day 2 - 23rd May 2025",
    sessions: [
      {
        time: "2025-05-23T03:30:00Z",
        endTime: "2025-05-23T03:40:00Z",
        title: "Welcome Speech by Moderator",
      },
      {
        time: "2025-05-23T03:50:00Z",
        endTime: "2025-05-23T04:20:00Z",
        title: "Speech by Keynote Speaker",
        speaker: "Prof. Dr. Ridwan Sanjaya",
      },
      {
        time: "2025-05-23T05:40:00Z",
        endTime: "2025-05-23T06:00:00Z",
        title: "Speech by Keynote Speaker",
        speaker: "Assoc Prof. Dr Hoshang Kolivand",
      },
    ],
  },
];

// Convert UTC time to the selected country's timezone format
const convertTime = (utcTime, timezone) => {
  const date = new Date(utcTime);
  return new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: timezone,
  }).format(date);
};

const TimeAgenta = () => {
  const [selectedCountry, setSelectedCountry] = useState("India (IST)"); // Default country

  return (
    <Container className="mt-4">
      <h4 className="text-center mb-4">ICMDRSE 2025 Tentative Agenda</h4>

      {/* Country Selection Dropdown */}
      <Row className="mb-3  conference-form">
        <Col md={4}>
          <Form.Select
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}>
            {Object.keys(countryTimezones).map((country, index) => (
              <option key={index} value={country}>
                {country}
              </option>
            ))}
          </Form.Select>
        </Col>
      </Row>

      {agendaData.map((dayData, index) => (
        <div key={index} className="mb-5">
          <h4 className="text-primary">{dayData.day}</h4>
          <div className="table-responsive">
            <Table striped bordered hover>
              <thead className="bg-dark text-white">
                <tr>
                  <th style={{width: "25%"}}>Time ({selectedCountry})</th>
                  <th>Session</th>
                </tr>
              </thead>
              <tbody>
                {dayData.sessions.map((session, idx) => (
                  <tr key={idx}>
                    <td>
                      {convertTime(
                        session.time,
                        countryTimezones[selectedCountry]
                      )}{" "}
                      -{" "}
                      {convertTime(
                        session.endTime,
                        countryTimezones[selectedCountry]
                      )}
                    </td>
                    <td>
                      <strong>{session.title}</strong>
                      {session.speaker && speakerInfo[session.speaker] && (
                        <div className="d-flex align-items-center mt-2">
                          <Image
                            src={speakerInfo[session.speaker].img}
                            roundedCircle
                            width="50"
                            height="50"
                            className="me-3"
                          />
                          <div>
                            <strong>{session.speaker}</strong>
                            <br />
                            <small>{speakerInfo[session.speaker].title}</small>
                          </div>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      ))}
    </Container>
  );
};

export default TimeAgenta;
