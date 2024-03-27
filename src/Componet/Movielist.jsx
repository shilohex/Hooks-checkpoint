import React from "react";
import Moviecard from "./Moviecard";

const Movielist = ({ list }) => {
  return (
    <div>
      <h1>Movie List</h1>
      <div className="grid grid-cols-5">
        {list.map((movie, index) => (
          <Moviecard key={index} {...movie} />
        ))}
      </div>
    </div>
  );
};
export default Movielist;
