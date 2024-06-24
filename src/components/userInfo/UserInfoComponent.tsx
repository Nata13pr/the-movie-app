import React from 'react';
import {Box} from "@mui/material";

const UserInfoComponent = () => {
    return (
        <Box
            sx={{flexGrow: 1, display: {xs: 'none', sm: 'block'}}}
        >
            <img
                src={'https://www.pngmart.com/files/21/Account-User-PNG-Clipart.png'}
                alt='user icon'
                style={{width: '40px', height: '40px'}}
            />
        </Box>
    );
};

export default UserInfoComponent;