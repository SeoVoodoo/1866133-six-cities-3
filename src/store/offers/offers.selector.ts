import { State } from '../../types/state.type';


export const selectOffers = (state: State) => state.offers.offers;
export const selectOffersStatus = (state: State) => state.offers.status;
