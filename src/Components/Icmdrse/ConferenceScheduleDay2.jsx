import React from "react";

const ConferenceScheduleDay2 = () => {
  const scheduleData = [
    {time: "08:30 AM - 09:30 AM", event: "Registration desk"},
    {time: "09:30 AM - 09:40 AM", event: "Introduction by Moderator"},
    {
      time: "09:40 AM - 09:55 AM",
      event: "Speech By Keynote Speaker",
      speaker: "Assoc Prof. Dr Hoshang Kolivand",
    },
    {
      time: "09:55 AM - 10:10 AM",
      event: "Speech By Keynote Speaker",
      speaker: "Assoc Prof. Dr. Jyothi AP",
    },
    {
      time: "10:10 AM - 10:25 AM",
      event: "Speech By Keynote Speaker",
      speaker: "Assoc. Prof. Ts. Ir. Dr. Mohammad Lutfi Bin Othman",
    },
    {
      time: "10:25 AM - 10:40 AM",
      event: "Speech By Keynote Speaker",
      speaker: "Ms. K. RAJALAKSHMI",
    },
    {
      time: "10:40 AM - 10:55 AM",
      event: "Speech By Keynote Speaker",
      speaker: "Ms. N.GAJALAKSHMI",
    },
    {time: "10:55 AM - 11:10 AM", event: "Networking Break"},
    {
      time: "11:10 AM - 11:25 AM",
      event: "Speech By Session Speaker",
      speaker: "Prof. Dr. Nitin Dhote",
    },
    {
      time: "11:25 AM - 11:40 AM",
      event: "Speech By Session Speaker",
      speaker: "Dr. Diana Teresa Parra-Sanchez",
    },
    {
      time: "11:40 AM - 11:55 AM",
      event: "Speech By Session Speaker",
      speaker: "Prof. Dr. Nalin Abeysekera",
    },
    {time: "11:55 AM - 01:55 PM", event: "Technical Session -1A"},
    {time: "01:55 PM - 02:10 PM", event: "Networking Break"},
    {time: "02:10 PM - 04:10 PM", event: "Technical Session -1B"},
    {time: "04:10 PM - 04:15 PM", event: "Valedictory Function"},
    {time: "04:15 PM - 04:20 PM", event: "Vote of Thanks"},
  ];

  return (
    <div className="container py-4">
      <h4 className="mb-4 text-center">ICMDRSE Day-2 Virtual Conference</h4>
      <div className="table-responsive table-style">
        <table className="table table-bordered table-striped">
          <thead className="table-light">
            <tr>
              <th scope="col">Time</th>
              <th scope="col">Event</th>
            </tr>
          </thead>
          <tbody>
            {scheduleData.map((item, index) => (
              <tr key={index}>
                <td className="text-nowrap">{item.time}</td>
                <td>
                  {item.event}
                  {item.speaker && (
                    <>
                      {""} <span className="text-primary">{item.speaker}</span>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ConferenceScheduleDay2;
