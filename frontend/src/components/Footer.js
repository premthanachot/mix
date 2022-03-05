import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="justify-content-center d-flex">
        <div className="card-name">
          <img
            alt="facebook"
            src="/images/facebook.png"
          />
        </div>
        <div className="card-name">
          <img
            alt="instagram"
            src="/images/instagram.png"
          />
        </div>
        <div className="card-name">
          <img
            alt="youtube"
            src="/images/youtube.png"
          />
        </div>
        <div className="card-name">
          <img
            alt="email"
            src="/images/email.png"
          />
        </div>
        <div className="card-name">
          <img
            alt="paypal"
            src="/images/paypal.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
