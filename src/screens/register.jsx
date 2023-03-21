import React from "react";
import { bannerback } from "../assets/index";
import { signup } from "../assets/index";

export default function register() {
  return (
    <>
      
      <section className="contactform">
        <div style={{marginTop:'2em'}} className="contactform__content">
        <div className="contactform__right">
            <div className="contactform__right__content">
             <img src={signup} alt="signup" className="contactform__right__content__img" />
            </div>
          </div>
          <div className="contactform__left">
            <div className="contactform__left__content">
             <div className="contactform__left__content__heading" 
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1200">
              Register
             </div>
             <div className="contactform__left__content__para" 
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1200">
            Sign up with your data that you entered during your registration.
             </div>
              <div
                className="contactform__left__input"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1200"
              >
                <input type="email" placeholder="Please enter your Email" />
              </div>
              <div
                className="contactform__left__input"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1200"
              >
                <input type="password" placeholder="Please enter your password" />
              </div>
              
              <button
                className="register__left__button"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1200"
              >
                Signup
              </button>
            </div>
          </div>
      
        </div>
      </section>
    </>
  );
}
