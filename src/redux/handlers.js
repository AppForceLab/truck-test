export const handelPending = state => {
    state.isLoading = true;
    state.error = '';
  };
  
  export const handelRejected = (state, { payload }) => {
    state.isLoading = false;
    state.error = payload.message;
  };
  
  export const handelGetCampers = (state, { payload }) => {
    state.items = payload;
    state.isLoading = false;
    state.error = '';
  };
  
  export const handelLoadMore = (state, { payload }) => {
    state.items.push(...payload);
    state.isLoading = false;
    state.error = '';
  };
  
  export const handelGetAllCampers = (state, { payload }) => {
    state.allItems = payload;
  };