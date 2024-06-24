import React from 'react';
import {Button, Menu} from "@mui/material";

import {useAppSelector} from "../../hooks/reduxHooks";
import GenreComponent from "../genre/GenreComponent";
import {darkTheme, lightTheme} from "../../theme/theme";


const GenresComponent = () => {
    const {genres} = useAppSelector(state => state.movie);
    const {switcher} = useAppSelector(state => state.movie);

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
                sx={{
                    backgroundColor: 'transparent',
                    color: switcher ? lightTheme.palette.primary.light : darkTheme.palette.secondary.main
                }}
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
                {genres.map(genre => <GenreComponent
                    key={genre.id}
                    genre={genre}
                    handleClose={handleClose}/>)}
            </Menu>

        </div>
    );
};

export default GenresComponent;