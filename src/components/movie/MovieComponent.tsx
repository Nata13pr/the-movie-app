import React, {FC} from 'react';
import {IMovie} from "../../interfaces/IMovie";
import PosterPreviewComponent from "../posterPreview/PosterPreviewComponent";
import {useNavigate} from "react-router-dom";

interface IProps {
    movie: IMovie
}

const MovieComponent: FC<IProps> = ({movie}) => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate(`/movies/${movie.id}`)
    }

    return (
        <li onClick={handleClick}>
            <div>{movie.title}</div>
            <div>{movie.id}</div>
            <PosterPreviewComponent movie={movie}/>
        </li>
    );
};

export default MovieComponent;