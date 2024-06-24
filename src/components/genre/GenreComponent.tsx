import {FC,} from "react";
import {useNavigate} from "react-router-dom";
import {MenuItem} from "@mui/material";

import {useAppDispatch,} from "../../hooks/reduxHooks";
import {IGenre} from "../../interfaces/IGenre";
import {movieActions} from "../../redux/slices/movieSlice";


interface IProps {
    genre: IGenre;
    handleClose: () => void;
}

const GenreComponent: FC<IProps> = ({genre, handleClose}) => {

    const dispatch = useAppDispatch()

    const navigate = useNavigate();


    const handleGenreClick = async () => {
        await dispatch(movieActions.getAllByGenre({id: genre.id.toString(), page: '1'}));

        navigate(`/movies/genre/${genre.id}`);

        handleClose()
    };

    return (
        <MenuItem>
            <h3 onClick={handleGenreClick} style={{cursor: "pointer"}}>
                {genre.name}
            </h3>
        </MenuItem>
    );
};

export default GenreComponent;