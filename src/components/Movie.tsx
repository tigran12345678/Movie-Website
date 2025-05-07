import { useState } from "react";

function Movie({ id, year , title, image, type, saveFunction }) {


    return (
      <div className="Movie">
        <img src={image} alt="Movie Poster" />
        <p> year: {year} </p>
        <p> title: {title} </p>
        <p> type: {type} </p>
        <button onClick = {() => saveFunction(id)}>Add to Favorites</button>
      </div>
    );
  }
  
  export default Movie;
  