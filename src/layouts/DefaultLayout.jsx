import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import PostItem from "@/components/PostItem";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Outlet } from "react-router";

const DefaultLayout = () => {
  const [openPost, setOpenPost] = useState(false);
  function handleOpenPost() {
    setOpenPost(true);
  }
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 flex justify-center md:ml-16 mb-16 md:mb-0 mt-16 ">
        <div className="w-full max-w-[630px]  md:border-x md:border-t md:rounded-t-4xl border-gray-200">
          <Outlet />
        </div>
      </main>

      <button
        className="hidden md:block fixed bottom-8 right-8 bg-white border h-18 w-21 rounded-xl cursor-pointer"
        onClick={handleOpenPost}
      >
        <FontAwesomeIcon icon={faPlus} className=" text-xl font-bold" />
      </button>

      {openPost && (
        <PostItem
          onClose={() => {
            setOpenPost(false);
          }}
        />
      )}
      <Navigation />
    </div>
  );
};
export default DefaultLayout;
