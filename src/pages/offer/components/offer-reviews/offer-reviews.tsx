
// type OfferReviewsPropsType = {
//   rating: number;
// };

import {commentsData} from '../../../../mocks/comments-data/comments-data';
import CommentForm from './comment-form/comment-form';

import ReviewsList from './reviews-list/reviews-list';

const OfferReviews = (): JSX.Element => (
  <section className="offer__reviews reviews">
    <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">1</span></h2>
    <ReviewsList commentsData={commentsData} />
    <CommentForm />
  </section>
);

export default OfferReviews;
