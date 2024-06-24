import React, {FC} from 'react';
import GenreBadgeComponent from "../genreBadge/GenreBadgeComponent";
import StarsRatingComponent from "../starsRating/StarsRatingComponent";
import {IMovie} from "../../interfaces/IMovie";
import {Box, Typography} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";

interface IProps{
    movie:IMovie
}
const MovieInfoComponent:FC<IProps> = ({movie}) => {
    console.log(movie)
    return (

        <Box
             sx={{ mt: 2 ,mr:4}}>

                <Typography>
                    <Typography component={'h1'} variant={'h2'} sx={{
                        textDecoration: 'underline',
                        textTransform:'uppercase',
                        textWeight:'bold'
                    }}>{movie.title}</Typography>
                    <Typography  component={'p'} >{movie.overview}</Typography>
                    <Typography component={'p'} variant={"overline"}>Date of release - {movie.release_date}</Typography>

                </Typography>
                <GenreBadgeComponent genres={movie.genres}/>
                <StarsRatingComponent rating={movie.vote_average}/>


        </Box>
    );
};

export default MovieInfoComponent;