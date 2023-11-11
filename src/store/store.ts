import { configureStore } from "@reduxjs/toolkit";
import showSlice from "../features/showSlice";
import { type } from "@testing-library/user-event/dist/type";

export const store = configureStore( {
    reducer: {
        showSliceReducer : showSlice
    }
})

export type RootState = ReturnType< typeof store.getState>