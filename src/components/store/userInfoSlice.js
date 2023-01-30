import { createSlice } from "@reduxjs/toolkit";

export const userInfoSlice = createSlice({
  name: "userInfo",
  initialState: {
    value: [
      {
        userId: "User",
        password: 123,
      },
    ],
  },
  reducers: {
    addUser: (state, action) => {
      state.value.push(action.payload);
    },
    removeUser: (state) => {
      state.value.pop();
    },
  },
});

export default userInfoSlice.reducer;

export const { addUser, removeUser } = userInfoSlice.actions;
