import React from "react";
import Image from "next/image";
import { Post } from "~/pages";
import { FC, useEffect, useState } from "react";
type Props = {
  post: Post;
};
const CardSideImage: FC<Props> = ({ post }) => {
  return (
    <div className="relative flex items-center">
      <div >
        <img
          className="max-w-[127px] h-[127px]"
          src={post.image}
          alt={post.title}
        />
      </div>
      <div className="flex flex-col space-y-1 mr-4">
        <span className="text-xs text-theme-light-black border-r-2 border-theme-primary pr-2">
          {post.subcategory}
        </span>
        <span className="text-theme-black text-sm">{post.title}</span>
        <p className="text-theme-gray text-sm">{post.excerpt}</p>
        <p className="text-theme-light-black text-xs">بواسطه {post.author}</p>
      </div>
    </div>
  );
};

export default CardSideImage;
