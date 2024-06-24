import React, {useEffect} from 'react';
import {Outlet} from "react-router-dom";
import HeaderComponent from "../../components/header/HeaderComponent";
import FooterComponent from "../../components/footer/FooterComponent";
import {Box, Container, Switch, ThemeProvider} from "@mui/material";
import  {darkTheme, lightTheme} from "../../theme/theme";
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


        <ThemeProvider theme={switcher ? darkTheme : lightTheme}>
            <Box sx={{
                maxWidth: 'xl',
                mx: 'auto',
                px: 0
            }}>
                <Container sx={{ backgroundColor:'inherit'}}>
                    <HeaderComponent />
                    <Outlet />
                    <FooterComponent />
                </Container>
            </Box>
        </ThemeProvider>


    );
};

export default MainLayout;