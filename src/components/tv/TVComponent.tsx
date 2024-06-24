import React, {FC} from 'react';
import Grid2 from "@mui/material/Unstable_Grid2";

import PosterPreviewComponent from "../posterPreview/PosterPreviewComponent";

import {ITV} from "../../interfaces/ITV";


interface IProps {
    tv: ITV
}

const TVComponent: FC<IProps> = ({tv}) => {


    return (
        <Grid2
            key={tv.id}
            xs={12} sm={6} md={4} lg={3}
        >
            <PosterPreviewComponent path={tv.poster_path}/>
        </Grid2>
    );
};

export default TVComponent;