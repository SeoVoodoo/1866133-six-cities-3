import { State } from '../../types/state.type';

export const selectComments = (state: State) => state.comments.items;
export const selectPostCommentStatus = (state: State) => state.comments.postCommentStatus;
