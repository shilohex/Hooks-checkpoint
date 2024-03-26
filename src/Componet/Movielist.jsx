import React from "react";
import Moviecard from "./Moviecard";

const Movielist = ({ list }) => {
  return (
    <div>
      {list.map((movie, index) => (
        <Moviecard key={index} {...movie} />
      ))}
    </div>
  );
};

export default Movielist;
