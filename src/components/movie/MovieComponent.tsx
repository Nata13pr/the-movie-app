import React, {FC} from 'react';
import {useNavigate} from "react-router-dom";
import Grid2 from "@mui/material/Unstable_Grid2";
import Badge from '@mui/material/Badge';

import {IMovie} from "../../interfaces/IMovie";
import PosterPreviewComponent from "../posterPreview/PosterPreviewComponent";
import {IMovieByTitle} from "../../interfaces/IMovieByTitle";


interface IProps {
    movie: IMovie
}

const MovieComponent: FC<IProps> = ({movie}) => {
    const navigate = useNavigate()
// const r=movie.genre_ids.length ? movie.genre_ids.length : 0;
    const handleClick = () => {
        navigate(`/movies/${movie.id}`)
    }
    console.log(movie,'gggggggggggggggggg')
    return (
        <Grid2
            key={movie.id}
            xs={12} sm={6} md={4} lg={3} onClick={handleClick}>
            {/*<Badge badgeContent={r} color="primary">*/}
            {/*</Badge>*/}
            <PosterPreviewComponent path={movie.poster_path}/>
        </Grid2>
    );
};

export default MovieComponent;