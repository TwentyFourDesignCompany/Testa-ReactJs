import React from "react";
import {
  bannerback,
  servicescardimg,
  servicescardimg1,
  servicescardimg2,
  servicescardimg3,
  healthcare,
  arrow,
  servicesSvg1,
} from "../assets/index";

export default function services() {
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
            Services
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
      </section>
      <section className="servicescardssection">
        <div className="servicescardssection__backimg">
          <img src={servicesSvg1} alt="servicescardimg" />
        </div>
        <div className="servicescardssection__content">
          <div className="servicescardssection__left">
            <div className="servicescardssection__left__content">
              <div
                className="servicescardssection__left__img"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1000"
              >
                <img src={servicescardimg} alt="servicescardimg" />
              </div>
              <div
                className="servicescardssection__left__heading"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1000"
              >
                Serological Screening
              </div>
              <div
                className="servicescardssection__left__info"
                data-aos="fade-up"
                data-aos-delay="60"
                data-aos-duration="1500"
              >
                Serologic tests are blood tests that look for antibodies in your
                blood. They can involve a number of laboratory techniques.
                Different types of serologic tests are used to diagnose various
                disease conditions.
              </div>
              <button
                className="servicescardssection__left__button"
                data-aos="fade-up"
                data-aos-delay="60"
                data-aos-duration="1500"
              >
                Learn more
              </button>
            </div>
          </div>
          <div className="servicescardssection__right">
            <div className="servicescardssection__left__content">
              <div
                className="servicescardssection__left__img"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1000"
              >
                <img src={servicescardimg1} alt="servicescardimg" />
              </div>
              <div
                className="servicescardssection__left__heading"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1000"
              >
                Medical Microbiology & Parasitology
              </div>
              <div
                className="servicescardssection__left__info"
                data-aos="fade-up"
                data-aos-delay="60"
                data-aos-duration="1300"
              >
                Parasitology is the branch of microbiology that is concerned
                with the study of parasites. In the process, it gives focus to
                various characteristics of the parasite (morphology, life-cycle,
                ecology, taxonomy, etc)
              </div>
              <button
                className="servicescardssection__left__button"
                data-aos="fade-up"
                data-aos-delay="60"
                data-aos-duration="1300"
              >
                Learn more
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="servicescardstwosection">
        <div className="servicescardssection__backimg">
          <img src={servicesSvg1} alt="servicescardimg" />
        </div>
        <div className="servicescardssection__content__two">
          <div className="servicescardssection__left__two">
            <div className="servicescardssection__left__content">
              <div
                className="servicescardssection__left__img"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1000"
              >
                <img src={servicescardimg2} alt="servicescardimg" />
              </div>
              <div
                className="servicescardssection__left__heading"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1000"
              >
                Clinical Biochemistry
              </div>
              <div
                className="servicescardssection__left__info"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1300"
              >
                Clinical chemistry refers to the biochemical analysis of body
                fluids. It uses chemical reactions to determine the levels of
                various chemical compounds in bodily fluids.
              </div>
              <button
                className="servicescardssection__left__button"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1300"
              >
                Learn more
              </button>
            </div>
          </div>
          <div className="servicescardssection__right">
            <div className="servicescardssection__left__content">
              <div
                className="servicescardssection__left__img"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1000"
              >
                <img src={servicescardimg3} alt="servicescardimg" />
              </div>
              <div
                className="servicescardssection__left__heading"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1000"
              >
                Hematology
              </div>
              <div
                className="servicescardssection__left__info"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1300"
              >
                Hematology is the branch of medicine concerning the study of
                blood, the blood-forming organs, and blood diseases. Hematology
                tests include laboratory assessments of blood formation and
                blood disorders.
              </div>
              <button
                className="servicescardssection__left__button"
                data-aos="fade-up"
                data-aos-delay="60"
                data-aos-duration="1300"
              >
                Learn more
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="proactivehealthcare">
        <div className="proactivehealthcare__heading__info">
          <div
            className="proactivehealthcare__heading"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1200"
          >
            Proactive Healthcare & Technology
          </div>
          <div
            className="proactivehealthcare__info"
            data-aos="fade-up"
            data-aos-delay="60"
            data-aos-duration="1300"
          >
            With our super powers we have reached this
          </div>
        </div>
        <div
          className="proactivehealthcare__all__content"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          <div className="proactivehealthcare__content">
            <div className="proactivehealthcare__content__svg">
              <svg
                width="50"
                height="50"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_38_192)">
                  <path
                    d="M24 13.3333H32L28 8L24 13.3333ZM24 18.6667H32L28 24L24 18.6667Z"
                    fill="#D6B1FF"
                  />
                  <path
                    d="M1.33333 0H9.33333V32H1.33333C0.979711 32 0.640572 31.8595 0.390523 31.6095C0.140475 31.3594 0 31.0203 0 30.6667V1.33333C0 0.979711 0.140475 0.640572 0.390523 0.390523C0.640572 0.140475 0.979711 0 1.33333 0Z"
                    fill="#8C30F5"
                  />
                  <path
                    d="M12 0H20C20.3536 0 20.6928 0.140475 20.9428 0.390523C21.1929 0.640572 21.3333 0.979711 21.3333 1.33333V30.6667C21.3333 31.0203 21.1929 31.3594 20.9428 31.6095C20.6928 31.8595 20.3536 32 20 32H12V0Z"
                    fill="#2EC5CE"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_38_192">
                    <rect width="32" height="32" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="proactivehealthcare__content__heading__info">
              <div className="proactivehealthcare__content__heading">
                10,000+
              </div>
              <div className="proactivehealthcare__content__info">
                Downloads per day
              </div>
            </div>
          </div>
          <div className="proactivehealthcare__content">
            <div className="proactivehealthcare__content__svg">
              <svg
                width="50"
                height="50"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_38_192)">
                  <path
                    d="M24 13.3333H32L28 8L24 13.3333ZM24 18.6667H32L28 24L24 18.6667Z"
                    fill="#D6B1FF"
                  />
                  <path
                    d="M1.33333 0H9.33333V32H1.33333C0.979711 32 0.640572 31.8595 0.390523 31.6095C0.140475 31.3594 0 31.0203 0 30.6667V1.33333C0 0.979711 0.140475 0.640572 0.390523 0.390523C0.640572 0.140475 0.979711 0 1.33333 0Z"
                    fill="#8C30F5"
                  />
                  <path
                    d="M12 0H20C20.3536 0 20.6928 0.140475 20.9428 0.390523C21.1929 0.640572 21.3333 0.979711 21.3333 1.33333V30.6667C21.3333 31.0203 21.1929 31.3594 20.9428 31.6095C20.6928 31.8595 20.3536 32 20 32H12V0Z"
                    fill="#2EC5CE"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_38_192">
                    <rect width="32" height="32" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="proactivehealthcare__content__heading__info">
              <div className="proactivehealthcare__content__heading">
                10,000+
              </div>
              <div className="proactivehealthcare__content__info">
                Downloads per day
              </div>
            </div>
          </div>
        </div>
        <div
          className="proactivehealthcare__all__content"
          data-aos="fade-up"
          data-aos-delay="60"
          data-aos-duration="1300"
        >
          <div className="proactivehealthcare__content">
            <div className="proactivehealthcare__content__svg">
              <svg
                width="50"
                height="50"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_38_192)">
                  <path
                    d="M24 13.3333H32L28 8L24 13.3333ZM24 18.6667H32L28 24L24 18.6667Z"
                    fill="#D6B1FF"
                  />
                  <path
                    d="M1.33333 0H9.33333V32H1.33333C0.979711 32 0.640572 31.8595 0.390523 31.6095C0.140475 31.3594 0 31.0203 0 30.6667V1.33333C0 0.979711 0.140475 0.640572 0.390523 0.390523C0.640572 0.140475 0.979711 0 1.33333 0Z"
                    fill="#8C30F5"
                  />
                  <path
                    d="M12 0H20C20.3536 0 20.6928 0.140475 20.9428 0.390523C21.1929 0.640572 21.3333 0.979711 21.3333 1.33333V30.6667C21.3333 31.0203 21.1929 31.3594 20.9428 31.6095C20.6928 31.8595 20.3536 32 20 32H12V0Z"
                    fill="#2EC5CE"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_38_192">
                    <rect width="32" height="32" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="proactivehealthcare__content__heading__info">
              <div className="proactivehealthcare__content__heading">
                10,000+
              </div>
              <div className="proactivehealthcare__content__info">
                Downloads per day
              </div>
            </div>
          </div>
          <div className="proactivehealthcare__content">
            <div className="proactivehealthcare__content__svg">
              <svg
                width="50"
                height="50"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_38_192)">
                  <path
                    d="M24 13.3333H32L28 8L24 13.3333ZM24 18.6667H32L28 24L24 18.6667Z"
                    fill="#D6B1FF"
                  />
                  <path
                    d="M1.33333 0H9.33333V32H1.33333C0.979711 32 0.640572 31.8595 0.390523 31.6095C0.140475 31.3594 0 31.0203 0 30.6667V1.33333C0 0.979711 0.140475 0.640572 0.390523 0.390523C0.640572 0.140475 0.979711 0 1.33333 0Z"
                    fill="#8C30F5"
                  />
                  <path
                    d="M12 0H20C20.3536 0 20.6928 0.140475 20.9428 0.390523C21.1929 0.640572 21.3333 0.979711 21.3333 1.33333V30.6667C21.3333 31.0203 21.1929 31.3594 20.9428 31.6095C20.6928 31.8595 20.3536 32 20 32H12V0Z"
                    fill="#2EC5CE"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_38_192">
                    <rect width="32" height="32" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="proactivehealthcare__content__heading__info">
              <div className="proactivehealthcare__content__heading">
                10,000+
              </div>
              <div className="proactivehealthcare__content__info">
                Downloads per day
              </div>
            </div>
          </div>
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
