import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";

import GenreComponent from "../../genre/GenreComponent";

const GenresComponent = () => {
    const {genres}=useAppSelector(state => state.genre);
    const {filteredMovies}=useAppSelector(state => state.movie)
    console.log('fffffffffffffffff',filteredMovies)


    return (
        <ul>
            {genres.map(genre=><GenreComponent key={genre.id} genreName={genre.name}/>)}
        </ul>
    );
};

export default GenresComponent;