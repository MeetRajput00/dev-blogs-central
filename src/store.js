import { configureStore } from '@reduxjs/toolkit'
import currentPageReducer from './features/currentPage/currentPageSlice';
import currentUserSlice from './features/currentUser/currentUserSlice';
export default configureStore({
  reducer: {
    currentPage:currentPageReducer,
    currentUser:currentUserSlice
  },
})