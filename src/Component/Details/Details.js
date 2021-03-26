import React from "react";

const Details = ({ props }) => {
  const movie = props.location.state.movie;
  return (
    <div>
      <h1>{movie.Description}</h1>
      <img src={movie.image} />
    </div>
  );
};

export default Details;
