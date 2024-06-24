import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";

import GenreComponent from "../genre/GenreComponent";
import {Button, Menu} from "@mui/material";



const GenresComponent = () => {
    const {genres}=useAppSelector(state => state.movie);

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div>
            <Button
                id="demo-positioned-button"
                aria-controls={open ? 'demo-positioned-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            //     sx={{
            //         backgroundColor: theme.palette.primary.light,
            //         color: theme.palette.secondary.contrastText
            // }}

            >
                Genres
            </Button>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                {genres.map(genre=><GenreComponent key={genre.id} genre={genre} handleClose={handleClose} />)}
            </Menu>

        </div>
    );
};

export default GenresComponent;