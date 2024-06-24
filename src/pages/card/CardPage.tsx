import React, {useEffect} from 'react';
import {useParams,} from "react-router-dom";

import {useAppDispatch} from "../../hooks/reduxHooks";
import {movieActions} from "../../redux/slices/movieSlice";
import MoviesListCardComponent from "../../components/movieListCard/MoviesListCardComponent";


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

    }, [id,dispatch]);

    return (
        <div>
            <MoviesListCardComponent/>
        </div>
    );
};

export default CardPage;