import {useEffect, useState} from "react";
import PropTypes from 'prop-types';
import {StarRatingWrap} from "@/components/ui/star-rating/star.style";

const Star = ({selected = false, onClick = f => f}) => (
    <span className={selected ? "star selected" : "star"} onClick={onClick}/>
);

const StarRating = ({totalStars=5, getRatingValue}) => {
    const [starsSelected, selectStar] = useState(0);

    useEffect(()=>{
        getRatingValue(starsSelected);
    },[starsSelected])

    return (
        <StarRatingWrap>
            {[...Array(totalStars)].map((n, i) => (
                <Star
                    key={i}
                    selected={i < starsSelected}
                    onClick={() => selectStar(i + 1)}
                />
            ))}
        </StarRatingWrap>
    );
};

StarRating.propTypes = {
    totalStars: PropTypes.number,
};

export default StarRating;
