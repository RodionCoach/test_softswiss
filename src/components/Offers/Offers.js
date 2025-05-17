import React from "react";
import { useIsMobile } from "../../hooks/useIsMobile";
import "./Offers.scss";

const offers = [
  {
    id: 1,
    title: "Move the borders of reality!",
    description: "Go on a space adventure - it's possible with us!",
    descriptionMobile: "Go on a space adventure",
    image: require("../../img/Rectangle_39613.png"),
  },
  {
    id: 2,
    title: "Space is not just stars and planets",
    description: "Go on a space adventure",
    descriptionMobile: "it is a majestic journey to ",
    image: require("../../img/Rectangle_39625.png"),
  },
  {
    id: 3,
    title: "For those who dream of stars",
    description: "Our offer: make your dream come true",
    image: require("../../img/Rectangle_39627.png"),
  },
  {
    id: 4,
    title: "Fulfill your fantastic dreams",
    description: "Space has never been so close",
    image: require("../../img/Rectangle_39628.png"),
  },
];

const Offers = () => {
  const isMobile = useIsMobile();
  return (
    <section className="offers">
      <div className="offers__container">
        <h2 className="offers__title">Offers</h2>
        <div className="offers__grid">
          {offers.map((offer) => (
            <article key={offer.id} className="offer-card">
              <img
                className="offer-card__image"
                src={offer.image}
                alt={offer.title}
              ></img>
              <div className="offer-card__content">
                <h3 className="offer-card__title">{offer.title}</h3>
                <p className="offer-card__description">
                  {isMobile && offer.descriptionMobile
                    ? offer.descriptionMobile
                    : offer.description}
                </p>
                <button className="offer-card__cta">Learn more</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offers;
