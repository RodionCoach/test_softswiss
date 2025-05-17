import React, { useState } from "react";
import "./Header.scss";
import logo from "../../img/logo.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header__container">
        <a href="/" className="header__logo" aria-label="Go to homepage">
          <img src={logo} alt="Logo" />
        </a>

        <div className="header__nav-container">
          <nav
            className={`header__nav ${isMenuOpen ? "header__nav--open" : ""}`}
          >
            <ul>
              <li>
                <a href="/" className="header__nav-link">
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="/products" className="header__nav-link">
                  Products
                </a>
              </li>
            </ul>
          </nav>

          <a href="/cart" className="header__cart" aria-label="Shopping cart">
            <svg
              className="header__cart-icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <defs>
                <linearGradient
                  id="cart_hover"
                  x1="8"
                  y1="4"
                  x2="19"
                  y2="20"
                  gradientUnits="userSpaceOnUse"
                >
                  {/* <stop stopColor="var(--color-accent)" />
                  <stop offset="1" stopColor="var(--color-primary)" /> */}
                </linearGradient>
              </defs>
              <use href="../../img/cart.svg" className="cart-default" />
            </svg>
          </a>

          <button
            className="header__burger"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          ></button>
        </div>
      </div>
    </header>
  );
};

export default Header;
