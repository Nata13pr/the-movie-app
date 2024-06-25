import {createTheme} from '@mui/material/styles';

const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#303f9f',
        },
        secondary: {
            main: '#c5cae9',
        },
    },
});

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#c5cae9',
        },
        secondary: {
            main: '#9e9e9e',
        },

    },
});

export {lightTheme, darkTheme};