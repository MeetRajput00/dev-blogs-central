import { useDispatch } from "react-redux";
import { changeValue } from "../features/currentPage/currentPageSlice";
import {ResetGlobalStates} from "../features/globalStates/ResetGlobalStates";
import { useNavigate } from "react-router-dom";
export default function HoverButton(props) {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const handleClick=()=>{
    if(props.name==="Logout"){
      <ResetGlobalStates/>
      navigate("/");
    }
    else{
      dispatch(changeValue(props.name));
    }
  } 
  return (
    <button
      className="relative inline-block px-4 py-2 font-medium group w-40"
      onClick={handleClick}
    >
      <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
      <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
      <span className="relative text-black group-hover:text-white">
        {props.name}
      </span>
    </button>
  );
}
