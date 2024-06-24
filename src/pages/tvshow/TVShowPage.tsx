import MoviesLIstComponent from "../../components/movieList/MoviesLIstComponent";

import UserInfoComponent from "../../components/userInfo/UserInfoComponent";
import {useSearchParams} from "react-router-dom";
import PaginationComponent from "../../components/pagination/PaginationComponent";
import GenreComponent from "../../components/genres/GenresComponent";
import FormComponent from "../../components/form/FormComponent";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {useEffect} from "react";
import {tvActions} from "../../redux/slices/tvSlice";
import TVListComponent from "../../components/tvList/TVListComponent";
import { movieActions } from "../../redux/slices/movieSlice";


const TVShowPage = () => {
    const [query,setQuery]=useSearchParams();
    const {totalPages}=useAppSelector(state => state.tv)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(tvActions.getAll(query.get('page') || '1'));
        // dispatch(movieActions.getAllGenres());
       dispatch(movieActions.getImageUrl())
    }, [dispatch,query]);

    return (
        <div>
            <TVListComponent/>
            <PaginationComponent totalPages={totalPages}/>
        </div>
    );
};

export default TVShowPage;