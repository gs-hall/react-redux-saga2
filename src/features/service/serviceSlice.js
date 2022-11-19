import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: null,
  isLoading: false,
  error: null,
  isReloadRequired: true
};

export const serviceSlice = createSlice({
  name: 'service',
  initialState,
  reducers: {
    fetchServiceRequest: (state, action) => {
      console.log('slice: fetchServiceRequest', action);
      state.isLoading = true;
      state.error = null;
      state.isReloadRequired = false;
    },
    fetchServiceFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    fetchServiceSuccess: (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    reloadService: (state) => {
      console.log('serviceSlice: return to the Source');
      state.isReloadRequired = true;
    }
  }
});

export const { fetchServiceRequest, fetchServiceFailure, fetchServiceSuccess, reloadService } = serviceSlice.actions;

export const selectService = (state) => state.service;

export default serviceSlice.reducer;
