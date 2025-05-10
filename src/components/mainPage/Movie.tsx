import { useState } from "react";

function Movie({ id, year , title, image, type, saveFunction }) {


    return (
      <div className="Movie">
        <img src={image} alt="Movie Poster" />
        
        <div className="MovieInfo">
        <p> year: {year} </p>
        <p> title: {title} </p>
        <p> type: {type} </p>
   
        </div>
        <button onClick = {() => saveFunction(id)}>Add to Favorites</button>
      </div>
    );
  }
  
  export default Movie;
  