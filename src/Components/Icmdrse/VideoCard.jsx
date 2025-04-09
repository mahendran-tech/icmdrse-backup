import {Card, Container, Row} from "react-bootstrap";
import SectionTitle2 from "../Common/SectionTitle2";

const speakers = [
  {
    name: "Assoc Prof Ts. Dr. Goh Wei Wei",
    designation: "Head of Department",
    company: "School of Computer Science,Taylor’s University,",
    location: "Malaysia.",
    videoSrc: "https://cdn.iferp.in/video/2025/icmdrse/Dr-Goh-Wei.mp4",
    posterSrc: "https://cdn.iferp.in/video/2025/icmdrse/gohwei-icmdrse.png",
  },
  {
    name: "Prof. Dr. Nitin Dhote",
    designation: "Professor and Head",
    company:
      "Electrical Engineering Department,St. Vincent Pallotti College of Engineering & Technology Nagpur",
    location: "India.",
    videoSrc: "https://cdn.iferp.in/video/2025/icmdrse/dr.nitin.mp4",
    posterSrc: "https://cdn.iferp.in/video/2025/icmdrse/nitin-thum.png",
  },
  {
    name: "Dr. Diana Teresa Parra-Sanchez",
    designation: "Scientific Director",
    company: "Centro de Innovación y Productividad InnovaCTIon",
    location: "Colombia.",
    videoSrc: "https://cdn.iferp.in/video/2025/icmdrse/Dr._Diana-video.mp4",
    posterSrc: "https://cdn.iferp.in/video/2025/icmdrse/Diana-thumbnail.png",
  },
  {
    name: "Assoc. Prof. Dr. Ummi Naiemah Saraih",
    designation: "Faculty of Business & Communication",
    company:
      "Head of Department, Department of Business, Faculty of Business & Communication,Universiti Malaysia Perlis (UniMAP)",
    location: "Malaysia.",
    videoSrc: "https://cdn.iferp.in/video/2025/icmdrse/Ummi-vid.mp4",
    posterSrc: "https://cdn.iferp.in/video/2025/icmdrse/ummi-thumbnail.png",
  },
  {
    name: "Dr. Jyothi AP",
    designation: "Faculty of Engineering and Technology",
    company: "Department of CSE,M.S Ramaiah University Of Applied Sciences,",
    location: "India.",
    videoSrc: "https://cdn.iferp.in/video/2025/icmdrse/Jyothy-vid.mp4",
    posterSrc: "https://cdn.iferp.in/video/2025/icmdrse/jothy-thumbnail.png",
  },

  // Add more speakers if needed
];

const VideoCard = () => {
  return (
    <Container>
      <div className="cs_height_120 cs_height_lg_80" />
      <div className="mb-4">
        <SectionTitle2 Title="Welcome Video Messages" isCenter={true} />
      </div>
      <Row className="d-flex justify-content-center">
        {speakers.map((speaker, i) => (
          <div key={i} className="col-lg-4 col-md-6 col-sm-12 mt-3">
            <div
              className="shadow border-0 wow fadeInLeft"
              style={{animationDuration: "1.5s"}}>
              {/* Video Section */}
              <div className="video-wrapper">
                <video
                  width="100%"
                  height="230"
                  controls
                  poster={speaker.posterSrc}>
                  <source src={speaker.videoSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Card Content */}
              <Card.Body className="text-center">
                <div className="cs_team_info py-2">
                  <h3 className="cs_fs_18 cs_semibold mb-0">{speaker.name}</h3>
                  <p
                    className="cs_accent_color cs_fs_14 mb-0 mt-2"
                    style={{lineHeight: "20px", fontWeight: 500}}>
                    {speaker.designation} <br />
                    <span className="cs_heading_color">
                      {speaker.company} <br />
                      {speaker.location}
                    </span>
                  </p>
                </div>
              </Card.Body>
            </div>
          </div>
        ))}
      </Row>
    </Container>
  );
};

export default VideoCard;
