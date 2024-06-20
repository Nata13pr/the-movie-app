import React from 'react';

import {useSearchParams} from "react-router-dom";


const PaginationComponent = () => {
    const [query, setQuery] = useSearchParams({page: '1'});

    const decreasePage=()=>{
    if(query.has('page')){
        const currentPage=Number(query.get('page'));
        if(currentPage>1){
            query.set('page',String(currentPage -1));
            setQuery(query)
        }
    }
    }

    const increasePage=()=>{
        if(query.has('page')){
            const currentPage=Number(query.get('page'));
            query.set('page',String(currentPage+1));
            setQuery(query)
        }
    }


    return (
        <div>
            <button onClick={decreasePage}
            >prev
            </button>
            {query}
            <button onClick={increasePage}
            >next
            </button>
        </div>
    );
};

export default PaginationComponent;