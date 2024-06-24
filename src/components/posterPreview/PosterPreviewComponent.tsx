import React, {FC, useEffect, useState} from 'react';
import {Card} from "reactstrap";
import {CardMedia} from "@mui/material";

import {posterService} from "../../services/poster/posterService";
import {useAppSelector} from "../../hooks/reduxHooks";


interface IProps {
    path: string
}

const PosterPreviewComponent: FC<IProps> = ({path}) => {
    const {baseImageUrl} = useAppSelector(state => state.movie);
    const [poster, setPoster] = useState<string>('movie');

    useEffect(() => {

        async function config() {

            try {
                if (baseImageUrl && path) {
                    const d = await posterService.getPoster(baseImageUrl, path);
                    setPoster(d.request.responseURL)
                } else {
                    setPoster("https://via.placeholder.com/300x450?text=No+Image")
                }
            } catch (e) {

            }
        }

        config()
    }, [baseImageUrl, path])

    return (
        <Card>
            <CardMedia
                component="img"
                image={poster}
                alt={'poster'}
                sx={{objectFit: 'cover'}}
            />
        </Card>
    );
};

export default PosterPreviewComponent;
