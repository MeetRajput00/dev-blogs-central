import { useDispatch } from "react-redux";
import { changeValue } from "./features/currentPage/currentPageSlice";
import { setLogOutUser, setUserNotAuthenticated } from "./features/currentUser/currentUserSlice";
export default function GlobalStates() {
    const dispatch = useDispatch();
    function ResetGlobalStates(){
        dispatch(changeValue("Dashboard"));
        dispatch(setUserNotAuthenticated());
        dispatch(setLogOutUser());
    }
    return [ResetGlobalStates];
};