import React from 'react';
import {Outlet} from "react-router-dom";
import {Box, Container,  ThemeProvider} from "@mui/material";

import HeaderComponent from "../../components/header/HeaderComponent";
import FooterComponent from "../../components/footer/FooterComponent";
import {darkTheme, lightTheme} from "../../theme/theme";
import { useAppSelector} from "../../hooks/reduxHooks";

const MainLayout = () => {

    const {switcher} = useAppSelector(state => state.movie);

    return (

        <ThemeProvider theme={switcher ? darkTheme : lightTheme}>
            <Box sx={{
                maxWidth: 'xl',
                mx: 'auto',
                px: 0
            }}>
                <Container sx={{backgroundColor: 'inherit'}}>
                <HeaderComponent/>
                    <Outlet/>
                <FooterComponent/>
            </Container>
            </Box>
        </ThemeProvider>


    );
};

export default MainLayout;