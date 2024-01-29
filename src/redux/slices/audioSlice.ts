import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  mute: boolean;
}

const initialState: CounterState = {
  mute: true,
};

export const counterSlice = createSlice({
  name: "audio",
  initialState,
  reducers: {
    setAudio: (state, action: PayloadAction<boolean>) => {
      state.mute = action.payload;
      return state;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAudio } = counterSlice.actions;

export default counterSlice.reducer;
export const selectAudio = (state: {
  audio: {
    mute: boolean;
  };
}) => state.audio;
