import { createSlice } from '@reduxjs/toolkit';
import { RequestStatus } from '../../const';
import { CommentType } from '../../types/comments.type';
import { fetchCommentsAction, postCommentAction } from './comments.thunks';


type CommentsState = {
  items: CommentType[] | null;
  fetchCommentsStatus: RequestStatus;
  postCommentStatus: RequestStatus;
}

const initialState: CommentsState = {
  items: null,
  fetchCommentsStatus: RequestStatus.Idle,
  postCommentStatus: RequestStatus.Idle
};


const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchCommentsAction.pending, (state) => {
        state.fetchCommentsStatus = RequestStatus.Loading;
      })
      .addCase(fetchCommentsAction.fulfilled, (state, action) => {
        state.fetchCommentsStatus = RequestStatus.Success;
        state.items = action.payload;
      })
      .addCase(fetchCommentsAction.rejected, (state) => {
        state.fetchCommentsStatus = RequestStatus.Failed;
      })
      .addCase(postCommentAction.pending, (state) => {
        state.postCommentStatus = RequestStatus.Loading;
      })
      .addCase(postCommentAction.fulfilled, (state, action) => {
        state.items?.push(action.payload);
        state.postCommentStatus = RequestStatus.Success;
      })
      .addCase(postCommentAction.rejected, (state) => {
        state.postCommentStatus = RequestStatus.Failed;
      })
});

export const commentsReducer = commentsSlice.reducer;
