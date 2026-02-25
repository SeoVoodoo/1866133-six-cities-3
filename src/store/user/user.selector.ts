import { State } from '../../types/state.type';


export const selectProfile = (state: State) => state.user.info;
export const selectAuthStatus = (state: State) => state.user.authorizationStatus;
