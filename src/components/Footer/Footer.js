import React from "react";
import "./Footer.scss";
import rocketImage from "../../img/rocket.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__rocket">
          <img src={rocketImage} alt="Space rocket" />
        </div>
        <p className="footer__text">Exciting space adventure!</p>
      </div>
    </footer>
  );
};

export default Footer;
