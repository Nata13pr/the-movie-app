import React, {FC} from 'react';
import StarRatings from "react-star-ratings";

interface IProps{
    rating:number
}
const StarsRatingComponent:FC<IProps> = ({rating}) => {
    // const [rating, setRating] = React.useState<number>(1);
    //
    // const changeRating = (newRating: number) => {
    //     setRating(newRating)
    // }
    return (
        <>
            <StarRatings
                rating={rating}
                // rating={rating}
                starRatedColor="#C0B283"
                // changeRating={changeRating}
                numberOfStars={10}
                starDimension="30px"
                starSpacing="15px"
                name='rating'/>
            <p>{rating}</p>
        </>

    );
};

export default StarsRatingComponent;
