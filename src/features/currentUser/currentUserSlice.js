import { createSlice } from '@reduxjs/toolkit'

const initialState={
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    joiningDate: ""
}

export const currentUserSlice = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {
    setFirstName: (state, action) => {
        state.firstName = action.payload
    },
    setLastName: (state, action)=>{
        state.lastName=action.payload
    },
    setMobile: (state, action)=>{
        state.mobile=action.payload
    },
    setEmail: (state, action)=>{
        state.email=action.payload
    },
    setJoiningDate: (state,action)=>{
        state.joiningDate=action.payload
    }
  },
})

export const { setFirstName, setLastName, setMobile, setEmail, setJoiningDate } = currentUserSlice.actions

export default currentUserSlice.reducer