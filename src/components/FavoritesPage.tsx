



function FavoritesPage(){

    const raw = localStorage.getItem("favorites");
    const movies =  JSON.parse(raw);
    console.log(typeof movies);

    return(
        <div>
        {movies.map((movie) => (
            <div>
                   <img src= {`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt="Movie Poster" />
                   <p>{movie.original_title}</p>
                   <p>{movie.release_date}</p>  
                    
            </div>
        ))}
        </div>
    );

}


export default FavoritesPage;