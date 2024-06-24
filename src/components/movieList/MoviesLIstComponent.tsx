import React from 'react';
import {useAppSelector} from "../../hooks/reduxHooks";
import MovieComponent from "../movie/MovieComponent";
import {Box} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";

const MoviesLIstComponent = () => {

    const {movies} = useAppSelector(state => state.movie)
    return (
        <Box>
            <Grid2 container spacing={1}>
                {movies.map(movie=><MovieComponent key={movie.id} movie={movie}  />)}
            </Grid2>

        </Box>
    );
};

export default MoviesLIstComponent;