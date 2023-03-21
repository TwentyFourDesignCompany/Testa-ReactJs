import React from "react";
import { GridLoader } from "react-spinners";
import { servicesSvg1, servicesSvg2 } from "../assets/index";

export function Loader() {
  const slogans = [
    "Welcome To The Testa",
    "Testa is a platform for all your health needs",
  ];
  let random = Math.random() < 0.5 ? 0 : 1;
  return (
    <div className="loader">
      <img
        src={servicesSvg1}
        alt="  servicesSvg1"
        className="home__jumbotron__svg1"
      />

      <img
        src={servicesSvg2}
        alt="servicesSvg2"
        className="home__jumbotron__svg4"
      />
      <GridLoader
        color="#1971F5"
        cssOverride={{}}
        loading
        margin={2}
        size={30}
        speedMultiplier={1}
        width={1}
      />
      <div className="loader__heading">
        {slogans.filter((_item, i) => i === random).map((item) => item)}
      </div>
    </div>
  );
}
