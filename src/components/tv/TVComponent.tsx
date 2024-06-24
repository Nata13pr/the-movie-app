import React, {FC} from 'react';
import {useNavigate} from "react-router-dom";
import Grid2 from "@mui/material/Unstable_Grid2";
import Badge from '@mui/material/Badge';

import {IMovie} from "../../interfaces/IMovie";
import PosterPreviewComponent from "../posterPreview/PosterPreviewComponent";
import {IMovieByTitle} from "../../interfaces/IMovieByTitle";
import {ITV} from "../../interfaces/ITV";


interface IProps {
    tv: ITV
}

const MovieComponent: FC<IProps> = ({tv}) => {
    const navigate = useNavigate()
// const r=movie.genre_ids.length ? movie.genre_ids.length : 0;
//     const handleClick = () => {
//         navigate(`/movies/${movie.id}`)
//     }
    console.log(tv,'gggggggggggggggggg')
    return (
        <Grid2
            key={tv.id}
            xs={12} sm={6} md={4} lg={3}
            // onClick={handleClick}
        >
            {tv.name}
            {/*<Badge badgeContent={r} color="primary">*/}
            {/*</Badge>*/}
            {/*<PosterPreviewComponent movie={movie=tv}/>*/}
        </Grid2>
    );
};

export default MovieComponent;