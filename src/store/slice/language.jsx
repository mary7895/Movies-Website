import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice({
  name: "language",
  initialState: { language: "en" },
  reducers: {
    changeLang: (state, action) => {
      state.language = action.payload;
      console.log(action.payload, "lll");
    },
  },
});

export const languageReducer = languageSlice.reducer;
export const { changeLang } = languageSlice.actions;
export default languageSlice.reducer;
