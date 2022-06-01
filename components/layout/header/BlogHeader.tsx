import { MenuIcon } from "@heroicons/react/outline";
import React from "react";

const BlogHeader = () => {
  return (
    <div className="flex items-end h-7 space-x-4 font-bold text-xl text-white">
      <div>
        <MenuIcon className="w-8 h-8 flex sm:hidden text-white ml-6" />
      </div>
      <div className="leading-7">مدونة</div>
      <div className=" text-3xl">|</div>
      <div className="leading-7 ">Blog</div>
    </div>
  );
};

export default BlogHeader;
