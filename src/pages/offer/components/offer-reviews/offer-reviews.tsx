
import { getAutorizationStatus } from '../../../../authorization-status';
import { AutorizationStatus } from '../../../../const';
import {commentsData} from '../../../../mocks/comments-data/comments-data';
import CommentForm from './comment-form/comment-form';

import ReviewsList from './reviews-list/reviews-list';

const OfferReviews = () => {

  const autorizationStatus = getAutorizationStatus();

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{commentsData.length}</span></h2>
      <ReviewsList commentsData={commentsData} />
      {autorizationStatus === AutorizationStatus.Auth && <CommentForm />}
    </section>
  );
};

export default OfferReviews;
