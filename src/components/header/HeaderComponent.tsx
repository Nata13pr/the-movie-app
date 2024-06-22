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
import * as React from 'react';
import {styled, alpha} from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import {Link} from "@mui/material";
import theme from "../../theme/theme";
import GenresComponent from "../genres/GenresComponent";


const Search = styled('div')(({theme}) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({theme}) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({theme}) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

export default function HeaderComponent() {
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{flexGrow: 1, display: {xs: 'none', sm: 'block'}}}
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
                            backgroundColor: theme.palette.primary.light,
                            color: theme.palette.secondary.contrastText
                        }}
                    >
                        <Link href={'/'} underline="hover">Home</Link>

                    </IconButton>
                    <IconButton
                        size="large"
                        edge="start"

                        // color="inherit"
                        aria-label="open drawer"
                        sx={{
                            mr: 40,
                            backgroundColor: theme.palette.primary.light,
                            color: theme.palette.secondary.main
                        }}
                    >

                        <Link href={'tvshow'} underline="hover">TV Show</Link>
                    </IconButton>
                    <IconButton
                        size="large"
                        edge="start"

                        // color="inherit"
                        aria-label="open drawer"
                        sx={{
                            mr: 1,
                            backgroundColor: theme.palette.primary.light,
                            color: theme.palette.secondary.main
                        }}
                    >

                        <GenresComponent/>
                    </IconButton>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon/>
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{'aria-label': 'search'}}
                        />
                    </Search>

                </Toolbar>
            </AppBar>
        </Box>
    );
}