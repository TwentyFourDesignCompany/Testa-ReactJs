import {
  askmedoctorsvg,
  askmedoctorsvg1,
  askmedoctorsvg2,
  askmedoctorsvg6,
} from "../assets/index";
import React from "react";
import { Link } from "react-router-dom";
import { HomeServicesCard } from "../components/HomeServicesCard";
export function homeservicestwo() {
  const data = [
    {
      image: askmedoctorsvg6,
      title: "Testa Emergency ",
      info: "Choose your doctor from thousands of specialist, general, and trusted hospitals",
    },

    {
      image: askmedoctorsvg1,
      title: "Testa Antenatal",
      info: "Serologic tests are blood tests that look for antibodies in your blood. They can involve a number of laboratory techniques.conditions.",
    },

    {
      image: askmedoctorsvg2,
      title: "Testa Vaccination",
      info: "Parasitology is the branch of microbiology that is concerned with the study of parasites. In the process. taxonomy, etc.",
    },
  ];
  return (
    <section className="home__services">
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

      <Link
        to="#"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        title="View All Projects"
        className="home__work__button"
        data-aos="fade-up"
        data-aos-delay="70"
        data-aos-duration="1700"
      >
        Learn more
      </Link>
    </section>
  );
}
