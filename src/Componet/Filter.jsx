import React from "react";
import Moviecard from "./Moviecard";

const Filter = ({ list, title, rating }) => {
  return (
    <div>
      <h2>
        {" "}
        Filter by {title && `title:${title}`} {rating && `rating:${rating}`}
      </h2>
      <div>
        {title &&
          rating &&
          list
            .filter((movie) =>
              movie.title.toLowerCase().includes(title.toLowerCase())
            )
            .filter((movie) => movie.rating == rating)
            .map((movie, index) => <Moviecard key={index} {...movie} />)}

        {title &&
          !rating &&
          list
            .filter((movie) =>
              movie.title.toLowerCase().includes(title.toLowerCase())
            )
            .map((movie, index) => <Moviecard key={index} {...movie} />)}

        {!title &&
          rating &&
          list
            .filter((movie) => movie.rating == rating)
            .map((movie, index) => <Moviecard key={index} {...movie} />)}
      </div>
    </div>
  );
};

export default Filter;
