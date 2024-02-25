import React from "react";
import { Pagination, TextField, Button, Box, Stack } from "@mui/material";
import { useMovies } from "../../context/movies";
import MovieCard from "./MovieCard";
import Loader from "../loader/Loader";

const Movies = () => {
  const [search, setSearch] = React.useState("");
  const { myMovies, handleSearch, handlePage } = useMovies();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(search);
    setSearch("");
  };

  const pageHandler = (_, pageNumber) => {
    handlePage(pageNumber);
  };

  return (
    <Box>
      <Stack sx={{ padding: { xs: "80px 10px", sm: "60px 40px" } }}>
        <form onSubmit={handleSubmit}>
          <Stack flexDirection={"row"} justifyContent={"center"} p={5} gap={2}>
            <TextField
              sx={{
                width: { xs: "100%", sm: "60%" },
                outline: "none",
                border: "none",
                fontSize: "1.2rem",
              }}
              label="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              inputProps={{
                style: {
                  backgroundColor: "#f7f1e3",
                },
              }}
            />
            <Button
              sx={{ padding: "16px 32px" }}
              variant="contained"
              type="submit"
            >
              Search
            </Button>
          </Stack>
        </form>

        <Box>
          {myMovies.length === 0 ? (
            <Loader />
          ) : (
            <Stack
              flexDirection={"row"}
              justifyContent={"center"}
              gap={2}
              flexWrap={"wrap"}
            >
              {myMovies.map((data) => (
                <MovieCard
                  key={data.imdbID}
                  poster={data.Poster}
                  title={data.Title}
                  type={data.Type}
                  year={data.Year}
                />
              ))}
            </Stack>
          )}
        </Box>
      </Stack>
      <Stack justifyContent={"center"} flexDirection={"row"} mb={3}>
        <Pagination
          color="primary"
          fullWidth
          count={myMovies.length}
          onChange={pageHandler}
        />
      </Stack>
    </Box>
  );
};

export default Movies;
