import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {movieActions} from "../../redux/slices/movieSlice";
import MoviesLIstComponent from "../../components/movieList/MoviesLIstComponent";
import {genreActions} from "../../redux/slices/genreSlice";
import UserInfoComponent from "../../components/userInfo/UserInfoComponent";
import {useSearchParams} from "react-router-dom";
import PaginationComponent from "../../components/pagination/PaginationComponent";
import GenreComponent from "../../components/genres/GenresComponent";


const MoviesPage = () => {
    const [query,setQuery]=useSearchParams();
  const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(movieActions.getAll(query.get('page') || '1'));
        dispatch(genreActions.getAll());
        dispatch(movieActions.getImageUrl())
    }, [dispatch,query]);

    return (
        <div>
            <GenreComponent/>
            <UserInfoComponent/>
            <MoviesLIstComponent/>
            <PaginationComponent/>
        </div>
    );
};

export default MoviesPage;