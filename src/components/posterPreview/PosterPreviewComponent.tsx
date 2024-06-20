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
                if (baseImageUrl) {
                    const d = await posterService.getPoster(baseImageUrl, movie.poster_path);

                    setPoster(d.request.responseURL)
                }
            } catch (e) {

            }


        }

        config()
    }, [baseImageUrl, movie.poster_path])

    return (
        <div>
            <div>{movie.poster_path}</div>
            <img src={poster} alt={movie.title}/>
        </div>
    );
};

export default PosterPreviewComponent;
