import { configureStore } from "@reduxjs/toolkit";

// Reducers
import RevealsReducer from "../features/reveals/RevealsSlice";

export default configureStore({
  reducer: {
    reveals: RevealsReducer,
  },
});
