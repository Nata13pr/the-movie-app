import React, {useEffect, useState} from 'react';
import Grid2 from "@mui/material/Unstable_Grid2";
import {Box,} from "@mui/material";

import {useAppSelector} from "../../hooks/reduxHooks";
import {posterService} from "../../services/poster/posterService";
import MovieInfoComponent from "../movieInfo/MovieInfoComponent";


const MoviesListCardComponent = () => {
    const {movie} = useAppSelector(state => state.movie);
    const {baseImageUrl} = useAppSelector(state => state.movie);

    const [poster, setPoster] = useState<string>('');

    useEffect(() => {
        async function getPicture() {

            if (movie) {
                const pic = await posterService.getPoster(baseImageUrl, movie.poster_path)

                setPoster(pic.request.responseURL)
            }
        }

        getPicture()

    }, [baseImageUrl, movie]);
    return (
        <Box sx={{mt: 4}}>

            {movie && (
                <Grid2
                    container
                    spacing={2}>
                    <Grid2
                        xs={12}
                        md={6}>
                        <img
                            src={poster}
                            alt={movie.title}
                            style={{maxWidth: '100%', height: 'auto', marginLeft: 100, marginTop: 30}}/>
                    </Grid2>
                    <Grid2
                        xs={12}
                        md={6}>
                        <MovieInfoComponent
                            movie={movie}/>
                    </Grid2>

                </Grid2>
            )}

        </Box>
    );
};

export default MoviesListCardComponent;