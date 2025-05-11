import DrawFavoriteMovie from "./DrawFavoriteMovie";
import { useEffect, useState } from "react";


function FavoritesPage(){

    

    const raw = localStorage.getItem("favorites");
    const moviesFromLocalStorage =  JSON.parse(raw);
    const [movies, setMovies] = useState(moviesFromLocalStorage || []);

    console.log(movies)


    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(movies));
    }, [movies])

    function deleteFromFavorites(id){
        setMovies(movies.filter((movie) => movie.id !== id)); 
    }

    return(
        <div className="Favorites">
        {movies.map((movie) => (
            <div>

                <DrawFavoriteMovie
                title = {movie.original_title}
                poster = {`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                yearOfRelease = {movie.release_date}
                id = {movie.id}
                deleteFunction = {deleteFromFavorites}
                />
        
            </div>
        ))}
        </div>
    );

}


export default FavoritesPage;