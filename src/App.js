import "./App.css";
import React, { useState } from "react";
import { moviesData } from "./MovieData";
import MovieList from "./Component/MovieList/MovieList";
import Footer from "./Component/Footer/Footer";
import NavBar from "./Component/Nav/NavBar";
import AddMovie from "./Component/AddMovie/AddMovie";
import { Switch, Route } from "react-router-dom";
import Details from "./Component/Details/Details";

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

      <Switch>
        <Route exact path="/">
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
        </Route>
        <Route path="/Details" component={Details} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
