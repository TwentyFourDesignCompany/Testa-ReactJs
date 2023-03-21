import React from "react";

import {
  bannerback,
  aboutussectionimg3,
  aboutuspagesvg1,
  aboutuspagesvg2,
  aboutuspagesvg3,
  healthcare,
} from "../assets/index";
export default function work() {
  return (
    <>
      <section className="homebannersection">
        <div className="homebannersection__content">
          <div className="homebannersection__banner__img">
            <img src={bannerback} alt="bannerbackimg" />
          </div>
          <div
            className="homebannersection__heading"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
          >
            How Testa Works
          </div>
          <div
            className="homebannersection__info"
            data-aos="fade-up"
            data-aos-delay="60"
            data-aos-duration="1300"
          >
            24 discovery careline delivers reliable, convenient and innovative
            diagnostic services tailored to the specific needs of individuals,
            families and supporting medical professionals.
          </div>
        </div>
      </section>{" "}
      <section className="aboutussection">
        <div className="aboutussection__content">
          <div
            className="aboutussection__heading__two"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
          >
            WHAT WE DO
          </div>
        </div>
        <div className="aboutussection__content">
          <div className="aboutussection__left">
            <div className="aboutussection__left__content">
              <div
                className="aboutussection__left__info"
                data-aos="fade-up"
                data-aos-delay="60"
                data-aos-duration="1200"
              >
                Testa is a mobile application that connects users and patients
                directly with world-class medical professionals (physicians,
                physician assistants, emergency response and nurse
                practitioners) to provide quality virtual and emergency doctor
                visits with no wait times. We provide a platform for hospitals,
                professionals and freelance medical practitioners for possible
                freelance engagements.
              </div>
              <div
                className="aboutussection__left__info"
                data-aos="fade-up"
                data-aos-delay="70"
                data-aos-duration="1300"
              >
                Testa uses a secure video connection through our high-speed
                virtual interface and smart technology that keeps both patients
                and their personal information safe and secure. Tesla also
                provides Tesla APIs for hospitals to easily connect with
                patients wherever they are for easy follow-up.
              </div>
            </div>
          </div>
          <div className="aboutussection__right">
            <div
              className="aboutussection__right__content"
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-duration="1000"
            >
              <img src={aboutussectionimg3} alt="aboutussectionimg" />
            </div>
          </div>
        </div>
      </section>
      <section className="aboutussection__info">
        <div
          className="aboutussection__left__info__two"
          data-aos="fade-up"
          data-aos-delay="60"
          data-aos-duration="1200"
        >
          Testa makes getting the most common prescription drugs easier, faster,
          and for the cheapest rates around through our network of carefully
          selected pharmacies. Testa provides users and their families with
          quick access to medical care, even if it's an emergency, without the
          need for insurance coverage. There are no hidden costs. What you see
          is exactly what you’ll pay for.
        </div>
        <div
          className="aboutussection__left__info__two"
          data-aos="fade-up"
          data-aos-delay="60"
          data-aos-duration="1200"
        >
          Testa makes getting the most common prescription drugs easier, faster,
          and for the cheapest rates around through our network of carefully
          selected pharmacies. Testa provides users and their families with
          quick access to medical care, even if it's an emergency, without the
          need for insurance coverage. There are no hidden costs. What you see
          is exactly what you’ll pay for.
        </div>
      </section>
      <section className="aboutussection__info">
        <div
          className="aboutussection__left__info__two__heading"
          data-aos="fade-up"
          data-aos-delay="60"
          data-aos-duration="1200"
        >
          What We Do
        </div>
        <div
          className="aboutussection__left__info__two"
          data-aos="fade-up"
          data-aos-delay="60"
          data-aos-duration="1200"
        >
          Testa makes getting the most common prescription drugs easier, faster,
          and for the cheapest rates around through our network of carefully
          selected pharmacies. Testa provides users and their families with
          quick access to medical care, even if it's an emergency, without the
          need for insurance coverage. There are no hidden costs. What you see
          is exactly what you’ll pay for.
        </div>
      </section>
      <section className="need__healthcare">
        <div className="need__healthcare__left">
          <div
            className="need__healthcare__left__heading"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
          >
            Do you need a health care Solution?
          </div>
          <button
            className="need__healthcare__left__button"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1300"
          >
            Contact Us
          </button>
        </div>
        <div className="need__healthcare__right">
          <div>
            <img
              className="need__healthcare__right__image"
              src={healthcare}
              alt="need__healthcare__right__image"
            />
          </div>
        </div>
      </section>
    </>
  );
}
