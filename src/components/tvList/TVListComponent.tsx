import React from 'react';
import {Box} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";

import {useAppSelector} from "../../hooks/reduxHooks";
import TVComponent from "../tv/TVComponent";


const MoviesLIstComponent = () => {

    const {tv} = useAppSelector(state => state.tv)

    return (
        <Box>
            <Grid2 container spacing={1}>
                {tv.map(tvs => <TVComponent
                    key={tvs.id}
                    tv={tvs}/>)}
            </Grid2>

        </Box>
    );
};

export default MoviesLIstComponent;