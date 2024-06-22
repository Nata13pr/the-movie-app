import React from 'react';
import {Switch} from "@mui/material";
import {movieActions} from "../../redux/slices/movieSlice";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";

const SwitcherComponent = () => {
    const {switcher}=useAppSelector(state => state.movie);

    const dispatch = useAppDispatch();

    const toggleSwitcher=()=>{
        dispatch(movieActions.toggleSwitcher())
    }
    return (
        <Switch
            checked={switcher}
            onChange={toggleSwitcher}
            inputProps={{ 'aria-label': 'controlled' }}
        />
    );
};

export default SwitcherComponent;