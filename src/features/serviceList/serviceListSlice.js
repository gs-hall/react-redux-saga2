import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: null,
  isLoading: false,
  error: null,
  isReloadRequired: true
};

export const serviceListSlice = createSlice({
  name: 'serviceList',
  initialState,
  reducers: {
    fetchServiceListRequest: (state, action) => {
      console.log('slice: fetchServiceListRequest', action);
      state.isLoading = true;
      state.error = null;
      state.isReloadRequired = false;
    },
    fetchServiceListFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    fetchServiceListSuccess: (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    reloadServiceList: (state) => {
      console.log('serviceListSlice: return to the Source');
      state.isReloadRequired = true;
    }    
  }
});

export const { fetchServiceListRequest, fetchServiceListFailure, fetchServiceListSuccess, reloadServiceList } = serviceListSlice.actions;

export const selectServiceList = (state) => state.serviceList;

export default serviceListSlice.reducer;
