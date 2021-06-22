import React from "react";
import Heading from "../../atoms/heading";
import Badge from "../../atoms/badge";

const Card = ({ movie, onClick }) => {
  const image = {
    backgroundImage: `url(https://image.tmdb.org/t/p/original${movie?.poster_path})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div className="card" onClick={onClick}>
      <div className="badge-container">
        <Badge rating={movie?.vote_average} />
      </div>
      <div className="card-image" style={image}></div>

      <div className="card-text">
        <Heading content={movie?.title} size={"small"} />
      </div>
    </div>
  );
};

export default Card;
