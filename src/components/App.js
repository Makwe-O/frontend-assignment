import React, { useState, useEffect } from "react";
import { sendRequest } from "../util/api";
import Header from "./molecule/header";
import MovieList from "./molecule/movielist";
const App = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    if (search.length === 0) {
      async function fetchMovies() {
        setLoading(true);

        const { data } = await sendRequest("/movie/now_playing");

        setMovies((prevMovies) => [...data.results]);
        setLoading(false);
      }

      fetchMovies();
    }
  }, [search]);
  useEffect(() => {
    if (search.length > 0) {
      async function searchMovies() {
        setLoading(true);
        const { data } = await sendRequest("/search/movie", { query: search });
        setMovies((prevMovies) => [...data.results]);
        setLoading(false);
      }

      searchMovies();
    }
  }, [search]);
  return (
    <main>
      <Header handleSearch={(e) => handleSearch(e)} />
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <MovieList movies={movies} isSearchingMode={search.length > 0} />
      )}
    </main>
  );
};

export default App;
