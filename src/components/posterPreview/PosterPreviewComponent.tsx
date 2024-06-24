import React, {FC, useEffect, useState} from 'react';
import {IMovie} from "../../interfaces/IMovie";
import {posterService} from "../../services/poster/posterService";
import {useAppSelector} from "../../hooks/reduxHooks";
import {CardMedia, styled} from "@mui/material";
import Paper from '@mui/material/Paper';
import {Card} from "reactstrap";
interface IProps {
    movie: IMovie
}

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

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
        <Card  >
            <CardMedia
                component="img"
                image={poster}
                alt={movie.title}
                sx={{ objectFit: 'cover' }} // Додаємо objectFit: 'cover' для заповнення боксу без відступів
            />
        </Card >
    );
};

export default PosterPreviewComponent;
