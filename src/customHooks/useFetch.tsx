import { useState, useEffect } from "react";




const useFetch = (userInput) => {

  const [data, setData] = useState([]);
useEffect(() => {
  
  const API_KEY = "3e2bc978b19b61c296bbfd833ff9ecd5";
  const url = userInput.trim()
      ? `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(userInput)}`
      : `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

    fetch(url)
    .then((data) =>  data.json())
    .then((res) => setData(res.results || []))
    .catch(err => console.log(err));

}, [userInput])

   return data;
}

export default useFetch;



