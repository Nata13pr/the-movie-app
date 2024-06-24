import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import PosterPreviewComponent from "../../components/posterPreview/PosterPreviewComponent";
import {Box} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import {useNavigate} from "react-router-dom";
import {movieActions} from "../../redux/slices/movieSlice";
import MovieComponent from "../../components/movie/MovieComponent";


const MoviesByTitlePage = () => {
    const {movieFoundByTitle} = useAppSelector(state => state.movie)


console.log(movieFoundByTitle,'.........................................')
    return (

    <Box>
        <Grid2 container spacing={1}>
            {movieFoundByTitle.map(movie =>
            <MovieComponent key={movie.id} movie={movie}  />)}

        </Grid2>

    </Box>
    );
};

export default MoviesByTitlePage;