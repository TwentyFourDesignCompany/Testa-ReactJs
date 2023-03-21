import React, { useEffect, useState } from "react";
import { headerlogo } from "../assets/index";
import ClickAwayListener from "react-click-away-listener";
import { NavLink } from "react-router-dom";
import { Menu, X } from "react-feather";
import AOS from "aos";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  function changeNavState() {
    if (window.innerWidth < 1000) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }
  useEffect(() => {
    changeNavState();
    window.addEventListener("resize", changeNavState);
    window.addEventListener("scroll", () => {
      changeNavState();
    });
  }, []);

  return (
    <div
      className="header"
      style={
        isOpen && window.innerWidth < 1000
          ? { backgroundColor: "#fffff" }
          : null
      }
    >
      <div className="header__content">
        <NavLink to="/" className="header__content__logo">
          <img src={headerlogo} alt="logo" />
        </NavLink>

        {isOpen ? (
          <ClickAwayListener
            onClickAway={() => {
              if (window.innerWidth < 1000) {
                setIsOpen(false);
              }
            }}
          >
            <div className="header__content__nav">
              <NavLink
                to="/#"
                activeclassname="active"
                className="header__content__nav__link"
                onClick={() => {
                  if (window.innerWidth < 1000) {
                    setIsOpen(false);
                  }
                }}
              >
                Home
              </NavLink>

              <NavLink
                to="/about"
                activeclassname="active"
                className="header__content__nav__link"
                onClick={() => {
                  if (window.innerWidth < 1000) {
                    setIsOpen(false);
                  }
                }}
              >
                About Us
              </NavLink>

              <NavLink
                to="/services"
                activeclassname="active"
                className="header__content__nav__link"
                onClick={() => {
                  if (window.innerWidth < 1000) {
                    setIsOpen(false);
                  }
                }}
              >
                Services
              </NavLink>

              <NavLink
                to="/testpakage"
                activeclassname="active"
                className="header__content__nav__link"
                onClick={() => {
                  if (window.innerWidth < 1000) {
                    setIsOpen(false);
                  }
                }}
              >
                Packages
              </NavLink>
              <NavLink
                to="/work"
                activeclassname="active"
                className="header__content__nav__link"
                onClick={() => {
                  if (window.innerWidth < 1000) {
                    setIsOpen(false);
                  }
                }}
              >
                How Testa Works
              </NavLink>
              <NavLink
                to="/contactus"
                activeclassname="active"
                className="header__content__nav__link"
                onClick={() => {
                  if (window.innerWidth < 1000) {
                    setIsOpen(false);
                  }
                }}
              >
                Contact
              </NavLink>

              <NavLink
                to="/pricing"
                onClick={() => {
                  if (window.innerWidth < 1000) {
                    setIsOpen(false);
                  }
                }}
                className="header__content__cta__button"
              >
                Sign Up
              </NavLink>
            </div>
          </ClickAwayListener>
        ) : null}

        <div className="header__content__cta">
          <button
            className="header__content__menu"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            title={isOpen ? "Close" : "Open"}
          >
            {isOpen ? (
              <X size={20} color="currentColor" />
            ) : (
              <Menu size={20} color="currentColor" />
            )}
          </button>

          <button
            title="Sign Up"
            className="header__content__cta__button__hoverr"
          >
            Sign Up
            <div className="header__content__cta__button__hover__container">
            <NavLink
                to="/pricing"
                activeclassname="active"
                className="header__content__nav__link__hover"
                onClick={() => {
                  if (window.innerWidth < 1000) {
                    setIsOpen(false);
                  }
                }}
              >
                Services
              </NavLink>
              <NavLink
                to="/register"
                activeclassname="active"
                className="header__content__nav__link__hover"
                onClick={() => {
                  if (window.innerWidth < 1000) {
                    setIsOpen(false);
                  }
                }}
              >
                User
              </NavLink>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
