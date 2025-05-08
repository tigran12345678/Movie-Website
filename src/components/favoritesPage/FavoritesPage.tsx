import DrawFavoriteMovie from "./DrawFavoriteMovie";



function FavoritesPage(){

    const raw = localStorage.getItem("favorites");
    const movies =  JSON.parse(raw);
    console.log(typeof movies);



    return(
        <div className="Favorites">
        {movies.map((movie) => (
            <div>

                <DrawFavoriteMovie
                title = {movie.original_title}
                poster = {`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                yearOfRelease = {movie.release_date}
                
                />
                   {/* <img src= {`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt="Movie Poster" />
                   <p>{movie.original_title}</p>
                   <p>{movie.release_date}</p>  
                     */}
            </div>
        ))}
        </div>
    );

}


export default FavoritesPage;