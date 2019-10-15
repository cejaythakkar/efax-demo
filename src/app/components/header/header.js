import React from "react";
import "./header.scss";
import logo from "../../../assets/images/logo-efax.svg";

function Header(props) {
  return (
    <div className="funnel-header">
      <div className="container">
        <div className="row">
          <div className="col-6 col-md-4 col-lg-2 offset-lg-1">
            <div className="logo">
              <a href="#" title="eFax logo">
                <img
                  src={logo}
                  alt="eFax logo"
                  className="img-responsive hidden-xs"
                />
              </a>
            </div>
          </div>
          <div className="col-6 col-md-3 col-lg-2 offset-md-5 offset-lg-6">
            <div className="contact-info-top font-weight-bold">
              <img src="images/icon-phone.svg" alt="" />1 (800) 878-7151
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
