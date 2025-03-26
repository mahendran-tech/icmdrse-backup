import React from "react";

const ImageGrid = () => {
  const images = [
    "https://cdn.iferp.in/conf-img/2025/07.webp",
    "https://cdn.iferp.in/conf-img/2025/06.webp",
    "https://cdn.iferp.in/conf-img/2025/05.webp",
    "https://cdn.iferp.in/conf-img/2025/04.webp",
    "https://cdn.iferp.in/conf-img/2025/03.webp",
    "https://cdn.iferp.in/conf-img/2025/02.webp",
    "https://cdn.iferp.in/conf-img/2025/01.webp",
  ];

  return (
    <div className="container-fluid mb-5 d-flex flex-column align-items-center justify-content-center bg-light px-1">
      <div className="row w-100  g-0">
        <h2 className="cs_section_title cs_fs_30 mb-2 wow pulse text-center">
          ICMDRSE-2025: Advancing Knowledge, Connecting Disciplines
        </h2>
        <p className="font-italic text-center fst-italic mb-3">
          The Premier Series Conference on Multi-Disciplinary Research &
          Education
        </p>
        {/* First Row (4 images) */}
        {images.slice(0, 7).map((src, index) => (
          <div key={index} className="col-lg-3 col-md-4 col-sm-6">
            <img
              src={src}
              alt={`img-${index}`}
              className="img-fluid w-100 h-100"
              style={{objectFit: "cover"}}
            />
          </div>
        ))}

        <div
          className="col-lg-3 col-md-4 col-sm-6 d-flex flex-column align-items-center justify-content-center  p-2"
          style={{
            backgroundImage: "url('/assets/img/team_shape_1.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>
          <p
            className="text-center text-secondary "
            style={{fontSize: "15px", lineHeight: "23px"}}>
            With over <b style={{color: "red"}}> 1800+ participants </b> from
            more than <b style={{color: "#4106df"}}> 50 countries </b>
            and <b style={{color: "#00a4cb"}}> 100+ universities </b> worldwide,
            the ICMDRSE series has established itself as one of the most highly
            regarded conferences in the field of multidisciplinary and
            contemporary educational research.
          </p>
        </div>
      </div>

      {/* <div className="row w-100 g-0">
     
        {images.slice(4, 7).map((src, index) => (
          <div key={index} className="col-lg-3 col-md-4 col-sm-6">
            <img
              src={src}
              alt={`img-${index + 4}`}
              className="img-fluid w-100 h-100"
              style={{objectFit: "cover"}}
            />
          </div>
        ))}

 
        <div
          className="col-lg-3 col-md-4 col-sm-6 d-flex flex-column align-items-center justify-content-center  p-2"
          style={{
            backgroundImage: "url('/assets/img/team_shape_1.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>
          <p
            className="text-center text-secondary "
            style={{fontSize: "15px", lineHeight: "23px"}}>
            With over <b style={{color: "red"}}> 1800+ participants </b> from
            more than <b style={{color: "#4106df"}}> 50 countries </b>
            and <b style={{color: "#00a4cb"}}> 100+ universities </b> worldwide,
            the ICMDRSE series has established itself as one of the most highly
            regarded conferences in the field of multidisciplinary and
            contemporary educational research.
          </p>
        </div>
          </div> */}
    </div>
  );
};

export default ImageGrid;
