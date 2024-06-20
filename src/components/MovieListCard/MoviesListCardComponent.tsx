import React, {useEffect, useState} from 'react';
import {useAppSelector} from "../../hooks/reduxHooks";
import {posterService} from "../../services/poster/posterService";
import StarsRatingComponent from "../starsRating/StarsRatingComponent";
import GenreBadgeComponent from "../genreBadge/GenreBadgeComponent";

const MoviesListCardComponent = () => {
    const {movie} = useAppSelector(state => state.movie);
    const {baseImageUrl} = useAppSelector(state => state.movie);

    const [poster, setPoster] = useState<string>('');
    console.log(movie)
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
        <div>

            {movie && (<>
                    <h2>{movie.title}</h2>
                    <img src={poster} alt={movie.title}/>
                    <p>{movie.overview}</p>
                    <GenreBadgeComponent genres={movie.genres}/>
                    <StarsRatingComponent rating={movie.vote_average}/>
                </>
            )}

        </div>
    );
};

export default MoviesListCardComponent;