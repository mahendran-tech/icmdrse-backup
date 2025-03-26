import parse from "html-react-parser";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import {useState, useContext} from "react";
import ZohoForm from "./ZohoForm";
import {DataContext} from "../../Appcontext/DataContext";

const Downloads = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const {downloadData} = useContext(DataContext);

  // Ensure downloadData is not undefined before mapping
  if (!downloadData || downloadData.length === 0) {
    return <p className="text-center mt-4">No downloads available.</p>;
  }

  const handleFileClick = (file) => {
    const imageExtensions = [".jpg", ".jpeg", ".png", ".gif", ".bmp", ".webp"];
    const fileExtension = file.filelink
      ?.substring(file.filelink.lastIndexOf("."))
      .toLowerCase();

    if (imageExtensions.includes(fileExtension)) {
      window.open(file.filelink, "_blank"); // Open image in a new tab
    } else if (file.isLast) {
      setSelectedFile(file);
      setShowModal(true);
    } else {
      downloadFile(file.filelink, fileExtension);
    }
  };

  const downloadFile = (filePath, fileExtension) => {
    if (!filePath) return;
    if (fileExtension === ".pdf") {
      window.open(filePath, "_blank");
    } else {
      const link = document.createElement("a");
      link.href = filePath;
      link.download = filePath.split("/").pop();
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <section className="position-relative mt-5">
      <div className="container">
        <div className="row cs_gap_y_30 align-items-center justify-content-center">
          {downloadData.map((file, index) => (
            <div className="col-lg-3 col-md-4 col-sm-12" key={index}>
              <div
                className="services-box07 mb-30"
                onClick={() => handleFileClick(file)}
                style={{cursor: "pointer", backgroundColor: file.bg}}>
                <div className="sr-contner">
                  <div className="icon" style={{backgroundColor: file.bg1}}>
                    <i className="bi bi-file-earmark-arrow-down" />
                  </div>
                  <div className="text">
                    <h5>
                      {parse(file.Heading)} <br /> Download{" "}
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for File Download */}
      {selectedFile && (
        <Modal centered show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title style={{fontSize: "20px", color: "#000051"}}>
              {selectedFile.Heading}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ZohoForm />
          </Modal.Body>
        </Modal>
      )}
    </section>
  );
};

export default Downloads;
