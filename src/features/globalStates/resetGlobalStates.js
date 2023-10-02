// In your Redux actions file (e.g., actions.js)
import { useDispatch } from "react-redux";
import { setLogOutUser, setUserNotAuthenticated } from "../currentUser/currentUserSlice";
import { changeValue } from "../currentPage/currentPageSlice";
import { useEffect } from "react";

export default function ResetGlobalStates() {
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
