import { Heading } from "@/components/Header";
import PostItem from "@/components/PostItem";
import PostListItem from "@/components/PostListItem";

import { useEffect, useState } from "react";

const Home = () => {
  const [openPost, setOpenPost] = useState(false);
  const [posts, setPost] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((responsive) => {
        setPost(responsive);
      });
  }, []);
  const handleOpenPost = () => {
    setOpenPost(true);
  };
  return (
    <div>
      <Heading title="Home" />
      {/* đầu mục đăng bài  */}
      <section className="h-17 hidden md:flex border-b p-4 ">
        <div className="flex-1 flex justify-start items-center gap-1">
          <img
            src="../../public/img/placeholder.avif"
            alt="Profile"
            className="h-9 border rounded-full"
          />
          <p className="cursor-pointer flex-1" onClick={handleOpenPost}>
            What's new ?
          </p>
        </div>
        <button
          className="cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            handleOpenPost();
          }}
        >
          Post
        </button>

        {openPost && (
          <PostItem
            onClose={() => {
              setOpenPost(false);
            }}
          />
        )}
      </section>
      {/* Phần danh sách bài đăng */}

      {posts.map((post) => (
        <PostListItem key={post.id} post={post} />
      ))}
    </div>
  );
};
export default Home;
