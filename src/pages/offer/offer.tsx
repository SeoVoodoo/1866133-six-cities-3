import MemoizedOfferGallery from './components/offer-gallery/offer-gallery';
import MemoizedOfferReting from './components/offer-rating/offer-reting';
import MemoizedOfferInside from './components/offer-inside/offer-inside';
import MemoizedOfferHost from './components/offer-host/offer-host';
import MemoizedOfferReviews from './components/offer-reviews/offer-reviews';
import NearPlaces from './components/near-places/near-places';
import MemoizedOfferPrice from './components/offer-price/offer-price';
import MemoizedOfferFeatures from './components/offer-features/offer-features';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { NotFound } from '../not-found/not-found';
import { MemoizedFavoriteButton } from './components/favorite-button/favorite-button';
import CitiesMap from '../home/components/cities-map/cities-map';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useEffect } from 'react';
import { fetchOfferAction } from '../../store/offer/offer.thunks';
import { fetchCommentsAction } from '../../store/comments/comments.thunks';
import { RequestStatus } from '../../const';
import { Preloader } from '../../components/preloader/preloader';
import { fetchNearbyAction } from '../../store/nearby/nearby.thunks';
import { selectOffer, selectOfferStatus } from '../../store/offer/offer.selector';
import { selectNearby } from '../../store/nearby/nearby.selector';
import { selectComments } from '../../store/comments/comments.selector';

const NEAR_BY_OFFERS_LIMIT = 3;


const Offer = () => {

  const dispatch = useAppDispatch();

  const currentOffer = useAppSelector(selectOffer);
  const status = useAppSelector(selectOfferStatus);
  const nearbyOffers = useAppSelector(selectNearby).slice(0, NEAR_BY_OFFERS_LIMIT);
  const comments = useAppSelector(selectComments);

  const {id} = useParams();

  useEffect(() => {
    Promise.all([
      dispatch(fetchOfferAction(id as string)),
      dispatch(fetchNearbyAction(id as string)),
      dispatch(fetchCommentsAction(id as string))
    ]);
  }, [dispatch, id]);

  if (status === RequestStatus.Loading) {
    return <Preloader />;
  }

  if(status === RequestStatus.Failed || !currentOffer) {
    return <NotFound />;
  }

  const { title,
    type,
    price,
    isFavorite,
    isPremium,
    rating,
    description,
    bedrooms,
    goods,
    host,
    images,
    maxAdults
  } = currentOffer;


  return (
    <main className="page__main page__main--offer">
      <Helmet>
        <title>Предложение по аренде жилья!</title>
      </Helmet>
      <section className="offer">
        <MemoizedOfferGallery images={images}/>
        <div className="offer__container container">
          <div className="offer__wrapper">
            {isPremium && (
              <div className="offer__mark">
                <span>Premium</span>
              </div>
            )}
            <div className="offer__name-wrapper">
              <h1 className="offer__name">
                {title}
              </h1>
              <MemoizedFavoriteButton isFavorite={isFavorite}/>
            </div>
            <MemoizedOfferReting rating={rating} />
            <MemoizedOfferFeatures
              type={type}
              bedrooms={bedrooms}
              maxAdults={maxAdults}
            />
            <MemoizedOfferPrice price={price}/>
            <MemoizedOfferInside goods={goods}/>
            <MemoizedOfferHost
              host={host}
              description={description}
            />
            <MemoizedOfferReviews comments={comments}/>
          </div>
        </div>
        <CitiesMap
          coordinatesCity={currentOffer.city.location}
          offers={[currentOffer, ...nearbyOffers]}
          activeCardId={currentOffer.id}
          className={'offer__map'}
        />
      </section>
      <div className="container">
        <NearPlaces otherOffers={nearbyOffers} />
      </div>
    </main>
  );
};

export default Offer;
