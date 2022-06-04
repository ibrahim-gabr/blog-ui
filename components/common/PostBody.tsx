import React from "react";
import { Post } from "~/pages";
import { FC, useEffect, useState } from "react";
import Image from "next/image";

type Props = {
  post: Post;
};
const PostBody: FC<Props> = ({ post }) => {
  return (
    <>
      <span className="text-sm text-theme-light-black border-r-2 border-theme-primary pr-2">
        {post.subcategory}
      </span>
      <div className="flex flex-col space-y-3">
        <span className="text-theme-black text-xl">{post.title}</span>
        <p className="text-theme-gray text-sm">{post.excerpt}</p>
        <p className="text-theme-light-black text-sm">بواسطه {post.author}</p>
      </div>
    </>
  );
};

export default PostBody;
