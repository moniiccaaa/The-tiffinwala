import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  provider: undefined,
  allProviders: undefined,
  isProvider: false,
  loading: false,
  error: "",
  providerRegister: false,
};
const providerSlice = createSlice({
  name: "Provider",
  initialState,
  reducers: {  //Contains functions (reducers) that handle state changes.
    providerRequest: (state) => {  //Handling API Request (Setting Loading State)
      state.loading = true;
      state.provider = "";
      state.error = "";
    },
    singleProviderSuccess: (state, action) => {  // Handling a Single Provider Fetch Success      
      state.provider = action.payload.provider;  //Stores the fetched provider details from action.payload.provider
      state.loading = false;
    },
    providerSuccess: (state, action) => {  //Stores the provider details upon successful login.
      state.provider = action.payload;
      state.loading = false;
      state.isProvider = true;
    },
    clearError: (state, action) => {  //Clears error messages.
      state.loading = false;
      state.error = undefined;
    },
    providerRegistrationSuccess: (state, action) => {
      state.loading = false;
      state.isProvider = true;
      state.providerRegister = true;
    },
    allProvidersSuccess: (state, action) => {  //Stores all provider details.
      state.loading = false;
      state.allProviders = action.payload.allProviders;
    },
    allProvidersFail: (state) => {  //If fetching all providers fails
      state.loading = false;
      state.allProviders = undefined;
    },
    providerFail: (state, action) => {  //Resets provider and sets an error message.
      state.provider = undefined;
      state.loading = false;
      state.error = action.payload;
    },
    providerLogout: (state) => {
      state.provider = undefined;
      state.isProvider = false;
      state.loading = false;
    },
  },
});

export const {
  providerRequest,
  providerSuccess,
  providerFail,
  clearError,
  providerLogout,
  allProvidersSuccess,
  allProvidersFail,
  singleProviderSuccess,
  providerRegistrationSuccess,
} = providerSlice.actions;

export default providerSlice.reducer;
