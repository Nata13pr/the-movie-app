import React, {FC} from 'react';
import {IMovie} from "../../interfaces/IMovie";
import PosterPreviewComponent from "../posterPreview/PosterPreviewComponent";
import {useNavigate} from "react-router-dom";
import Grid2 from "@mui/material/Unstable_Grid2";

interface IProps {
    movie: IMovie
}

const MovieComponent: FC<IProps> = ({movie}) => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate(`/movies/${movie.id}`)
    }

    return (
        <Grid2
            key={movie.id}
            xs={12} sm={6} md={4} lg={3} onClick={handleClick}>

            <PosterPreviewComponent movie={movie}/>
        </Grid2>
    );
};

export default MovieComponent;