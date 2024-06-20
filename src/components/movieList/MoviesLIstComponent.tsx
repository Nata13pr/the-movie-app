import React from 'react';
import {useAppSelector} from "../../hooks/reduxHooks";
import MovieComponent from "../movie/MovieComponent";

const MoviesLIstComponent = () => {

    const {movies} = useAppSelector(state => state.movie)
    return (
        <ul>
            {movies.map(movie=><MovieComponent key={movie.id} movie={movie}  />)}
        </ul>
    );
};

export default MoviesLIstComponent;