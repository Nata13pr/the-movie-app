import React from 'react';
import {Outlet} from "react-router-dom";
import HeaderComponent from "../../components/header/HeaderComponent";
import FooterComponent from "../../components/footer/FooterComponent";
import {Container} from "@mui/material";

const MainLayout = () => {
    return (
        <Container maxWidth="sm">
            <HeaderComponent/>
            <Outlet/>
            <FooterComponent/>
        </Container>
    );
};

export default MainLayout;