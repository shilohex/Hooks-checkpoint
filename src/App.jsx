import "./App.css";
import { useState } from "react";
import Movielist from "./Componet/Movielist.jsx";
import movie from "./movies.js";
import Filter from "./Componet/Filter.jsx";

function App() {
  const [movies, setMovies] = useState(movie);
  const [filterByTitle, SetfilterByTitle] = useState("");
  const [filterByRating, setfilterByRating] = useState(0);
  const [newMovies, setnewMovies] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: 0,
  });
  function handleSubmit(e) {
    e.preventDefault();
    setMovies([...movies, newMovies]);
    setnewMovies({
      title: "",
      description: "",
      posterURL: "",
      rating: 0,
    });
  }
  console.log(newMovies);
  return (
    <>
      <h1 className="text-3xl font-bold underline">MOVIES</h1>
      <div>
        <input
          type="text"
          placeholder="Filter by title"
          value={filterByTitle}
          onChange={(e) => SetfilterByTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Filter by rating"
          value={filterByRating}
          onChange={(e) => setfilterByRating(e.target.value)}
        />
        <div>
          <p>Add Movie</p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="title"
              value={newMovies.title}
              onChange={(e) =>
                setnewMovies({ ...newMovies, title: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="description"
              value={newMovies.description}
              onChange={(e) =>
                setnewMovies({ ...newMovies, description: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="posterURL"
              value={newMovies.posterURL}
              onChange={(e) =>
                setnewMovies({ ...newMovies, posterURL: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="rating"
              value={newMovies.rating}
              onChange={(e) =>
                setnewMovies({ ...newMovies, rating: e.target.value })
              }
            />
            <button type="submit">Add</button>
          </form>
        </div>
      </div>
      {filterByRating || filterByTitle ? (
        <Filter list={movies} rating={filterByRating} title={filterByTitle} />
      ) : (
        <Movielist list={movies} />
      )}

      {/* <Movielist list={movies} /> */}
    </>
  );
}

export default App;
