import React, {FC} from 'react';

import {useSearchParams} from "react-router-dom";

interface IProps{
    totalPages:number
}

const PaginationComponent:FC<IProps> = ({totalPages}) => {
    const [query, setQuery] = useSearchParams({page: '1'});


    const currentPage = Number(query.get('page'));

    const decreasePage = () => {
        if (currentPage > 1) {
            query.set('page', String(currentPage - 1));
            setQuery(query);
        }
    };

    const increasePage = () => {
        query.set('page', String(currentPage + 1));
        setQuery(query);
    };


    return (
        <div>
            <button onClick={decreasePage} disabled={currentPage === 1}
            >prev
            </button>
            {query}
            <button onClick={increasePage} disabled={currentPage > 500  || currentPage>totalPages }
            >next
            </button>
        </div>
    );
};

export default PaginationComponent;