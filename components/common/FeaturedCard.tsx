import React from "react";
import { Post } from "~/pages";
import { FC, useEffect, useState } from "react";
import Image from "next/image";
import FeaturedPostBody from "./FeaturedPostBody";
import { useRouter } from "next/router";
type Props = {
  post: Post;
};
const FeaturedCard: FC<Props> = ({ post }) => {
  const router = useRouter()
  return (
    <div className="flex flex-col space-y-3" onClick={() => router.push(`/studies/${post.slug}`)}>
      <div className="relative flex justify-center h-[350px]">
        <Image
          src={post.image}
          alt={post.title}
          objectFit="cover"
          layout="fill"
        />
      </div>
      <FeaturedPostBody post={post} />
    </div>
  );
};

export default FeaturedCard;
