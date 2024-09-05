import { createSlice, PayloadAction } from "@reduxjs/toolkit"; 
import { hackathonsData } from "../../data/hackathons";
import { Hackathon } from "../../types";

interface HackathonsState {
  list: Hackathon[];
}

const initialState: HackathonsState = {
  list: hackathonsData,
};

const hackathonsSlice = createSlice({
  name: "hackathons",
  initialState,
  reducers: {
    setHackathons: (state, action: PayloadAction<Hackathon[]>) => {
      state.list = action.payload;
    },
    addHackathon: (state, action: PayloadAction<Hackathon>) => {
      state.list.push(action.payload);
    },
    removeHackathon: (state, action: PayloadAction<number>) => {
      state.list = state.list.filter(
        (hackathon) => hackathon.id !== action.payload
      );
    },
    updateHackathon: (state, action: PayloadAction<Hackathon>) => {
      const index = state.list.findIndex((h) => h.id === action.payload.id);
      if (index !== -1) {
        state.list[index] = action.payload;
      }
    },
  },
});

export const { setHackathons, addHackathon, removeHackathon, updateHackathon } =
  hackathonsSlice.actions;

export default hackathonsSlice.reducer;
