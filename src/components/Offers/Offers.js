import React from "react";
import { useIsMobile } from "../../hooks/useIsMobile";
import { Button } from "../parts";
import "./Offers.scss";

const offers = [
  {
    id: 1,
    title: "Move the borders of reality!",
    description: "Go on a space adventure - it's possible with us!",
    descriptionMobile: "Go on a space adventure",
    image: require("../../img/Rectangle_39613.webp"),
  },
  {
    id: 2,
    title: "Space is not just stars and planets",
    description: "Go on a space adventure",
    descriptionMobile: "it is a majestic journey to ",
    image: require("../../img/Rectangle_39625.webp"),
  },
  {
    id: 3,
    title: "For those who dream of stars",
    description: "Our offer: make your dream come true",
    image: require("../../img/Rectangle_39627.webp"),
  },
  {
    id: 4,
    title: "Fulfill your fantastic dreams",
    description: "Space has never been so close",
    image: require("../../img/Rectangle_39628.webp"),
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
              <picture>
                <source type="image/webp" />
                <img
                  className="offer-card__image"
                  src={offer.image}
                  alt={offer.title}
                  loading="lazy"
                  decoding="async"
                />
              </picture>
              <div className="offer-card__content">
                <h3 className="offer-card__title">{offer.title}</h3>
                <div className="offer-card__text-content">
                  <p className="offer-card__description">
                    {isMobile && offer.descriptionMobile
                      ? offer.descriptionMobile
                      : offer.description}
                  </p>
                  <p className="offer-card__extended-description">
                    {offer.extendedDescription}
                  </p>
                </div>
                <Button variant="secondary" className="offer-card__cta">
                  Learn more
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offers;
