import React, {FC} from 'react';
import {Badge} from "reactstrap";
import {IGenre} from "../../interfaces/IGenre";

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
        <div>
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
        </div>
    );
};

export default GenreBadgeComponent;