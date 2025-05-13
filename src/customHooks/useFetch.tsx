import { useState, useEffect } from 'react';

const useFetch = (userInput: string) => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const API_KEY = import.meta.env.VITE_KEY; 
    console.log('▶︎ using key:', API_KEY);

    const url = userInput.trim()
      ? `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${userInput}`
      : `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

    fetch(url)
      .then(r => r.json())
      .then(res => setData(res.results || []))
      .catch(err => console.error(err));
  }, [userInput]);

  return data;
};

export default useFetch;
