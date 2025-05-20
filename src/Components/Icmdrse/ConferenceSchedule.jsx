import React, {useState} from "react";
import {Container, Table, Button, Modal} from "react-bootstrap";

const ConferenceSchedule = () => {
  const [showModal1A, setShowModal1A] = useState(false);
  const [showModal2A, setShowModal2A] = useState(false);

  return (
    <Container className="my-4">
      <h4 className="text-center mb-4 ">ICMDRSE 2025 Tentative Agenda</h4>
      <h5 className="text-center text-primary">
        {" "}
        Physical Conference - <span> Day 1 - 22nd May 2025</span>{" "}
      </h5>

      <div className="table-responsive table-style">
        <Table bordered hover className="align-middle text-nowrap ">
          <thead className="table-dark">
            <tr>
              <th>Time</th>
              <th colSpan="2">Agenda</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>08:00 AM - 08:45 AM</td>
              <td colSpan="2">Registration Desk</td>
            </tr>
            <tr>
              <td>08:45 AM - 08:50 AM</td>
              <td colSpan="2">
                Introduction by <span className="text-primary">Moderator</span>
              </td>
            </tr>
            <tr>
              <td>08:50 AM - 08:55 AM</td>
              <td colSpan="2">
                Guest of Honor by{" "}
                <span className="text-primary">Mr. A. Siddh Kumar Chhajer</span>
              </td>
            </tr>
            <tr>
              <td>08:55 AM - 09:20 AM</td>
              <td colSpan="2">
                Inaugural Ceremony –{" "}
                <span className="text-primary">
                  Proceeding Booking Release & Memento Distribution
                </span>
              </td>
            </tr>
            <tr>
              <td>09:20 AM - 09:25 AM</td>
              <td colSpan="2">
                Presentation by{" "}
                <span className="text-primary">
                  Mr. Subhrajyoti Ranjan Sahu
                </span>
              </td>
            </tr>
            <tr>
              <td>09:25 AM - 09:40 AM</td>
              <td colSpan="2">
                Workshop Speaker{" "}
                <span className="text-primary">Dr. Lee Fong Yee</span>
              </td>
            </tr>
            <tr>
              <td>09:40 AM - 10:00 AM</td>
              <td colSpan="2">Panel Discussion</td>
            </tr>
            <tr>
              <td>10:00 AM - 10:15 AM</td>
              <td colSpan="2">Debate</td>
            </tr>
            <tr>
              <td>10:15 AM - 11:00 AM</td>
              <td colSpan="2">Networking Break</td>
            </tr>

            <tr className="table-secondary fw-bold text-center">
              <td></td>
              <td>Main Room Speakers</td>
              <td>Parallel Room-1 Speakers</td>
            </tr>

            <tr>
              <td>11:00 AM – 11:10 AM</td>
              <td>
                Speech By Keynote Speaker{" "}
                <span className="text-primary">Dr. Anu Sayal</span>
              </td>
              <td>
                Speech By Keynote Speaker{" "}
                <span className="text-success">Prof. Dr. Chinmoy Sahu</span>
              </td>
            </tr>
            <tr>
              <td>11:10 AM – 11:20 AM</td>
              <td>
                Speech By Keynote Speaker{" "}
                <span className="text-primary">
                  Prof. Dr. Ni Luh Suriani, SSi., Msi.
                </span>
              </td>
              <td>
                Speech By Keynote Speaker{" "}
                <span className="text-success">
                  Assoc. Prof. Dr. Amin Beiranvand Pour
                </span>
              </td>
            </tr>
            <tr>
              <td>11:20 AM – 11:30 AM</td>
              <td>
                Speech By Keynote Speaker{" "}
                <span className="text-primary">
                  Prof. Ts. Dr. Norazah Mohd Suki
                </span>
              </td>
              <td>
                Speech By Keynote Speaker{" "}
                <span className="text-success">
                  Prof. Ts. Ir. Dr. Mardeni Bin Roslee
                </span>
              </td>
            </tr>
            <tr>
              <td>11:30 AM – 11:40 AM</td>
              <td>
                Speech By Keynote Speaker{" "}
                <span className="text-primary">Prof. Dr. M.G.H.Zaidi</span>
              </td>
              <td>
                Speech By Keynote Speaker{" "}
                <span className="text-success">Dr. Ting Ho</span>
              </td>
            </tr>
            <tr>
              <td>11:40 AM – 11:50 AM</td>
              <td>
                Speech By Keynote Speaker{" "}
                <span className="text-primary">
                  Assoc Prof. Ts. Dr. Goh Wei Wei
                </span>
              </td>
              <td>
                Speech By Keynote Speaker{" "}
                <span className="text-success">Dr. Farman Ali</span>
              </td>
            </tr>
            <tr>
              <td>11:50 AM – 12:00 PM</td>
              <td>
                Speech By Keynote Speaker{" "}
                <span className="text-primary">
                  Prof. Ts. Dr. Ahmad Naim Ahmad Yahaya
                </span>
              </td>
              <td>
                Speech By Keynote Speaker{" "}
                <span className="text-success">Dr. Olivia Tan Swee Leng</span>
              </td>
            </tr>
            <tr>
              <td>12:00 PM – 12:10 PM</td>
              <td>
                Speech By Keynote Speaker{" "}
                <span className="text-primary">
                  Assoc. Prof. Dr. Ummi Naimah Saraih
                </span>
              </td>
              <td>
                Speech By Keynote Speaker{" "}
                <span className="text-success">
                  Datin. Dr. Norhanim binti Dewa
                </span>
              </td>
            </tr>
            <tr>
              <td>12:10 PM – 12:55 PM</td>
              <td colSpan="2">Lunch Break</td>
            </tr>
            <tr>
              <td>12:55 PM – 01:05 PM</td>
              <td>
                Speech By Keynote Speaker{" "}
                <span className="text-primary">Prof. Dr. Vikeswaran Nair</span>
              </td>
              <td>
                Speech By Keynote Speaker{" "}
                <span className="text-success">
                  Assoc. Prof. Dr. Ratneswary Rasiah
                </span>
              </td>
            </tr>
            <tr>
              <td>01:05 PM – 01:15 PM</td>
              <td>
                Speech By Keynote Speaker{" "}
                <span className="text-primary">
                  Assist. Prof. Dr. Shereen Khan
                </span>
              </td>
              <td>
                Speech By Keynote Speaker{" "}
                <span className="text-success">Ts. Dr. Anusuyah Subbarao</span>
              </td>
            </tr>
            <tr>
              <td>01:15 PM – 05:55 PM</td>
              <td>
                <Button
                  variant="outline-primary"
                  size="sm"
                  onClick={() => setShowModal1A(true)}>
                  Technical Session - 1A (Main Room)
                </Button>
              </td>
              <td>
                <Button
                  variant="outline-success"
                  size="sm"
                  onClick={() => setShowModal2A(true)}>
                  Technical Session - 2A (Parallel Room)
                </Button>
              </td>
            </tr>
            <tr>
              <td>05:55 PM – 06:15 PM</td>
              <td colSpan="2">Networking Break</td>
            </tr>
            <tr>
              <td>06:15 PM – 06:25 PM</td>
              <td colSpan="2">
                MoU Exchange between <span className="text-primary">IFERP</span>{" "}
                and{" "}
                <span className="text-primary">
                  Tashkent State Pedagogical University, Uzbekistan
                </span>
              </td>
            </tr>
            <tr>
              <td>06:25 PM – 06:35 PM</td>
              <td colSpan="2">Award Ceremony and Scholarship Announcement</td>
            </tr>
            <tr>
              <td>06:35 PM – 06:40 PM</td>
              <td colSpan="2">Valedictory Function</td>
            </tr>
          </tbody>
        </Table>
      </div>

      <Modal
        show={showModal1A}
        onHide={() => setShowModal1A(false)}
        centered
        size="xl">
        <Modal.Header closeButton>
          <Modal.Title className="text-center text-primary fw-bold">
            Technical Session - 1A (Main Room)
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{maxHeight: "70vh", overflowY: "auto"}}>
          <div className="table-responsive table-style-1">
            <Table striped bordered hover size="sm" className="mb-0">
              <thead className="table-primary text-center">
                <tr>
                  <th style={{whiteSpace: "nowrap"}}>Time</th>
                  <th>Title</th>
                  <th>Presenter</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{whiteSpace: "nowrap"}}>01:15 PM – 01:23 PM</td>
                  <td>
                    Unlocking Student Insights: The Role of Quillbot in Academic
                    Writing
                  </td>
                  <td>Nur Hidayati</td>
                </tr>
                <tr>
                  <td style={{whiteSpace: "nowrap"}}>01:23 PM – 01:31 PM</td>
                  <td>
                    Artificial Intelligence in Critical Reading Learning: A
                    Systematic Literature Review of Junior Secondary Students
                  </td>
                  <td>Dinda Amelia</td>
                </tr>
                <tr>
                  <td style={{whiteSpace: "nowrap"}}>01:31 PM – 01:39 PM</td>
                  <td>
                    A Re-Evaluation of the Understanding by Design (UbD)
                    Framework in Writing Learning Modules
                  </td>
                  <td>Leah Marie Tumlos-Castillo</td>
                </tr>
                <tr>
                  <td style={{whiteSpace: "nowrap"}}>01:39 PM – 01:47 PM</td>
                  <td>
                    E-Learning and Education for Sustainable Development in the
                    Digital Age
                  </td>
                  <td>Muhammad Anarda Wiguna</td>
                </tr>
                <tr>
                  <td style={{whiteSpace: "nowrap"}}>01:47 PM – 01:55 PM</td>
                  <td>
                    Analysis of the Role of Education for Sustainable
                    Development (ESD) in Social, Science, and Environmental
                    Education (2006-2024): Bibliometric Perspective
                  </td>
                  <td>Tiara Swastika Putri</td>
                </tr>
                {/* Continue inserting all rows similarly... */}
                <tr>
                  <td style={{whiteSpace: "nowrap"}}>01:55 PM – 02:03 PM</td>
                  <td>
                    The Representation of the ‘Emergency Warning’ Movement in
                    the Indonesian Media: Narasi TV and TV One News
                  </td>
                  <td>Diyah Herawati</td>
                </tr>
                <tr>
                  <td style={{whiteSpace: "nowrap"}}>02:03 PM – 02:11 PM</td>
                  <td>
                    IMPROVING WRITING SKILLS: INTEGRATING 'NEWS IN LEVELS' AND
                    INSTAGRAM
                  </td>
                  <td>Deni Yatri</td>
                </tr>
                <tr>
                  <td style={{whiteSpace: "nowrap"}}>02:11 PM – 02:19 PM</td>
                  <td>
                    The Mediating Role of Organizational Collaborative Culture
                    in the Relationship between Leadership Qualities and
                    Managerial Effectiveness
                  </td>
                  <td>Dan Dave A Abaton</td>
                </tr>
                <tr>
                  <td style={{whiteSpace: "nowrap"}}>02:19 PM – 02:27 PM</td>
                  <td>
                    Analysis of the Cognitive Domain of Climate Literacy in
                    Science Teacher Pre-Service and Possible Improvements Using
                    Rasch Analysis
                  </td>
                  <td>Supriyadi</td>
                </tr>
                <tr>
                  <td style={{whiteSpace: "nowrap"}}>02:27 PM – 02:35 PM</td>
                  <td>
                    ESD Community Development for Teachers and Students Through
                    the 40-Day Challenge Program
                  </td>
                  <td>Suhendar Suhendar</td>
                </tr>
                <tr>
                  <td style={{whiteSpace: "nowrap"}}>02:35 PM – 02:43 PM</td>
                  <td>
                    The Influence of Santi Artificial Intelligence Chatbots on
                    Enhancing Student Creativity
                  </td>
                  <td>Erna Widyasari</td>
                </tr>
                <tr>
                  <td style={{whiteSpace: "nowrap"}}>02:43 PM – 02:51 PM</td>
                  <td>
                    Transformation of Science Laboratory Learning from
                    Conventional to Project-Oriented Laboratory: A Systematic
                    Literature Review
                  </td>
                  <td>Febrian</td>
                </tr>
                <tr>
                  <td style={{whiteSpace: "nowrap"}}>02:51 PM – 02:59 PM</td>
                  <td>
                    From Rhetoric to Reality: Assessing the Inclusion of Persons
                    with Disabilities in Local Government of Bangladesh
                  </td>
                  <td>Rowshon Ara Romke</td>
                </tr>
                <tr>
                  <td style={{whiteSpace: "nowrap"}}>02:59 PM – 03:07 PM</td>
                  <td>
                    Women as Drivers of Philippine Rural Development: Analyzing
                    the Role of Women Employment in Shaping Regional Poverty
                    Dynamics and Human Development Using Seemingly Unrelated
                    Regression
                  </td>
                  <td>Celso Gutierrez Tan Jr</td>
                </tr>
                <tr>
                  <td style={{whiteSpace: "nowrap"}}>03:07 PM – 03:15 PM</td>
                  <td>
                    Dimensions of Investment Gullibility: Exploring the Ponzi
                    Scheme Victims in Davao City
                  </td>
                  <td>William T Sucuahi</td>
                </tr>
                <tr>
                  <td style={{whiteSpace: "nowrap"}}>03:15 PM – 03:23 PM</td>
                  <td>
                    Children’S Motives And Demands On The Use Of Computer In
                    Children Learning Through Play
                  </td>
                  <td>Lutfitra Rizqika</td>
                </tr>
                <tr>
                  <td style={{whiteSpace: "nowrap"}}>03:23 PM – 03:31 PM</td>
                  <td>
                    Competence of Day Care Workers: Basis for Extension Project
                    Development
                  </td>
                  <td>DELMA JEAN V ABAD</td>
                </tr>
                <tr>
                  <td style={{whiteSpace: "nowrap"}}>03:31 PM – 03:39 PM</td>
                  <td>
                    Profiling Gender-Based Disparities in Scientific Literacy
                    Among STEM Students in the Division of Eastern Samar:
                    Insights for Targeted Educational Interventions
                  </td>
                  <td>Roneil A Campanero</td>
                </tr>
                <tr>
                  <td style={{whiteSpace: "nowrap"}}>03:39 PM – 03:47 PM</td>
                  <td>
                    Novel Use of Deep Learning for Adaptive Weighted Loss in the
                    Segmentation of X-ray Images for Detecting Wrist Fractures
                  </td>
                  <td>Teuku Radillah</td>
                </tr>
                <tr>
                  <td style={{whiteSpace: "nowrap"}}>03:47 PM – 03:55 PM</td>
                  <td>
                    Real-Time Monitoring of Pond Water Quality Parameters with
                    IoT to Determine Optimum Data Using Euclidean Distance
                    Algorithm
                  </td>
                  <td>Muhammad Dahria</td>
                </tr>
                <tr>
                  <td style={{whiteSpace: "nowrap"}}>03:55 PM – 04:03 PM</td>
                  <td>
                    Enhanced Hydrophobicity of Sweet Potato Starch Bioplastic
                    Reinforced with Activated Carbon
                  </td>
                  <td>JOSEF VILL S VILLANUEVA</td>
                </tr>
                <tr>
                  <td style={{whiteSpace: "nowrap"}}>04:03 PM – 04:11 PM</td>
                  <td>
                    Economic Contributions and Employment Effects of Sari-Sari
                    Stores in Dumaguete City
                  </td>
                  <td>ILDEFE T VILLANUEVA</td>
                </tr>
                <tr>
                  <td style={{whiteSpace: "nowrap"}}>04:11 PM – 04:19 PM</td>
                  <td>
                    Effect of Activated Carbon on the Mechanical Properties of
                    Sweet Potato Starch Bioplastic
                  </td>
                  <td>JOSEF VILL S VILLANUEVA</td>
                </tr>
                <tr>
                  <td style={{whiteSpace: "nowrap"}}>04:19 PM – 04:27 PM</td>
                  <td>
                    The Antecedents of Purchasing Intention on Digital Mental
                    Health Services (DMHS) in Indonesia
                  </td>
                  <td>Mochammad Riyadh Rizky Adam</td>
                </tr>
                <tr>
                  <td style={{whiteSpace: "nowrap"}}>04:27 PM – 04:35 PM</td>
                  <td>
                    An Inquiry to the Institutionalization of Esports as an
                    Academic Program Through the Lens of Edmund Burke’s
                    Enlightened Conservatism
                  </td>
                  <td>Julie Ar E. Sibala</td>
                </tr>
                <tr>
                  <td style={{whiteSpace: "nowrap"}}>04:35 PM – 04:43 PM</td>
                  <td>
                    Exploring the Dark Side of AI in Design Education: Teachers'
                    Perceptions and Con-cerns
                  </td>
                  <td>Sania Gulzar</td>
                </tr>
                <tr>
                  <td style={{whiteSpace: "nowrap"}}>04:43 PM – 04:51 PM</td>
                  <td>
                    Development and Acceptability of the E-nurse Patient Safety
                    System Towards Technology Management
                  </td>
                  <td>Peter Arnold T. Tubayan</td>
                </tr>
                <tr>
                  <td style={{whiteSpace: "nowrap"}}>04:51 PM – 04:59 PM</td>
                  <td>
                    Navigating Inclusion: Unveiling the Lived Experiences of
                    Parents With Children of Special Needs in Mainstream Classes
                  </td>
                  <td>Christopher C. Baldonado</td>
                </tr>
                <tr>
                  <td style={{whiteSpace: "nowrap"}}>04:59 PM – 05:07 PM</td>
                  <td>
                    Innovative Approaches in Teaching Reading: The Flipped
                    Classroom Model for EFL Students
                  </td>
                  <td>Zhao Jun</td>
                </tr>
                <tr>
                  <td style={{whiteSpace: "nowrap"}}>05:07 PM – 05:15 PM</td>
                  <td>
                    Understanding Disruptive Innovation: A Meta-analysis of the
                    Existing Literature and Its Ubiquity in Frontier Economy
                  </td>
                  <td>Md Azzajur Rahman</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal1A(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal: Technical Session - 2A */}
      <Modal
        show={showModal2A}
        onHide={() => setShowModal2A(false)}
        centered
        size="xl">
        <Modal.Header closeButton>
          <Modal.Title className="text-center text-primary fw-bold">
            Technical Session - 2A (Parallel Room)
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{maxHeight: "70vh", overflowY: "auto"}}>
          <div className="table-responsive table-style-1">
            <Table striped bordered hover size="sm" className="mb-0">
              <thead className="table-success text-center">
                <tr>
                  <th style={{whiteSpace: "nowrap"}}>Time</th>
                  <th>Title</th>
                  <th>Presenter</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{whiteSpace: "nowrap"}}>01:15 PM – 01:23 PM</td>
                  <td>
                    Impact of Reflection on Developing Transferable Skills: A
                    Qualitative Study
                  </td>
                  <td>Sheau Wen Ong</td>
                </tr>
                <tr>
                  <td style={{whiteSpace: "nowrap"}}>01:23 PM – 01:31 PM</td>
                  <td>
                    Research Mapping of Teacher Stress from a Cognitive
                    Perspective: A Systematic Review and Bibliometric Analysis
                    of Metacognition and Cognitive Flexibility
                  </td>
                  <td>Hansen Zhou</td>
                </tr>
                <tr>
                  <td style={{whiteSpace: "nowrap"}}>01:31 PM – 01:39 PM</td>
                  <td>
                    The Role of Data Privacy in Digital Marketing: The Reality
                    Check of Consumer Perspective
                  </td>
                  <td>Md Aminul Islam</td>
                </tr>
                <tr>
                  <td style={{whiteSpace: "nowrap"}}>01:39 PM – 01:47 PM</td>
                  <td>
                    A Comparative Analysis Of Stock Return For Amazon And
                    Alibaba Based On Time Series Model And Control Chart
                  </td>
                  <td>Mei Tuan Teng</td>
                </tr>
                <tr>
                  <td style={{whiteSpace: "nowrap"}}>01:47 PM – 01:55 PM</td>
                  <td>
                    An Enhanced Usability Evaluation Framework For Malaysia
                    Higher Education Institution’S Learning Management Systems
                  </td>
                  <td>Chia Yean Lim</td>
                </tr>
                <tr>
                  <td style={{whiteSpace: "nowrap"}}>01:55 PM – 02:03 PM</td>
                  <td>
                    From Concept To Market: Perceptions, Market Potential, And
                    Branding Elements Of An Alugbati (Basella Alba) And Cocoa
                    (Theobroma Cacao)-Based Chewing Candy For Athletic
                    Performance
                  </td>
                  <td>Clyde Derek Garanchon</td>
                </tr>
                <tr>
                  <td style={{whiteSpace: "nowrap"}}>02:03 PM – 02:11 PM</td>
                  <td>
                    Spatial Writing as a Critical Perspective in Contemporary
                    Literary Studies: A Case Study of Shih Shuching's Novels
                  </td>
                  <td>Huang Xin</td>
                </tr>
                <tr>
                  <td style={{whiteSpace: "nowrap"}}>02:11 PM – 02:19 PM</td>
                  <td>
                    Design of a Web Based Academic Counselling Information
                    System in University: A Case Study of Jakarta State
                    University, Indonesia
                  </td>
                  <td>Zarina Akbar</td>
                </tr>
                <tr>
                  <td style={{whiteSpace: "nowrap"}}>02:19 PM – 02:27 PM</td>
                  <td>
                    Kotak Nusantara: A Montessori-Based Play Medium For
                    Introducing Cultural Literacy To Children Aged 5–6 Years
                  </td>
                  <td>Rina Jayani</td>
                </tr>
                <tr>
                  <td style={{whiteSpace: "nowrap"}}>02:27 PM – 02:35 PM</td>
                  <td>
                    Precarity and Protection: Addressing Working Conditions on
                    Digital Labor Platforms in Malaysia
                  </td>
                  <td>Siti Suraya Abd Razak</td>
                </tr>
                <tr>
                  <td style={{whiteSpace: "nowrap"}}>02:35 PM – 02:43 PM</td>
                  <td>
                    Assessing The Phillips Curve in China: An Empirical Study of
                    Inflation and Unemployment
                  </td>
                  <td>Xijun Zhao</td>
                </tr>
                <tr>
                  <td style={{whiteSpace: "nowrap"}}>02:43 PM – 02:51 PM</td>
                  <td>
                    The Evolution Of Yiwu'S Small Commodity Market: Cultural
                    Entrepreneurship, Digitalization, And Internationalization
                    Toward Southeast Asia
                  </td>
                  <td>Jin Ling</td>
                </tr>
                <tr>
                  <td style={{whiteSpace: "nowrap"}}>02:51 PM – 02:59 PM</td>
                  <td>
                    Moderating Role Of Entrepreneurial Intention On The
                    Relationship Between Entrepreneurial Education And People
                    Management Skills.
                  </td>
                  <td>Abdullah Al Ahad</td>
                </tr>
                <tr>
                  <td style={{whiteSpace: "nowrap"}}>02:59 PM – 03:07 PM</td>
                  <td>
                    The Future of Learning: A Literature Review on the
                    Effectiveness of Montessori and Project-Based Learning
                  </td>
                  <td>Ikrima Adawiyah</td>
                </tr>
                <tr>
                  <td style={{whiteSpace: "nowrap"}}>03:07 PM – 03:15 PM</td>
                  <td>
                    Problems of Teaching Foreign Languages in Conditions of
                    Multilingualism
                  </td>
                  <td>Gaybullaeva Khatira Muratdjanovna</td>
                </tr>
                <tr>
                  <td style={{whiteSpace: "nowrap"}}>03:15 PM – 03:23 PM</td>
                  <td>INTERACTIVE METHODS IN TEACHING ENGLISH VOCABULARY</td>
                  <td>Azizova Fotimaxon Saidbaxramovna</td>
                </tr>
                <tr>
                  <td style={{whiteSpace: "nowrap"}}>03:23 PM – 03:31 PM</td>
                  <td>
                    IMPROVING LEGAL ENGLISH LISTENING COMPETENCE AMONG LAW
                    STUDENTS
                  </td>
                  <td>Manzura Shamsitdinova Gopporovna</td>
                </tr>
                <tr>
                  <td style={{whiteSpace: "nowrap"}}>03:31 PM – 03:39 PM</td>
                  <td>
                    THEORETICAL AND PRACTICAL BENEFITS OF INTEGRATING SONGS INTO
                    LANGUAGE TEACHING
                  </td>
                  <td>Dilrabo Toshkuziyeva Yusupjanovna</td>
                </tr>
                <tr>
                  <td style={{whiteSpace: "nowrap"}}>03:39 PM – 03:47 PM</td>
                  <td>
                    Importance of Foreign Language Competence of future
                    specialists in the field of taxes and taxation in Uzbekistan
                  </td>
                  <td>Tursunoy Ergasheva</td>
                </tr>
                <tr>
                  <td style={{whiteSpace: "nowrap"}}>03:47 PM – 03:55 PM</td>
                  <td>
                    SYNERGY OF PRAGMADIDACTICS AND MULTIMODAL LEARNING:
                    ENHANCING CLASSROOM INTERACTION
                  </td>
                  <td>Ugiloy Kusanova Madiyarovna</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal2A(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default ConferenceSchedule;
