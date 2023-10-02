import { createSlice } from '@reduxjs/toolkit'

const initialState={
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    joiningDate: "",
    username: "",
    isAuthenticated:0
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
    },
    setUsername: (state,action)=>{
        state.username=action.payload
    },
    setLogOutUser: (state)=>{
        state.firstName="";
        state.lastName="";
        state.email="";
        state.mobile="";
        state.joiningDate="";
        state.username=""
    },
    setUserAuthenticated:(state)=>{
        state.isAuthenticated=1
    },
    setUserNotAuthenticated:(state)=>{
        state.isAuthenticated=0
    }
  },
})

export const { setFirstName, setLastName, setMobile, setEmail, setJoiningDate, setUsername,setLogOutUser,setUserAuthenticated,setUserNotAuthenticated } = currentUserSlice.actions

export default currentUserSlice.reducer