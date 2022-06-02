import React from "react";
import { Post } from "~/pages";
import { FC, useEffect, useState } from "react";
import Image from "next/image";
type Props = {
  post: Post;
};
const FeaturedCard: FC<Props> = ({ post }) => {
  return (
    <div className="flex flex-col space-y-4">
      <div className="flex justify-center">
        <Image
          src={post.image}
          width={340}
          height={350}
          alt={post.title}
          objectFit="cover"
        />
      </div>
      <span className="text-sm text-theme-light-black border-r-2 border-theme-primary pr-2">{post.subcategory}</span>
      <div className="flex flex-col space-y-3">
        <span className="text-theme-black text-xl">
          {post.title}
        </span>
        <p className="text-theme-gray text-sm">
          {post.excerpt}
        </p>
        <p className="text-theme-light-black text-sm">
           بواسطه {post.author}
        </p>
      </div>
    </div>
  );
};

export default FeaturedCard;
