import {FC, useEffect} from "react";
import {useDispatch} from "react-redux";
import {movieActions} from "../redux/slices/movieSlice";


interface IProps{
    genreName:string
}
const GenreComponent: FC<IProps> = ({ genreName }) => {
    const dispatch = useDispatch();

    const handleGenreClick = (genreName: string) => {
        dispatch(movieActions.filterMoviesByGenre(genreName));
    };

    useEffect(() => {
        handleGenreClick(genreName);
    }, [genreName]);

    return (
        <div>
            <button onClick={() => handleGenreClick(genreName)}>Filter by {genreName}</button>
        </div>
    );
};
export default GenreComponent