import React from "react";
import Moviecard from "./Moviecard";

const Movielist = ({ list }) => {
  return (
    <div className="grid grid-cols-5 gap-6 ">
      {list.map((movie, index) => (
        <Moviecard key={index} {...movie} />
      ))}
    </div>
  );
};

export default Movielist;
