




function DrawFavoriteMovie({title, yearOfRelease, poster, id, deleteFunction}){



    return(

        <div className="FavoriteMovie">
            <img src={poster} alt="" />
            <p>{title}</p>
            <p>{yearOfRelease}</p>
            <button onClick = {() => deleteFunction(id)}>Remove from Favorites</button>
        </div>
    
    );

}


export default DrawFavoriteMovie