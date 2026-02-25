import { State } from '../../types/state.type';

export const selectOffer = (state: State) => state.offer.offer;
export const selectOfferStatus = (state: State) => state.offer.status;
