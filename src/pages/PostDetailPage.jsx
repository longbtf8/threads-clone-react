import PostListItem from "@/components/PostListItem";
import { getAssetUrl } from "@/lib/assets";
import { faCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router";

const PostDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const initialPost = location.state?.post;
  const navigate = useNavigate();
  const [comments, setComment] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then((res) => res.json())
      .then((response) => {
        setComment(response);
      });
  });
  return (
    <div>
      <div
        className="pl-4 pt-2 flex items-center  cursor-pointer"
        onClick={() => navigate(-1)}
      >
        <FontAwesomeIcon icon={faCircleLeft} className="pb-2 pr-2" />
        <p className="pb-2 pr-2">Quay Lại</p>
      </div>
      {initialPost ? <PostListItem post={initialPost} /> : <p>Loading...</p>}
      <p className="p-4">Phần Comment</p>

      {comments.map((comment) => (
        <div className="pl-4 pb-4 border-b border-dotted" key={comment.id}>
          <div className="flex justify-start items-center gap-1">
            {" "}
            <Avatar className="w-9 h-9 ">
              <AvatarImage
                src={getAssetUrl("img/avt.jpg")}
                className="size-9 rounded-full"
              />
              <AvatarFallback className="size-8">Avt</AvatarFallback>
            </Avatar>
            <p>
              User - {comment.id}
              <span>{comment.id}</span>
            </p>
          </div>
          <p>
            <b>{comment.name}</b>
          </p>

          <p>{comment.email}</p>
          <p>{comment.body}</p>
        </div>
      ))}
    </div>
  );
};

export default PostDetail;
