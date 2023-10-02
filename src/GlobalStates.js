import { useDispatch } from "react-redux";
import { changeValue } from "./features/currentPage/currentPageSlice";
import { setLogOutUser, setUserNotAuthenticated } from "./features/currentUser/currentUserSlice";
import { useEffect } from "react";
export default function GlobalStates(){
    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(changeValue("Dashboard"));
      dispatch(setUserNotAuthenticated());
      dispatch(setLogOutUser());
    },[])
    return(
      <></>
    );
}