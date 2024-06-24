// import React from 'react';
// import {Link} from "react-router-dom";
// import style from './Header.module.css'
// import FormComponent from "../form/FormComponent";
// import GenreComponent from "../genre/GenreComponent";
// import GenresComponent from "../genres/GenresComponent";
//
// const HeaderComponent = () => {
//     return (
//         <div
//             className={style.Header}
//         >
//             <Link to={'/'}>Home</Link>
//             <Link to={'tvshow'}>TV Show</Link>
//             <div>
//                 <FormComponent/>
//             </div>
//             <GenresComponent/>
//         </div>
//     );
// };
//
// export default HeaderComponent;
import React from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Box, AppBar, Toolbar, Typography, IconButton, Link } from '@mui/material';
import {useAppDispatch, useAppSelector} from '../../hooks/reduxHooks';
import GenresComponent from '../genres/GenresComponent';
import FormComponent from '../form/FormComponent';
import { lightTheme, darkTheme } from '../../theme/theme';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {movieActions} from "../../redux/slices/movieSlice";

const HeaderComponent = () => {
    const dispatch = useAppDispatch();
    const { switcher } = useAppSelector(state => state.movie);

    const handleThemeChange = () => {
        dispatch(movieActions.toggleSwitcher());
    };

    return (
        <ThemeProvider theme={switcher ? darkTheme : lightTheme}>
            <CssBaseline />
            <Box sx={{ flexGrow: 1, backgroundColor: 'inherit' }}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                        >
                            LOGO
                        </Typography>

                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            sx={{
                                mr: 2,
                                backgroundColor: switcher ? lightTheme.palette.primary.light : darkTheme.palette.secondary.main,
                                color: lightTheme.palette.secondary.contrastText
                            }}
                        >
                            <Link href={'/'} underline="hover">Home</Link>
                        </IconButton>
                        <IconButton
                            size="large"
                            edge="start"
                            aria-label="open drawer"
                            sx={{
                                mr: 40,
                                backgroundColor: switcher ? lightTheme.palette.primary.light : darkTheme.palette.secondary.main,
                                color: darkTheme.palette.secondary.main
                            }}
                        >
                            <Link href={'/tvshow'} underline="hover">TV Show</Link>
                        </IconButton>
                        <IconButton
                            size="large"
                            edge="start"
                            aria-label="open drawer"
                            sx={{
                                mr: 1,
                                backgroundColor: switcher ? lightTheme.palette.primary.light : darkTheme.palette.secondary.main,
                                color: darkTheme.palette.secondary.main
                            }}
                        >
                            <GenresComponent />
                        </IconButton>
                        <FormComponent />
                        <Switch checked={switcher} onChange={handleThemeChange} />
                    </Toolbar>
                </AppBar>
            </Box>
        </ThemeProvider>
    );
};

export default HeaderComponent;