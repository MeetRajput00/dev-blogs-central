import { createSlice } from '@reduxjs/toolkit'

const initialState={
    Title:"Register"
}

export const currentPageSlice = createSlice({
  name: 'currentPage',
  initialState,
  reducers: {
    changeValue: (state, action) => {
      state.Title = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeValue } = currentPageSlice.actions

export default currentPageSlice.reducer