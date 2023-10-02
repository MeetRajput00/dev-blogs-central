import { setLogOutUser,setUserNotAuthenticated } from "../currentUser/currentUserSlice";
import { changeValue } from "../currentPage/currentPageSlice";
import { useDispatch } from "react-redux";


export default function ResetGlobalStates(){
    const dispatch=useDispatch();
    dispatch(setUserNotAuthenticated());
    dispatch(setLogOutUser());
    dispatch(changeValue("Dashboard"));
}