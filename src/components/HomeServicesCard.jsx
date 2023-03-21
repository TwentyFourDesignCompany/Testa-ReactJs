import React from "react";

import { Link } from "react-router-dom";

export function HomeServicesCard({
  image,
  title,
  info,
  svg,
  description,
  toLink,
}) {
  function onClick() {
    window.localStorage.setItem(
      "servicesData",
      JSON.stringify(import.meta.env.VITE_CLOUDNAIRY_API_URL + item.image)
    );
    setTimeout(() => {
      window.scrollTo({ behavior: "smooth", top: 0 });
    }, 300);
  }
  return (
    <Link
      onClick={toLink ? null : onClick}
      to="#"
      className={
        description
          ? "home__services__content__card home__services__content__card__reverse"
          : "home__services__content__card"
      }
    >
      {svg ? (
        <div className="home__services__content__card__icon">{svg}</div>
      ) : (
        <img
          loading="lazy"
          src={image}
          alt={title}
          className="home__services__content__card__img"
        />
      )}
      <div className="home__services__content__card__heading">{title}</div>
      {description ? (
        <div className="home__services__content__card__info">
          {description?.length > 100
            ? description?.substring("", 100) + "..."
            : description}
        </div>
      ) : (
        <div className="home__services__content__card__info">
          {info?.length > 102 ? info.substring("", 102) + "..." : info}
        </div>
      )}
    </Link>
  );
}
