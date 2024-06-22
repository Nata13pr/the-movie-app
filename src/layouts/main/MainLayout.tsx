import React, {useEffect} from 'react';
import {Outlet} from "react-router-dom";
import HeaderComponent from "../../components/header/HeaderComponent";
import FooterComponent from "../../components/footer/FooterComponent";
import {Box, Container, Switch, ThemeProvider} from "@mui/material";
import theme from "../../theme/theme";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {movieActions} from "../../redux/slices/movieSlice";
import SwitcherComponent from "../../components/switcher/SwitcherComponent";

const MainLayout = () => {
    const dispatch=useAppDispatch();
    const {switcher}=useAppSelector(state => state.movie);
    const label = { inputProps: { 'aria-label': 'Switch demo' } };

    useEffect(() => {

console.log('hello')
        console.log(switcher)
    }, [switcher,dispatch]);
    return (
        // <ThemeProvider theme={theme}>
        //     <Box maxWidth="xl" mx="auto" px={0} sx={{ backgroundColor: theme.palette.primary.main }}>
        //         <Container    sx={{ backgroundColor: theme.palette.primary.main }}>
        // <div>
        //     <HeaderComponent/>
        //     <Outlet/>
        //     <FooterComponent/>
        // </div>

        <ThemeProvider theme={theme}>
            <Box sx={{ backgroundColor: switcher ? theme.palette.primary.main  : theme.palette.secondary.main , maxWidth: 'xl', mx: 'auto', px: 0 }}>
                <Container sx={{ backgroundColor:'inherit'}}>
                    <HeaderComponent />

                <SwitcherComponent/>
                    <button onClick={()=>{dispatch(movieActions.toggleSwitcher())}}>{`${switcher}`}</button>
                    <Outlet />
                    <FooterComponent />
                </Container>
            </Box>
        </ThemeProvider>
        //         </Container>
        //
        //     </Box >
        // </ThemeProvider>

    );
};

export default MainLayout;