import React, {FC} from 'react';
import {IMovie} from "../../interfaces/IMovie";
import PosterPreviewComponent from "../posterPreview/PosterPreviewComponent";

interface IProps{
    movie:IMovie
}
const MoviesListCardComponent:FC<IProps> = ({movie}) => {
    return (
        <li>
            <div>{movie.title}</div>
            <PosterPreviewComponent movie={movie}/>
        </li>
    );
};

export default MoviesListCardComponent;