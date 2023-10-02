import { createSlice } from '@reduxjs/toolkit'

const initialState={
    Title:"Dashboard"
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

export const { changeValue } = currentPageSlice.actions

export default currentPageSlice.reducer