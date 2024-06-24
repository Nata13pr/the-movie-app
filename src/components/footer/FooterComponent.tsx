import React from 'react';
import {Box} from "@mui/material";

const FooterComponent = () => {
    return (
        <Box sx={(theme) => ({
            backgroundColor: theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
            textAlign: 'center',
            marginTop: theme.spacing(2),
        })}>
            Best movies ever!
        </Box>
    );
};

export default FooterComponent;