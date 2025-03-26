import {useEffect, useState, useRef} from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import VideoModal from "../VideoModal/VideoModal";
import {useLocation} from "react-router-dom";

const Video1 = () => {
  const clientRef = useRef(null); // Create a reference to the element
  const location = useLocation(); // Get the current URL

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", ""); // Remove the "#" symbol
      const element = document.getElementById(id); // Get the element by ID

      if (element) {
        // Delay the scroll to ensure component is fully rendered
        setTimeout(() => {
          element.scrollIntoView({behavior: "smooth", block: "start"});
        }, 1200); // Delay of 100ms
      }
    }
  }, [location]); // Run when URL changes
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  const [iframeSrc, setIframeSrc] = useState("about:blank");
  const [toggle, setToggle] = useState(false);

  // List of videos
  const videos = [
    {
      id: 1,
      thumbnail: "https://cdn.iferp.in/video/2025/comman/10.jpg",
      src: "https://cdn.iferp.in/video/2025/comman/10.mp4",
    },
    {
      id: 2,
      thumbnail: "https://cdn.iferp.in/video/2025/comman/12.jpg",
      src: "https://cdn.iferp.in/video/2025/comman/12.mp4",
    },
    {
      id: 3,
      thumbnail: "https://cdn.iferp.in/video/2025/comman/13.jpg",
      src: "https://cdn.iferp.in/video/2025/comman/13.mp4",
    },
  ];

  // Function to handle video click
  const handelClick = (videoSrc) => {
    setIframeSrc(videoSrc);
    setToggle(true);
  };

  const handelClose = () => {
    setIframeSrc("about:blank");
    setToggle(false);
  };

  return (
    <section
      className="cs_video cs_style_1 py-2 cs_bg_filed position-relative"
      ref={clientRef}
      id="client">
      <div className="container">
        <div>
          <h2 className="cs_section_title cs_fs_30 mb-5 wow pulse text-center">
            What our Client Says
          </h2>
        </div>
        <div className="row ">
          {videos.map((video) => (
            <div className="col-sm-12 col-lg-4 mb-2" key={video.id}>
              <div className="cs_heading_bg position-absolute" />
              <div className="cs_video_content">
                <div>
                  <img
                    src={video.thumbnail}
                    alt={`Video ${video.id}`}
                    style={{borderRadius: "5px"}}
                  />
                </div>
                <a
                  onClick={() => handelClick(video.src)}
                  className="cs_video_open wow zoomIn"
                  data-wow-delay="0.3s">
                  <span
                    className="cs_player_btn cs_center"
                    style={{cursor: "pointer"}}>
                    <span />
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <VideoModal
        isTrue={toggle}
        iframeSrc={iframeSrc}
        handelClose={handelClose}
      />
    </section>
  );
};

export default Video1;
