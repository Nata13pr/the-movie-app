import React, {FC, useEffect, useState} from "react";

import {useParams, useSearchParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import PaginationComponent from "../../components/pagination/PaginationComponent";
import {movieActions} from "../../redux/slices/movieSlice";
import {Box} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import MovieComponent from "../../components/movie/MovieComponent";


const MoviesByGenrePage: FC = () => {
    const {id} = useParams<{ id: string }>();
    const [query,setQuery]=useSearchParams();
    const {filteredMovie} = useAppSelector(state => state.movie);
    const {totalPages} = useAppSelector(state => state.movie)

    const dispatch = useAppDispatch();

    useEffect(() => {
        if (id) {
            dispatch(movieActions.getAllByGenre({id, page: query.get('page') || '1'}))
        }
    }, [id, dispatch,query]);


    return (
        <div>
            <Box>
                <Grid2 container spacing={1}>
                    {filteredMovie.map((movie) => (
                     <MovieComponent movie={movie}/>
                    ))}
                </Grid2>
            </Box>

            <PaginationComponent totalPages={totalPages}/>
        </div>
    );
};

export default MoviesByGenrePage;