import React, {useState} from 'react';
import {useAppSelector} from "../../hooks/reduxHooks";
import {useSearchParams} from "react-router-dom";

const PaginationComponent = () => {
    const [query, setQuery] = useSearchParams({page: '1'});

    const {movies} = useAppSelector(state => state.movie);
    const [page, setPage] = useState({page: '1'});


    return (
        <div>
            {/*<button onClick={() => {*/}
            {/*    setPage((prev) => {*/}
            {/*        if (prev < 0) {*/}
            {/*            return prev*/}
            {/*        } else {*/}
            {/*            prev - 1;*/}
            {/*        }*/}
            {/*    })*/}

            {/*}}>Previous*/}
            {/*</button>*/}
            {/*<div>{page}</div>*/}

            {/*<button onClick={() => {*/}
            {/*    setPage(prevState => prevState + 1)*/}
            {/*}}>Next*/}
            {/*</button>*/}
        </div>
    );
};

export default PaginationComponent;