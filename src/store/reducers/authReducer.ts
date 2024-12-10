import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";
import request from "../../config/dev";
import { API_STATE } from "../../utils/constants";
import { removeCookies } from "../../utils/helpsrs";

export type AuthState = {
  loading: keyof typeof API_STATE;
  token: string;
  userDetails: object;
};

const { REACT_APP_AUTH_URL } = import.meta.env;
const initialState: AuthState = {
  loading: API_STATE.idle,
  token: "",
  userDetails: {}
};

export const getNewAccessToken = createAsyncThunk("getNewAccessToken", async (data, { rejectWithValue }) => {
  try {
    const response = await request({
      method: "POST",
      url: `${REACT_APP_AUTH_URL}/auth/get-new-access-token`,
      data
    });

    return response.data;
  } catch (error) {
    // return rejectWithValue(handleApiError(error));
  }
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logoutSuccess: (state, action) => {
      state.userDetails = {};
      state.loading = API_STATE.idle;
      // localStorage.removeItem("filterView");
      removeCookies();
    }
  }
});

export const { logoutSuccess } = authSlice.actions;
export const authSelector = (state: RootState) => state.authReducer;

export default authSlice.reducer;
