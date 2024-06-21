import React, {FC, useEffect, useState} from "react";

import {useParams, useSearchParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import PaginationComponent from "../../components/pagination/PaginationComponent";
import {movieActions} from "../../redux/slices/movieSlice";
import PosterPreviewComponent from "../../components/posterPreview/PosterPreviewComponent";


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
            <h1>Movies in Genre {id}</h1>
            <ul>
                {filteredMovie.map((movie) => (
                    <li key={movie.id}>{movie.title}
                        <PosterPreviewComponent movie={movie}/>
                    </li>
                ))}
            </ul>
            <PaginationComponent totalPages={totalPages}/>
        </div>
    );
};

export default MoviesByGenrePage;