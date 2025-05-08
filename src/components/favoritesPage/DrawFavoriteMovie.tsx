



function DrawFavoriteMovie({title, yearOfRelease, poster}){

    return(

        <div className="FavoriteMovie">

            <img src={poster} alt="" />
            <p>{title}</p>
            <p>{yearOfRelease}</p>
            <button>Remove from Favorites</button>
        </div>
    
    );

}


export default DrawFavoriteMovie