import React from "react";
import Moviecard from "./Moviecard";

const Filter = ({ list }) => {
  return (
    <div>
      {list
        .filter((movie) => movie.rating > 4)
        .map((movie, index) => (
          <Moviecard key={index} {...movie} />
        ))}
    </div>
  );
};

export default Filter;
