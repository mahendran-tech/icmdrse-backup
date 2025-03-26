import React from "react";
import {Link} from "react-router-dom";

const NotFound = () => {
  return (
    <div className="d-flex justify-content-center my-5">
      <div>
        <div className="text-center mb-2">
          <img src="assets/img/404.png" alt="404" className="img-responsive" />
        </div>
        <div className="d-flex justify-content-center ">
          <div className="mx-auto">
            <h1 className="mb-2">Page Not Found</h1>
            <Link
              to="/"
              className="btn btn-primary d-flex justify-content-center">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
