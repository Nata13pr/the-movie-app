import React, {FC, useEffect, useState} from 'react';
import {IMovie} from "../../interfaces/IMovie";
import {posterService} from "../../services/poster/posterService";
import {useAppSelector} from "../../hooks/reduxHooks";

interface IProps {
    movie: IMovie
}

const PosterPreviewComponent: FC<IProps> = ({movie}) => {
    const {baseImageUrl} = useAppSelector(state => state.movie);
    const [poster, setPoster] = useState<string>('movie');

    useEffect(() => {
             async function config() {
            try {
                if (baseImageUrl && movie.poster_path) {
                    const d = await posterService.getPoster(baseImageUrl, movie.poster_path);
                    setPoster(d.request.responseURL)
                }else {
                    setPoster("https://via.placeholder.com/300x450?text=No+Image")
                }
            } catch (e) {

            }


        }

        config()
    }, [baseImageUrl, movie.poster_path])

    return (
        <div>
            <img src={poster} alt={movie.title}/>
        </div>
    );
};

export default PosterPreviewComponent;
