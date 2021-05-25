import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  id1: {
    id: "id1",
    text: "Make dinner",
    complete: false,
  },
  id2: {
    id: "id2",
    text: "Water plants",
    complete: false,
  },
  id3: {
    id: "id3",
    text: "Do homework",
    complete: false,
  },
};

const goalsSlice = createSlice({
  name: "goals",
  initialState: initialState,
  reducers: {
    markAsComplete: (goals, action) => {
      goals[action.payload].complete = true;
    },
    addGoal: (goals, action) => {
      const newId = uuidv4();
      goals[newId] = {
        id: newId,
        text: action.payload,
        complete: false,
      };
    },
    removeGoal: (goals, action) => {
      return Object.keys(goals).reduce((obj, key) => {
        if (key !== action.payload) {
          obj[key] = goals[key];
        }
        return obj;
      }, {});
    },
  },
});

export const selectGoals = (state) => {
  return state.goals;
};

export const { markAsComplete, addGoal, removeGoal } = goalsSlice.actions;

export default goalsSlice.reducer;
