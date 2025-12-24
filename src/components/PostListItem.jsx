import { AvatarFallback } from "@/components/ui/avatar";
import { getAssetUrl } from "@/lib/assets";
import { faComment, faHeart } from "@fortawesome/free-regular-svg-icons";
import { faRepeat, faShare } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { useNavigate } from "react-router";

export default function PostListItem({ post }) {
  const navigate = useNavigate();
  return (
    <section
      className="p-4 border-b cursor-pointer"
      onClick={() => navigate(`/posts/${post.id}`, { state: { post } })}
    >
      <div key={post.id}>
        <div
          className="flex justify-start items-center gap-1"
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/users/${post.id}`, { state: { post } });
          }}
        >
          {" "}
          <Avatar className="w-9 h-9 ">
            <AvatarImage
              src={getAssetUrl("img/avt.jpg")}
              className="size-9 rounded-full"
            />
            <AvatarFallback className="size-8">Avt</AvatarFallback>
          </Avatar>
          <p>
            User {post.id} - <span>{post.id}h</span>
          </p>
        </div>
        <p>
          <b>{post.title}</b>
        </p>

        <p>{post.body}</p>

        <div className="flex gap-4">
          <div className="flex items-center">
            <FontAwesomeIcon icon={faHeart} />
            <p>2.4K</p>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faComment} />
            <p>109</p>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faRepeat} />
            <p>185</p>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faShare} />
            <p>1.1K</p>
          </div>
        </div>
      </div>
    </section>
  );
}
