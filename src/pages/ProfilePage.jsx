import PostItem from "@/components/PostItem";
import PostListItem from "@/components/PostListItem";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { getAssetUrl } from "@/lib/assets";
import {
  faBell,
  faCircleLeft,
  faEllipsis,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

const Profile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
      .then((res) => res.json())
      .then((response) => {
        setPosts(response);
      });
  }, [id]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((response) => {
        setUser(response);
      });
  }, [id]);
  return (
    <div>
      <div
        className="  pl-4 pt-2 flex items-center  cursor-pointer"
        onClick={() => {
          if (window.history.length > 1) {
            navigate(-1);
          } else {
            navigate("/");
          }
        }}
      >
        <FontAwesomeIcon icon={faCircleLeft} className="pb-2 pr-2" />
        <p className="pb-2 pr-2">Quay Lại</p>
      </div>

      {/* Phần thông tin User */}
      <div className="p-4">
        <div className="flex items-center">
          <div className="flex-1">
            <p className="text-xl font-bold ">
              UserName : {user?.username ?? "Bùi Thành Long"}
            </p>
            <p>Name : {user?.name ?? " Longnd312"}</p>
          </div>
          <div>
            <Avatar className="h-21 w-21">
              <AvatarImage
                src={getAssetUrl("img/avatarProfile.jpg")}
              ></AvatarImage>
              <AvatarFallback>Avatar</AvatarFallback>
            </Avatar>
          </div>
        </div>
        <div className="flex pt-4 ">
          <p className="flex-1">2005 followers</p>
          <div className="flex gap-2 items-center pr-3">
            <FontAwesomeIcon icon={faBell} className="text-xl" />
            <FontAwesomeIcon icon={faEllipsis} className="text-xl" />
          </div>
        </div>
        <div className="flex gap-2 pt-4">
          <Button className="flex-1">Follow</Button>
          <Button className="bg-white text-black border-gray-200 border flex-1">
            Mention
          </Button>
        </div>
      </div>
      {/* Phần dũ liệu */}
      <div>
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger className="flex-1 bg-gray-200">
              Threads
            </MenubarTrigger>
          </MenubarMenu>

          <MenubarMenu>
            <MenubarTrigger className="flex-1">Replies</MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger className="flex-1">Media</MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger className="flex-1">Reposts</MenubarTrigger>
          </MenubarMenu>
        </Menubar>
      </div>

      {/* Phần post */}
      <div>
        {posts.map((post, index) => (
          <PostListItem key={index} post={post} />
        ))}
      </div>
    </div>
  );
};
export default Profile;
