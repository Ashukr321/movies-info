import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";
const myMoviesContext = createContext();
const MovieProvider = ({ children }) => {
  const [myMovies, setMyMovies] = useState([]);
  const [search, setSearch] = useState("avengers");
  const [page, setPage] = useState(1);

  const fetchMovies = async (search, page) => {
    const options = {
      method: "GET",
      url: `http://www.omdbapi.com/?i=tt3896198&apikey=${process.env.REACT_APP_API_KEY}`,
      params: {
        s: search,
        page: page,
      },
    };

    try {
      const response = await axios.request(options);
      setMyMovies(response.data.Search);
      console.log(response.data.Search); // Assuming you want to set the movie results to myMovies
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = value => {
    setSearch(value);
  };
  const handlePage = page => {
    setPage(page);
  };

  useEffect(() => {
    fetchMovies(search, page);
  }, [search, page]);

  return (
    <myMoviesContext.Provider value={{ myMovies, handleSearch, handlePage }}>
      {children}
    </myMoviesContext.Provider>
  );
};

const useMovies = () => useContext(myMoviesContext);

export { useMovies, MovieProvider };
