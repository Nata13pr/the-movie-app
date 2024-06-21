import React from 'react';
import {useNavigate} from "react-router-dom";
import {useAppSelector} from "../../hooks/reduxHooks";

const MoviesByTitlePage = () => {
    const {movieFoundByTitle}=useAppSelector(state => state.movie)
    console.log(movieFoundByTitle)
    return (
        <div>
            {movieFoundByTitle.map(movie=><div key={movie.id}>{movie.name}</div>)}
            </div>
    );
};

export default MoviesByTitlePage;