import { createSlice } from "@reduxjs/toolkit";
import { addAccessToken, removeAccessToken } from "../../utils/localStorage";
import { loading } from "./LoadingSlice";

const authSlice = createSlice({

  name: 'auth',
  initialState: { loginState: false,},
  reducers: {
    login: (state, action) => {
      addAccessToken("VPmo2U661gTnhMVx0pc0-CtahNg_aqS5DuneLtYfO1o");
      state.loginState = true;

    },
    logout: (state, action) => {
      removeAccessToken();
      state.loginState = false;

    },
  }
});

export const thunkLogin = () => async (dispatch) => {
  try {
    dispatch(loading(true));
    addAccessToken("VPmo2U661gTnhMVx0pc0-CtahNg_aqS5DuneLtYfO1o");
  } catch (error) {
    throw error;
  } finally {
    dispatch(loading(false));
  }
};

export default authSlice.reducer;
const { login, logout} =
  authSlice.actions;
export { login, logout};
