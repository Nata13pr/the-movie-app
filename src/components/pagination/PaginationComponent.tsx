import React, { FC, useState } from 'react';
import { Pagination, Stack, Typography } from '@mui/material';
import { useSearchParams } from 'react-router-dom';

interface IProps {
    totalPages: number;
}

const PaginationComponent: FC<IProps> = ({ totalPages }) => {
    const [query, setQuery] = useSearchParams({ page: '1' });

    const currentPage = Number(query.get('page'));

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        if (value >= 1 && value <= totalPages && value <= 500) {
            query.set('page', String(value));
            setQuery(query);
        }
    };

    return (
        <Stack spacing={2}>
            <Typography>Page: {currentPage}</Typography>
            <Pagination
                onChange={handleChange}
                count={totalPages}
                page={currentPage}
                hideNextButton={currentPage >= totalPages || currentPage >= 500}

            />
        </Stack>
    );
};

export default PaginationComponent;