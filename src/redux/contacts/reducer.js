import { createReducer } from "@reduxjs/toolkit";
import { decrement, increment, changeStep } from "./actions";

const initialState = {
  items: [],
  step: 1,
};

export const contactsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(increment, (state) => {
      state.contacts += state.step; // Збільшуємо contacts на step
    })
    .addCase(decrement, (state) => {
      state.contacts -= state.step; // Зменшуємо contacts на step
    })
    .addCase(changeStep, (state, action) => {
      state.step = action.payload; // Оновлюємо крок
    });
});
