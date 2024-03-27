import React from "react";
import Moviecard from "./Moviecard";

const Filter = ({ list, title, rating }) => {
  return (
    <div>
      {title &&
        list
          .filter((movie) =>
            movie.title.toLowerCase().includes(title.toLowerCase())
          )
          .map((movie, index) => <Moviecard key={index} {...movie} />)}
      {rating &&
        list
          .filter((movie) => movie.rating === parseInt(rating))
          .map((movie, index) => <Moviecard key={index} {...movie} />)}
    </div>
  );
};

export default Filter;
