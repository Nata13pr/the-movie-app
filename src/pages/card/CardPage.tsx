import React, {useEffect} from 'react';
import {useAppDispatch} from "../../hooks/reduxHooks";
import {movieActions} from "../../redux/slices/movieSlice";
import {useParams,} from "react-router-dom";
import {movieService} from "../../services/movie/movieService";
import MoviesListCardComponent from "../../components/MovieListCard/MoviesListCardComponent";
import StarsRatingComponent from "../../components/starsRating/StarsRatingComponent";

const CardPage = () => {
    const {id} = useParams<string>();

    const dispatch = useAppDispatch()

    useEffect(() => {
        async function getById() {
            if (id) {
                await dispatch(movieActions.getMovieById(id))
            }
        }

        getById()
    }, [id]);

    return (
        <div>
            <MoviesListCardComponent/>

        </div>
    );
};

export default CardPage;