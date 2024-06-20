import React from 'react';
import {useAppSelector} from "../../hooks/reduxHooks";
import MoviesListCardComponent from "../movieListCard/MoviesListCardComponent";

const MovieLIstComponent = () => {

    const {movies} = useAppSelector(state => state.movie)
    return (
        <ul>
            {movies.map(movie=><MoviesListCardComponent key={movie.id} movie={movie}  />)}
        </ul>
    );
};

export default MovieLIstComponent;