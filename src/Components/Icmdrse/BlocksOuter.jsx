import React from "react";

const ProcessBlock = ({number, title, items}) => {
  return (
    <div className="process-block border rounded p-3 shadow-sm mb-3 bg-light">
      <div className="inner-box">
        <div className="number h4 text-primary mb-2">{number}</div>
        <strong className="d-block mb-2">{title}</strong>
        <ul className="list-unstyled">
          {items.map((item, index) => (
            <li key={index} className="mb-1">
              <i className="bi bi-brightness-high-fill" /> {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const BlocksOuter = ({isProcessData = true}) => {
  const processData = [
    {
      number: "01",
      title: "Virtual Support:",
      items: [
        "Assist in managing virtual conference platforms.",
        "Provide technical support to online participants.",
        "Monitor virtual sessions for smooth operation.",
      ],
    },
    {
      number: "02",
      title: "Digital Promotion:",
      items: [
        "Contribute to online marketing and promotion.",
        "Engage with the virtual audience on social media.",
        "Assist in generating online content.",
      ],
    },
    {
      number: "03",
      title: "Remote Assistance:",
      items: [
        "Offer assistance to virtual presenters before and during their sessions.",
        "Facilitate virtual networking opportunities.",
        "Respond to inquiries from online participants.",
      ],
    },
    {
      number: "04",
      title: "Content Creation:",
      items: [
        "Help create engaging online content, such as graphics or promotional videos.",
        "Contribute to the development of virtual engagement strategies.",
      ],
    },
    {
      number: "05",
      title: "Documentation:",
      items: [
        "Support the digital documentation of conference proceedings.",
        "Summarize key online discussions and presentations.",
      ],
    },
  ];

  const processData1 = [
    {
      number: "01",
      title: "On-Site Registration:",
      items: [
        "Assist with on-site registration of conference attendees.",
        "Distribute conference materials and badges.",
      ],
    },
    {
      number: "02",
      title: "Venue Setup and Management:",
      items: [
        "Contribute to the setup and management of conference venues.",
        "Ensure rooms are properly arranged for presentations.",
      ],
    },
    {
      number: "03",
      title: "Attendee Assistance:",
      items: [
        "Provide information and guidance to conference participants.",
        "Assist attendees in navigating the conference venue.",
      ],
    },
    {
      number: "04",
      title: "Session Coordination:",
      items: [
        "Assist session chairs in coordinating presentations.",
        "Manage the flow of sessions and ensure presenters are prepared.",
      ],
    },
    {
      number: "05",
      title: "Networking Support:",
      items: [
        "Facilitate networking opportunities among conference participants.",
        "Assist in organizing social events and gatherings.",
      ],
    },
    {
      number: "06",
      title: "Photography and Documentation:",
      items: [
        "Capture moments through photography or videography.",
        "Document on-site proceedings and compile highlights.",
      ],
    },
    {
      number: "07",
      title: "Emergency Response:",
      items: [
        "Be familiar with emergency procedures and assist in case of any on-site issues.",
        "Coordinate with event organizers to address unforeseen circumstances.",
      ],
    },
  ];

  return (
    <div className="container mt-4">
      <div className="row">
        {/* Left Column: First 3 blocks */}
        <div className="col-lg-6">
          {isProcessData
            ? processData
                .slice(0, 3)
                .map((process, index) => (
                  <ProcessBlock
                    key={index}
                    number={process.number}
                    title={process.title}
                    items={process.items}
                  />
                ))
            : processData1
                .slice(0, 4)
                .map((process, index) => (
                  <ProcessBlock
                    key={index}
                    number={process.number}
                    title={process.title}
                    items={process.items}
                  />
                ))}
        </div>
        {/* Right Column: Last 2 blocks */}
        <div className="col-lg-6">
          {isProcessData
            ? processData
                .slice(3)
                .map((process, index) => (
                  <ProcessBlock
                    key={index}
                    number={process.number}
                    title={process.title}
                    items={process.items}
                  />
                ))
            : processData1
                .slice(4)
                .map((process, index) => (
                  <ProcessBlock
                    key={index}
                    number={process.number}
                    title={process.title}
                    items={process.items}
                  />
                ))}
        </div>
      </div>
    </div>
  );
};

export default BlocksOuter;
