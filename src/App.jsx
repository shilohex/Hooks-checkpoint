import "./App.css";
import { useState } from "react";
import Movielist from "./Componet/Movielist.jsx";
import data from "./data.js";
import Filter from "./Componet/Filter.jsx";

function App() {
  const [movies, setMovies] = useState(data);
  const [filter, setFilter] = useState(false);
  const [title, setTitle] = useState();
  const [rating, setRating] = useState();
  // const [newmovie, setNewmovie] = useState({
  //   title: "",
  //   description: "",
  //   posterURL: "",
  //   rating: 0,
  // });

  console.log(movies);
  function handleTitle(e) {
    setTitle(e.target.value);
    setFilter(e.target.value);
    setRating("");
  }
  function handleRating(e) {
    setRating(e.target.value);
    setFilter(e.target.value);
    setTitle("");
  }

  return (
    <>
      <h1 className="text-3xl font-bold gap-5 underline text-[red]">MOVIES!</h1>
      {/* <Movielist list={movies} /> */}
      <Filter list={movies} />
      <input
        type="text"
        placeholder="Filter by title"
        value={title}
        onChange={handleTitle}
      />
      <input
        type="number"
        placeholder="filter by rating"
        value={rating}
        onChange={handleRating}
      />
      {/* <div>
        <div className="group">
          <p>Add movie</p>
          <form>
            <input
              type="text"
              placeholder="Title"
              value={newmovie.title}
              onChange={(e) =>
                setNewmovie({ ...newmovie, title: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Description"
              value={newmovie.description}
              onChange={(e) => setNewmovie({ ...newmovie, description: e.target.value })}/>
              
              <input
              type="text"
              placeholder="Poster URL"
              value={newmovie.posterURL}
              onChange={(e) => setNewmovie({ ...newmovie, posterURL: e.target.value })}/>
              <input
              type="number"
              placeholder="Rating"
              value={newmovie.rating}
              onChange={(e) => setNewmovie({ ...newmovie, rating: e.target.value })}/>
              <button onClick={() => setMovies([...movies, newmovie])}>Add</button>

          </form>
        </div> */}
      <div>
        {filter ? (
          <Filter title={title} rating={rating} list={movies} />
        ) : (
          <Movielist list={movies} />
        )}
      </div>
    </>
  );
}

export default App;
