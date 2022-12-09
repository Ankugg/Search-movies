import React from "react";
import { useEffect, useState } from "react";
import "./app.css";
import SearchIcon from "./search.svg";
import MovieCard from "./movieCard";

const API_URL = "http://omdbapi.com?apikey=2091aff2";
// const movie1 = {
//   Title: "Amazing Spiderman Syndrome",
//   Year: "2012",
//   imdbID: "tt2586634",
//   Type: "movie",
//   Poster: "N/A",
// };
const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchterm,setSearchTerm]=useState('');

  const searchmovie = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };
  useEffect(() => {
    searchmovie("spiderman");
  }, []);
  return (
    <div className="app">
      <h1>movieland</h1>
      <div className="search">
        <input
          type=""
          placeholder="serach for movie"
          // value={searchterm}
          onChange={(e) =>setSearchTerm(e.target.value)}
        />
        <img src={SearchIcon} alt="search" onClick={() =>searchmovie(searchterm)} />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
