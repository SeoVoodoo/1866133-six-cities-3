import { memo } from 'react';
import { useAuthorization } from '../../../../hooks/use-authorization';
import { CommentType } from '../../../../types/comments.type';
import MemoizedCommentForm from './comment-form/comment-form';
import MemoizedReviewsList from './reviews-list/reviews-list';

type OfferReviewsPropsType = {
  comments: CommentType[] | null;
}

const OfferReviews = ({comments}: OfferReviewsPropsType) => {

  const isAuthorized = useAuthorization();

  return (
    <section className="offer__reviews reviews">

      {comments && (
        <>
          <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
          <MemoizedReviewsList comments={comments} />
        </>
      )}
      {isAuthorized && <MemoizedCommentForm />}
    </section>
  );
};

const MemoizedOfferReviews = memo(OfferReviews);

export default MemoizedOfferReviews;
