import React, {FC} from 'react';
import {Box, Rating, Typography} from "@mui/material";
import {yellow} from "@mui/material/colors";

interface IProps {
    rating: number
}

const StarsRatingComponent: FC<IProps> = ({rating}) => {

    return (
        <Box sx={{mt: 5}}>
            <Rating name="read-only"
                    value={rating}
                    readOnly
                    max={10}
                    sx={{
                        fontSize: 50,
                        color: yellow
                            ["100"]
                    }}/>
            <Typography
                component={'p'}>
                Rating-{rating}
            </Typography>
        </Box>

    );
};

export default StarsRatingComponent;
