import React from "react";
import {
  homesectionvideo,
  aboutussectionimg,
  ourtextpkg,
  ourtextpkgcard1,
  ourtextpkgcard2,
  ourtextpkgcard3,
  patientreviews,
} from "../assets/index";
import { homeservices } from "./homeservices";

export default function aboutus() {
  return (
    <>
      <section className="homesection">
        <div className="homesection__content">
          <div
            className="homesection__heading"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
          >
            We Define The Boundaries of World Class Medical Services
          </div>
          <div
            className="homesection__info"
            data-aos="fade-up"
            data-aos-delay="60"
            data-aos-duration="1400"
          >
            24 discovery careline delivers reliable, convenient and innovative
            diagnostic services tailored to the specific needs of individuals,
            families and supporting medical professionals.
          </div>
          <button
            className="homesection__button"
            data-aos="fade-up"
            data-aos-delay="70"
            data-aos-duration="1600"
          >
            Book Appointment
          </button>
          <div
            className="homesection__video"
            data-aos="fade-up"
            data-aos-delay="75"
            data-aos-duration="1700"
          >
            <iframe
              alt="HomeVideo"
              width="80%"
              height="450"
              src="https://www.youtube.com/embed/C_nONScURzo"
            ></iframe>
          </div>
        </div>
      </section>
      <section className="testaofferingssection">
        <div className="testaofferingssection__content">
          <div
            className="testaofferingssection__heading"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
          >
            Testa Offerings
          </div>
          <div className="testaofferingssection__span"></div>
          <div
            className="testaofferingssection__info"
            data-aos="fade-up"
            data-aos-delay="60"
            data-aos-duration="1300"
          >
            We provide to you the best choiches for you. Adjust it to your
            health needs and make sure your undergo treatment with our highly
            qualified doctors you can consult with us which type of service is
            suitable for your health
          </div>
        </div>
      </section>
      {homeservices()}
      <section className="aboutussection">
        <div
          className="aboutussection__heading"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          About Us
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
                Testa is a telehealth-tech platform where patients can quickly
                and easily connect with doctors, nurses and laboratories.
              </div>
              <div
                className="aboutussection__left__info"
                data-aos="fade-up"
                data-aos-delay="70"
                data-aos-duration="1400"
              >
                We make access to quality wellness, medical care and testing
                easier, faster, and more secure than ever through our speedy
                virtual interface, a database of licensed medical professionals,
                and smart technology that keeps both patients and their personal
                information safe.
              </div>
              <div
                className="aboutussection__left__info"
                data-aos="fade-up"
                data-aos-delay="75"
                data-aos-duration="1500"
              >
                Testa is a valuable resource for health and wellness management
                for medical professionals, medical freelancers and patients who
                are considering a telemedicine or physical appointment.
              </div>
              <button
                className="aboutussection__left__button"
                data-aos="fade-up"
                data-aos-delay="75"
                data-aos-duration="1500"
              >
                Learn more
              </button>
            </div>
          </div>
          <div className="aboutussection__right">
            <div
              className="aboutussection__right__content"
              data-aos="fade-up"
              data-aos-delay="60"
              data-aos-duration="1500"
            >
              <img src={aboutussectionimg} alt="aboutussectionimg" />
            </div>
          </div>
        </div>
      </section>
      <section className="ourtestpakages">
        <div className="ourtestpakages__all__content">
          <div className="testaofferingssection__content">
            <div
              className="testaofferingssection__heading"
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-duration="1000"
            >
              Our Test Pakages
            </div>
            <div className="testaofferingssection__span"></div>
            <div
              className="testaofferingssection__info"
              data-aos="fade-up"
              data-aos-delay="70"
              data-aos-duration="1300"
            >
              Bringing premium healthcare features to your fingertips. User
              friendly mobile platform to bring healthcare to your fingertips.
              Signup and be a part of the new health culture.
            </div>
          </div>
          <div className="ourtestpakages__Cards">
            <div className="ourtestpakages__card">
              <div className="ourtestpakages__card__content">
                <div
                  className="ourtestpakages__card__svg"
                  data-aos="fade-up"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                >
                  <img src={ourtextpkgcard1} alt="ourtextpkgcard1" />
                </div>
                <div
                  className="ourtestpakages__card__heading"
                  data-aos="fade-up"
                  data-aos-delay="60"
                  data-aos-duration="1200"
                >
                  Comprehensive Medical Test
                </div>
                <div
                  className="ourtestpakages__card__info"
                  data-aos="fade-up"
                  data-aos-delay="70"
                  data-aos-duration="1400"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
                  nunc, mi,
                  <a href="#"> Learn more </a>
                </div>
                <button
                  className="ourtestpakages__card__button"
                  data-aos="fade-up"
                  data-aos-delay="70"
                  data-aos-duration="1400"
                >
                  Bronze Plan
                </button>
              </div>
            </div>
            <div className="ourtestpakages__card">
              <div className="ourtestpakages__card__content">
                <div
                  className="ourtestpakages__card__svg"
                  data-aos="fade-up"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                >
                  <img src={ourtextpkgcard1} alt="ourtextpkgcard1" />
                </div>
                <div
                  className="ourtestpakages__card__heading"
                  data-aos="fade-up"
                  data-aos-delay="60"
                  data-aos-duration="1200"
                >
                  Comprehensive Medical Test
                </div>
                <div
                  className="ourtestpakages__card__info"
                  data-aos="fade-up"
                  data-aos-delay="70"
                  data-aos-duration="1400"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
                  nunc, mi,
                  <a href="#"> Learn more </a>
                </div>
                <button
                  className="ourtestpakages__card__button"
                  data-aos="fade-up"
                  data-aos-delay="70"
                  data-aos-duration="1400"
                >
                  Bronze Plan
                </button>
              </div>
            </div>
            <div className="ourtestpakages__card">
              <div className="ourtestpakages__card__content">
                <div
                  className="ourtestpakages__card__svg"
                  data-aos="fade-up"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                >
                  <img src={ourtextpkgcard1} alt="ourtextpkgcard1" />
                </div>
                <div
                  className="ourtestpakages__card__heading"
                  data-aos="fade-up"
                  data-aos-delay="60"
                  data-aos-duration="1200"
                >
                  Comprehensive Medical Test
                </div>
                <div
                  className="ourtestpakages__card__info"
                  data-aos="fade-up"
                  data-aos-delay="70"
                  data-aos-duration="1400"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
                  nunc, mi,
                  <a href="#"> Learn more </a>
                </div>
                <button
                  className="ourtestpakages__card__button"
                  data-aos="fade-up"
                  data-aos-delay="70"
                  data-aos-duration="1400"
                >
                  Bronze Plan
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="patientreviews">
        <div className="patientreviews__content">
          <div className="patientreviews__left">
            <div
              className="patientreviews__left__info"
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-duration="1000"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla
              nulla semper etiam lectus quam. Lobortis massa tortor egestas
              faucibus nunc nibh risus ultrices. Feugiat rutrum dolor dignissim
              nisi, vitae. Eu orci consectetur elit aliquet nam amet turpis.stas
              faucibus nunc nibh risus ultrices. Feugiat rutrum dolor dignissim
              nisi, vitae. Eu orci consectetur elit aliquet nam amet turpis.
            </div>
            <div
              className="patientreviews__left__heading"
              data-aos="fade-up"
              data-aos-delay="60"
              data-aos-duration="1300"
            >
              Scarlett Johansson
            </div>
          </div>
          <div className="patientreviews__right">
            <div
              className="patientreviews__right__img"
              data-aos="fade-up"
              data-aos-delay="60"
              data-aos-duration="1400"
            >
              <img src={patientreviews} alt="patientreviews" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
