import React from "react";

const TracksSection = ({ tracks }) => {
  return (
    <div className="row clearfix mt-4">
      <div className="content-column col-lg-12 col-md-12 col-sm-12">
        <div className="inner-column">
          <div className="sec-title-two mb-0 ">
            <h3 style={{ color: "#020033" }} className="pt-0">
              Tracks<span />
            </h3>

            <p className="font-weight-bold">
              Topics of Interest for Submission include, but are not limited to:
            </p>
            <div className="row mt-2">
              {tracks.map((track, index) =>
                <div key={index} className="col-lg-4">
                  <div className="content-session">
                    <p className="list-group-item-1">
                      <span>{index + 1}</span> {track}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TracksSection;
