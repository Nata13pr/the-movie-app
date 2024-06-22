import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {movieActions} from "../../redux/slices/movieSlice";
import MoviesLIstComponent from "../../components/movieList/MoviesLIstComponent";

import UserInfoComponent from "../../components/userInfo/UserInfoComponent";
import {useSearchParams} from "react-router-dom";
import PaginationComponent from "../../components/pagination/PaginationComponent";
import GenreComponent from "../../components/genres/GenresComponent";
import FormComponent from "../../components/form/FormComponent";


const MoviesPage = () => {
    const [query,setQuery]=useSearchParams();
    const {totalPages}=useAppSelector(state => state.movie)
  const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(movieActions.getAll(query.get('page') || '1'));
        dispatch(movieActions.getAllGenres());
        dispatch(movieActions.getImageUrl())
    }, [dispatch,query]);

    return (
        <div>
            {/*<FormComponent/>*/}
            <GenreComponent/>
            <UserInfoComponent/>
            <MoviesLIstComponent/>
            <PaginationComponent totalPages={totalPages}/>
        </div>
    );
};

export default MoviesPage;