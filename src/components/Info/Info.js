import React from "react";
import { Input } from "../parts";
import "./Info.scss";

const Info = () => {
  return (
    <section className="info">
      <div className="info__container">
        <h2 className="info__title">Embark on a space journey</h2>
        <div className="info__content">
          <p className="info__text">
            Traveling into space is one of the most exciting and unforgettable
            adventures that can change your life forever. And if you have ever
            dreamed of exploring stars, planets and galaxies, then our company
            is ready to help you realize this dream. We offer a unique
            experience that will allow you to go on a space journey and see all
            the secrets of the universe. We guarantee that every moment in space
            will be filled with incredible impressions, excitement and new
            discoveries. Our team of professionals takes care of your safety and
            comfort so that you can fully enjoy your adventure in space. We
            offer various options for space excursions.
          </p>
        </div>
        <Input
          variant="checkbox"
          id="info-toggle"
          wrapperClassName="info__toggle-wrapper"
          className="info__checkbox"
          labelClassName="info__toggle"
        />
      </div>
    </section>
  );
};

export default Info;
