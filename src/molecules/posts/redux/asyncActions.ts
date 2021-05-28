import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApiClient } from 'utils/apiClient';

export const fetchPosts = createAsyncThunk('posts/fetch', async () => {
  const signal: AbortSignal = new AbortSignal();
  return ApiClient.get('/posts', signal);
});