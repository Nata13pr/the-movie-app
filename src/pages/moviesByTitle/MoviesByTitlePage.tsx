import React from 'react';
import {useAppSelector} from "../../hooks/reduxHooks";

import {Box} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import MovieComponent from "../../components/movie/MovieComponent";

const MoviesByTitlePage = () => {
    const {movieFoundByTitle} = useAppSelector(state => state.movie)

    return (
        <Box>
            <Grid2 container spacing={1}>
                {movieFoundByTitle.map(movie =>
                    <MovieComponent key={movie.id} movie={movie}/>)}

            </Grid2>
        </Box>
    );
};

export default MoviesByTitlePage;