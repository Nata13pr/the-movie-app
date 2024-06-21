
import { FC,  } from "react";

import {useAppDispatch, } from "../../hooks/reduxHooks";
import { IGenre } from "../../interfaces/IGenre";

import {movieActions} from "../../redux/slices/movieSlice";
import {useNavigate} from "react-router-dom";

interface IProps {
    genre: IGenre;
}

const GenreComponent: FC<IProps> = ({ genre }) => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate();


    const handleGenreClick = async () => {
        await dispatch(movieActions.getAllByGenre({ id: genre.id.toString(), page: '1' }));
        navigate(`/movies/genre/${genre.id}`);
    };

    return (
        <div>
            <h3 onClick={handleGenreClick} style={{ cursor: "pointer" }}>
                {genre.name}
            </h3>

        </div>
    );
};

export default GenreComponent;