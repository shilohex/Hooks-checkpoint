import React from "react";

const Moviecard = ({
  title = "A new Chapter",
  description = "Nothing ever seemed to work out for Rue . but after the strange event that occurred she decided , everything is within her power and not beyond her as she thought. She just has to use her mind.. ",
  posterURL = "https://www.whatsonnetwork.co.uk/uploads/800x600/a125622e84fc22b3411071c695f7856b.jpg",
  rating = "4",
}) => {
  return (
    <div className="flex gap-4 flex-col border w-full  text-center">
      <div className=" w-full aspect-square border">
        <img src={posterURL} className="h-full" alt="" />
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Rating: {rating}</p>
    </div>
  );
};

export default Moviecard;
