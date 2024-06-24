import React, { FC } from 'react';
import { Box, Typography } from "@mui/material";

import GenreBadgeComponent from "../genreBadge/GenreBadgeComponent";
import StarsRatingComponent from "../starsRating/StarsRatingComponent";
import { IMovie } from "../../interfaces/IMovie";

interface IProps {
    movie: IMovie
}

const MovieInfoComponent: FC<IProps> = ({ movie }) => {
    return (
        <Box sx={{ mt: 2, mr: 4 }}>
            <Typography
                component={'h1'}
                variant={'h2'}
                sx={{
                    textDecoration: 'underline',
                    textTransform: 'uppercase',
                    fontWeight: 'bold'
                }}
            >
                {movie.title}
            </Typography>
            <Typography
                component={'p'}
                sx={{ mt: 1 }}
            >
                {movie.overview}
            </Typography>
            <Typography
                component={'p'}
                variant={"overline"}
                sx={{ mt: 1 }}
            >
                Date of release - {movie.release_date}
            </Typography>

            <GenreBadgeComponent genres={movie.genres} />
            <StarsRatingComponent rating={movie.vote_average} />
        </Box>
    );
};

export default MovieInfoComponent;
