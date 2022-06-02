import { MenuIcon } from "@heroicons/react/outline";
import React, { FC } from "react";
type Props = {
  isHomePage: boolean;
};
const BlogHeader: FC<Props> = ({ isHomePage }) => {
  return (
    <div
      className={`flex items-end h-7 space-x-4 font-bold text-xl ${
        isHomePage ? "text-white" : "text-[#404343]"
      }`}
    >
      <div>
        <MenuIcon
          className={`w-8 h-8 flex sm:hidden  isHomePage ? "text-white" : "text-[#404343]" ml-6`}
        />
      </div>
      <div className="leading-7">مدونة</div>
      <div className=" text-3xl">|</div>
      <div className="leading-7 ">Blog</div>
    </div>
  );
};

export default BlogHeader;
