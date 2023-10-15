import { useState,useEffect } from "react";
import { getDashboardPosts } from "../../firebase/firebase";
import Article from "../../components/Article";
import { useSelector } from "react-redux/es/hooks/useSelector";

export default function MyBlogs(){
    const [displayPosts, setDisplayPosts] = useState([]);
    const username=useSelector((state)=>state.currentUser.username);
    const getPosts=async ()=>{
        try {
            const result = await getDashboardPosts(username);
            setDisplayPosts(result);
        } catch (error) {
            console.error("Error fetching posts: ", error);
        }
    }
    useEffect(() => {
        getPosts();
    }, []);
    return(
        <div className="flex flex-col w-10/12 h-full overflow-auto" >
            {displayPosts.map((value) => (
                <div key={value.postname}>
                    <Article postname={value.postname} post={value.post} username={value.username} category={value.category}/>
                </div>
            ))}
        </div>
    );
}