import {
  askmedoctorsvg,
  askmedoctorsvg1,
  askmedoctorsvg2,
  askmedoctorsvg3,
  askmedoctorsvg4,
  servicesSvg1,
  servicesSvg2,
} from "../assets/index";
import React from "react";
import { Link } from "react-router-dom";
import { HomeServicesCard } from "../components/HomeServicesCard";
export function homeservices() {
  const data = [
    {
      image: askmedoctorsvg,
      title: "Ask a Doctor",
      info: "Choose your doctor from thousands of specialist, general, and trusted hospitals",
    },

    {
      image: askmedoctorsvg1,
      title: "Full Body Screening",
      info: "Serologic tests are blood tests that look for antibodies in your blood. They can involve a number of laboratory techniques.conditions.",
    },

    {
      image: askmedoctorsvg2,
      title: "Testa FundMe",
      info: "Parasitology is the branch of microbiology that is concerned with the study of parasites. In the process. taxonomy, etc.",
    },
  ];
  return (
    <section className="home__services">
      <img
        loading="lazy"
        src={servicesSvg1}
        alt="servicesSvg1"
        className="home__services__svg1"
      />
      <img
        loading="lazy"
        src={servicesSvg2}
        alt="servicesSvg2"
        className="home__services__svg2"
      />

      <div
        className="home__services__content"
        data-aos="fade-up"
        data-aos-delay="60"
        data-aos-duration="1300"
      >
        {data?.map((item, index) => (
          <HomeServicesCard
            key={index}
            image={item.image}
            title={item.title}
            info={item.info}
          />
        ))}
      </div>
    </section>
  );
}
