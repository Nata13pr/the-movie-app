import React, {FC} from 'react';
import {Pagination, Stack} from '@mui/material';
import {useSearchParams} from 'react-router-dom';

import {useAppSelector} from "../../hooks/reduxHooks";

interface IProps {
    totalPages: number;
}

const PaginationComponent: FC<IProps> = ({totalPages}) => {
    const [query, setQuery] = useSearchParams({page: '1'});
    const {switcher} = useAppSelector(state => state.movie);
    const currentPage = Number(query.get('page'));

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {

        if (value >= 1 && value <= totalPages && value <= 500) {

            query.set('page', String(value));

            setQuery(query);
        }
    };

    return (
        <Stack
            spacing={2}
            sx={{justifyContent: 'center', alignItems: 'center', mt: 4}}>

            <Pagination
                onChange={handleChange}
                count={totalPages}
                page={currentPage}
                hideNextButton={currentPage >= totalPages || currentPage >= 500}
                sx={{
                    '& .MuiPaginationItem-root': {
                        color: switcher ? '#ffffff' : '#212121',
                        backgroundColor: switcher ? '#263238' : '#fafafa',
                        '&:hover': {
                            backgroundColor: switcher ? '#455a64' : '#e0e0e0',
                        },
                        '&.Mui-selected': {
                            backgroundColor: switcher ? '#607d8b' : '#c5cae9',
                            color: switcher ? '#ffffff' : '#212121',
                        },
                    },
                }}
            />
        </Stack>
    );
};

export default PaginationComponent;