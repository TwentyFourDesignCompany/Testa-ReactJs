import React from "react";
import {
  bannerback,
  aboutussectionimg2,
  aboutuspagesvg1,
  aboutuspagesvg2,
  aboutuspagesvg3,
  healthcare,
} from "../assets/index";
export default function about() {
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
            About Us
          </div>
          <div
            className="homebannersection__info"
            data-aos="fade-up"
            data-aos-delay="60"
            data-aos-duration="1300"
          >
            Testa is a telehealth-tech platform where patients can quickly and
            easily connect with doctors, nurses and laboratories.
          </div>
        </div>
      </section>
      <div className="space__two"></div>
      <section className="aboutussection">
        <div className="aboutussection__content">
          <div
            className="aboutussection__heading__two"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
          >
            We make access to quality wellness, medical care and testing easier,
            faster, and more secure.
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
                We make access to quality wellness, medical care and testing
                easier, faster, and more secure than ever through our speedy
                virtual interface, a database of licensed medical professionals,
                and smart technology that keeps both patients and their personal
                information safe.
              </div>
              <div
                className="aboutussection__left__info"
                data-aos="fade-up"
                data-aos-delay="70"
                data-aos-duration="1300"
              >
                We areconnected to a wide network of ultramodern laboratories
                with world class facilities and equipment to carry out various
                medical investigations.
              </div>
              <div
                className="aboutussection__left__info"
                data-aos="fade-up"
                data-aos-delay="80"
                data-aos-duration="1500"
              >
                Testa is a mobile application that connects users and patients
                directly with world-class medical professionals (physicians,
                physician assistants, emergency response and nurse
                practitioners) to provide quality virtual and emergency doctor
                visits with no wait times. We provide a platform for hospitals,
                professionals and freelance medical practitioners for possible
                freelance engagements.
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
              <img src={aboutussectionimg2} alt="aboutussectionimg" />
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
          Testa uses a secure video connection through our high-speed virtual
          interface and smart technology that keeps both patients and their
          personal information safe and secure. Testa makes getting the most
          common prescription drugs easier, faster, and for the cheapest rates
          around through our network of carefully selected pharmacies. Testa
          provides users and their families with quick access to medical care,
          even if it's an emergency, without the need for insurance coverage.
          There are no hidden costs. What you see is exactly what you’ll pay
          for.
        </div>
        <div
          className="aboutussection__left__info__two"
          data-aos="fade-up"
          data-aos-delay="60"
          data-aos-duration="1200"
        >
          Testa is a valuable resource for health and wellness management for
          medical professionals, medical freelancers and patients who are
          considering a telemedicine or physical appointment for: Diabetes
          Management, Hypertension, Skin Irritations, Blood Pressure Management,
          Gynaecology, Sore throat, Constipation and Diarrhoea, Covid-19
          Questions or Concerns, Full Body Checkup, Emergency ,Ambulance, Cold
          and Flu, Malaria and Typhoid, Infections, ENT Concerns, Laboratory
          Services and All medical enquiries.
        </div>
      </section>
      <section className="aboutus__missionsection">
        <div className="aboutus__missionsection__content__all">
          <div
            className="aboutus__missionsection__content"
            data-aos="fade-up"
            data-aos-delay="60"
            data-aos-duration="1200"
          >
            <div className="aboutus__missionsection__svg">
              <img src={aboutuspagesvg1} alt="aboutuspagesvg1" />
            </div>
            <div className="aboutus__missionsection__info">
              To be recognized globally as a leading health tech by setting the
              standards for quality services and accurate results.
            </div>
          </div>
          <div
            className="aboutus__missionsection__content"
            data-aos="fade-up"
            data-aos-delay="60"
            data-aos-duration="1400"
          >
            <div className="aboutus__missionsection__svg">
              <img src={aboutuspagesvg2} alt="aboutuspagesvg1" />
            </div>
            <div className="aboutus__missionsection__info">
              To support families, medical professionals, scientists, patients
              and researchers with seamless services.
            </div>
          </div>
          <div
            className="aboutus__missionsection__content"
            data-aos="fade-up"
            data-aos-delay="70"
            data-aos-duration="1600"
          >
            <div className="aboutus__missionsection__svg">
              <img src={aboutuspagesvg3} alt="aboutuspagesvg1" />
            </div>
            <div className="aboutus__missionsection__info">
              Possibility Mentality Results, Accountability, Integrity,
              Stewardship Ethical Conduct.
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
