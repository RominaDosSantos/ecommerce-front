import "./errorStyle.css";
import React from "react";
import { Link } from "react-router-dom";

export const Error404 = () => {
  return (
    <>
      <div
        className="error-404-area section-space-y-axis-100 error404-bg"
        data-bg-image="assets/images/error-404/bg/1-1920x886.png"
      >
        <div className="container h-100">
          <div className="row h-100">
            <div className="col-lg-12 align-self-center">
              <div className="error-404-content">
                <div className="error-404-img">
                  <img src="../error/404.png" alt="Error Image" />
                </div>
                <h2 className="title">
                  <span>Oops,</span> page not found!
                </h2>
                <div className="button-wrap">
                  <Link className="btn btn-error" to="/">
                    Back to home
                    <i className="pe-7s-home"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
