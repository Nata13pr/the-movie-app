import React from 'react';
import {useNavigate} from "react-router-dom";
import {useAppSelector} from "../../hooks/reduxHooks";
import PosterPreviewComponent from "../../components/posterPreview/PosterPreviewComponent";
import PaginationComponent from "../../components/pagination/PaginationComponent";

const MoviesByTitlePage = () => {
    const {movieFoundByTitle} = useAppSelector(state => state.movie)


    return (
        <div>
            {movieFoundByTitle.map(movie => <div key={movie.id}>{movie.title}
                <PosterPreviewComponent movie={movie}/>
            </div>)}

        </div>
    );
};

export default MoviesByTitlePage;