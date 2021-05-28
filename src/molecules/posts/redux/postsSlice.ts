import { createSlice } from "@reduxjs/toolkit";

import { fetchPosts } from './asyncActions';

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    status: '',
    posts: [],
    error: {},
  },
  reducers: {},
  extraReducers: {
    [fetchPosts.pending.toString()]: (state) => {
      state.status = 'loading';
    },
    [fetchPosts.fulfilled.toString()]: (state, action) => {
      state.status = 'successful';
      state.posts = [...state.posts, ...action.payload];
    },
    [fetchPosts.rejected.toString()]: (state, action) => {
      state.status = 'failed';
      state.error = { message: action.error.message };
    }
  }
});


export default postsSlice.reducer;