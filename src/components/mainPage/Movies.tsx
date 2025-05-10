  import { useEffect, useState, useContext, createContext } from "react";

  import Movie from "./Movie";
  import PopularMovies from "./PopularMovies";



  function Movies() {
    const [movies, setMovies] = useState([]);
    const [userInput, setUserInput] = useState("");
    const [savedMovies, setSavedMovies] = useState([]);
    const isSearching = userInput.trim().length > 0;


    function saveMovie(id:number){
        const movieToSave = movies.find((movie) => movie.id === id);
        if(!movieToSave){
          return;
        }
        setSavedMovies((prev) => {
          if(prev.some((movie) => movie.id === id)){
            return;
          }

          else{
            return [...prev, movieToSave];
          }
        
        })
        
  }
    useEffect(() => {
      if(savedMovies.length > 0){
        alert("Movie Saved");
        localStorage.setItem("favorites", JSON.stringify(savedMovies));
      }
    }, [savedMovies])

    

    useEffect(() => {
      const API_KEY = "3e2bc978b19b61c296bbfd833ff9ecd5";
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${userInput}`
      )
        .then((res) => res.json())
        .then((data) => {
          setMovies(data.results || []);
        })
        .catch((err) => console.error(err));
    }, [userInput]);
    

    return (
      <>
        <div>
        <input type="text" value = {userInput} onChange={(e) => setUserInput(e.target.value)} placeholder="What movie are you looking for" />
        </div>
       
        <br />

        <div className="Movies">
        {isSearching ? movies.map((movie) => (
          <Movie
            key={movie.id}
            id = {movie.id}
            title={movie.original_title}
            year={movie.release_date}
            image={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            type={movie.title}
            saveFunction={saveMovie}
          />
        )): (<PopularMovies />)}
        </div>
      </>
    );
  }

  export default Movies;
