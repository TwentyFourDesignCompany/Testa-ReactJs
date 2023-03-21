import React from "react";
import { bannerback } from "../assets/index";

export default function contactus() {
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
            Contact us
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
      <section className="contactform">
        <div className="contactform__content">
          <div className="contactform__left">
            <div className="contactform__left__content">
              <div
                className="contactform__left__input"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1000"
              >
                <input type="text" placeholder="Name" />
              </div>
              <div
                className="contactform__left__input"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1200"
              >
                <input type="text" placeholder="Email" />
              </div>
              <div
                className="contactform__left__input"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1200"
              >
                <input type="text" placeholder="Number" />
              </div>
              <div
                className="contactform__left__input__msg"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1200"
              >
                <input type="text" placeholder="Message" />
              </div>
              <button
                className="contactform__left__button"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1200"
              >
                Submit
              </button>
            </div>
          </div>
          <div className="contactform__right">
            <div className="contactform__right__content">
              <div
                className="contactform__right__svg__info"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1000"
              >
                <div className="contactform__right__svg">
                  <svg
                    width="24"
                    height="30"
                    viewBox="0 0 24 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1_3079)">
                      <path
                        d="M11.9135 0C8.75829 0.0036395 5.73328 1.32177 3.50219 3.66519C1.27111 6.0086 0.0161604 9.18591 0.0126953 12.5C0.0126953 19.1025 10.0094 28.1663 11.1447 29.1788L11.9135 29.8613L12.6823 29.1788C13.8177 28.1663 23.8143 19.1025 23.8143 12.5C23.8109 9.18591 22.5559 6.0086 20.3249 3.66519C18.0938 1.32177 15.0688 0.0036395 11.9135 0V0ZM11.9135 18.75C10.7366 18.75 9.58619 18.3834 8.60765 17.6967C7.62911 17.0099 6.86643 16.0338 6.41606 14.8918C5.96568 13.7497 5.84785 12.4931 6.07744 11.2807C6.30704 10.0683 6.87376 8.95466 7.70594 8.08058C8.53813 7.20651 9.59839 6.61125 10.7527 6.37009C11.9069 6.12893 13.1034 6.25271 14.1906 6.72575C15.2779 7.1988 16.2073 7.99988 16.8611 9.02769C17.5149 10.0555 17.8639 11.2639 17.8639 12.5C17.862 14.157 17.2345 15.7456 16.119 16.9172C15.0035 18.0889 13.4911 18.748 11.9135 18.75Z"
                        fill="#1971F5"
                      />
                      <path
                        d="M11.913 16.25C13.8848 16.25 15.4833 14.5711 15.4833 12.5C15.4833 10.4289 13.8848 8.75 11.913 8.75C9.94123 8.75 8.34277 10.4289 8.34277 12.5C8.34277 14.5711 9.94123 16.25 11.913 16.25Z"
                        fill="#1971F5"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_3079">
                        <rect width="24" height="30" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="contactform__right__info">
                  Plot 1A, Road 3, Ikota Villa, Lekki Lagos
                </div>
              </div>
              <div
                className="contactform__right__svg__info"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1200"
              >
                <div className="contactform__right__svg">
                  <svg
                    width="24"
                    height="30"
                    viewBox="0 0 24 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1_3079)">
                      <path
                        d="M11.9135 0C8.75829 0.0036395 5.73328 1.32177 3.50219 3.66519C1.27111 6.0086 0.0161604 9.18591 0.0126953 12.5C0.0126953 19.1025 10.0094 28.1663 11.1447 29.1788L11.9135 29.8613L12.6823 29.1788C13.8177 28.1663 23.8143 19.1025 23.8143 12.5C23.8109 9.18591 22.5559 6.0086 20.3249 3.66519C18.0938 1.32177 15.0688 0.0036395 11.9135 0V0ZM11.9135 18.75C10.7366 18.75 9.58619 18.3834 8.60765 17.6967C7.62911 17.0099 6.86643 16.0338 6.41606 14.8918C5.96568 13.7497 5.84785 12.4931 6.07744 11.2807C6.30704 10.0683 6.87376 8.95466 7.70594 8.08058C8.53813 7.20651 9.59839 6.61125 10.7527 6.37009C11.9069 6.12893 13.1034 6.25271 14.1906 6.72575C15.2779 7.1988 16.2073 7.99988 16.8611 9.02769C17.5149 10.0555 17.8639 11.2639 17.8639 12.5C17.862 14.157 17.2345 15.7456 16.119 16.9172C15.0035 18.0889 13.4911 18.748 11.9135 18.75Z"
                        fill="#1971F5"
                      />
                      <path
                        d="M11.913 16.25C13.8848 16.25 15.4833 14.5711 15.4833 12.5C15.4833 10.4289 13.8848 8.75 11.913 8.75C9.94123 8.75 8.34277 10.4289 8.34277 12.5C8.34277 14.5711 9.94123 16.25 11.913 16.25Z"
                        fill="#1971F5"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_3079">
                        <rect width="24" height="30" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="contactform__right__info">
                  Plot 1A, Road 3, Ikota Villa, Lekki Lagos
                </div>
              </div>
              <div
                className="contactform__right__svg__info"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1300"
              >
                <div className="contactform__right__svg">
                  <svg
                    width="24"
                    height="30"
                    viewBox="0 0 24 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1_3079)">
                      <path
                        d="M11.9135 0C8.75829 0.0036395 5.73328 1.32177 3.50219 3.66519C1.27111 6.0086 0.0161604 9.18591 0.0126953 12.5C0.0126953 19.1025 10.0094 28.1663 11.1447 29.1788L11.9135 29.8613L12.6823 29.1788C13.8177 28.1663 23.8143 19.1025 23.8143 12.5C23.8109 9.18591 22.5559 6.0086 20.3249 3.66519C18.0938 1.32177 15.0688 0.0036395 11.9135 0V0ZM11.9135 18.75C10.7366 18.75 9.58619 18.3834 8.60765 17.6967C7.62911 17.0099 6.86643 16.0338 6.41606 14.8918C5.96568 13.7497 5.84785 12.4931 6.07744 11.2807C6.30704 10.0683 6.87376 8.95466 7.70594 8.08058C8.53813 7.20651 9.59839 6.61125 10.7527 6.37009C11.9069 6.12893 13.1034 6.25271 14.1906 6.72575C15.2779 7.1988 16.2073 7.99988 16.8611 9.02769C17.5149 10.0555 17.8639 11.2639 17.8639 12.5C17.862 14.157 17.2345 15.7456 16.119 16.9172C15.0035 18.0889 13.4911 18.748 11.9135 18.75Z"
                        fill="#1971F5"
                      />
                      <path
                        d="M11.913 16.25C13.8848 16.25 15.4833 14.5711 15.4833 12.5C15.4833 10.4289 13.8848 8.75 11.913 8.75C9.94123 8.75 8.34277 10.4289 8.34277 12.5C8.34277 14.5711 9.94123 16.25 11.913 16.25Z"
                        fill="#1971F5"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_3079">
                        <rect width="24" height="30" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="contactform__right__info">
                  Plot 1A, Road 3, Ikota Villa, Lekki Lagos
                </div>
              </div>
              <div
                className="location__map"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1300"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27341.257713048526!2d72.93755295871992!3d31.06364092888959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3922f1aee1a4035f%3A0x1e765ba5546791d9!2sSamundri%2C%20Faisalabad%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1669512564984!5m2!1sen!2s"
                  loading="lazy"
                  style={{
                    width: "60%",
                    height: 210,
                    border: "none",
                    borderRadius: 25,
                  }}
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
