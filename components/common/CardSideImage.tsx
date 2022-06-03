import React from "react";
import Image from "next/image";
import { Post } from "~/pages";
import { FC, useEffect, useState } from "react";
import { useRouter } from "next/router";
type Props = {
  post: Post;
};
const CardSideImage: FC<Props> = ({ post }) => {
  const router = useRouter();
  return (
    <div
      className="relative flex items-center"
      onClick={() => router.push(`/studies/${post.slug}`)}
    >
      <div className="relative w-[150px] h-[150px] ">
        <Image
          layout="fill"
          objectFit="cover"
          src={post.image}
          alt={post.title}
        />
      </div>
      <div className="flex flex-col space-y-3 mr-4">
        <span className="text-xs text-theme-light-black border-r-2 border-theme-primary pr-2">
          {post.subcategory}
        </span>
        <span className="text-theme-black text-sm">{post.title}</span>
        <p className="text-theme-gray max-w-[220px]  text-sm">{post.excerpt}</p>
        <p className="text-theme-light-black text-xs">بواسطه {post.author}</p>
      </div>
    </div>
  );
};

export default CardSideImage;
