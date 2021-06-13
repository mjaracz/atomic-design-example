import { createSlice } from '@reduxjs/toolkit';
import { useApiClient } from 'utils/useApiClient';

import { initialState } from './initialState';

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUserDetails(state) {
      state.status = 'loading';
    },
    fetchUserDetails(state, action) {
      state.status = 'succesful';
      state.details = action.payload;
    },
    errorUserDetails(state, action) {
      state.status = 'failed';
      state.details = [];
      state.error = action.payload;
    }
  }
});

export const { getUserDetails, fetchUserDetails, errorUserDetails } = userSlice.actions;

export const getUserDetailsAsync = (username: string) => async dispatch => {
  dispatch(getUserDetails());
  const { get } = useApiClient();

  try {
    const userDetails = await get(`/users?username=${username}`);
    dispatch(fetchUserDetails(userDetails));
  }
  catch (error) {
    dispatch(errorUserDetails(error));
  }
};

export default userSlice.reducer;
