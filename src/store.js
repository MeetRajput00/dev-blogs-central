import { configureStore } from '@reduxjs/toolkit'
import currentPageReducer from './features/currentPage/currentPageSlice';
export default configureStore({
  reducer: {
    currentPage:currentPageReducer
  },
})