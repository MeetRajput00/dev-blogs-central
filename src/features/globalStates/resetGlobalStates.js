// In your Redux actions file (e.g., actions.js)
import { useDispatch } from "react-redux";
import { setLogOutUser, setUserNotAuthenticated } from "../currentUser/currentUserSlice";
import { changeValue } from "../currentPage/currentPageSlice";

export default function ResetGlobalStates() {
  const dispatch = useDispatch();
  dispatch(setUserNotAuthenticated());
  dispatch(setLogOutUser());
  dispatch(changeValue("Dashboard"));
  return(
    <></>
  );
}
