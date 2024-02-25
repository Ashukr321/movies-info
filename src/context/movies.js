import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";
const myMoviesContext = createContext();
const MovieProvider = ({ children }) => {
  const [myMovies, setMyMovies] = useState([]);
  const [search, setSearch] = useState("avengers");

  const fetchMovies = async (search) => {
    const options = {
      method: "GET",
      url: `http://www.omdbapi.com/?i=tt3896198&apikey=${process.env.REACT_APP_API_KEY}`,
      params: {
        s: search,
      },
    };

    try {
      const response = await axios.request(options);
      setMyMovies(response); 
      console.log(response)// Assuming you want to set the movie results to myMovies
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = (value) => {
    setSearch(value);
  };

  useEffect(() => {
    fetchMovies(search);
  }, [search]);

  return (
    <myMoviesContext.Provider value={{ myMovies, handleSearch }}>
      {children}
    </myMoviesContext.Provider>
  );
};

const useMovies = () => useContext(myMoviesContext);

export { useMovies, MovieProvider };
