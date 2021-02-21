import "./App.css";
import React, { useState } from "react";
import { moviesData } from "./MovieData";
import MovieList from "./Component/MovieList/MovieList";
import Footer from "./Component/Footer/Footer";
import NavBar from "./Component/Nav/NavBar";
import AddMovie from "./Component/AddMovie/AddMovie";

function App() {
  const [movies, setMovies] = useState(moviesData);
  const [searchTitle, setSearchTitle] = useState("");
  const [searchRating, setSearchRating] = useState(0);

  const handleMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  return (
    <div className="App">
      <NavBar
        setSearchTitle={setSearchTitle}
        setSearchRating={setSearchRating}
        searchRating={searchRating}
      />
      <div
        style={{
          display: "flex",
          alignContent: "flex-start",
          marginTop: "5%",
          justifyContent: "space-around",
        }}
      >
        {" "}
        <AddMovie handleMovie={handleMovie} />
        <MovieList
          movies={movies}
          searchTitle={searchTitle}
          searchRating={searchRating}
        />
      </div>

      <Footer />
    </div>
  );
}

export default App;
