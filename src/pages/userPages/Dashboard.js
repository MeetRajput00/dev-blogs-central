import Article from "../../components/Article";
import { useEffect,useState } from "react";
import { getDashboardPosts } from "../../firebase/firebase";
export default function Dashboard(){
    const [displayPosts, setDisplayPosts] = useState([]);
    const getPosts=async ()=>{
        try {
            const result = await getDashboardPosts();
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
                    <Article postname={value.postname} post={value.post} username={value.username} />
                </div>
            ))}
        </div>
    );
}