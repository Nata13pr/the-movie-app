import {useSearchParams} from "react-router-dom";
import {useEffect} from "react";
import PaginationComponent from "../../components/pagination/PaginationComponent";

import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {tvActions} from "../../redux/slices/tvSlice";
import TVListComponent from "../../components/tvList/TVListComponent";
import {movieActions} from "../../redux/slices/movieSlice";

const TVShowPage = () => {
    const [query, setQuery] = useSearchParams();
    const {totalPages} = useAppSelector(state => state.tv)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(tvActions.getAll(query.get('page') || '1'));
        dispatch(movieActions.getImageUrl())
    }, [dispatch, query]);

    return (
        <div>
            <TVListComponent/>
            <PaginationComponent totalPages={totalPages}/>
        </div>
    );
};

export default TVShowPage;