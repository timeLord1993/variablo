import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import informationSlice from "./informationSlice";

export default configureStore({
  reducer: {
    userBaseInfo: userSlice,
    informationList: informationSlice,
  },
});
