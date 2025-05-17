import React from "react";
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

          <button className="banner__cta">Learn more</button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
