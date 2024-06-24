import React, {FC} from 'react';
import {Badge} from "reactstrap";
import {IGenre} from "../../interfaces/IGenre";
import {Box} from "@mui/material";

interface IProps {
  genres:IGenre[]
}

const GenreBadgeComponent: FC<IProps> = ({genres}) => {
    const getRandomColor = () => {
        // Генеруємо випадковий колір у форматі HEX (#xxxxxx)
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };
    return (
        <Box sx={{ mt: 3 }}>
            {genres.map((genre) => (
                <Badge
                    key={genre.id}
                    color="info" // Ви можете змінити цей колір на будь-який, який вам подобається
                    className="mr-2 mb-2"
                    style={{ backgroundColor: getRandomColor(), color: '#fff' ,padding: '8px 10px', borderRadius: '10px' }}
                >
                    {genre.name}
                </Badge>
            ))}
        </Box>
    );
};

export default GenreBadgeComponent;