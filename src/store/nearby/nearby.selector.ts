import { State } from '../../types/state.type';

export const selectNearby = (state: State) => state.nearby.nearby;
