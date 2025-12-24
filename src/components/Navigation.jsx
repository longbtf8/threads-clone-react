import { faHeart, faHouse, faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faBarsStaggered,
  faMagnifyingGlass,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { NavLink } from "react-router";
import PostItem from "./PostItem";
import { getAssetUrl } from "@/lib/assets";

const items = [
  { path: "/", icon: faHouse },
  { path: "/search", icon: faMagnifyingGlass },
  { path: null, icon: faPlus },
  { path: "/activity", icon: faHeart },
  { path: "/Profile", icon: faUser },
];

const Navigation = () => {
  const [openPost, setOpenPost] = useState(false);
  function handleOpenPost() {
    setOpenPost(true);
  }
  return (
    <nav className=" bg-white fixed md:flex md:flex-col bottom-0 left-0 w-full h-16 md:top-0 md:bottom-auto md:h-screen md:w-16 md:justify-between md:py-4">
      <div
        className="hidden md:flex md:items-center md:justify-center md:h-12 md:w-[80%] cursor-pointer
         "
      >
        <img src={getAssetUrl("img/Threads_(app)_logo.svg.png")} alt="logo" />
      </div>
      <ul className="flex items-center justify-around h-full md:flex-col w-full md:flex-1 md:h-auto md:justify-center md:gap-2">
        {items.map((item, index) =>
          item.path ? (
            <li
              key={index}
              className=" flex-1 md:flex-none md:h-12 h-full flex items-center justify-center md:w-[80%] "
            >
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex w-full justify-center bg-w items-center h-[80%] hover:bg-gray-200 hover:rounded-xl transition md:h-12 md:w-12 ${
                    isActive ? `bg-gray-200 rounded-xl` : "bg-white"
                  }`
                }
              >
                <FontAwesomeIcon icon={item.icon} />
              </NavLink>
            </li>
          ) : (
            <li
              key={index}
              className=" flex-1 h-full flex items-center justify-center md:w-[80%] md:flex-none md:h-12"
            >
              <button
                className="flex w-full justify-center items-center h-[80%] bg-gray-200 rounded-xl md:h-12 md:w-12 "
                onClick={handleOpenPost}
              >
                <FontAwesomeIcon icon={item.icon} />
              </button>
            </li>
          )
        )}
      </ul>
      <div
        className="hidden md:flex md:items-center md:justify-center md:h-12 md:w-full cursor-pointer
        "
      >
        <FontAwesomeIcon icon={faBarsStaggered} />
      </div>
      {openPost && (
        <PostItem
          onClose={() => {
            setOpenPost(false);
          }}
        />
      )}
    </nav>
  );
};
export default Navigation;
