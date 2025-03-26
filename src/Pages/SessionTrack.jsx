import React, {useState} from "react";
import BreadCumb from "../Components/Common/BreadCumb";
import TopContent from "../Components/Icmdrse/TopContent";
import {sessionImage} from "../assets/assets";
import {Link} from "react-router-dom";
import {Helmet} from "react-helmet-async";
const SessionTrack = () => {
  const sessions = [
    {
      id: 1,
      link: "/session-1",
      image: sessionImage.sessionImg,
      delay: "0ms",
    },
    {
      id: 2,
      link: "/session-2",
      image: sessionImage.sessionImg2,
      delay: "150ms",
    },
    {
      id: 3,
      link: "/session-3",
      image: sessionImage.sessionImg3,
      delay: "300ms",
    },
    {
      id: 4,
      link: "/session-4",
      image: sessionImage.sessionImg4,
      delay: "450ms",
    },
    {
      id: 5,
      link: "/session-5",
      image: sessionImage.sessionImg5,
      delay: "450ms",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Scientific Tracks | Multidisciplinary Topics in ICMDRSE 2025
        </title>
        <meta
          name="description"
          content="Explore diverse scientific tracks at ICMDRSE 2025, covering multidisciplinary topics in Education, Engineering, and Technology. Discover key sessions for groundbreaking research and collaboration."
        />
      </Helmet>
      <div className="serviceDetails">
        <BreadCumb
          bgImg="assets/img/page_heading_1.jpg"
          Title="Session & Tracks"
        />
        <TopContent
          title="Session & Tracks"
          content="Explore our session tracks, each created to offer a distinct learning opportunity during the conference. Discover subjects that pique your interest and encourage lively conversations among everyone."
          hltext="Topics of Interest for Submission include, but are not limited to:"
        />
        <div className="container">
          <div className="row  clearfix row-gap-3  d-flex justify-content-center">
            {sessions.map((session) => (
              <div
                key={session.id}
                className="team-block-two  col-lg-3 col-md-6 col-sm-12">
                <div
                  className="inner-box wow fadeInLeft animated"
                  data-wow-delay={session.delay}
                  data-wow-duration="1500ms"
                  style={{
                    visibility: "visible",
                    animationDuration: "1500ms",
                    animationDelay: session.delay,
                    animationName: "fadeInLeft",
                  }}>
                  <div className="image image-hover">
                    <Link to={session.link}>
                      <img src={session.image} alt={`Session ${session.id}`} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="cs_height_120 cs_height_lg_105" />
      </div>
    </>
  );
};

export default SessionTrack;
