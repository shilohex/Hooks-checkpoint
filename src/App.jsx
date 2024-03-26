import "./App.css";
import { useState } from "react";
import Movielist from "./Componet/Movielist.jsx";
import data from "./data.js";
import Filter from "./Componet/Filter.jsx";

function App() {
  const [movies, setMovies] = useState(data);
  const [filter, setFilter] = useState()
  const [title, setTitle]=useState()
  const [rating, setRating] = useState()

  console.log(movies)
  function handleTitle(e) {
    setTitle(e.target.value)
    setFilter(e .target.value)
  }

  return (
    <>
      <h1 className="text-3xl font-bold underline text-[red]">Hello world!</h1>
      {/* <Movielist list={movies} /> */}
      <Filter list={movies} />
      <input type="text" placeholder="Filter by title" value={title} onChange={}
    </>
  );
}

export default App;
