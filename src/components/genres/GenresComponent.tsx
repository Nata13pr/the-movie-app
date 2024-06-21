import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";

import GenreComponent from "../genre/GenreComponent";

const GenresComponent = () => {
    const {genres}=useAppSelector(state => state.movie);

    return (
        <ul>
            {genres.map(genre=><GenreComponent key={genre.id} genre={genre}/>)}
        </ul>
    );
};

export default GenresComponent;