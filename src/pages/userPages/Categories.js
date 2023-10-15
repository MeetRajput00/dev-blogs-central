import { useState, useEffect } from "react";
import Article from "../../components/Article";
import { getDashboardPosts } from "../../firebase/firebase";
export default function Categories() {
  const [selectedCategory, setSelectedCategory] = useState("Programming");
  const [displayPosts, setDisplayPosts] = useState([]);
  const getPosts = async () => {
    try {
      const result = await getDashboardPosts("",selectedCategory);
      console.log(result);
      setDisplayPosts(result);
    } catch (error) {
      console.error("Error fetching posts: ", error);
    }
  };
  useEffect(() => {
    getPosts();
  }, [selectedCategory]);
  const categories = [
    "Programming",
    "Web Dev",
    "Android",
    "AI/ML",
    "Data Science",
    "Cybersecurity",
    "Game Dev",
    "Tech Reviews",
    "Tech News",
    "Cloud",
    "Hardware",
    "Software",
    "Networking",
    "Tech Startups",
    "Open Source",
  ];
  return (
    <div className="w-10/12 flex flex-col m-4">
      <div className="flex flex-row overflow-hidden">
        <div className="flex space-x-2 flex-wrap ">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`bg-gray-200 p-2 m-2 rounded-md ${selectedCategory === category ? 'bg-orange-600 hover:bg-orange-700 text-white' : 'bg-gray-200'}`}
              onClick={() => {
                setSelectedCategory(category);
              }}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      <hr className="my-4 border border-gray-300 w-full" />
      <div className="flex flex-col w-full h-full overflow-auto">
        {displayPosts.map((value) => (
          <div key={value.postname}>
            <Article
              postname={value.postname}
              post={value.post}
              username={value.username}
              category={value.category}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
