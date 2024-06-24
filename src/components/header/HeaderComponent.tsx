import React from 'react';
import {ThemeProvider} from '@mui/material/styles';
import {Box, AppBar, Toolbar, IconButton, Link} from '@mui/material';

import GenresComponent from '../genres/GenresComponent';
import FormComponent from '../form/FormComponent';
import {lightTheme, darkTheme} from '../../theme/theme';
import UserInfoComponent from '../userInfo/UserInfoComponent';
import SwitcherComponent from '../switcher/SwitcherComponent';
import {useAppSelector} from '../../hooks/reduxHooks';

const HeaderComponent = () => {
    const {switcher} = useAppSelector(state => state.movie);

    return (
        <ThemeProvider theme={switcher ? darkTheme : lightTheme}>
            <Box sx={{flexGrow: 1, backgroundColor: 'inherit'}}>
                <AppBar position="static">
                    <Toolbar>
                        <UserInfoComponent/>

                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            sx={{
                                mr: 2,
                                backgroundColor: 'transparent', // Updated to transparent
                                color: switcher ? lightTheme.palette.primary.light : darkTheme.palette.secondary.main,
                            }}
                        >
                            <Link href="/" underline="hover" color="inherit">
                                Home
                            </Link>
                        </IconButton>

                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            sx={{
                                mr: 40,
                                backgroundColor: 'transparent', // Updated to transparent
                                color: switcher ? lightTheme.palette.primary.light : darkTheme.palette.secondary.main,
                            }}
                        >
                            <Link href="/tvshow" underline="hover" color="inherit">
                                TV Show
                            </Link>
                        </IconButton>
                        <GenresComponent/>
                        <FormComponent/>
                        <SwitcherComponent/>
                    </Toolbar>
                </AppBar>
            </Box>
        </ThemeProvider>
    );
};

export default HeaderComponent;