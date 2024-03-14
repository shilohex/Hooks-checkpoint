import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to={"/about"}>Go to about</Link>
    </div>
  );
};

export default Home;
