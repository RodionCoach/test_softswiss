import React from "react";
import { Button } from "../parts";
import "./Banner.scss";

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner__container">
        <div className="banner__content">
          <h1 className="banner__title">
            Discover the vast expanses of <span>space</span>
          </h1>
          <p className="banner__subtitle">
            Where the possibilities are <span>endless!</span>
          </p>
          <Button variant="primary" className="banner__button">
            Learn more
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
