// import { createTheme } from '@mui/material/styles';
//
// const theme = createTheme({
//     palette: {
//         primary: {
//             main: '#5c6bc0',
//         },
//         secondary: {
//             main: '#cddc39',
//         },
//         background: {
//             paper: '#1d1d1d', // Основний колір фону для компонентів
//         },
//         text: {
//             primary: '#ffffff',
//         },
//     },
// });
//
// export default theme;
import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
    typography:{
        // fontWeightBold:"bold",
    },
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

export { lightTheme, darkTheme };