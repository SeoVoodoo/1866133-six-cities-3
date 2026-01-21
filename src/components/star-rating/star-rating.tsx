
type StarRatingPropsType = {
  rating: number;
}

export const StarRating = ({rating}: StarRatingPropsType) => (
  <span style={{ width: `${Math.round(rating) * 20}%` }}></span>
);

