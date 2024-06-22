import React from 'react';
import {useAppSelector} from "../../hooks/reduxHooks";
import PosterPreviewComponent from "../../components/posterPreview/PosterPreviewComponent";


const MoviesByTitlePage = () => {
    const {movieFoundByTitle} = useAppSelector(state => state.movie)

    console.log(movieFoundByTitle)

    return (
        <div>
            {movieFoundByTitle.map(movie => <div key={movie.id}>{movie.title}
                <PosterPreviewComponent movie={movie}/>
            </div>)}

        </div>
    );
};

export default MoviesByTitlePage;