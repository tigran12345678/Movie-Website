import { useEffect, useState } from "react";



function PopularMovies(){

    const [popularMovies, setPopularMovies] = useState([]);

    useEffect(() => {
        const API_KEY = "3e2bc978b19b61c296bbfd833ff9ecd5";
        fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
          )
          .then((res) => res.json())
          .then((data) => {
            setPopularMovies(data.results || []);
          })
          .catch((err) => console.error(err));
      }, []);
      



    return(
        <div className="popularMovies">

        {popularMovies.map((popularMovie) => (
            <div>
             
             <img src={`https://image.tmdb.org/t/p/w200${popularMovie.poster_path}`} alt="" />
             <p>{popularMovie.original_title} </p>
             <p>{popularMovie.release_date} </p>

            </div>
         
        ))}


        </div>
    );

}

export default PopularMovies