import React from 'react';
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {IconButton, InputBase, styled, alpha, Box} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

import {useAppDispatch} from "../../hooks/reduxHooks";
import {movieActions} from "../../redux/slices/movieSlice";


interface IFormProps {
    name: string
}

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
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({theme}) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
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

const FormComponent = () => {
    const navigate = useNavigate();

    const {register, handleSubmit, formState: {errors, isValid}} = useForm<IFormProps>();

    const dispatch = useAppDispatch();

    const search = (formValue: IFormProps) => {

        dispatch(movieActions.getByTitle(formValue.name));

        navigate(`/movies/search/${formValue.name}`);
    }

    return (
        <Box component="form" onSubmit={handleSubmit(search)}>
            <Search>
                <SearchIconWrapper>
                    <IconButton
                        type="submit"
                        aria-label="search">
                        <SearchIcon/>
                    </IconButton>
                </SearchIconWrapper>
                <StyledInputBase
                    placeholder="Search…"
                    inputProps={{'aria-label': 'search'}}
                    {...register('name')}
                />
            </Search>
        </Box>
    );
};

export default FormComponent;